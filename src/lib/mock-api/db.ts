import {
  studentProfile,
  enrolledCourses,
  upcomingSchedule,
  assignments,
  recentActivity,
  messages,
  billingData,
} from '../mock-data/student';

// Initial Seed Data
const initialData = {
  users: [
    { ...studentProfile, role: 'student', plan: 'Standard Plan', progress: 68, attendance: 92 },
    { id: 'STU-1122', name: 'Aisha Rahman', email: 'aisha@student.edu', role: 'student', plan: 'Premium Plan', progress: 92, attendance: 100, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnIyvgPlXXqieP8TQweofZbhXXQ1KismfH5mm_lOxRVRe79UDDLlo-UQCpz31lRrjA85UpoVniC89JXbi2OajCqVm_NOYIv0w1W19v8XkpPn1safUZhByeSIygDQxJTC4xvpE9TxZB3CeYZBySWbWsN5ay_a-aY_vMtdXVM0aIjyqNTiKZIOsddnrKeB3s-MQZe68eLRhOvGIRyqSJYDhyV3X2C4-yFA-h3lut8JD7hpqzZZwrxxPh' },
    { id: 'TUT-001', name: 'Sheikh Abdullah', email: 'abdullah@tutor.edu', role: 'tutor', avatar: '' },
    { id: 'TUT-002', name: 'Ustadh Omar', email: 'omar@tutor.edu', role: 'tutor', avatar: '' },
    { id: 'TUT-003', name: 'Ustadha Fatima', email: 'fatima@tutor.edu', role: 'tutor', avatar: '' },
    { id: 'ADM-001', name: 'Super Admin', email: 'admin@abu-yahya.com', role: 'admin', avatar: '' }
  ],
  courses: enrolledCourses,
  classes: [
    ...upcomingSchedule.map(s => ({ ...s, type: 'Live Class' })),
    { id: 'cls1', courseTitle: 'Arabic Grammar (Nahw)', time: '10:00 AM', date: new Date().toISOString(), type: 'Live Class', tutor: 'Ustadh Omar', studentCount: 15 },
    { id: 'cls2', courseTitle: '1-on-1 Tajweed', time: '2:00 PM', date: new Date().toISOString(), type: '1-on-1 Lesson', tutor: 'Sheikh Abdullah', studentName: 'Abu Yahya' },
  ],
  assignments: [
    ...assignments,
    {
      id: 'assign-1',
      studentId: 'STU-9482',
      studentName: 'Ahmed Al-Farsi',
      courseTitle: 'Tafseer Al-Jalalayn',
      title: 'Surah Al-Mulk Analysis',
      submittedAt: 'Oct 24, 2024 - 10:30 AM',
      previousGrade: 92,
      avgPerformance: 'Excellent',
      status: 'pending',
      documentUrl: 'assignment_submission_final.pdf'
    }
  ],
  tickets: [
    { ticketId: 'TCK-001', user: 'Abu Yahya', role: 'Student', issue: 'Billing question', status: 'Open' },
    { ticketId: 'TCK-002', user: 'Ustadh Omar', role: 'Tutor', issue: 'Cannot upload grades', status: 'In Progress' },
    { ticketId: 'TCK-003', user: 'Aisha Rahman', role: 'Student', issue: 'Video playback error', status: 'Resolved' },
  ],
  financials: {
    totalRevenue: 15400.00,
    mrr: 15400.00,
    activeSubscriptions: 294,
    pendingPayouts: 3200.00,
  }
};

const DB_KEY = 'abu_yahya_mock_db';

// Helper to check if we are in browser
const isBrowser = typeof window !== 'undefined';

export const getDB = () => {
  if (!isBrowser) return initialData;
  
  const stored = localStorage.getItem(DB_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse mock db from localStorage', e);
      return initialData;
    }
  } else {
    localStorage.setItem(DB_KEY, JSON.stringify(initialData));
    return initialData;
  }
};

export const saveDB = (data: any) => {
  if (!isBrowser) return;
  localStorage.setItem(DB_KEY, JSON.stringify(data));
};

export const resetDB = () => {
  if (!isBrowser) return;
  localStorage.setItem(DB_KEY, JSON.stringify(initialData));
};
