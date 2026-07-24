# NestJS Backend Implementation Plan (Phase 1: Admin Profile)

This plan outlines the architecture and steps required to build a NestJS backend utilizing TypeORM and PostgreSQL, starting with the APIs required for the Admin Profile.

## User Review Required

> [!WARNING]
> This is a major architectural addition to the project. We will be creating an entirely new backend application to replace the frontend's mock database. Please review the Open Questions carefully before approving.

## Open Questions

> [!IMPORTANT]
> 1. **Project Structure:** Should the NestJS backend be generated inside the current repository (e.g., in a `/backend` directory) to create a monorepo feel, or do you prefer a separate repository altogether? (I recommend a `/backend` directory for ease of development).
> 2. **Database Hosting:** Do you already have a PostgreSQL instance running locally on your machine, or should I create a `docker-compose.yml` file to spin up a containerized PostgreSQL database?

## Proposed Architecture

1. **NestJS Application:** Built with TypeScript, utilizing modular architecture.
2. **Database Layer:** TypeORM connected to PostgreSQL.
3. **Data Validation:** `class-validator` and `class-transformer` for robust DTO validation.

## Implementation Steps

### 1. Initialization and Setup
- Bootstrap a new NestJS application.
- Install necessary dependencies (`@nestjs/typeorm`, `typeorm`, `pg`, `class-validator`, etc.).
- Setup database configuration and environment variables.

### 2. Database Schema & Entities
We will define the core entities required for the Admin APIs:
- `User` Entity: Manages all roles (Admin, Tutor, Student), profiles, and plans.
- `CourseClass` Entity: Represents the live classes or 1-on-1 sessions.
- `SupportTicket` Entity: Tracks student/tutor issues and resolution status.
- `Transaction` Entity: Logs payments and subscriptions for the financials dashboard.

### 3. Admin Modules & Endpoints
We will create an `AdminModule` that encapsulates the required controllers and services mapped to the APIs defined in `api_requirements.md`:
- `AdminDashboardController` (`GET /api/admin/dashboard`)
- `AdminUsersController` (`GET /api/admin/users`, `POST /api/admin/users`)
- `AdminClassesController` (`GET /api/admin/classes`, `POST /api/admin/classes`)
- `AdminFinancialsController` (`GET /api/admin/financials`, `GET /api/admin/reports`)
- `AdminSupportController` (`GET /api/admin/support`, `POST /api/admin/support/resolve`)

### 4. Frontend Integration
- Temporarily adjust the Next.js `src/lib/mock-api/index.ts` to proxy requests to the real NestJS backend (e.g., running on `localhost:3001`) instead of using `localStorage`, or configure Next.js rewrites to map `/api/*` to the backend.

## Verification Plan

### Automated Tests
- Run `npm run test` on the new backend to ensure the NestJS app compiles and starts correctly.

### Manual Verification
- Seed the PostgreSQL database with initial admin data.
- Start both the frontend and backend servers.
- Navigate to the Admin Dashboard in the browser and verify that creating a user, scheduling a class, and resolving a ticket successfully persist to the PostgreSQL database.
