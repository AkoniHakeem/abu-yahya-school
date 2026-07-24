# Platform API Requirements

This document outlines the comprehensive list of backend APIs required to power the Student, Tutor, and Admin profiles based on their UI requirements. It includes the expected nested data structures for each endpoint.

---

## 1. Student Profile APIs

### `GET /api/student/dashboard`
Fetches all necessary data to render the student dashboard overview.
**Response Body:**
```json
{
  "profile": {
    "name": "String"
  },
  "upcomingClass": {
    "id": "String",
    "title": "String",
    "tutor": "String",
    "date": "ISO 8601 String",
    "duration": "String",
    "meetingLink": "String"
  },
  "recentActivity": [
    {
      "id": "String",
      "type": "String",
      "title": "String",
      "description": "String",
      "timestamp": "ISO 8601 String",
      "icon": "String"
    }
  ],
  "progressStats": {
    "overall": "Number",
    "coursesCompleted": "Number",
    "activeCourses": "Number"
  },
  "activePlan": {
    "name": "String",
    "status": "String",
    "nextBillingDate": "ISO 8601 String"
  }
}
```

### `GET /api/student/courses`
Fetches the student's enrolled courses and associated lessons.
**Response Body:**
```json
[
  {
    "id": "String",
    "title": "String",
    "tutor": "String",
    "progress": "Number (0-100)",
    "thumbnail": "String (URL or Icon Name)",
    "status": "String (e.g., 'active', 'completed')",
    "isLocked": "Boolean",
    "lessons": [
      {
        "id": "String",
        "title": "String",
        "duration": "String",
        "isCompleted": "Boolean",
        "videoUrl": "String",
        "isLockedByTutor": "Boolean"
      }
    ]
  }
]
```

### `GET /api/student/schedule`
Fetches the student's upcoming live classes or 1-on-1 sessions.
**Response Body:**
```json
[
  {
    "id": "String",
    "courseTitle": "String",
    "tutor": "String",
    "date": "ISO 8601 String",
    "duration": "String",
    "meetingLink": "String",
    "sessionType": "String"
  }
]
```

### `GET /api/student/assignments`
Fetches all assignments across courses.
**Response Body:**
```json
[
  {
    "id": "String",
    "courseTitle": "String",
    "title": "String",
    "dueDate": "ISO 8601 String",
    "status": "String ('pending' | 'submitted' | 'graded')",
    "grade": "String | Number | null",
    "feedback": "String | null",
    "attachedFiles": [
      {
        "name": "String",
        "size": "String",
        "url": "String"
      }
    ]
  }
]
```

### `POST /api/student/assignments/submit`
Submits an assignment.
**Request Body:**
```json
{
  "assignmentId": "String",
  "fileUrl": "String",
  "comments": "String"
}
```

### `GET /api/student/billing`
Fetches billing and subscription history.
**Response Body:**
```json
{
  "currentPlan": {
    "name": "String",
    "price": "Number",
    "interval": "String",
    "status": "String",
    "nextBillingDate": "ISO 8601 String"
  },
  "paymentMethod": {
    "type": "String",
    "last4": "String",
    "expiry": "String"
  },
  "invoices": [
    {
      "id": "String",
      "date": "ISO 8601 String",
      "amount": "Number",
      "status": "String"
    }
  ]
}
```

---

## 2. Tutor Profile APIs

### `GET /api/tutor/dashboard`
Fetches the tutor's daily overview.
**Response Body:**
```json
{
  "todaysClasses": [
    {
      "id": "String",
      "title": "String",
      "time": "String",
      "type": "String",
      "studentCount": "Number",
      "studentName": "String (Optional, for 1-on-1s)"
    }
  ],
  "pendingGradingCount": "Number",
  "studentCount": "Number"
}
```

### `GET /api/tutor/classes`
Fetches all upcoming classes for the tutor.
**Response Body:**
```json
[
  {
    "id": "String",
    "title": "String",
    "date": "ISO 8601 String",
    "time": "String",
    "type": "String"
  }
]
```

### `POST /api/tutor/classes`
Schedules a new class or session.
**Request Body:**
```json
{
  "title": "String",
  "date": "ISO 8601 String",
  "time": "String",
  "type": "String"
}
```

### `GET /api/tutor/assignments`
Fetches pending assignments awaiting the tutor's grade.
**Response Body:**
```json
[
  {
    "id": "String",
    "studentId": "String",
    "studentName": "String",
    "studentAvatar": "String",
    "course": "String",
    "title": "String",
    "submittedAt": "ISO 8601 String",
    "previousGrade": "Number",
    "avgPerformance": "String",
    "documentUrl": "String"
  }
]
```

