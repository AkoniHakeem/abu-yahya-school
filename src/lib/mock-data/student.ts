// This file contains comprehensive mock data for the Student Profile to simulate a real database.

export const studentProfile = {
  id: "STU-9482",
  name: "Abu Yahya",
  email: "student@abu-yahya.com",
  level: "Arabic Level 2",
  joinedDate: "2025-01-15T00:00:00Z",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgUWIh3NShjVW_YjjZngKemTnbJ7MsfVwKj7VkiPmDXtPKM7ciOvAIuIsMwVZrecyiKL5FVfBhiko4L1U3BlDYeFk0v-Vao1a4Q3FzXBaWL3yxch6CXttNfRym9j87OOewN4U856hYjWwxX831eWkjojsQxTAcO8bDVxsZnX-0bX6qtKUlE3iUO_pXrbxVIWqcihmSsfUe1B928US4jMabESrNpTjAqUo_pCj86iZZg9eeCid8NPWQ",
  timezone: "UTC+1 (West Africa Time)",
  overallProgress: 68
};

export const enrolledCourses = [
  {
    id: "CRS-101",
    title: "Arabic Grammar (Nahw) - Beginner",
    tutor: "Ustadh Omar",
    progress: 75,
    thumbnail: "menu_book",
    nextLesson: "Nouns and their Types",
    totalLessons: 24,
    completedLessons: 18,
    status: "active"
  },
  {
    id: "CRS-102",
    title: "Quranic Recitation (Tajweed)",
    tutor: "Sheikh Abdullah",
    progress: 40,
    thumbnail: "auto_stories",
    nextLesson: "Rules of Noon Sakinah",
    totalLessons: 30,
    completedLessons: 12,
    status: "active"
  },
  {
    id: "CRS-103",
    title: "Conversational Arabic",
    tutor: "Ustadha Fatima",
    progress: 100,
    thumbnail: "forum",
    nextLesson: null,
    totalLessons: 15,
    completedLessons: 15,
    status: "completed"
  }
];

export const upcomingSchedule = [
  {
    id: "SCH-001",
    courseId: "CRS-101",
    courseTitle: "Arabic Grammar (Nahw)",
    tutor: "Ustadh Omar",
    date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    duration: "60 mins",
    meetingLink: "https://zoom.us/j/mocklink123"
  },
  {
    id: "SCH-002",
    courseId: "CRS-102",
    courseTitle: "Quranic Recitation (Tajweed)",
    tutor: "Sheikh Abdullah",
    date: new Date(Date.now() + 172800000).toISOString(), // Day after tomorrow
    duration: "45 mins",
    meetingLink: "https://zoom.us/j/mocklink456"
  }
];

export const assignments = [
  {
    id: "ASS-001",
    courseId: "CRS-101",
    courseTitle: "Arabic Grammar (Nahw)",
    title: "Identify Nouns in Surah Al-Fatiha",
    dueDate: new Date(Date.now() + 259200000).toISOString(), // 3 days from now
    status: "pending", // pending, submitted, graded
    grade: null,
    feedback: null
  },
  {
    id: "ASS-002",
    courseId: "CRS-102",
    courseTitle: "Quranic Recitation (Tajweed)",
    title: "Record Recitation of Surah Al-Ikhlas",
    dueDate: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    status: "submitted",
    grade: null,
    feedback: null
  },
  {
    id: "ASS-003",
    courseId: "CRS-101",
    courseTitle: "Arabic Grammar (Nahw)",
    title: "Conjugation of Past Tense Verbs",
    dueDate: new Date(Date.now() - 604800000).toISOString(), // Last week
    status: "graded",
    grade: "A-",
    feedback: "Excellent work. Just be careful with the dual feminine form."
  }
];

export const recentActivity = [
  {
    id: "ACT-001",
    type: "grade",
    title: "Assignment Graded",
    description: "Ustadh Omar graded your assignment 'Conjugation of Past Tense Verbs'",
    timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    icon: "grading"
  },
  {
    id: "ACT-002",
    type: "message",
    title: "New Message",
    description: "Sheikh Abdullah sent you a message regarding your Tajweed progress.",
    timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    icon: "mail"
  },
  {
    id: "ACT-003",
    type: "course",
    title: "Lesson Completed",
    description: "You completed 'Introduction to Verbs' in Arabic Grammar.",
    timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    icon: "check_circle"
  }
];

export const messages = [
  {
    id: "MSG-001",
    sender: "Sheikh Abdullah",
    avatar: "https://ui-avatars.com/api/?name=Sheikh+Abdullah&background=0D8BD9&color=fff",
    subject: "Tajweed Progress",
    preview: "MashaAllah, your recitation of Surah Al-Asr was much improved.",
    date: new Date(Date.now() - 86400000).toISOString(),
    isRead: false
  },
  {
    id: "MSG-002",
    sender: "Admin Support",
    avatar: "https://ui-avatars.com/api/?name=Admin+Support&background=E5B824&color=fff",
    subject: "Subscription Renewal Successful",
    preview: "Your monthly subscription has been successfully renewed.",
    date: new Date(Date.now() - 604800000).toISOString(),
    isRead: true
  }
];

export const billingData = {
  currentPlan: {
    name: "Standard Learning Plan",
    price: 49.99,
    interval: "month",
    status: "Active",
    nextBillingDate: new Date(Date.now() + 1296000000).toISOString() // ~15 days
  },
  paymentMethod: {
    type: "Visa",
    last4: "4242",
    expiry: "12/26"
  },
  invoices: [
    {
      id: "INV-2026-003",
      date: new Date(Date.now() - 1296000000).toISOString(),
      amount: 49.99,
      status: "Paid"
    },
    {
      id: "INV-2026-002",
      date: new Date(Date.now() - 3888000000).toISOString(), // ~45 days ago
      amount: 49.99,
      status: "Paid"
    },
    {
      id: "INV-2026-001",
      date: new Date(Date.now() - 6480000000).toISOString(), // ~75 days ago
      amount: 49.99,
      status: "Paid"
    }
  ]
};
