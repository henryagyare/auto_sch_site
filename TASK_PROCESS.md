# TASK_PROCESS.md: Action Academy Task Management Rules

## 1. Purpose
This document defines how tasks are created, assigned, updated, blocked, completed, and reviewed in the Action Academy repository.

It works together with:
- `BACKLOG.md`
- `tasks.json`
- `tasks.schema.json`
- `AGENTS.md`

All agents must follow this process when interacting with the backlog and executable tasks.

---

## 2. Core Principles
The task system exists to ensure that:
- work is completed in the correct order
- dependencies are respected
- scope does not drift silently
- progress is visible and auditable
- tasks remain small, clear, and executable

Agents must prefer **small, dependency-aware tasks** over large, vague tasks.

---

## 3. Sources of Truth

### `BACKLOG.md`
This is the human-readable roadmap.
It contains:
- broad initiative areas
- future work
- deferred work
- phase-based planning

### `tasks.json`
This is the machine-readable execution queue.
It contains:
- active tasks
- near-term executable tasks
- structured task metadata
- dependency information

### `tasks.schema.json`
This defines the required format for `tasks.json`.
All changes to `tasks.json` must conform to this schema.

If there is a mismatch:
- `PRODUCT_SPEC.md` and `ARCHITECTURE.md` define scope and system intent
- `BACKLOG.md` defines roadmap intent
- `tasks.json` defines executable work
- `tasks.schema.json` defines valid structure

---

## 4. Agent Responsibilities

### Lead Agent
The Lead agent is the only agent allowed to:
- create new executable tasks in `tasks.json`
- change task dependencies
- change task priority
- change acceptance criteria
- assign or reassign task owners
- move tasks into `in_progress`
- mark tasks as `done`
- mark tasks as `blocked`
- update `BACKLOG.md` status when appropriate

The Lead agent is responsible for maintaining consistency across:
- `BACKLOG.md`
- `tasks.json`
- `tasks.schema.json`

### Fullstack Agent
The Fullstack agent may:
- implement assigned tasks
- propose task updates
- report blockers
- suggest task breakdowns
- request clarification

The Fullstack agent may not:
- change dependencies
- change acceptance criteria
- mark its own task as `done`
- assign itself work whose dependencies are incomplete
- silently expand task scope

### Database Agent
The Database agent may:
- implement schema-related tasks
- propose migration-related subtasks
- report blockers or dependency issues

The Database agent may not:
- change task dependencies
- mark destructive work as safe without explicit approval
- silently expand scope into out-of-MVP systems

### Content Agent
The Content agent may:
- draft placeholder content
- suggest content-related subtasks
- provide missing copy for pages or resources

The Content agent may not:
- change technical task definitions
- modify dependencies
- create implementation tasks without Lead approval

---

## 5. Task Lifecycle

Each task must move through the following states:

### `todo`
The task exists but has not started.

### `in_progress`
The task is actively being worked on.

### `blocked`
The task cannot proceed because of:
- incomplete dependencies
- missing information
- failed prerequisite work
- scope conflict
- external constraint

A blocked task must include a `blocked_reason`.

### `done`
The task has been implemented, reviewed, and verified against its acceptance criteria.

### `deferred`
The task is intentionally postponed and should not be worked on now.

---

## 6. Rules for Creating Tasks
New tasks may only be created by the Lead agent.

Every new task must:
- conform to `tasks.schema.json`
- have a unique task ID
- have a clear title
- have a concrete description
- have a valid status
- have a valid owner
- list all known dependencies
- define acceptance criteria
- define allowed file areas
- include notes
- map to a backlog item when possible using `parent_backlog_id`

### Task Size Guidance
Tasks should be small enough to:
- complete in one focused implementation cycle
- review easily in one PR
- test clearly
- avoid mixing unrelated concerns

If a task becomes too large, the Lead agent should split it into subtasks.

---

## 7. Rules for Assignment

### Dependency Rule
No task may be assigned to the Fullstack agent unless all dependencies are marked `done`.

This is a strict rule.

If dependencies are incomplete:
- the task must remain `todo`
- or be marked `blocked`

### Owner Rule
Each task must have one primary owner:
- `lead`
- `fullstack`
- `database`
- `content`
- `unassigned`

If multiple agents contribute, the primary owner still remains the single accountable owner.

### Assignment Readiness Checklist
Before assigning a task, the Lead agent must verify:
- dependencies are satisfied
- scope is clear
- acceptance criteria are actionable
- allowed file areas are defined
- the task is still in MVP scope

---

## 8. Rules for Starting Work
A task may move from `todo` to `in_progress` only if:
- all dependencies are `done`
- the assigned owner is valid
- the task scope is sufficiently clear
- the task does not conflict with `PRODUCT_SPEC.md`
- the task does not violate `ARCHITECTURE.md`
- the task remains within MVP scope

Only the Lead agent may change status to `in_progress`.

---

