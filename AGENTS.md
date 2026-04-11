# AGENTS.md: Action Academy Repository Rules

## 1. Purpose
This repository is for building the MVP of the Action Academy web platform.

All agents working in this repository must follow:
- `PRODUCT_SPEC.md`
- `ARCHITECTURE.md`
- this `AGENTS.md`

If any instruction conflicts with the product or architecture documents, agents must follow the documented MVP scope unless explicitly told to change scope.

---

## 2. Project Scope
This repository is currently focused on the MVP only.

### In Scope
- public-facing school website pages
- admissions and contact inquiry flows
- news and events management
- parent resources
- staff directory
- admin dashboard for content updates
- Supabase-backed structured content management

### Out of Scope
Do not implement these unless explicitly approved:
- full student information system
- gradebook
- attendance tracking
- online payments
- internal messaging
- advanced parent/student dashboards
- AI chatbot
- semantic search
- PDF report generation
- FastAPI service for MVP

---

## 3. Core Engineering Rules

### General Rules
- Never push directly to `main`.
- Always work on a feature branch.
- Keep changes small and focused.
- Prefer simple solutions over clever ones.
- Do not overengineer for future features that are not in scope.
- Do not introduce a new service, dependency, or framework unless clearly justified.

### Architecture Rules
- Use **Next.js App Router** as the primary application framework.
- Use **Supabase** as the backend core for MVP.
- Prefer **server-side data fetching** for public content.
- Use **client components** only when interactivity requires them.
- Do not introduce **FastAPI** unless explicitly requested for a later phase.
- Prefer **structured relational tables** over generic JSON blobs.
- Keep public pages SEO-friendly and mobile-first.

### UI Rules
- All pages must be responsive by default.
- Use Tailwind CSS consistently.
- Reuse existing components before creating new ones.
- Keep the design professional, modern, clean, and school-appropriate.
- Accessibility should be considered in navigation, buttons, forms, and headings.

---

## 4. Agent Responsibilities

### Planning / Lead Agent
Responsible for:
- reading `PRODUCT_SPEC.md` and `ARCHITECTURE.md`
- breaking work into clear implementation tasks
- checking whether requests are in scope
- ensuring work aligns with MVP priorities
- flagging major scope or architecture conflicts
- maintaining tasks.json
- ensure that no task is assigned to the Fullstack Agent until its dependencies are marked as completed

### Fullstack Agent
Responsible for:
- building pages and UI components
- implementing forms and server-side logic
- integrating frontend features with Supabase
- updating admin dashboard pages when needed
- keeping changes responsive and consistent

### Database Agent
Responsible for:
- schema design and migrations
- maintaining data integrity
- implementing and reviewing RLS policies
- keeping the schema aligned with the product scope
- avoiding destructive DB actions unless explicitly approved

### Content Agent
Responsible for:
- creating placeholder content when requested
- writing professional, educational, welcoming copy
- providing placeholder text and structured content entries
- not generating images
- using placeholder asset paths and image descriptions where needed

---

## 5. Full-Vertical Change Rule
When a feature affects multiple layers, agents must update all relevant layers together.

Example:
If a new staff field is added, update:
1. database schema and migration
2. validation / server logic
3. admin form
4. public display page
5. relevant types/interfaces

Do not make partial changes that leave the feature inconsistent across layers.

---

## 6. Security Rules
- Never hardcode secrets, keys, or credentials.
- Always use environment variables.
- Never expose private keys to the client.
- Follow Supabase security best practices.
- RLS must be considered for all protected tables.
- Do not run destructive operations such as `DROP TABLE`, `TRUNCATE`, or irreversible deletes unless explicitly approved.
- Do not weaken auth or access control for convenience.

---

## 7. Workflow Rules

### Branching
Use branch names like:
- `feature/homepage-hero`
- `feature/admissions-form`
- `fix/staff-directory-layout`
- `chore/update-schema-types`

### Commits
Commit messages should be clear and specific.

Examples:
- `feat: add homepage hero and quick links section`
- `fix: correct admissions form validation`
- `chore: add migration for staff member phone field`

### Pull Requests
Every PR should include:
- summary of the change
- files or features affected
- notes on schema changes, if any
- test/build/lint status
- known limitations or follow-ups

---

## 8. Validation Before PR
Before opening a PR, agents must run applicable project checks.

At minimum:
- install dependencies
- lint
- typecheck
- build
- test, if tests exist

Typical commands may include:
- `npm install`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run test`

If a command fails, do not mark the task complete without explaining the failure.

---

## 9. Escalation Rules
Stop and escalate instead of proceeding if:
- the request clearly conflicts with `PRODUCT_SPEC.md`
- the request expands MVP scope significantly
- the work requires a new backend service not already approved
- the work introduces payments, grade tracking, or sensitive student systems
- the work requires destructive schema changes
- the requirements are too ambiguous to implement safely

If the conflict is minor, proceed with the documented MVP approach and mention the mismatch in the PR notes.

---

## 10. Content and Asset Rules
- Do not generate final school branding assets unless explicitly requested.
- Use placeholder text, placeholder image paths, and clear descriptions when real content is unavailable.
- Content tone should be professional, welcoming, and educational.
- Avoid making factual claims about the school that have not been provided.

---

## 11. Additional Rules
- only the Lead/Planning agent should be allowed to change task status, dependencies, priority, or acceptance criteria
- implementation agents can propose task updates, but should not silently rewrite scope in a way that changes product direction

---

## 12. Definition of Done
A task is considered done only when:
- the implementation matches the requested scope
- the change aligns with `PRODUCT_SPEC.md` and `ARCHITECTURE.md`
- all relevant layers are updated
- validation commands have been run
- the code is readable and maintainable
- the PR includes a clear summary and any important notes