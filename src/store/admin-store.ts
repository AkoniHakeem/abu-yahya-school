import { create } from 'zustand';
import { fetchAPI } from '@/lib/api-client';

interface AdminState {
  users: any[];
  classes: any[];
  courses: any[];
  enrollments: any[];
  tickets: any[];
  financials: any;
  reports: any;
  settings: any;
  isLoading: boolean;

  // Actions
  fetchUsers: () => Promise<void>;
  fetchClasses: () => Promise<void>;
  fetchCourses: () => Promise<void>;
  fetchEnrollments: () => Promise<void>;
  fetchTickets: () => Promise<void>;
  fetchFinancials: () => Promise<void>;
  fetchReports: () => Promise<void>;
  fetchSettings: () => Promise<void>;
  addUser: (userData: any) => Promise<void>;
  updateUser: (id: string, userData: any) => Promise<void>;
  addClass: (classData: any) => Promise<void>;
  updateClass: (id: string, classData: any) => Promise<void>;
  addCourse: (courseData: any) => Promise<void>;
  updateCourse: (id: string, courseData: any) => Promise<void>;
  deleteCourse: (id: string) => Promise<void>;
  deleteClass: (id: string) => Promise<void>;
  enrollStudent: (enrollmentData: any) => Promise<void>;
  updateEnrollment: (id: string, enrollmentData: any) => Promise<void>;
  deleteEnrollment: (id: string) => Promise<void>;
  resolveTicket: (ticketId: string) => Promise<void>;
}

export const useAdminStore = create<AdminState>((set) => ({
  users: [],
  classes: [],
  courses: [],
  enrollments: [],
  tickets: [],
  financials: null,
  reports: null,
  settings: null,
  isLoading: false,

  fetchUsers: async () => {
    set({ isLoading: true });
    try {
      const users = await fetchAPI('/api/admin/users');
      set({ users, isLoading: false });
    } catch (e) {
      set({ isLoading: false });
    }
  },

  fetchClasses: async () => {
    set({ isLoading: true });
    try {
      const classes = await fetchAPI('/api/admin/classes');
      set({ classes, isLoading: false });
    } catch (e) {
      set({ isLoading: false });
    }
  },

  fetchCourses: async () => {
    set({ isLoading: true });
    try {
      const courses = await fetchAPI('/api/admin/courses');
      set({ courses, isLoading: false });
    } catch (e) {
      set({ isLoading: false });
    }
  },

  fetchEnrollments: async () => {
    set({ isLoading: true });
    try {
      const enrollments = await fetchAPI('/api/admin/enrollments');
      set({ enrollments, isLoading: false });
    } catch (e) {
      set({ isLoading: false });
    }
  },

  fetchTickets: async () => {
    set({ isLoading: true });
    try {
      const tickets = await fetchAPI('/api/admin/support');
      set({ tickets, isLoading: false });
    } catch (e) {
      set({ isLoading: false });
    }
  },

  fetchFinancials: async () => {
    set({ isLoading: true });
    try {
      const financials = await fetchAPI('/api/admin/financials');
      set({ financials, isLoading: false });
    } catch (e) {
      set({ isLoading: false });
    }
  },

  fetchReports: async () => {
    set({ isLoading: true });
    try {
      const reports = await fetchAPI('/api/admin/reports');
      set({ reports, isLoading: false });
    } catch (e) {
      set({ isLoading: false });
    }
  },

  fetchSettings: async () => {
    set({ isLoading: true });
    try {
      const settings = await fetchAPI('/api/admin/settings');
      set({ settings, isLoading: false });
    } catch (e) {
      set({ isLoading: false });
    }
  },

  addUser: async (userData) => {
    try {
      await fetchAPI('/api/admin/users', { method: 'POST', body: JSON.stringify(userData) });
      const users = await fetchAPI('/api/admin/users');
      set({ users });
    } catch (e) {}
  },

  updateUser: async (id, userData) => {
    try {
      await fetchAPI(`/api/admin/users/${id}`, { method: 'PUT', body: JSON.stringify(userData) });
      const users = await fetchAPI('/api/admin/users');
      set({ users });
    } catch (e) {}
  },

  addClass: async (classData) => {
    try {
      await fetchAPI('/api/admin/classes', { method: 'POST', body: JSON.stringify(classData) });
      const classes = await fetchAPI('/api/admin/classes');
      set({ classes });
    } catch (e) {}
  },

  updateClass: async (id, classData) => {
    try {
      await fetchAPI(`/api/admin/classes/${id}`, { method: 'PUT', body: JSON.stringify(classData) });
      const classes = await fetchAPI('/api/admin/classes');
      set({ classes });
    } catch (e) {}
  },

  addCourse: async (courseData) => {
    try {
      await fetchAPI('/api/admin/courses', { method: 'POST', body: JSON.stringify(courseData) });
      const courses = await fetchAPI('/api/admin/courses');
      set({ courses });
    } catch (e) {}
  },

  updateCourse: async (id, courseData) => {
    try {
      await fetchAPI(`/api/admin/courses/${id}`, { method: 'PUT', body: JSON.stringify(courseData) });
      const courses = await fetchAPI('/api/admin/courses');
      set({ courses });
    } catch (e) {}
  },

  deleteCourse: async (id) => {
    try {
      await fetchAPI(`/api/admin/courses/${id}`, { method: 'DELETE' });
      const courses = await fetchAPI('/api/admin/courses');
      set({ courses });
    } catch (e) {}
  },

  deleteClass: async (id) => {
    try {
      await fetchAPI(`/api/admin/classes/${id}`, { method: 'DELETE' });
      const classes = await fetchAPI('/api/admin/classes');
      set({ classes });
    } catch (e) {}
  },

  enrollStudent: async (enrollmentData) => {
    try {
      await fetchAPI('/api/admin/enrollments', { method: 'POST', body: JSON.stringify(enrollmentData) });
      const enrollments = await fetchAPI('/api/admin/enrollments');
      set({ enrollments });
    } catch (e) {}
  },

  updateEnrollment: async (id, enrollmentData) => {
    try {
      await fetchAPI(`/api/admin/enrollments/${id}`, { method: 'PUT', body: JSON.stringify(enrollmentData) });
      const enrollments = await fetchAPI('/api/admin/enrollments');
      set({ enrollments });
    } catch (e) {}
  },

  deleteEnrollment: async (id) => {
    try {
      await fetchAPI(`/api/admin/enrollments/${id}`, { method: 'DELETE' });
      const enrollments = await fetchAPI('/api/admin/enrollments');
      set({ enrollments });
    } catch (e) {}
  },

  resolveTicket: async (ticketId) => {
    try {
      await fetchAPI('/api/admin/support/resolve', { method: 'POST', body: JSON.stringify({ ticketId }) });
      const tickets = await fetchAPI('/api/admin/support');
      set({ tickets });
    } catch (e) {}
  },
}));
