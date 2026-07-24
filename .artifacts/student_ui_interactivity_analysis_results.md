Subject: Student UI Interactivity

# Abu Yahya School - Codebase Analysis

## Architecture & Stack
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: TailwindCSS 4 (using the new `@tailwindcss/postcss` setup)
- **Language**: TypeScript

The application is currently in an early, prototype, or purely frontend stage. There are no backend ORM (Object-Relational Mapping) libraries like Prisma or Drizzle, nor direct database connections configured.

## Authentication & Authorization
Authentication is currently **simulated** via Next.js Server Actions and Cookies.
- **Server Actions** (`src/app/actions/auth.ts`): Handles `loginUser`, `registerUser`, and `logoutUser`.
- **Mock DB**: Users are hardcoded in `src/lib/users.ts`.
- **Cookies**: Uses `auth_role` and `auth_user_name` cookies to keep track of sessions (valid for 1 day).

### Role-Based Access Control (RBAC)
Implemented in `src/middleware.ts`, checking the `auth_role` cookie.
- **Admin**: Redirected to `/admin/dashboard`.
- **Tutor**: Redirected to `/tutor/classroom`.
- **Student**: Redirected to `/billing` (currently the default landing post-login for students).

If an unauthenticated user tries to access protected paths (`/admin`, `/tutor`, `/billing`), they are automatically redirected to `/login`.

## API & Data Fetching
The application uses a **Mock API Client** approach.
- **API Client** (`src/lib/api-client.ts`): Contains a custom `fetchAPI` function.
- **Mock Interceptor**: If the environment variable `NEXT_PUBLIC_USE_MOCK_API` is set to `'true'`, API calls are intercepted and handled by `src/lib/mock-api/index.ts` returning mock data from `src/lib/mock-data.ts`.
- **Fallback**: If the mock flag is false, it attempts to perform a standard native `fetch` to a real backend (defaulting to `http://localhost:3000` or `NEXT_PUBLIC_API_BASE_URL`).

## Directory Structure Highlights
- **`src/app/`**: Contains the route segments. Notable routes include `/login`, `/signup`, `/admin`, `/tutor`, `/student`, and `/billing`.
- **`src/components/`**: 
  - Contains role-specific navigation like `AdminSidebar.tsx`, `StudentSidebar.tsx`, `TutorSidebar.tsx`.
  - Global components like `TopNavBar.tsx`.
  - Subfolders for `landing` and `shared` UI components.
- **`src/lib/`**: Contains business logic, the API client wrapper, and mock data infrastructure.

## Next Steps / Recommendations
1. **Database Integration**: Introduce a real database (e.g., PostgreSQL with Prisma or Drizzle) to replace the mock data and hardcoded users.
2. **Robust Authentication**: Migrate from cookie-based mock auth to a secure solution like NextAuth.js (Auth.js) or a provider like Clerk/Supabase.
3. **Student Routing**: Review the student login flow. Currently, students are redirected straight to `/billing`. You may want to redirect them to a dedicated student dashboard (`/student/dashboard`) instead.
