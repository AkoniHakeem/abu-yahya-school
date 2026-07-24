# Student Profile: UI to Data Mapping

This document outlines the UI elements present on each page of the Student profile and the corresponding data elements required from the backend (or global store) to render them.

## 1. Dashboard (`/student/dashboard`)
**UI Elements:**
- **Welcome Header:** Displays the student's name and current date/time.
- **Upcoming Class Widget:** Shows the very next scheduled live session.
- **Recent Activity List:** A feed of the student's latest interactions (grades, messages, completed lessons).
- **Progress Stats Card:** Shows overall progress percentage and active/completed courses count.
- **Active Plan Card:** Displays the current billing plan status.

**Data Elements Needed:**
- `profile.name` (String)
- `upcomingClass` (Object): `title`, `tutor`, `date`, `duration`, `meetingLink`
- `recentActivity` (Array of Objects): `type`, `title`, `description`, `timestamp`, `icon`
- `progressStats` (Object): `overall` (Number), `coursesCompleted` (Number), `activeCourses` (Number)
- `activePlan` (Object): `name` (String), `status` (String), `nextBillingDate` (String)

---

## 2. Courses (`/student/courses`)
**UI Elements:**
- **Course Cards:** Visual cards representing enrolled courses.
- **Progress Bar:** Visual indicator of course completion.
- **Lessons List (Expandable):** List of video lessons/modules within a course.
- **Lock State Indicator:** Shows if a course or lesson is locked (e.g., due to payment or prerequisites).

**Data Elements Needed:**
- `courses` (Array of Objects):
  - `id`, `title`, `tutor`, `progress` (Number), `thumbnail`, `status`
  - `isLocked` (Boolean)
  - `lessons` (Array of Objects): `id`, `title`, `duration`, `isCompleted` (Boolean), `videoUrl`, `isLockedByTutor` (Boolean)

---

## 3. Schedule (`/student/schedule`)
**UI Elements:**
- **Upcoming Sessions List/Calendar:** A chronologically ordered list of classes.
- **Session Details:** Time, duration, and type of session.
- **Join Action:** Button to access the live meeting link.

**Data Elements Needed:**
- `upcomingSchedule` (Array of Objects):
  - `id`, `courseTitle`, `tutor`, `date` (ISO String), `duration`, `meetingLink`, `sessionType` (e.g., "1-on-1 Lesson", "Live Class")

---

## 4. Assignments (`/student/assignments`)
**UI Elements:**
- **Tabs (Pending / Completed):** Filter assignments by status.
- **Assignment Cards:** Details of the task.
- **Grading/Feedback Section:** Displays the received grade and tutor's notes.
- **File Attachments:** Links to download assignment resources.

**Data Elements Needed:**
- `assignments` (Array of Objects):
  - `id`, `courseTitle`, `title`, `dueDate`, `status` ("pending", "submitted", "graded")
  - `grade` (String/Number | null)
  - `feedback` (String | null)
  - `attachedFiles` (Array): `name`, `size`, `url`

---

## 5. Community & Announcements (`/student/community`)
**UI Elements:**
- **Announcement Feed:** List of important broadcasts from admins/tutors.

**Data Elements Needed:**
- `community` (Array of Objects):
  - `id`, `author`, `title`, `content`, `date`

---

## 6. Messages (`/student/messages`)
**UI Elements:**
- **Inbox List:** List of conversations.
- **Message Detail View:** The full content of a selected message.
- **Unread Badges:** Indicators for new messages.

**Data Elements Needed:**
- `messages` (Array of Objects):
  - `id`, `sender`, `avatar`, `subject`, `preview`, `date`, `isRead` (Boolean)

---

## 7. Billing & Subscription (`/student/settings` or `/student/billing`)
**UI Elements:**
- **Current Plan Details:** Pricing and interval.
- **Payment Method:** Masked card details.
- **Invoice History Table:** List of past payments.

**Data Elements Needed:**
- `billingData` (Object):
  - `currentPlan`: `name`, `price`, `interval`, `status`, `nextBillingDate`
  - `paymentMethod`: `type`, `last4`, `expiry`
  - `invoices`: Array of `id`, `date`, `amount`, `status`

---

## 8. Settings & Profile (`/student/settings`)
**UI Elements:**
- **Profile Form:** Editable personal details.
- **Notification Preferences:** Toggles for email/SMS alerts.

**Data Elements Needed:**
- `profileData` (Object): `name`, `email`, `timezone`, `avatar`
- `preferences` (Object): `notifications` (Boolean)
