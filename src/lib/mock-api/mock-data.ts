import { getDB } from './db';
import { studentProfile, messages, recentActivity, billingData } from '../mock-data/student';

// --- STUDENT MOCK DATA ---
export { studentProfile } from '../mock-data/student';

export const getStudentDashboard = () => {
  const db = getDB();
  const upcomingClass = db.classes.find((c: any) => c.date > new Date().toISOString()) || db.classes[0] || null;
  return {
    profile: studentProfile,
    upcomingClass,
    recentActivity,
    progressStats: {
      overall: studentProfile.overallProgress,
      coursesCompleted: 1,
      activeCourses: db.courses.length,
    },
    activePlan: billingData.currentPlan,
  };
};

export const getStudentCourses = () => {
  const db = getDB();
  const isPaid = billingData.currentPlan.status === 'Active';
  return db.courses.map((course: any) => ({
    ...course,
    isLocked: !isPaid,
    recordings: [
      { id: 'rec1', title: 'Lesson 1 Recording', duration: '45 mins', url: '#' },
      { id: 'rec2', title: 'Lesson 2 Recording', duration: '46 mins', url: '#' }
    ]
  }));
};

export const getStudentSchedule = () => {
  const db = getDB();
  const plan = billingData.currentPlan.name;
  return db.classes.map((schedule: any) => {
    let sessionType = schedule.type || 'Standard Class';
    if (plan === 'Personal Plan') sessionType = '1-on-1 Lesson';
    if (plan === 'Premium Plan') sessionType = 'Mentoring / Live Revision';
    return { ...schedule, sessionType };
  });
};

export const getStudentAssignments = () => {
  const db = getDB();
  return db.assignments.filter((a: any) => a.studentId === 'STU-9482' || !a.studentId).map((assignment: any) => ({
    ...assignment,
    type: assignment.title.includes('Monthly') ? 'Monthly Assessment' : 'Standard Assignment',
    attachedFiles: [{ name: 'materials.pdf', size: '2.4 MB', url: '#' }]
  }));
};

export const getStudentMessages = () => messages;

export const getStudentCommunity = () => [
  { id: 'post1', author: 'Sheikh Abdullah', title: 'Welcome!', content: 'Assalamu alaikum.', date: new Date().toISOString() }
];

// --- TUTOR MOCK DATA ---
export const getTutorDashboard = () => {
  const db = getDB();
  return {
    todaysClasses: db.classes.slice(0, 2),
    pendingGradingCount: db.assignments.filter((a: any) => a.status === 'pending').length,
    studentCount: db.users.filter((u: any) => u.role === 'student').length,
  };
};

export const getTutorAssignments = () => getDB().assignments;

export const getTutorStudents = () => getDB().users.filter((u: any) => u.role === 'student');

export const getTutorEarnings = () => ({
  totalBalance: 570.00,
  availablePayout: 450.00,
  nextPayoutDate: new Date(Date.now() + 604800000).toISOString(),
  transactions: [
    { id: 'tx1', date: '2026-07-01', description: 'Standard Plan - July', student: 'Abu Yahya', status: 'Completed', amount: 40.00 },
  ],
});

export const getTutorCommunity = () => getStudentCommunity();
export const getTutorMessages = () => getStudentMessages();
export const getTutorSettings = () => ({
  profileData: { ...studentProfile, name: 'Tutor User', role: 'tutor' },
  preferences: { notifications: true }
});

// --- ADMIN MOCK DATA ---
export const getAdminFinancials = () => getDB().financials;

export const getAdminReports = () => {
  const db = getDB();
  return {
    activeUsers: db.users.length,
    newSignupsThisMonth: 42,
    completionRates: {
      'Arabic Grammar': 78,
      'Tajweed': 65,
      'Conversational Arabic': 92,
    }
  };
};

export const getAdminSettings = () => ({
  globalConfig: { registrationEnabled: true, maintenanceMode: false, defaultCurrency: 'USD' },
  adminProfile: { name: 'Super Admin', email: 'admin@abu-yahya.com' }
});

export const getAdminTickets = () => getDB().tickets;
export const getAdminUsers = () => getDB().users;
export const getAdminClasses = () => getDB().classes;
