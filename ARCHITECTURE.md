# ARCHITECTURE.md: Action Academy Web Platform

## 1. Overview
The Action Academy web platform will be built using a **modular, MVP-first architecture** designed for simplicity, scalability, and low operating cost.

For the first version, the platform will focus on delivering a professional, fast, and easy-to-manage school website with:
- public-facing informational pages
- admissions and contact inquiry flows
- news and events management
- parent resources
- admin content management

The architecture will prioritize:
- fast development
- maintainability
- strong SEO
- mobile responsiveness
- clean separation between public content and admin functionality

The MVP will use **Next.js + Supabase** as the core platform.

A separate **FastAPI service** is not required for the initial version, but may be introduced later for advanced features such as AI workflows, PDF generation, or complex backend processing.

---

## 2. Architecture Principles
The platform will follow these principles:

- **MVP-first:** build only what is needed for the first usable release
- **Low complexity:** avoid unnecessary services until real use cases require them
- **Server-first rendering:** optimize public pages for SEO, speed, and reliability
- **Structured content:** prefer clear relational tables over unstructured content blobs
- **Secure access control:** keep admin functions protected through authentication and database policies
- **Future-ready:** leave room for AI, portals, and advanced workflows in later phases

---

## 3. High-Level System Design

### Core Architecture
The MVP will use a **two-part system**:

1. **Next.js App Router frontend**
   - serves the public website
   - handles page rendering, UI, forms, and admin dashboard interfaces
   - uses server-side rendering and caching where appropriate

2. **Supabase backend**
   - provides PostgreSQL database
   - handles authentication for admin users
   - stores media and file assets if needed
   - enforces security through Row Level Security (RLS)

### Optional Future Service
A **FastAPI microservice** may be added in later phases for:
- AI-powered search or chatbot functionality
- report/PDF generation
- advanced workflow automation
- complex backend validation or integrations

---

## 4. Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | Next.js (App Router) | Public site, admin UI, server-rendered pages |
| Styling | Tailwind CSS | Consistent, responsive UI development |
| Backend Core | Supabase | Database, auth, storage |
| Database | PostgreSQL (via Supabase) | Structured relational data storage |
| Authentication | Supabase Auth | Admin and future portal authentication |
| File / Media Storage | Supabase Storage or Cloudinary | Media storage and delivery |
| Deployment | Vercel | Hosting for Next.js frontend |
| Email | Resend or SMTP | Contact forms, admissions inquiries, notifications |

### Stack Notes
- **Next.js** is the main application framework for the MVP.
- **Supabase** provides the backend foundation without requiring a separate custom API at the start.
- **Cloudinary** may be used if the platform needs advanced image/video optimization. Otherwise, **Supabase Storage** is acceptable for the MVP.
- **FastAPI** is intentionally deferred until it is clearly needed.

---

## 5. Data Access Strategy

The platform will use a **server-first data access model**.

### Public Content
Public-facing pages such as:
- Homepage
- About Us
- Academics
- Admissions
- News & Events
- Staff Directory
- Policies

should primarily fetch data **server-side through Next.js**.

This approach improves:
- SEO
- performance
- consistency
- caching and revalidation

### Interactive / Authenticated Features
Authenticated admin features may use:
- Supabase client SDK where appropriate
- secure server actions
- route handlers for protected operations

### Future Complex Workflows
If advanced processing is added later, those actions can be routed through a dedicated FastAPI service.

---

## 6. Authentication and Access Control

### MVP Roles
To keep the first version simple, the MVP will support:

- **Guest**
  - access to all public-facing content
  - no login required

- **Admin**
  - access to admin dashboard
  - can manage content such as news, events, staff profiles, and selected page sections

- **Superadmin**
  - full administrative access
  - can manage admin users and site-wide configuration

### Future Roles
These may be added in later phases if the platform expands into a portal system:
- Parent
- Student
- Teacher

### Security Approach
Access control will be enforced through:
- **Supabase Auth** for authentication
- **Row Level Security (RLS)** for database-level authorization
- server-side checks in protected routes and admin actions

---

## 7. Content Architecture

The content model should remain **structured and relational** wherever possible.

### Recommended Core Tables
Examples of core tables for the MVP:

- `site_settings`
  - branding
  - mission statement
  - contact details
  - homepage highlights

- `news_posts`
  - title
  - slug
  - summary
  - body
  - publish date
  - featured image

- `events`
  - title
  - description
  - date
  - time
  - location
  - category

