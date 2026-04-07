# Canelli Construction - Product Requirements Document

## Original Problem Statement
Build a premium, modern, visually stunning website for Canelli Construction, a luxury construction company in Charlotte, NC. Dark luxury aesthetic with charcoal black, gold accents, minimalist bold layout, cinematic visuals, and high-converting design.

## User Personas
1. **Affluent Homeowners** - Seeking custom home builds and luxury renovations
2. **Property Investors** - Looking for residential development and ADU construction
3. **Business Owners** - Need commercial construction services

## Core Requirements
- Full-screen hero with dramatic imagery
- Dynamic portfolio with category filtering (database-driven)
- Cost estimator calculator
- Contact form with email notifications
- Google Maps integration
- Premium dark theme with gold accents

## What's Been Implemented (December 2025)
- [x] Luxury dark theme (#0A0A0A, #141414, gold #D4AF37)
- [x] Glassmorphism sticky header with navigation
- [x] Full-screen hero with gradient overlay, CTAs, trust indicators
- [x] About section with 20+ years badge
- [x] Services grid (7 services with hover effects)
- [x] Dynamic Portfolio with category tabs (Residential, Commercial, ADU, Remodel)
- [x] Portfolio CRUD API (create, read, update, delete projects)
- [x] Auto-seeding of sample projects
- [x] Why Choose Us (5 differentiators)
- [x] Process timeline (4 steps: Suitability, Design, Permits, Build)
- [x] Service Area with Charlotte skyline background
- [x] Feature sections (Turnkey Homes + ADU Construction)
- [x] Testimonials (4 client reviews)
- [x] Cost Estimator Calculator with backend API
- [x] CTA Section
- [x] Contact form with email notification (Resend integration - needs API key)
- [x] Google Maps embed for Charlotte, NC
- [x] Footer with company info and links

## Tech Stack
- **Frontend**: React, Tailwind CSS, Lucide Icons, Shadcn UI (Tabs, Slider, Select, Input, Textarea)
- **Backend**: FastAPI, Motor (MongoDB async driver), Resend (email)
- **Database**: MongoDB
- **Fonts**: Cabinet Grotesk (headings), Manrope (body)

## API Endpoints
- POST/GET /api/contact - Contact form submissions
- POST/GET/PUT/DELETE /api/projects - Portfolio CRUD
- POST /api/projects/seed - Seed sample projects
- POST /api/estimate - Cost calculator

## Prioritized Backlog
### P0 (Critical) - COMPLETED
- All core sections implemented
- Portfolio with filtering
- Cost estimator functional
- Contact form working

### P1 (High Priority)
- Add Resend API key for email notifications
- Admin dashboard for portfolio management
- Project detail pages

### P2 (Medium Priority)
- Blog/articles section
- 3D virtual tours integration
- Online consultation booking

## Next Tasks
1. Configure Resend API key for email notifications (RESEND_API_KEY in .env)
2. Build admin dashboard for portfolio CRUD
3. Add project detail pages with full descriptions
4. Consider video testimonials integration