## 9. Rules for Blocked Tasks
If an agent cannot proceed, it must report the blocker to the Lead agent.

The Lead agent may mark a task as `blocked` only when:
- a dependency is incomplete
- requirements are missing or conflicting
- implementation would violate architecture rules
- a required secret, environment variable, or service is unavailable
- the task requires out-of-scope functionality

Every blocked task must include:
- `status: "blocked"`
- `blocked_reason`

### Examples of valid blocked reasons
- `"TASK-003 is not complete, so submission flow cannot be connected yet."`
- `"Requirements conflict with MVP scope because the request implies a parent performance dashboard."`
- `"Supabase credentials are not available in the current environment."`

---

## 10. Rules for Updating Tasks

### Allowed Updates by Lead Agent
The Lead agent may update:
- status
- dependencies
- owner
- priority
- acceptance criteria
- notes
- blocked reason
- timestamps
- parent backlog mapping

### Allowed Updates by Implementation Agents
Implementation agents may propose changes, but may not directly change:
- dependencies
- priority
- acceptance criteria
- owner
- scope

Implementation agents may suggest:
- breaking a task into smaller units
- clarifying acceptance criteria
- marking a task blocked
- creating follow-up tasks

All such changes must be approved and applied by the Lead agent.

---

## 11. Rules for Completing Tasks
A task may be marked `done` only by the Lead agent.

Before a task is marked `done`, the Lead agent must verify:
- implementation exists
- acceptance criteria are satisfied
- relevant files were updated appropriately
- the task did not exceed allowed scope
- validation checks were run when applicable
- known issues are documented if not fully resolved

### Required Validation Before Completion
Where applicable, implementation tasks should pass:
- lint
- typecheck
- build
- tests, if tests exist

If validation fails, the task should not be marked `done` unless the limitation is explicitly documented and accepted.

---

## 12. Rules for Splitting and Sequencing Tasks
If a task becomes too broad, the Lead agent should split it.

### Split a task when:
- it touches too many layers at once
- it would create an oversized PR
- it mixes setup and implementation
- it combines schema work with too much UI work
- it cannot be completed safely in one focused cycle

### Sequencing Rule
Tasks should be ordered so that:
- foundation comes before feature work
- schema comes before data wiring
- auth comes before admin features
- admin CRUD comes before public dynamic rendering
- polish comes after core functionality

---

## 13. Rules for Backlog Management
`BACKLOG.md` is broader than `tasks.json`.

Not every backlog item must exist in `tasks.json` immediately.

### Add a backlog item to `tasks.json` when:
- it is ready for execution
- its dependencies are understood
- it fits the current MVP phase
- it is small enough to assign safely

### Keep a backlog item only in `BACKLOG.md` when:
- it is future-phase work
- it is too vague
- it depends on unresolved architecture decisions
- it is intentionally deferred

The Lead agent should keep backlog and tasks aligned, but not force all backlog items into executable tasks too early.

---

## 14. Rules for Scope Control
Agents must not silently turn MVP tasks into phase 2 or phase 3 work.

### Scope expansion requires Lead review when:
- a task introduces a new service
- a task adds new auth roles
- a task implies parent/student dashboards
- a task adds payment functionality
- a task introduces AI features
- a task requires FastAPI or another new backend service
- a task changes the data model significantly beyond MVP needs

If scope expands, the Lead agent must:
- reject the change
- defer it
- or create a new backlog item for later consideration

---

## 15. Rules for PR Alignment
Whenever possible, one task should map to one focused PR.

A PR should:
- reference the task ID
- summarize the implemented change
- mention any schema changes
- note any limitations or follow-ups

If one PR includes multiple tasks, those tasks must be tightly related.

Avoid large mixed-purpose PRs.

---

## 16. Timestamps and Auditability
When task metadata supports it, the Lead agent should update:
- `updated_at` whenever a task changes materially
- `created_at` when a task is first added

This improves traceability and helps future orchestration systems reason about task history.

---

## 17. Validation Rule for `tasks.json`
Every edit to `tasks.json` must preserve compliance with `tasks.schema.json`.

If a proposed task update does not match the schema:
- reject the update
- fix the structure
- revalidate before saving

Agents must never leave `tasks.json` in an invalid state.

---

## 18. Definition of Healthy Task Management
The task system is healthy when:
- tasks are small and clear
- dependencies are respected
- no agent works ahead of prerequisites
- blocked tasks have explicit reasons
- completed tasks truly satisfy acceptance criteria
- backlog and executable tasks stay aligned
- scope expansion is controlled instead of accidental

---

## 19. Summary
The task process exists to enforce disciplined, dependency-aware delivery.

The key rules are:
- only the Lead agent controls task state and structure
- no Fullstack task starts before dependencies are done
- blocked tasks must explain why
- completed tasks must satisfy acceptance criteria
- `tasks.json` must always remain valid against `tasks.schema.json`

This process should be followed for all Action Academy work.