- `staff_members`
  - name
  - title/role
  - department
  - bio
  - contact info
  - profile photo

- `admissions_inquiries`
  - parent/student name
  - contact information
  - inquiry type
  - message
  - submission date

- `tour_bookings`
  - visitor details
  - preferred date
  - notes
  - booking status

- `page_sections`
  - reusable content blocks for certain sections of the site

- `resources`
  - downloadable forms
  - parent handbook
  - menus
  - policy files

### Content Modeling Guidance
- Use structured columns wherever possible.
- Use JSON only when flexibility is truly needed for reusable layout blocks or rich content configurations.
- Avoid storing the entire site in one generic JSON content table.

---

## 8. Public Site Architecture

### Public Pages
The public site will include:
- Homepage
- About Us
- Academics
- Extracurriculars
- Student Support
- Admissions
- Contact Us
- News & Events
- Parent Resources
- Staff Directory
- Employment / Careers
- Policies & Safeguarding

### Rendering Strategy
- Main public pages should be rendered through Next.js server components
- Frequently updated content such as news/events may use revalidation
- Highly interactive UI pieces may use client components where needed

### Search
A basic site search feature may be added in the MVP if scope allows.
Initially, this can be keyword-based.
Semantic or AI search should be deferred to later phases.

---

## 9. Admin Dashboard Architecture

The platform will include a **custom admin dashboard** for internal content management.

### Admin Capabilities
Admins should be able to:
- create and edit news posts
- create and edit events
- manage staff directory entries
- update key homepage or informational page content
- upload files and images
- review admissions/contact submissions

### Dashboard Approach
The dashboard will be built within the same Next.js application rather than as a separate product.

Benefits:
- simpler deployment
- shared auth/session handling
- lower operational complexity
- easier code reuse

---

## 10. Forms and Notifications

### Contact Form
Workflow:
1. Visitor submits contact form
2. Form is validated
3. Submission is stored in Supabase
4. Email notification is sent to the appropriate school inbox

### Admissions Inquiry / Tour Booking
Workflow:
1. Visitor fills out inquiry or booking form
2. Data is validated server-side
3. Record is stored in the database
4. Notification email is sent to admissions staff

### Email Delivery
Email can be handled through:
- Resend
- SMTP
- another lightweight transactional email provider

---

## 11. Media and File Management

### MVP Approach
Media assets such as:
- homepage images
- staff profile photos
- downloadable forms
- event graphics

can be stored in:
- **Supabase Storage** for simplicity
- or **Cloudinary** if better optimization and delivery are needed

### Recommendation
- Start with **Supabase Storage** if media needs are moderate
- Use **Cloudinary** if the homepage will rely heavily on optimized image/video delivery

Only asset URLs and metadata should be stored in the database.

---

## 12. Deployment Architecture

### MVP Deployment
- **Frontend / main app:** deployed on Vercel
- **Database / auth / storage:** managed through Supabase

This keeps deployment simple and reduces infrastructure overhead.

### Environment Setup
At minimum, the platform will use separate configurations for:
- local development
- staging / preview
- production

Environment variables will be used for:
- Supabase keys and URLs
- email provider secrets
- storage provider configuration
- future external service integrations

---

## 13. Scalability and Future Expansion

The architecture is intentionally designed so the MVP can grow without a full rewrite.

### Likely Future Additions
- Parent portal
- Student dashboard
- Teacher/staff login area
- AI-powered school policy search
- chatbot for parent FAQs
- PDF generation for reports/documents
- analytics dashboard
- internal workflow automation
- advanced CMS features

### Expansion Strategy
When these features become necessary:
- keep Next.js as the main frontend
- extend Supabase schema and auth roles
- add FastAPI only for workloads that justify a dedicated Python service

This allows the platform to remain simple early while supporting more advanced functionality later.

---

## 14. Out-of-Scope for MVP
The following are not part of the first release:
- full student information system
- gradebook
- attendance tracking
- online fee payment processing
- internal messaging
- advanced parent/student dashboards
- AI chatbot
- semantic search
- report card generation

These may be considered in later phases once the core website is stable.

---

## 15. Summary
The Action Academy platform will begin as a **modern school website with a lightweight admin system**, built using **Next.js and Supabase**.

This architecture is designed to:
- launch quickly
- stay easy to manage
- remain cost-efficient
- support future growth

The MVP avoids unnecessary backend complexity while leaving a clear path for more advanced services such as FastAPI, AI features, and authenticated portal experiences in later phases.