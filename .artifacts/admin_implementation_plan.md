# Admin UI Interactivity Implementation Plan

This document outlines the strategy for bringing the Admin UI to life, ensuring it feels like a real-world scenario, and importantly, demonstrating how admin actions affect the Tutor and Student profiles in real-time.

## Goal Description
Currently, the Admin UI is static and not connected to a global state. To achieve the user's vision, we need to:
1. Make all 7 Admin pages (Dashboard, Users, Classes, Financials, Reports, Settings, Support) fully interactive.
2. Introduce a shared **Mock Database** using `localStorage` so that when the Admin makes a change (e.g., adds a class or suspends a user), that change is immediately visible when switching to the Tutor or Student profiles.
3. Build a global state manager (`admin-store.ts`) to handle the Admin frontend state.

## User Review Required

> [!IMPORTANT]
> **Architecture Shift for Cross-Profile Syncing**
> To allow Admin actions to affect Students and Tutors in real-time, I propose migrating the underlying mock data from static JavaScript variables into a `localStorage`-based mock database (`src/lib/mock-api/db.ts`). 
> - When the app first loads, it will populate `localStorage` with the default dummy data.
> - When an Admin creates a new class, the mock API will save it to `localStorage`.
> - When a Student logs in (or refreshes), their store will pull the updated classes from `localStorage`. 
> 
> *Are you comfortable with this approach for the mock backend?*

## Proposed Changes

### Global Mock Database

To support cross-profile updates, we will refactor the mock data layer.
- **[NEW]** `src/lib/mock-api/db.ts`: A lightweight `localStorage` wrapper to act as our unified database. It will handle reading and writing entities like `Users`, `Classes`, `Financials`, and `Tickets`.
- **[MODIFY]** `src/lib/mock-api/mock-data.ts`: Update to read/write from `db.ts` rather than relying on static in-memory variables.
- **[MODIFY]** `src/lib/mock-api/index.ts`: Add POST/PUT/DELETE routes for Admin actions (e.g., `/api/admin/users`, `/api/admin/classes`).

### Admin State Management

- **[NEW]** `src/store/admin-store.ts`: A Zustand store for the Admin profile. It will manage:
  - Users directory (filtering, adding, editing).
  - Class coordination (creating classes, assigning tutors/students).
  - Support tickets (viewing, resolving).
  - Financials and Reports (refreshing data).

### Admin Pages Refactoring

We will convert the main visual components of the Admin pages into interactive Client Components connected to the `admin-store`.

#### Users Directory
- **[MODIFY]** `src/app/admin/users/page.tsx`: Serve as a server component wrapper.
- **[NEW]** `src/app/admin/users/UsersClient.tsx`: Interactive client component. Will allow filtering by role, and a functional "Add New User" modal.

#### Class Coordination
- **[MODIFY]** `src/app/admin/classes/page.tsx`: Serve as a server component wrapper.
- **[NEW]** `src/app/admin/classes/ClassesClient.tsx`: Interactive class creation. Creating a class here will allow you to assign a Tutor (which updates the Tutor's schedule) and Students (which updates their enrolled courses).

#### Dashboard & Financials
- **[MODIFY]** `src/app/admin/dashboard/page.tsx` & `src/app/admin/financials/page.tsx`: Connect to store to reflect real-time counts of users and revenue.

#### Support & Tickets
- **[MODIFY]** `src/app/admin/support/page.tsx`: Connect to store.
- **[NEW]** `src/app/admin/support/SupportClient.tsx`: Interactive ticket management (Open/Resolve tickets).

## Verification Plan

### Automated Tests
- TypeScript compilation check (`npx tsc --noEmit`) to ensure types align between the new `db.ts`, `admin-store.ts`, and the UI components.

### Manual Verification
1. **Adding a User**: Go to Admin > Users. Add a new Student. Navigate to Admin > Dashboard to verify the "Active Students" count increased.
2. **Cross-Profile Class Creation**: Go to Admin > Classes. Create a new class assigned to "Ustadh Tariq" and enroll "Abu Yahya". 
   - Navigate to the **Tutor Dashboard** to verify the new class appears in the schedule.
   - Navigate to the **Student Dashboard** to verify the new class appears in their courses.
3. **Resolving a Ticket**: Go to Admin > Support. Resolve an open ticket and verify it moves to the resolved state.
