# Action Academy Web Platform

Action Academy is a modern, corporate and premium K-12 school website built as an MVP-first platform.

The goal of this repository is to deliver a professional public-facing school website with structured content management, admissions and contact inquiry flows, news and events, parent resources, staff directory pages, and an admin dashboard for managing core site content.

This project is being built with an agent-ready workflow, which means the repository is designed for both human developers and AI development agents to work safely and consistently.

---

## Project Goals

The MVP focuses on:

- public-facing informational pages
- admissions and contact inquiry flows
- news and events management
- parent resources
- staff directory
- admin dashboard for content updates
- structured Supabase-backed content management

Out of scope for the MVP:

- full student information system
- gradebook
- attendance tracking
- online payments
- internal messaging
- advanced parent/student dashboards
- AI chatbot
- semantic search
- PDF report generation
- FastAPI service

---

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Backend Core
- Supabase
  - PostgreSQL
  - Auth
  - Storage

### Tooling
- ESLint
- deterministic repo scripts in `scripts/`
- task governance through `tasks.json` and `tasks.schema.json`

### Planned Infrastructure
- Vercel for deployment
- GitHub Actions for CI
- Supabase migrations tracked in-repo

---

## Repository Documents

This repository uses a documentation-first workflow.

### Core Docs
- `PRODUCT_SPEC.md` — product scope, goals, users, and MVP definition
- `ARCHITECTURE.md` — system design, stack, data strategy, and scaling path
- `AGENTS.md` — repo operating rules for AI and human contributors
- `BACKLOG.md` — roadmap and broader project work
- `TASK_PROCESS.md` — task lifecycle and execution rules
- `tasks.json` — machine-readable executable task list
- `tasks.schema.json` — schema for validating `tasks.json`

---

## Project Structure

Planned structure:

```text
src/
  app/
  components/
  lib/
  types/

public/

supabase/
  migrations/

scripts/
````

As the project grows, the internal structure under `src/` will expand into public routes, admin routes, shared UI, validation helpers, and Supabase integration utilities.

---

## Scripts

This repository uses deterministic scripts so validation is consistent for humans, agents, and CI.

Current scripts folder:

* `scripts/setup.sh`
* `scripts/lint.sh`
* `scripts/typecheck.sh`
* `scripts/test.sh`
* `scripts/build.sh`
* `scripts/security.sh`
* `scripts/validate_pr.sh`

These scripts are intended to standardize:

* setup
* linting
* type checking
* testing
* building
* lightweight security checks
* pre-PR validation

---

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/henryagyare/auto_sch_site.git
cd auto_sch_site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

Create a `.env.local` file based on `.env.example`.

Example variables that will likely be needed:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Only use the service role key in secure server-side contexts. Never expose it to the client.

### 4. Start the development server

```bash
npm run dev
```

---

## Validation Commands

Before opening a PR, run the relevant checks:

```bash
./scripts/lint.sh
./scripts/typecheck.sh
./scripts/test.sh
./scripts/build.sh
./scripts/security.sh
./scripts/validate_pr.sh
```

Depending on your environment, you may need to make the scripts executable first:

```bash
chmod +x scripts/*.sh
```

---

## Working Rules

This repository is governed by the rules in `AGENTS.md`.

Key rules include:

* never push directly to `main`
* always work on a feature branch
* keep changes small and focused
* do not overengineer beyond MVP scope
* prefer structured relational data over generic blobs
* use server-side data fetching for public content where appropriate
* do not introduce new services or frameworks unless clearly justified

---

## Task Workflow

All executable work should flow through `tasks.json`.

Important task rules:

* tasks must conform to `tasks.schema.json`
* dependencies must be respected
* no Fullstack task should begin before its dependencies are complete
* only the Lead/Planning role should change task status, dependencies, priority, or acceptance criteria
* blocked tasks must include a `blocked_reason`

Use `BACKLOG.md` for the roadmap and `tasks.json` for near-term executable work.

---

## Branching and PR Expectations

### Branch naming

Examples:

* `feature/homepage-hero`
* `feature/admissions-form`
* `fix/staff-directory-layout`
* `chore/update-schema-types`

### Commit style

Examples:

* `feat: add homepage hero section`
* `fix: correct contact form validation`
* `chore: add initial supabase migration`

### PR expectations

Every PR should include:

* summary of the change
* files or features affected
* notes on schema changes if any
* test/build/lint status
* known limitations or follow-ups

---

## Current Status

This repository is currently in the early foundation phase.

Current focus:

* project scaffolding
* repository structure
* deterministic scripts
* task alignment
* Next.js app initialization
* Supabase integration setup

---

## Future Direction

After the MVP foundation is stable, the project may expand to include:

* richer admin workflows
* stronger CI/CD enforcement
* GitHub Actions integration
* GitHub MCP integration
* coding-agent workflows
* LangGraph orchestration
* future portal and AI features beyond MVP

These are intentionally deferred until the core platform is stable.

---

## Notes

This project is being built with a strong emphasis on:

* clarity
* maintainability
* safe iteration
* agent-friendly repository practices
* disciplined MVP execution

When in doubt, follow:

1. `PRODUCT_SPEC.md`
2. `ARCHITECTURE.md`
3. `AGENTS.md`
4. `TASK_PROCESS.md`
