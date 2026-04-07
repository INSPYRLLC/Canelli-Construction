from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', 'info@canelliconstruction.com')

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ============ Models ============

# Contact Form Models
class ContactFormCreate(BaseModel):
    name: str
    phone: str
    email: EmailStr
    project_type: str
    message: str

class ContactForm(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: str
    project_type: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"

# Project/Portfolio Models
class ProjectCreate(BaseModel):
    title: str
    category: str  # residential, commercial, adu, remodel
    description: str
    image_url: str
    location: Optional[str] = None
    year: Optional[str] = None
    featured: bool = False

class Project(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    category: str
    description: str
    image_url: str
    location: Optional[str] = None
    year: Optional[str] = None
    featured: bool = False
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    category: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    location: Optional[str] = None
    year: Optional[str] = None
    featured: Optional[bool] = None

# Cost Estimator Models
class EstimateRequest(BaseModel):
    project_type: str  # custom_home, turnkey, remodel, adu, addition, commercial
    square_feet: int
    finish_level: str  # standard, premium, luxury

class EstimateResponse(BaseModel):
    project_type: str
    square_feet: int
    finish_level: str
    price_per_sqft_low: int
    price_per_sqft_high: int
    estimated_low: int
    estimated_high: int
    disclaimer: str


# ============ Helper Functions ============

async def send_notification_email(contact: ContactForm):
    """Send email notification for new contact form submission"""
    if not RESEND_API_KEY:
        logger.warning("Resend API key not configured, skipping email notification")
        return None
    
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0A0A0A; padding: 30px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0;">Canelli Construction</h1>
            <p style="color: #A1A1AA; margin-top: 10px;">New Lead Notification</p>
        </div>
        <div style="padding: 30px; background: #141414; color: #fff;">
            <h2 style="color: #D4AF37;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #27272A; color: #A1A1AA;">Name:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #27272A; color: #fff;">{contact.name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #27272A; color: #A1A1AA;">Phone:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #27272A; color: #fff;">{contact.phone}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #27272A; color: #A1A1AA;">Email:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #27272A; color: #fff;">{contact.email}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #27272A; color: #A1A1AA;">Project Type:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #27272A; color: #fff;">{contact.project_type}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; color: #A1A1AA;">Message:</td>
                    <td style="padding: 10px 0; color: #fff;">{contact.message}</td>
                </tr>
            </table>
            <p style="margin-top: 20px; color: #A1A1AA; font-size: 12px;">
                Submitted at: {contact.timestamp.strftime('%Y-%m-%d %H:%M:%S')} UTC
            </p>
        </div>
    </body>
    </html>
    """
    
    params = {
        "from": SENDER_EMAIL,
        "to": [NOTIFICATION_EMAIL],
        "subject": f"New Lead: {contact.name} - {contact.project_type}",
        "html": html_content
    }
    
    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email notification sent successfully: {email.get('id')}")
        return email.get('id')
    except Exception as e:
        logger.error(f"Failed to send email notification: {str(e)}")
        return None


# ============ Routes ============

@api_router.get("/")
async def root():
    return {"message": "Canelli Construction API"}

# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactForm)
async def create_contact_submission(input: ContactFormCreate):
    contact_obj = ContactForm(
        name=input.name,
        phone=input.phone,
        email=input.email,
        project_type=input.project_type,
        message=input.message
    )
    
    doc = contact_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    doc['created_at'] = doc.get('created_at', doc['timestamp'])
    
    await db.contact_submissions.insert_one(doc)
    
    # Send email notification in background
    asyncio.create_task(send_notification_email(contact_obj))
    
    return contact_obj

@api_router.get("/contact", response_model=List[ContactForm])
async def get_contact_submissions():
    # Filter to only get submissions that match the current schema
    query = {
        "email": {"$exists": True},
        "project_type": {"$exists": True},
        "message": {"$exists": True}
    }
    submissions = await db.contact_submissions.find(query, {"_id": 0}).to_list(1000)
    
    for submission in submissions:
        if isinstance(submission['timestamp'], str):
            submission['timestamp'] = datetime.fromisoformat(submission['timestamp'])
    
    return submissions

# Project/Portfolio Endpoints
@api_router.post("/projects", response_model=Project)
async def create_project(input: ProjectCreate):
    project_obj = Project(
        title=input.title,
        category=input.category,
        description=input.description,
        image_url=input.image_url,
        location=input.location,
        year=input.year,
        featured=input.featured
    )
    
    doc = project_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.projects.insert_one(doc)
    return project_obj

@api_router.get("/projects", response_model=List[Project])
async def get_projects(category: Optional[str] = None):
    query = {}
    if category and category != "all":
        query["category"] = category
    
    projects = await db.projects.find(query, {"_id": 0}).to_list(100)
    
    for project in projects:
        if isinstance(project.get('created_at'), str):
            project['created_at'] = datetime.fromisoformat(project['created_at'])
    
    return projects

@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    project = await db.projects.find_one({"id": project_id}, {"_id": 0})
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    if isinstance(project.get('created_at'), str):
        project['created_at'] = datetime.fromisoformat(project['created_at'])
    
    return project

@api_router.put("/projects/{project_id}", response_model=Project)
async def update_project(project_id: str, input: ProjectUpdate):
    update_data = {k: v for k, v in input.model_dump().items() if v is not None}
    
    if not update_data:
        raise HTTPException(status_code=400, detail="No fields to update")
    
    result = await db.projects.update_one(
        {"id": project_id},
        {"$set": update_data}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    
    updated_project = await db.projects.find_one({"id": project_id}, {"_id": 0})
    if isinstance(updated_project.get('created_at'), str):
        updated_project['created_at'] = datetime.fromisoformat(updated_project['created_at'])
    
    return updated_project

@api_router.delete("/projects/{project_id}")
async def delete_project(project_id: str):
    result = await db.projects.delete_one({"id": project_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    
    return {"message": "Project deleted successfully"}

# Cost Estimator Endpoint
@api_router.post("/estimate", response_model=EstimateResponse)
async def calculate_estimate(input: EstimateRequest):
    # Price per square foot ranges based on project type and finish level
    price_ranges = {
        "custom_home": {"standard": (200, 300), "premium": (300, 450), "luxury": (450, 700)},
        "turnkey": {"standard": (180, 250), "premium": (250, 350), "luxury": (350, 500)},
        "remodel": {"standard": (150, 250), "premium": (250, 400), "luxury": (400, 600)},
        "adu": {"standard": (200, 280), "premium": (280, 380), "luxury": (380, 500)},
        "addition": {"standard": (180, 280), "premium": (280, 400), "luxury": (400, 550)},
        "commercial": {"standard": (150, 250), "premium": (250, 400), "luxury": (400, 600)}
    }
    
    project_type = input.project_type.lower()
    finish_level = input.finish_level.lower()
    
    if project_type not in price_ranges:
        raise HTTPException(status_code=400, detail="Invalid project type")
    
    if finish_level not in price_ranges[project_type]:
        raise HTTPException(status_code=400, detail="Invalid finish level")
    
    low_price, high_price = price_ranges[project_type][finish_level]
    
    estimated_low = input.square_feet * low_price
    estimated_high = input.square_feet * high_price
    
    return EstimateResponse(
        project_type=input.project_type,
        square_feet=input.square_feet,
        finish_level=input.finish_level,
        price_per_sqft_low=low_price,
        price_per_sqft_high=high_price,
        estimated_low=estimated_low,
        estimated_high=estimated_high,
        disclaimer="This is a rough estimate only. Actual costs may vary based on specific project requirements, site conditions, materials, and current market conditions. Contact us for a detailed quote."
    )

# Seed sample projects
@api_router.post("/projects/seed")
async def seed_projects():
    sample_projects = [
        {
            "id": str(uuid.uuid4()),
            "title": "Modern Lakefront Estate",
            "category": "residential",
            "description": "A stunning 6,500 sq ft custom home featuring floor-to-ceiling windows overlooking Lake Norman.",
            "image_url": "https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=800",
            "location": "Lake Norman, NC",
            "year": "2024",
            "featured": True,
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Contemporary Urban Residence",
            "category": "residential",
            "description": "A sleek 4,200 sq ft modern home in the heart of Myers Park with minimalist design.",
            "image_url": "https://images.unsplash.com/photo-1760072513442-9872656c1b07?w=800",
            "location": "Myers Park, Charlotte",
            "year": "2024",
            "featured": True,
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Luxury ADU Suite",
            "category": "adu",
            "description": "A premium 800 sq ft accessory dwelling unit with high-end finishes and private entrance.",
            "image_url": "https://images.unsplash.com/photo-1757262798620-c2cc40cfb440?w=800",
            "location": "SouthPark, Charlotte",
            "year": "2023",
            "featured": False,
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Boutique Office Building",
            "category": "commercial",
            "description": "A 15,000 sq ft Class A office building with modern amenities and sustainable design.",
            "image_url": "https://images.unsplash.com/photo-1766603636700-e9d80473f40f?w=800",
            "location": "South End, Charlotte",
            "year": "2023",
            "featured": True,
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Historic Home Renovation",
            "category": "remodel",
            "description": "Complete restoration and modernization of a 1920s Dilworth home while preserving its character.",
            "image_url": "https://images.unsplash.com/photo-1774685110718-c5b4fe026144?w=800",
            "location": "Dilworth, Charlotte",
            "year": "2024",
            "featured": False,
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Turnkey Family Home",
            "category": "residential",
            "description": "A beautiful 3,800 sq ft turnkey home built on the client's lot in Ballantyne.",
            "image_url": "https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg?w=800",
            "location": "Ballantyne, Charlotte",
            "year": "2024",
            "featured": False,
            "created_at": datetime.now(timezone.utc).isoformat()
        }
    ]
    
    # Check if projects already exist
    existing = await db.projects.count_documents({})
    if existing > 0:
        return {"message": f"Projects already seeded ({existing} projects exist)"}
    
    await db.projects.insert_many(sample_projects)
    return {"message": f"Successfully seeded {len(sample_projects)} projects"}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
