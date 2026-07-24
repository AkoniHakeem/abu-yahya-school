# Admin Profile: UI to Data Mapping

This document outlines the UI elements present on each page of the Admin profile and the corresponding data elements required from the backend (or global store) to render them.

## 1. Dashboard (`/admin/dashboard`)
**UI Elements:**
- **High-Level Statistics Bento Grid:** Large, bold metric cards displaying total revenue, active student count, and total tutor count.

**Data Elements Needed:**
- `financials.totalRevenue` (Number)
- `users` (Array): Filtered to count `role === 'student'`
- `users` (Array): Filtered to count `role === 'tutor'`

---

## 2. User Directory (`/admin/users`)
**UI Elements:**
- **Filters Toolbar:** Search bar and dropdown to filter by roles (Student/Tutor/Admin).
- **Add New User Button/Modal:** Interface for provisioning new accounts manually.
- **Data Table:** Comprehensive list of all registered platform users with their status and current plan/level.

**Data Elements Needed:**
- `users` (Array of Objects):
  - `id`, `name`, `email`, `role`, `avatar`, `plan`, `progress`
- Action Payload to write to backend: `name`, `email`, `role`, `plan`

---

## 3. Class Coordination (`/admin/classes`)
**UI Elements:**
- **Class Configuration Form:** Inputs for Class Name, Assigned Tutor, Schedule Time, and Curriculum Level.
- **Student Assignment Directory (Optional):** Checklist to enroll students into the newly created class.
- **Active Classes Overview Panel:** A scrolling sidebar listing all currently active classes and their capacity.

**Data Elements Needed:**
- `users` (Array): Filtered for `role === 'tutor'` to populate the Assign Tutor dropdown.
- `classes` (Array of Objects):
  - `id`, `courseTitle`, `tutor`, `tutorId`, `time`, `type`, `studentCount`, `level`
- Action Payload to write to backend: `courseTitle`, `tutorId`, `time`, `level`

---

## 4. Financials (`/admin/financials`)
**UI Elements:**
- **Revenue Metrics:** Total Revenue, MRR (Monthly Recurring Revenue), and Pending Payouts.
- **Recent Payments Table:** Log of incoming subscription payments.
- **Quick Payouts Widget:** Alerts for tutors awaiting their monthly earnings.

**Data Elements Needed:**
- `financials` (Object):
  - `totalRevenue` (Number)
  - `mrr` (Number)
  - `activeSubscriptions` (Number)
  - `pendingPayouts` (Number)
  - `recentPayments` (Array): `id`, `student`, `plan`, `amount`, `date`, `status`

---

## 5. Reports & Analytics (`/admin/reports`)
**UI Elements:**
- **Growth Metrics:** New signups this month, overall active users.
- **Academic Performance Charts:** Course completion rates broken down by subject.

**Data Elements Needed:**
- `reports` (Object):
  - `activeUsers` (Number)
  - `newSignupsThisMonth` (Number)
  - `completionRates` (Object mapping course name to percentage)

---

## 6. Support Desk (`/admin/support`)
**UI Elements:**
- **Ticket Queue:** List of support tickets, filterable by Open/Resolved.
- **Ticket Detail View:** Shows the full conversation history.
- **Reply/Resolve Tools:** Text area to respond to the user and a button to mark the issue as resolved.

**Data Elements Needed:**
- `tickets` (Array of Objects):
  - `ticketId`, `user`, `role`, `issue`, `status` ("Open", "Resolved")
- Action Payload to write to backend: `ticketId`, `replyText` or `status` update

---

## 7. Global Settings (`/admin/settings`)
**UI Elements:**
- **System Toggles:** UI to enable/disable platform registration, maintenance mode, or change default currency.

**Data Elements Needed:**
- `settings` (Object):
  - `globalConfig`: `registrationEnabled` (Boolean), `maintenanceMode` (Boolean), `defaultCurrency` (String)
  - `adminProfile`: `name`, `email`
