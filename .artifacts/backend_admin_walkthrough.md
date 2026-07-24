# Backend Implementation Walkthrough (Phase 1: Admin Profile)

The backend for the **Abu-Yahya School** platform is now live! I have built out a fully modular NestJS application that handles our new PostgreSQL database and exposes the required APIs for the Admin profile.

## What Was Accomplished

### 1. NestJS Setup
- Bootstrapped a new, strict TypeScript NestJS application inside the `/backend` directory.
- Installed required dependencies: `@nestjs/typeorm`, `@nestjs/config`, `pg`, `class-validator`, and `class-transformer`.
- Configured CORS so the Next.js frontend can easily send requests directly to the backend.

### 2. Database Schema (TypeORM + PostgreSQL)
Defined four core Entities to map to our Admin UI needs:
1. **User Entity:** Defines `id`, `name`, `email`, `role`, `avatar`, `plan`, and `progress`.
2. **CourseClass Entity:** Defines the structure of initialized live classes and 1-on-1 sessions.
3. **SupportTicket Entity:** Handles the data structure for student/tutor issues and their full history.
4. **Transaction Entity:** Records payments and payouts for the financials dashboard.

*These automatically map and sync to your PostgreSQL instance using `TypeORM`.*

### 3. Admin Module & APIs
Created a robust `AdminModule` (`src/admin`) containing the `AdminController` and `AdminService`. The following APIs from our `api_requirements.md` artifact have been fully mapped and implemented using TypeORM Repository queries:

- `GET /api/admin/dashboard` (calculates active users, total revenue dynamically)
- `GET /api/admin/users`
- `POST /api/admin/users`
- `GET /api/admin/classes`
- `POST /api/admin/classes`
- `GET /api/admin/financials`
- `GET /api/admin/reports`
- `GET /api/admin/support`
- `POST /api/admin/support/resolve`

## Validation
- Ran a full `npm run build` inside the `/backend` directory, and the strict TypeScript compilation passed perfectly with **0 errors**.

## Next Steps
To run the backend, simply navigate to the `backend` folder and run:
```bash
cd backend
npm run start
```
By default, it runs on `http://localhost:3001` (configurable in `backend/.env`).

Once you're ready, we can proceed to **Phase 2: The Tutor Profile APIs**!
