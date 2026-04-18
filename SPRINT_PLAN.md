# SPRINT_PLAN.md

# Action Academy MVP Sprint Plan

This document translates the project roadmap into an execution-focused sprint plan for human developers and AI agents working inside VS Code.

It should be used alongside:
- `PRODUCT_SPEC.md`
- `ARCHITECTURE.md`
- `AGENTS.md`
- `BACKLOG.md`
- `TASK_PROCESS.md`
- `tasks.json`

This plan is intentionally detailed because the project is now moving from planning into implementation.

---

## 1. Sprint Planning Principles

### 1.1 Core Rules
- Stay within MVP scope.
- Keep PRs small and focused.
- Prefer reusable shared components over page-specific duplication.
- Prefer server-side data fetching for public content.
- Do not introduce new services or major dependencies unless clearly justified.
- Do not start a task whose dependencies are incomplete.
- Validate all work locally before opening a PR.

### 1.2 Delivery Style
Each sprint should aim to produce:
- a clear set of completed tasks
- a stable branch or set of PRs
- validated code
- no silent architecture drift

### 1.3 Agent Usage Guidance
Use AI agents for:
- implementation of scoped tasks
- boilerplate generation
- code review support
- refactoring inside defined boundaries
- content placeholders
- migration drafting
- small task breakdowns

Do not use AI agents to:
- change scope silently
- redesign architecture without approval
- introduce out-of-scope features
- bypass validation or review

---

## 2. Current Project State

At the time of this sprint plan:
- repository governance docs are in place
- task system exists
- Next.js project foundation exists
- scripts and CI are set up
- Supabase connectivity has been verified
- initial schema and early database setup are in progress or complete
- the project is entering active product implementation

The focus now shifts from setup to structured delivery.

---

## 3. Sprint Roadmap Overview

## Sprint A — Foundation Completion
**Goal:** complete the technical base needed for reliable feature work.

### Objectives
- finalize Supabase integration
- finalize initial schema and early RLS
- generate database types
- build the shared UI shell
- establish the homepage as a reusable foundation

### Deliverables
- `src/lib/supabase/*` working
- `middleware.ts` working
- migration files committed
- `src/types/database.ts`
- shared layout and UI primitives
- homepage updated to use shared shell
- lint, typecheck, build all passing

### Definition of Done
- Supabase client/server utilities work
- public app still runs locally
- shared components are reusable
- homepage no longer depends on throwaway starter structure
- CI remains green

---

## Sprint B — Public Marketing and Information Pages
**Goal:** build the core public-facing pages using the shared shell.

### Objectives
- create page shells and content structure for the main public pages
- keep styling consistent with the premium/corporate design system
- use placeholder content where final content is unavailable

### Pages
- About Us
- Admissions
- Academics
- Contact Us
- News & Events
- Parent Resources
- Staff Directory
- Policies & Safeguarding

### Deliverables
- page routes created
- basic responsive layouts complete
- reusable sections used consistently
- SEO metadata started on main pages

### Definition of Done
- pages exist and are navigable
- mobile layout is functional
- no broken routes
- no duplicated UI patterns that should clearly be shared

---

## Sprint C — Forms and Core User Flows
**Goal:** implement the first meaningful user interactions.

### Objectives
- wire up contact submission flow
- wire up admissions inquiry flow
- optionally support tour request flow
- validate inputs securely server-side
- store submissions in Supabase

### Deliverables
- contact form submission works
- admissions inquiry flow works
- success/error states exist
- form validation is implemented
- database writes are confirmed

### Definition of Done
- forms submit successfully
- invalid input is rejected cleanly
- no client-only sensitive logic
- submissions appear in the intended database tables

---

## Sprint D — Admin Authentication and Admin Shell
**Goal:** prepare the internal management side of the platform.

### Objectives
- add admin login flow
- protect admin routes
- build admin shell and navigation
- create placeholder admin sections for future CRUD work

### Deliverables
- `/admin` protected route structure
- admin layout
- admin navigation
- auth/session protection working

### Definition of Done
- guests cannot access protected admin pages
- admin shell is usable and consistent
- auth logic follows Supabase best practices

---

## Sprint E — Admin CRUD Features
**Goal:** allow admins to manage the main content entities.

### Objectives
- manage news posts
- manage events
- manage staff directory entries
- manage resources
- manage homepage/site settings
- view inquiry submissions

### Deliverables
- admin forms and list views for each content type
- database writes and updates working
- validation and error handling in admin flows

### Definition of Done
- admins can create and update core content
- data persists correctly
- public rendering requirements are considered in the schema and types
- no partial full-vertical implementation gaps

---

## Sprint F — Dynamic Public Content
**Goal:** replace placeholders on the public site with live database-driven content.

### Objectives
- render news on homepage and news page
- render events dynamically
- render staff directory dynamically
- render resources dynamically
- use site settings on public pages

### Deliverables
- homepage uses live content where appropriate
- public pages fetch real data server-side
- empty states and fallback rendering exist

### Definition of Done
- placeholder sections are replaced by live data where intended
- no-data states are graceful
- server-side fetching works consistently

---

## Sprint G — Quality, Accessibility, and Release Readiness
**Goal:** move the MVP from functional to launch-ready.

### Objectives
- improve accessibility
- improve responsive polish
- improve loading/error/empty states
- improve SEO metadata
- perform smoke testing
- finalize release checklist

### Deliverables
- responsive issues cleaned up
- accessible heading/form/nav patterns improved
- user feedback states added
- release checklist completed

### Definition of Done
- build is stable
- core user flows are tested
- public pages feel production-ready
- main branch is ready for MVP release candidate work

---

