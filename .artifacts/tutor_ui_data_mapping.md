# Tutor Profile: UI to Data Mapping

This document outlines the UI elements present on each page of the Tutor profile and the corresponding data elements required from the backend (or global store) to render them.

## 1. Dashboard (`/tutor/dashboard`)
**UI Elements:**
- **Today's Classes Widget:** A quick view of classes scheduled for the current day.
- **Actionable Metrics:** Badges showing pending grading tasks and total active students.

**Data Elements Needed:**
- `dashboardStats` (Object):
  - `todaysClasses` (Array): `id`, `title`, `time`, `type`, `studentCount`, `studentName` (for 1-on-1s)
  - `pendingGradingCount` (Number)
  - `studentCount` (Number)

---

## 2. Classroom & Workload (`/tutor/classroom`)
**UI Elements:**
- **Upcoming Schedule Feed:** Chronological list of upcoming teaching sessions.
- **Pending Tasks Panel:** Quick access to assignments awaiting grading.

**Data Elements Needed:**
- `upcomingClasses` (Array): `id`, `title`, `date`, `time`, `type`
- `pendingAssignments` (Array): `id`, `title`, `studentName`, `dueDate`

---

## 3. Scheduling (`/tutor/scheduling`)
**UI Elements:**
- **Master Calendar/List:** Full view of the tutor's availability and scheduled sessions.
- **"Schedule Session" Form:** Modal/form to create a new live class or 1-on-1 session.

**Data Elements Needed:**
- `upcomingClasses` (Array) - *for reading*
- Action Payload to write to backend: `title`, `time`, `date`, `type`

---

## 4. Assignments & Grading (`/tutor/assignments/grade`)
**UI Elements:**
- **Grading Queue:** List of student submissions waiting for review.
- **Rubric Form:** Inputs for assigning a numerical/letter grade and providing text feedback.
- **Submission Viewer:** Link or embedded viewer for the uploaded assignment file.

**Data Elements Needed:**
- `pendingAssignments` (Array of Objects):
  - `id`, `studentId`, `studentName`, `studentAvatar`, `course`, `title`, `submittedAt`, `previousGrade`, `avgPerformance`, `documentUrl`
- Action Payload to write to backend: `assignmentId`, `score`, `feedback`

---

## 5. Student Roster (`/tutor/students`)
**UI Elements:**
- **Roster Data Table:** Comprehensive list of assigned students.
- **Performance Metrics:** Columns showing attendance and course progress.

**Data Elements Needed:**
- `students` (Array of Objects):
  - `id`, `name`, `course`, `plan`, `progress` (Number), `attendance` (Number)

---

## 6. Earnings & Payouts (`/tutor/earnings`)
**UI Elements:**
- **Financial Summary Cards:** Total balance, available payout, next payout date.
- **Transaction History:** Table showing past payments and platform fee deductions.

**Data Elements Needed:**
- `earningsData` (Object):
  - `totalBalance` (Number)
  - `availablePayout` (Number)
  - `nextPayoutDate` (String)
  - `transactions` (Array): `id`, `date`, `description`, `student`, `status`, `amount`

---

## 7. Community & Messages (`/tutor/community`, `/tutor/messages`)
**UI Elements:**
- **Post Authoring Tool:** Form to broadcast messages to enrolled students.
- **Direct Messaging Inbox:** 1-on-1 conversations with students or admins.

**Data Elements Needed:**
- `communityPosts` (Array of Objects): `id`, `author`, `title`, `content`, `date`
- `messages` (Array of Objects): `id`, `sender`, `subject`, `preview`, `date`, `isRead`

---

## 8. Settings & Profile (`/tutor/settings`)
**UI Elements:**
- **Tutor Profile Form:** Editable bio, expertise, and timezone settings.

**Data Elements Needed:**
- `profileData` (Object): `name`, `email`, `role`, `bio`
- `preferences` (Object): `notifications` (Boolean)
