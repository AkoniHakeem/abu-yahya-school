# Make Student UI and Courses Interactive

This plan details how we will bring the Student Dashboard and "My Courses" pages to life by implementing client-side state management, expanding the mock data, and adding interactive elements like a course player.

## User Review Required

> [!IMPORTANT]
> To achieve the "store" and interactive states you requested, I propose using **Zustand**, a lightweight and modern state management library. 
> 
> We will need to run: `npm install zustand`
> 
> Please confirm if adding this dependency is acceptable, or if you prefer a different approach (like React Context or Server Actions with in-memory mutation).

## Open Questions

> [!WARNING]
> 1. Should we mock an actual video player interface inside the course, or just show a list of lessons that you can "Mark as Complete"?
> 2. For the initial load, would you prefer the components to fetch data on the client using the store, or keep the Server Component fetching and pass the initial data into the client store?

## Proposed Changes

---

### Global Store (Zustand)

#### [NEW] [student-store.ts](file:///home/akonimayowa/projects/abu-yahya-school/src/store/student-store.ts)
- Create a global client-side store to manage the student's state.
- Include state variables for: `profile`, `enrolledCourses`, `recentActivity`, `upcomingClass`.
- Add actions (mutations): 
  - `initializeStore(data)`
  - `markLessonComplete(courseId, lessonId)` - Updates lesson status, recalculates course progress, and adds a "Recent Activity" entry.
  - `joinClass(classId)` - Simulates joining a live class.

---

### Mock Data Expansion

#### [MODIFY] [student.ts](file:///home/akonimayowa/projects/abu-yahya-school/src/lib/mock-data/student.ts)
- Expand the `enrolledCourses` array to include detailed `lessons` for each course. 
- Example lesson structure: `{ id: "L1", title: "Introduction", duration: "10 mins", isCompleted: true, videoUrl: "..." }`.

---

### Student Courses

#### [MODIFY] [page.tsx](file:///home/akonimayowa/projects/abu-yahya-school/src/app/student/courses/page.tsx)
- Refactor the page to use a Client Component (`<CoursesListClient />`) to consume the Zustand store.
- The "Go to Course" button will link to the new dynamic route `/student/courses/[courseId]`.
- Course progress bars will update reactively based on the store.

#### [NEW] [page.tsx](file:///home/akonimayowa/projects/abu-yahya-school/src/app/student/courses/[courseId]/page.tsx)
- Create a detailed course view.
- Contains a video player placeholder for the currently selected lesson.
- A sidebar/list of all lessons for the course.
- Interactive "Mark as Complete" button that triggers the Zustand store action, automatically updating progress on both this page and the main dashboard.

---

### Student Dashboard

#### [MODIFY] [page.tsx](file:///home/akonimayowa/projects/abu-yahya-school/src/app/student/dashboard/page.tsx)
- Refactor to use a Client Component wrapper.
- Consume the Zustand store so that "Recent Activity" and "Overall Progress" update automatically when a user completes a lesson in a course.
- Add interactivity to the "Join Class" button for the upcoming schedule.

## Verification Plan

### Manual Verification
1. Open the `/student/dashboard` and observe the initial load of data into the store.
2. Navigate to `/student/courses` and click on "Go to Course".
3. Inside the course view, interact with the lessons by clicking "Mark as Complete".
4. Verify that the progress bar updates immediately.
5. Return to the dashboard and verify that "Recent Activity" shows the newly completed lesson and that overall progress has recalculated.
