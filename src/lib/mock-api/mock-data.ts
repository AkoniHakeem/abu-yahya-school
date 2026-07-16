import {
  studentProfile,
  enrolledCourses,
  upcomingSchedule,
  assignments,
  recentActivity,
  messages,
  billingData,
} from '../mock-data/student';

// --- STUDENT MOCK DATA ---
export { studentProfile } from '../mock-data/student';

export const getStudentDashboard = () => ({
  profile: studentProfile,
  upcomingClass: upcomingSchedule[0] || null,
  recentActivity,
  progressStats: {
    overall: studentProfile.overallProgress,
    coursesCompleted: 1,
    activeCourses: 2,
  },
  activePlan: billingData.currentPlan,
});

export const getStudentCourses = () => {
  // Add lock/unlock logic based on payment status
  const isPaid = billingData.currentPlan.status === 'Active';
  
  return enrolledCourses.map(course => ({
    ...course,
    isLocked: !isPaid,
    recordings: [
      { id: 'rec1', title: 'Lesson 1 Recording', duration: '45 mins', url: '#' },
      { id: 'rec2', title: 'Lesson 2 Recording', duration: '46 mins', url: '#' }
    ]
  }));
};

export const getStudentSchedule = () => {
  // Simulate different session types based on the plan
  const plan = billingData.currentPlan.name;
  
  return upcomingSchedule.map(schedule => {
    let sessionType = 'Standard Class';
    if (plan === 'Personal Plan') sessionType = '1-on-1 Lesson';
    if (plan === 'Premium Plan') sessionType = 'Mentoring / Live Revision';
    
    return {
      ...schedule,
      sessionType
    };
  });
};

export const getStudentAssignments = () => {
  return assignments.map(assignment => ({
    ...assignment,
    type: assignment.title.includes('Monthly') ? 'Monthly Assessment' : 'Standard Assignment',
    attachedFiles: [
      { name: 'materials.pdf', size: '2.4 MB', url: '#' }
    ]
  }));
};

export const getStudentMessages = () => messages;

export const getStudentCommunity = () => [
  {
    id: 'post1',
    author: 'Sheikh Abdullah',
    title: 'Welcome to the new semester!',
    content: 'Assalamu alaikum. We are excited to start the new semester with you all. Please ensure you have downloaded the latest syllabus.',
    date: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'post2',
    author: 'Ustadh Omar',
    title: 'Nahw Class Rescheduled',
    content: 'Please note that the beginner Nahw class scheduled for tomorrow has been moved to 4 PM. See you then!',
    date: new Date(Date.now() - 172800000).toISOString(),
  }
];


// --- TUTOR MOCK DATA ---
export const getTutorDashboard = () => ({
  todaysClasses: [
    { id: 'cls1', title: 'Arabic Grammar (Nahw)', time: '10:00 AM', type: 'Live Class', studentCount: 15 },
    { id: 'cls2', title: '1-on-1 Tajweed', time: '2:00 PM', type: '1-on-1 Lesson', studentName: 'Abu Yahya' },
  ],
  pendingGradingCount: 12,
  studentCount: 45,
});

export const getTutorStudents = () => [
  { id: 'STU-9482', name: 'Abu Yahya', course: 'Arabic Grammar (Nahw)', plan: 'Standard Plan', progress: 68, attendance: 92 },
  { id: 'STU-1122', name: 'Aisha Rahman', course: 'Tajweed Fundamentals', plan: 'Premium Plan', progress: 92, attendance: 100 },
  { id: 'STU-3344', name: 'Omar Farooq', course: 'Conversational Arabic', plan: 'Personal Plan', progress: 45, attendance: 78 },
  { id: 'STU-5566', name: 'Fatima Khan', course: 'Arabic Grammar (Nahw)', plan: 'Standard Plan', progress: 55, attendance: 85 },
  { id: 'STU-7788', name: 'Yusuf Ali', course: 'Memorization Intensive', plan: 'Premium Plan', progress: 80, attendance: 95 },
];

export const getTutorEarnings = () => ({
  totalBalance: 570.00,
  availablePayout: 450.00,
  nextPayoutDate: new Date(Date.now() + 604800000).toISOString(),
  transactions: [
    { id: 'tx1', date: '2026-07-01', description: 'Standard Plan - July', student: 'Abu Yahya', status: 'Completed', amount: 40.00 },
    { id: 'tx2', date: '2026-07-01', description: 'Premium Plan - July', student: 'Aisha Rahman', status: 'Completed', amount: 70.00 },
    { id: 'tx3', date: '2026-06-15', description: 'Payout Processed', student: null, status: 'Completed', amount: 800.00 },
    { id: 'tx4', date: '2026-07-05', description: 'Personal Plan - July', student: 'Omar Farooq', status: 'Pending', amount: 50.00 },
  ],
});

export const getTutorCommunity = () => getStudentCommunity();
export const getTutorMessages = () => getStudentMessages();
export const getTutorSettings = () => ({
  profileData: {
    ...studentProfile,
    name: 'Tutor User',
    role: 'tutor'
  },
  preferences: { notifications: true }
});

// --- ADMIN MOCK DATA ---
export const getAdminFinancials = () => ({
  totalRevenue: 15400.00,
  mrr: 15400.00,
  activeSubscriptions: 294,
  pendingPayouts: 3200.00,
  planBreakdown: {
    standard: { count: 120, revenue: 4800 },
    personal: { count: 80, revenue: 4000 },
    premium: { count: 94, revenue: 6580 },
  },
  chartData: [
    { month: 'Jan', revenue: 12000 },
    { month: 'Feb', revenue: 13500 },
    { month: 'Mar', revenue: 15400 },
  ],
  recentPayments: [
    { id: 'txn1', student: 'Abu Yahya', plan: 'Standard Plan', amount: 40.00, date: new Date().toLocaleDateString(), status: 'Completed' },
    { id: 'txn2', student: 'Aisha Rahman', plan: 'Premium Plan', amount: 70.00, date: new Date(Date.now() - 3600000).toLocaleDateString(), status: 'Completed' },
  ]
});

export const getAdminReports = () => ({
  activeUsers: 345,
  newSignupsThisMonth: 42,
  completionRates: {
    'Arabic Grammar': 78,
    'Tajweed': 65,
    'Conversational Arabic': 92,
  }
});

export const getAdminSettings = () => ({
  globalConfig: {
    registrationEnabled: true,
    maintenanceMode: false,
    defaultCurrency: 'USD',
  },
  adminProfile: {
    name: 'Super Admin',
    email: 'admin@abu-yahya.com'
  }
});

export const getAdminTickets = () => [
  { ticketId: 'TCK-001', user: 'Abu Yahya', role: 'Student', issue: 'Billing question', status: 'Open' },
  { ticketId: 'TCK-002', user: 'Ustadh Omar', role: 'Tutor', issue: 'Cannot upload grades', status: 'In Progress' },
  { ticketId: 'TCK-003', user: 'Aisha Rahman', role: 'Student', issue: 'Video playback error', status: 'Resolved' },
];
