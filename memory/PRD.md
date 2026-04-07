# E.A. Jones Plumbing Co. - Product Requirements Document

## Original Problem Statement
Build a modern, high-converting, visually appealing website for E.A. Jones Plumbing Co., based in Charlotte, North Carolina. The website should feature a premium design with deep navy blue, white, and teal accents, bold typography, and clear CTAs to convert visitors into phone calls and leads.

## User Personas
1. **Homeowners** - Need reliable plumbing services for repairs, installations, and emergencies
2. **Property Managers** - Require ongoing plumbing maintenance for rental properties
3. **Business Owners** - Need commercial plumbing services

## Core Requirements
- Sticky header with call button
- Hero section with headline, subheadline, CTAs, trust badges
- About section (family-owned, veteran-operated, 30+ years)
- Services grid (6 services with icons)
- Why Choose Us section (6 reasons)
- Testimonials section (4 customer reviews)
- Service Area section (Charlotte, Mecklenburg County)
- 24/7 Emergency Banner
- Contact form with database storage
- Click-to-call functionality
- Mobile-optimized design

## What's Been Implemented (December 2025)
- [x] Full landing page with all 9 sections
- [x] Sticky glassmorphism header with navigation
- [x] Hero section with gradient overlay, CTAs, trust badges
- [x] About section with technician image and experience badge
- [x] Services grid (Water Heater, Leak Detection, Drain Cleaning, Fixture Installation, Repiping, Emergency)
- [x] Why Choose Us (6 feature cards)
- [x] Testimonials (4 customer reviews with ratings)
- [x] Service Area with map placeholder
- [x] Emergency banner with prominent CTA
- [x] Contact form with database storage (MongoDB)
- [x] Footer with company info and service links
- [x] Mobile menu with toggle
- [x] Smooth scroll navigation
- [x] Backend API: POST/GET /api/contact

## Tech Stack
- **Frontend**: React, Tailwind CSS, Lucide Icons, Shadcn UI components
- **Backend**: FastAPI, Motor (MongoDB async driver)
- **Database**: MongoDB
- **Fonts**: Outfit (headings), Space Grotesk (body)

## Prioritized Backlog
### P0 (Critical) - COMPLETED
- All core sections implemented
- Contact form functional

### P1 (High Priority)
- Real contact information
- Google Analytics integration
- SEO meta tags optimization

### P2 (Medium Priority)
- Blog/articles section
- Service detail pages
- Online booking integration

## Next Tasks
1. Add real phone number and contact details
2. Implement Google Analytics
3. Add SEO meta tags and schema markup
4. Consider adding testimonials from Google reviews API