### `POST /api/tutor/assignments/grade`
Submits a grade for a student's assignment.
**Request Body:**
```json
{
  "assignmentId": "String",
  "score": "Number",
  "feedback": "String"
}
```

### `GET /api/tutor/students`
Fetches the tutor's assigned student roster.
**Response Body:**
```json
[
  {
    "id": "String",
    "name": "String",
    "course": "String",
    "plan": "String",
    "progress": "Number",
    "attendance": "Number"
  }
]
```

### `GET /api/tutor/earnings`
Fetches financial and payout details.
**Response Body:**
```json
{
  "totalBalance": "Number",
  "availablePayout": "Number",
  "nextPayoutDate": "ISO 8601 String",
  "transactions": [
    {
      "id": "String",
      "date": "ISO 8601 String",
      "description": "String",
      "student": "String | null",
      "status": "String",
      "amount": "Number"
    }
  ]
}
```

---

## 3. Admin Profile APIs

### `GET /api/admin/dashboard`
Fetches global platform metrics.
**Response Body:**
```json
{
  "totalRevenue": "Number",
  "activeStudentsCount": "Number",
  "totalTutorsCount": "Number"
}
```

### `GET /api/admin/users`
Fetches all registered platform users.
**Response Body:**
```json
[
  {
    "id": "String",
    "name": "String",
    "email": "String",
    "role": "String ('student' | 'tutor' | 'admin')",
    "avatar": "String",
    "plan": "String (Optional)",
    "progress": "Number (Optional)"
  }
]
```

### `POST /api/admin/users`
Creates a new user.
**Request Body:**
```json
{
  "name": "String",
  "email": "String",
  "role": "String"
}
```

### `GET /api/admin/classes`
Fetches all globally managed active classes.
**Response Body:**
```json
[
  {
    "id": "String",
    "courseTitle": "String",
    "tutor": "String",
    "tutorId": "String",
    "time": "String",
    "type": "String",
    "studentCount": "Number",
    "level": "String"
  }
]
```

### `POST /api/admin/classes`
Initializes a new class.
**Request Body:**
```json
{
  "courseTitle": "String",
  "tutorId": "String",
  "time": "String",
  "level": "String"
}
```

### `GET /api/admin/financials`
Fetches detailed platform financials.
**Response Body:**
```json
{
  "totalRevenue": "Number",
  "mrr": "Number",
  "activeSubscriptions": "Number",
  "pendingPayouts": "Number",
  "recentPayments": [
    {
      "id": "String",
      "student": "String",
      "plan": "String",
      "amount": "Number",
      "date": "ISO 8601 String",
      "status": "String"
    }
  ]
}
```

### `GET /api/admin/reports`
Fetches analytics and growth reporting.
**Response Body:**
```json
{
  "activeUsers": "Number",
  "newSignupsThisMonth": "Number",
  "completionRates": {
    "CourseName1": "Number (%)",
    "CourseName2": "Number (%)"
  }
}
```

### `GET /api/admin/support`
Fetches all platform support tickets.
**Response Body:**
```json
[
  {
    "ticketId": "String",
    "user": "String",
    "role": "String",
    "issue": "String",
    "status": "String ('Open' | 'Resolved')",
    "history": [
      {
        "sender": "String",
        "time": "ISO 8601 String",
        "text": "String"
      }
    ]
  }
]
```

### `POST /api/admin/support/resolve`
Resolves a support ticket.
**Request Body:**
```json
{
  "ticketId": "String"
}
```

---

## 4. Shared APIs

### `GET /api/shared/community`
Fetches community forum posts.
**Response Body:**
```json
[
  {
    "id": "String",
    "author": "String",
    "title": "String",
    "content": "String",
    "date": "ISO 8601 String"
  }
]
```

### `GET /api/shared/messages`
Fetches direct messages for the authenticated user.
**Response Body:**
```json
[
  {
    "id": "String",
    "sender": "String",
    "avatar": "String",
    "subject": "String",
    "preview": "String",
    "date": "ISO 8601 String",
    "isRead": "Boolean"
  }
]
```

### `GET /api/shared/settings`
Fetches user settings (for whichever profile is authenticated).
**Response Body:**
```json
{
  "profileData": {
    "name": "String",
    "email": "String",
    "timezone": "String",
    "avatar": "String"
  },
  "preferences": {
    "notifications": "Boolean"
  }
}
```
