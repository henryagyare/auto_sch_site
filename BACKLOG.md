# BACKLOG.md: Action Academy MVP Roadmap

## Status Legend
- `todo` = not started
- `in_progress` = actively being worked on
- `blocked` = waiting on dependency or clarification
- `done` = completed
- `deferred` = intentionally pushed to a later phase

---

## Phase 0 — Foundation

### BL-001 Initialize project foundation
**Status:** done  
**Priority:** high  
**Description:** Set up the Next.js App Router project with Tailwind CSS, base folder structure, and shared app layout.

### BL-002 Configure Supabase integration
**Status:** done  
**Priority:** high  
**Description:** Connect the application to Supabase and create shared helpers for server-side and client-side usage.

### BL-003 Create initial database schema
**Status:** done  
**Priority:** high  
**Description:** Create the core MVP tables for content, forms, staff, events, and resources.

### BL-004 Set up admin authentication
**Status:** todo  
**Priority:** high  
**Description:** Implement admin and superadmin authentication with route protection.

### BL-005 Build shared UI shell
**Status:** done  
**Priority:** high  
**Description:** Create the responsive site shell including navbar, footer, page container, and reusable layout sections.

---

## Phase 1 — Public Website MVP

### BL-006 Build homepage MVP
**Status:** done  
**Priority:** high  
**Description:** Create the homepage with hero section, mission statement, quick links, featured news/events preview, and calls to action.

### BL-007 Build About Us page
**Status:** done  
**Priority:** medium  
**Description:** Create the About Us page with mission, vision, history, and leadership sections.

### BL-008 Build Admissions page
**Status:** done  
**Priority:** high  
**Description:** Create the Admissions page with application overview, tuition/fees, FAQs, and inquiry CTA.

### BL-009 Build Academics page
**Status:** done  
**Priority:** high  
**Description:** Create the Academics page with curriculum overview and school-level breakdown.

### BL-010 Build Extracurriculars page
**Status:** done  
**Priority:** medium  
**Description:** Extracurricular activities and clubs section is included within the Academics page (`/academics#extracurriculars`).

### BL-011 Build Student Support page
**Status:** done  
**Priority:** medium  
**Description:** Student support services section included within the Academics page (`/academics#support`).

### BL-012 Build Contact Us page
**Status:** done  
**Priority:** high  
**Description:** Create the Contact page with school contact details and general inquiry form.

### BL-013 Build News & Events page
**Status:** done  
**Priority:** high  
**Description:** Create a page that displays school announcements, recent news, and upcoming events.

### BL-014 Build Parent Resources page
**Status:** done  
**Priority:** high  
**Description:** Create a parent resource hub with handbook links, term calendar, lunch menu, forms, and transport info at `/resources`.

### BL-015 Build Staff Directory page
**Status:** done  
**Priority:** medium  
**Description:** Created staff directory page at `/staff` with placeholder cards grouped by department.

### BL-016 Build Policies & Safeguarding page
**Status:** done  
**Priority:** high  
**Description:** Create a page for school policies, safeguarding contacts, complaints procedure, and compliance documents at `/policies`.

### BL-017 Build Careers / Employment page
**Status:** deferred  
**Priority:** low  
**Description:** Create a simple page for job openings and application instructions.

---

## Phase 2 — Forms and Data Wiring

### BL-018 Implement contact form submission
**Status:** todo  
**Priority:** high  
**Description:** Save contact form submissions to the database and provide success/error feedback.

### BL-019 Implement admissions inquiry flow
**Status:** todo  
**Priority:** high  
**Description:** Create a form workflow for admissions inquiries and optional tour requests.

### BL-020 Implement event data rendering
**Status:** todo  
**Priority:** medium  
**Description:** Pull event records from the database and render them on public-facing pages.

### BL-021 Implement news data rendering
**Status:** todo  
**Priority:** medium  
**Description:** Pull news post records from the database and render them on the homepage and news page.

### BL-022 Implement staff directory data rendering
**Status:** todo  
**Priority:** medium  
**Description:** Render staff directory entries from the database on the public site.

### BL-023 Implement resources data rendering
**Status:** todo  
**Priority:** medium  
**Description:** Render files and parent resources dynamically from the database/storage layer.

---

## Phase 3 — Admin Dashboard

### BL-024 Build admin dashboard shell
**Status:** todo  
**Priority:** high  
**Description:** Create the admin dashboard layout, navigation, and protected routes.

### BL-025 Build homepage/site settings management
**Status:** todo  
**Priority:** medium  
**Description:** Allow admins to update homepage content and global site settings.

### BL-026 Build news management
**Status:** todo  
**Priority:** high  
**Description:** Allow admins to create, edit, publish, and delete news posts.

### BL-027 Build event management
**Status:** todo  
**Priority:** high  
**Description:** Allow admins to create, edit, and manage school events.

### BL-028 Build staff management
**Status:** todo  
**Priority:** high  
**Description:** Allow admins to manage staff directory entries.

### BL-029 Build resources management
**Status:** todo  
**Priority:** medium  
**Description:** Allow admins to upload and manage policies, forms, menus, and other downloadable resources.

### BL-030 Build inquiry submissions review
**Status:** todo  
**Priority:** medium  
**Description:** Allow admins to review incoming contact and admissions submissions.

---

## Phase 4 — Quality, SEO, and Release Readiness

### BL-031 Add SEO metadata and page-level metadata
**Status:** done  
**Priority:** high  
**Description:** All public pages export a `metadata` object with title and description. OG/social tags are deferred to the polish pass.

### BL-032 Perform mobile responsiveness pass
**Status:** todo  
**Priority:** high  
**Description:** Review and fix responsive layout issues across all public and admin pages.

### BL-033 Improve accessibility
**Status:** todo  
**Priority:** high  
**Description:** Improve heading structure, keyboard navigation, form labeling, and semantic markup.

### BL-034 Add empty states, loading states, and error states
**Status:** todo  
**Priority:** medium  
**Description:** Ensure all major user flows handle loading, no-data, and failure scenarios gracefully.

### BL-035 Add basic site search
**Status:** deferred  
**Priority:** low  
**Description:** Add simple keyword-based search for core site content if time permits.

### BL-036 Prepare deployment and production checklist
**Status:** todo  
**Priority:** high  
**Description:** Finalize environment variables, deployment config, smoke testing, and launch readiness.

---

## Deferred / Future Phase

### BL-037 Parent portal
**Status:** deferred  
**Priority:** low  
**Description:** Authenticated parent dashboard beyond a simple resources hub.

### BL-038 Student dashboard
**Status:** deferred  
**Priority:** low  
**Description:** Personalized student-facing portal features.

### BL-039 Online fee payments
**Status:** deferred  
**Priority:** low  
**Description:** Payment workflows for tuition and school-related fees.

### BL-040 Gradebook / attendance system
**Status:** deferred  
**Priority:** low  
**Description:** Academic performance and attendance management features.

### BL-041 AI search / chatbot
**Status:** deferred  
**Priority:** low  
**Description:** Semantic search and AI assistant for school policies and FAQs.

### BL-042 PDF generation / report cards
**Status:** deferred  
**Priority:** low  
**Description:** On-demand PDF generation for formal school documents.