## 4. Detailed Sprint A Plan

## 4.1 Sprint A Scope
Sprint A is the active sprint and should be completed before major page implementation expands.

### Sprint A Workstreams
1. Supabase app integration
2. schema and security foundation
3. generated types
4. shared UI shell
5. homepage shell refactor

---

## 4.2 Sprint A Task Breakdown

### A1. Supabase app integration
#### Goal
Ensure the app can connect to Supabase reliably in server-side and browser-safe contexts.

#### Tasks
- verify `src/lib/supabase/client.ts`
- verify `src/lib/supabase/server.ts`
- verify `src/lib/supabase/updateSession.ts`
- verify root `middleware.ts`
- verify `.env.example`
- verify local `.env.local` setup

#### Acceptance checks
- app boots without env-related runtime failure
- server-side Supabase client can initialize
- middleware import path is valid
- no deprecated env variable names are left behind

---

### A2. Initial schema and early security
#### Goal
Create the initial core tables and baseline RLS posture.

#### Tasks
- create initial migration for:
  - `site_settings`
  - `news_posts`
  - `events`
  - `staff_members`
  - `resources`
  - `contact_submissions`
  - `admissions_inquiries`
- create early RLS migration
- verify public read or insert paths only where intended

#### Acceptance checks
- migrations are committed in `supabase/migrations`
- schema matches MVP scope
- no gradebook/payment/attendance tables exist
- public policies are intentionally limited

---

### A3. Database types
#### Goal
Generate TypeScript types from the live schema.

#### Tasks
- generate `src/types/database.ts`
- ensure type file is committed
- use types in Supabase helper code where appropriate

#### Acceptance checks
- generated type file exists
- types reflect the core schema
- no manual placeholder DB type file remains if generated types exist

---

### A4. Shared UI shell
#### Goal
Create the design primitives and layout shell for all future pages.

#### Core components
- `SiteHeader`
- `SiteFooter`
- `PageContainer`
- `Section`
- `Button`
- `Card`
- `SectionHeading`

#### Design direction
- corporate and premium
- restrained palette
- strong typography hierarchy
- generous spacing
- clean, modern visual language
- mobile-first

#### Acceptance checks
- components are reusable
- no page-specific hardcoded hacks in shared components
- nav and footer are responsive
- layout feels consistent

---

### A5. Homepage shell refactor
#### Goal
Turn the homepage into the first clean production-style page using shared UI.

#### Sections
- hero
- mission statement
- quick links
- latest news placeholder or live section
- upcoming events placeholder or live section

#### Acceptance checks
- homepage uses shared shell components
- styling aligns with premium direction
- no create-next-app starter content remains
- page remains simple enough for iterative growth

---

## 5. Branch Strategy by Sprint

### Recommended branch pattern
- `feature/supabase-ssr-setup`
- `feature/init-core-schema`
- `feature/enable-rls`
- `feature/shared-ui-shell`
- `feature/homepage-shell`

Do not combine unrelated work into one large branch.

### PR size guidance
Prefer:
- one logical change per PR
- small migrations in separate PRs from large UI changes
- schema/security separate from shell styling where possible

---

## 6. Validation Rules per Sprint

Before opening a PR, run:
- `npm install` if dependencies changed
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run test`
- any repo validation scripts in `scripts/`

If a task changes schema, also verify:
- migration files are present
- schema changes are documented in PR notes
- downstream type or rendering impact is considered

---

## 7. Sprint Planning for VS Code Agents

When using built-in agents in VS Code, assign work in small chunks like:

### Good prompts
- “Implement the shared `PageContainer` and `Section` components using the repo rules.”
- “Create the initial `site_settings` migration without adding out-of-scope tables.”
- “Refactor the homepage to use `SiteHeader`, `SiteFooter`, and shared sections without changing project scope.”

### Avoid prompts like
- “Build the whole school website”
- “Create a full parent portal”
- “Add dashboard features for everyone”
- “Improve architecture however you want”

### Required context for agents
Before assigning work, point the agent to:
- `AGENTS.md`
- `ARCHITECTURE.md`
- `tasks.json`
- current sprint section in this file

---

## 8. Risks to Watch

### Technical risks
- schema drift between migrations and UI
- stale task definitions that do not match repo structure
- too much page-specific styling before shell is stable
- overuse of client components
- premature admin complexity

### Process risks
- agents changing scope silently
- tasks starting before dependencies are complete
- large PRs
- skipping local validation
- introducing extra libraries without approval

---

## 9. Exit Criteria by Sprint

### Sprint A complete when:
- Supabase integration is stable
- initial schema exists
- RLS baseline exists
- generated DB types exist
- shared UI shell exists
- homepage shell uses shared components

### Sprint B complete when:
- all key public pages exist with responsive shells

### Sprint C complete when:
- forms are functional and persist data

### Sprint D complete when:
- admin auth and route protection are working

### Sprint E complete when:
- admins can manage core content

### Sprint F complete when:
- public site is driven by live data

### Sprint G complete when:
- the MVP is polished and release-ready

---

## 10. Immediate Next Actions

### Right now
1. confirm Sprint A task status in `tasks.json`
2. complete shared UI shell
3. generate `src/types/database.ts`
4. refactor homepage to shared shell
5. validate locally
6. open focused PRs

### After Sprint A
Move to Sprint B:
- About Us
- Admissions
- Academics
- Contact Us

---

## 11. Notes
This sprint plan is meant to guide implementation, not replace `tasks.json`.

Use:
- `SPRINT_PLAN.md` for execution direction
- `tasks.json` for task-level truth
- `AGENTS.md` for repo rules
- `BACKLOG.md` for broader roadmap