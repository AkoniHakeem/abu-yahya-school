# Make Tutor UI Interactive and Production-Ready

This plan outlines how we will upgrade the Tutor UI to match the interactive architecture of the Student UI. We will implement global state management, fix layout inconsistencies, and make the UI react to user interactions like grading assignments or scheduling classes.

## User Review Required

> [!IMPORTANT]
> - We will use **Zustand** for state management, mirroring the approach taken on the Student side.
> - The current **Assignments Grading** page (`/tutor/assignments/grade`) contains a hardcoded redundant sidebar and top navigation that conflict with the global layout. I will remove these redundant elements so it perfectly matches the rest of the application. Please confirm if this is okay.

## Open Questions

> [!WARNING]
> 1. When a tutor schedules a new class in the modal on the Scheduling page, should that immediately appear on the Dashboard's "Today's Schedule" (assuming the date matches)?
> 2. For grading assignments, would you like the "Submit Grade" action to remove the assignment from the pending list and update the dashboard stats automatically?

## Proposed Changes

---

### Global Store (Zustand)

#### [NEW] [tutor-store.ts](file:///home/akonimayowa/projects/abu-yahya-school/src/store/tutor-store.ts)
- Create a global client-side store to manage the tutor's state.
- Include state for: `dashboardStats`, `upcomingClasses`, `students`, and `pendingAssignments`.
- Actions: `initializeStore`, `scheduleClass`, `submitGrade` (which will update the assignment status and decrement the pending grading count).

---

### Mock Data & API

#### [MODIFY] [mock-data.ts](file:///home/akonimayowa/projects/abu-yahya-school/src/lib/mock-api/mock-data.ts)
- Expand Tutor mock data to include a detailed `getTutorAssignments()` returning a list of pending assignments.
- Update `getTutorDashboard()` to ensure it aligns with the data structures used by the store.

#### [MODIFY] [index.ts](file:///home/akonimayowa/projects/abu-yahya-school/src/lib/mock-api/index.ts)
- Add the necessary routing endpoints for `/api/tutor/assignments` and POST endpoints for submitting grades or scheduling classes.

---

### Tutor UI Pages

#### [MODIFY] [page.tsx](file:///home/akonimayowa/projects/abu-yahya-school/src/app/tutor/assignments/grade/page.tsx)
- **Bug Fix**: Strip out the redundant hardcoded `<aside>` and `<header>` tags that are cluttering the DOM and breaking the layout. Rely strictly on the `<TutorSidebar>`.
- Convert to a Client Component reading the first pending assignment from `tutor-store`.
- Make the "Submit Grade" button interactive, triggering the `submitGrade` action in the store.

#### [MODIFY] [page.tsx](file:///home/akonimayowa/projects/abu-yahya-school/src/app/tutor/scheduling/page.tsx)
- Connect the page to `tutor-store`.
- Wire up the "Schedule Session" modal so that submitting the form calls `scheduleClass` in the store, immediately adding the class to the UI.

#### [MODIFY] [page.tsx](file:///home/akonimayowa/projects/abu-yahya-school/src/app/tutor/dashboard/page.tsx)
- Refactor the dashboard to use a Client Component wrapper (like the Student dashboard).
- Consume `tutor-store` so that if an assignment is graded or a class is scheduled, the high-level stats (e.g., "Pending Grading") update reactively.

#### [MODIFY] [page.tsx](file:///home/akonimayowa/projects/abu-yahya-school/src/app/tutor/classroom/page.tsx)
- Convert to a Client Component consuming `tutor-store` to render the dynamic list of upcoming classes and pending assignments, rather than static placeholders.

## Verification Plan

### Manual Verification
1. Navigate to `/tutor/assignments/grade`. Verify the layout is clean and matches the other pages.
2. Submit a grade using the rubric form. 
3. Navigate to `/tutor/dashboard` and verify the "Pending Grading" count has decreased by 1.
4. Navigate to `/tutor/scheduling`. Open the modal, schedule a class for today.
5. Verify the newly scheduled class appears immediately in the scheduling list and on the Dashboard.
