# Backend Implementation Plan (Phase 3: Student Profile)

This document outlines the backend architecture, database schema additions, and API endpoints created for the Student profile of **Abu-Yahya School**.

## 1. Entities Added & Updated

1. **`Course` Entity (`backend/src/entities/course.entity.ts`)**:
   - `id`, `title`, `tutor`, `progress`, `thumbnail`, `status`, `isLocked`, `studentId`
   - `lessons`: JSON array containing `{ id, title, duration, isCompleted, videoUrl, isLockedByTutor }`.

2. **`CommunityPost` Entity (`backend/src/entities/community-post.entity.ts`)**:
   - `id`, `author`, `title`, `content`, `date`.

3. **`Message` Entity (`backend/src/entities/message.entity.ts`)**:
   - `id`, `sender`, `avatar`, `subject`, `preview`, `isRead`, `recipientId`, `date`.

4. **`Assignment` Entity (`backend/src/entities/assignment.entity.ts`)**:
   - Updated to include `dueDate`, `status`, `comments`, and `attachedFiles`.

## 2. Student Module APIs (`/api/student`)

- `GET /api/student/dashboard`: Dashboard overview stats, next class, active plan, recent activity.
- `GET /api/student/courses`: Enrolled courses with expandable lessons.
- `GET /api/student/schedule`: Schedule of upcoming classes and 1-on-1 sessions.
- `GET /api/student/assignments`: Assignments list, status, grades, and feedback.
- `POST /api/student/assignments/submit`: Submit assignment solution (URL & notes).
- `GET /api/student/billing`: Subscription plan details, payment method, invoice history.
- `GET /api/student/community`: Community posts and announcements.
- `GET /api/student/messages`: Messages inbox.
- `GET /api/student/settings`: Student profile and notification preferences.
