# Walkthrough: Implementing User and Class Editing

I've implemented the changes from the provided implementation plan to allow editing Users and Classes via the Admin Dashboard.

## Changes Made

### Backend API
- Added `PUT /api/admin/users/:id` endpoint in `backend/src/admin/admin.controller.ts` mapped to a new `updateUser` method in `backend/src/admin/admin.service.ts`.
- Added `PUT /api/admin/classes/:id` endpoint in `backend/src/admin/admin.controller.ts` mapped to a new `updateClass` method in `backend/src/admin/admin.service.ts`.

### Frontend Store
- Added `updateUser` and `updateClass` actions to the global Zustand store in `src/store/admin-store.ts` to seamlessly perform the `PUT` requests and refresh the respective lists.

### UI Components
- **User Editing:** Updated `src/app/admin/users/UsersClient.tsx` to include an `onClick` handler on the edit (pen) icon. Clicking it now prompts the admin to update the user's name and role, and saves the updates to the database.
- **Class Editing:** Updated `src/app/admin/classes/ClassesClient.tsx` to include an `onClick` handler on the active class cards. Clicking a class card now prompts the admin to update the class's scheduled time, and saves the updates to the database.

## Validation
- Clicking on a user's edit icon prompts for the new `name` and `role`. 
- Clicking on an active class card prompts for a new `time`.
- The frontend store automatically refetches and updates the displayed data after a successful edit.
