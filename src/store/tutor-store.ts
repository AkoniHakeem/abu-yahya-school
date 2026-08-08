import { create } from 'zustand';
import { fetchAPI } from '@/lib/api-client';

export interface TutorClass {
  id: string;
  title: string;
  time: string;
  date?: string;
  type: string;
  studentCount?: number;
  studentName?: string;
  classLink?: string;
}

export interface Assignment {
  id: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  course: string;
  title: string;
  submittedAt: string;
  previousGrade?: number;
  avgPerformance?: string;
  documentUrl: string;
}

interface TutorState {
  dashboardStats: {
    todaysClasses: TutorClass[];
    pendingGradingCount: number;
    studentCount: number;
  };
  upcomingClasses: TutorClass[];
  allClasses: TutorClass[];
  assignedClasses: any[];
  students: any[];
  pendingAssignments: Assignment[];
  settings: any | null;

  // Actions
  initializeStore: (data: Partial<TutorState>) => void;
  fetchSettings: () => Promise<void>;
  fetchAllClasses: () => Promise<void>;
  fetchAssignedClasses: () => Promise<void>;
  createSchedule: (data: any) => Promise<void>;
  updateSchedule: (scheduleId: string, data: any) => Promise<void>;
  deleteSchedule: (scheduleId: string) => Promise<void>;
  scheduleClass: (newClass: TutorClass) => void;
  submitGrade: (assignmentId: string, score: number) => void;
}

export const useTutorStore = create<TutorState>((set, get) => ({
  dashboardStats: {
    todaysClasses: [],
    pendingGradingCount: 0,
    studentCount: 0,
  },
  upcomingClasses: [],
  allClasses: [],
  assignedClasses: [],
  students: [],
  pendingAssignments: [],
  settings: null,

  initializeStore: (data) => set((state) => ({ ...state, ...data })),

  fetchSettings: async () => {
    try {
      const settings = await fetchAPI('/api/tutor/settings');
      set({ settings });
    } catch (e) {
      console.error('Failed to fetch tutor settings', e);
    }
  },

  fetchAllClasses: async () => {
    try {
      const classes = await fetchAPI('/api/tutor/classes');
      set({ allClasses: classes });
    } catch (e) {
      console.error('Failed to fetch all classes', e);
    }
  },

  fetchAssignedClasses: async () => {
    try {
      const assigned = await fetchAPI('/api/tutor/assigned-classes');
      set({ assignedClasses: assigned });
    } catch (e) {
      console.error('Failed to fetch assigned classes', e);
    }
  },

  createSchedule: async (data) => {
    try {
      await fetchAPI('/api/tutor/classes', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      // Refresh both assigned classes (which now include schedules) and dashboard
      await get().fetchAssignedClasses();
      await get().fetchAllClasses();
      const dashboardData = await fetchAPI('/api/tutor/dashboard');
      set({ dashboardStats: dashboardData, upcomingClasses: dashboardData.todaysClasses });
    } catch (e) {
      console.error('Failed to create schedule', e);
    }
  },

  updateSchedule: async (scheduleId, data) => {
    try {
      await fetchAPI(`/api/tutor/schedules/${scheduleId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
      await get().fetchAssignedClasses();
      await get().fetchAllClasses();
    } catch (e) {
      console.error('Failed to update schedule', e);
    }
  },

  deleteSchedule: async (scheduleId) => {
    try {
      await fetchAPI(`/api/tutor/schedules/${scheduleId}`, {
        method: 'DELETE',
      });
      await get().fetchAssignedClasses();
      await get().fetchAllClasses();
    } catch (e) {
      console.error('Failed to delete schedule', e);
    }
  },

  scheduleClass: (newClass) => set((state) => {
    const updatedTodaysClasses = [...state.dashboardStats.todaysClasses, newClass];
    const updatedUpcomingClasses = [...state.upcomingClasses, newClass];
    
    return {
      upcomingClasses: updatedUpcomingClasses,
      dashboardStats: {
        ...state.dashboardStats,
        todaysClasses: updatedTodaysClasses
      }
    };
  }),

  submitGrade: (assignmentId, score) => set((state) => {
    const updatedPending = state.pendingAssignments.filter(a => a.id !== assignmentId);
    
    return {
      pendingAssignments: updatedPending,
      dashboardStats: {
        ...state.dashboardStats,
        pendingGradingCount: Math.max(0, state.dashboardStats.pendingGradingCount - 1)
      }
    };
  }),
}));
