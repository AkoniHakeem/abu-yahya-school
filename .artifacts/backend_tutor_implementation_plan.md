# NestJS Backend Implementation Plan (Phase 2: Tutor Profile)

This plan outlines the steps required to build the backend APIs for the Tutor Profile, continuing our NestJS and TypeORM implementation.

## Proposed Changes

### 1. Database Schema Additions
We will add the necessary entities to support the tutor features:
- **`Assignment` Entity**: To track student submissions, due dates, document URLs, and grades provided by the tutor.
- *Note:* We will heavily reuse the existing `User`, `CourseClass`, and `Transaction` entities.

### 2. Tutor Module & Endpoints
We will generate a `TutorModule` with a controller and service to handle the following endpoints defined in our API requirements:

- **Dashboard**: `GET /api/tutor/dashboard` (Fetches today's classes, pending grading count, and total student count).
- **Scheduling**: `GET /api/tutor/classes` and `POST /api/tutor/classes` (Reuses the logic to manage `CourseClass` entities but scoped to the specific tutor).
- **Assignments**: `GET /api/tutor/assignments` (Fetches pending student submissions) and `POST /api/tutor/assignments/grade` (Updates the assignment entity with the score and feedback).
- **Students**: `GET /api/tutor/students` (Fetches the roster of students assigned to the tutor's classes).
- **Earnings**: `GET /api/tutor/earnings` (Aggregates payouts/transactions for the specific tutor).

### 3. Implementation Steps
1. Create `Assignment` entity and register it in `app.module.ts`.
2. Generate `tutor` module, controller, and service.
3. Inject the `User`, `CourseClass`, `Assignment`, and `Transaction` repositories into the `TutorService`.
4. Implement the logic for the 7 endpoints.
5. Ensure compilation succeeds.

## User Review Required

> [!NOTE]
> Since we already established the database connection and architecture in Phase 1, this phase focuses entirely on adding new tables and endpoints. If you are good with the `Assignment` entity being added, please approve to proceed!
