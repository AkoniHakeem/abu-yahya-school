import { create } from 'zustand';
import { fetchAPI } from '@/lib/api-client';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  videoUrl: string;
  isLockedByTutor?: boolean;
  lockMessage?: string;
}

export interface Course {
  id: string;
  title: string;
  tutor: string;
  progress: number;
  thumbnail: string;
  nextLesson: string | null;
  totalLessons: number;
  completedLessons: number;
  status: string;
  isLocked?: boolean;
  lessons: Lesson[];
  recordings?: any[];
  enrolledClasses?: any[];
}

interface StudentState {
  dashboardData: any | null;
  settings: any | null;
  courses: Course[];
  
  // Actions
  initialize: (dashboardData: any, courses: Course[]) => void;
  fetchSettings: () => Promise<void>;
  markLessonComplete: (courseId: string, lessonId: string) => void;
  joinClass: (classId: string) => void;
}

export const useStudentStore = create<StudentState>((set) => ({
  dashboardData: null,
  courses: [],
  settings: null,

  initialize: (dashboardData, courses) => set((state) => ({
    dashboardData: dashboardData || state.dashboardData,
    courses: courses || state.courses
  })),

  fetchSettings: async () => {
    try {
      const settings = await fetchAPI('/api/student/settings');
      set({ settings });
    } catch (e) {
      console.error('Failed to fetch student settings', e);
    }
  },

  markLessonComplete: (courseId, lessonId) => set((state) => {
    // 1. Update the lesson status
    const updatedCourses = state.courses.map(course => {
      if (course.id !== courseId) return course;

      let newlyCompleted = false;
      const updatedLessons = course.lessons.map(lesson => {
        if (lesson.id === lessonId && !lesson.isCompleted) {
          newlyCompleted = true;
          return { ...lesson, isCompleted: true };
        }
        return lesson;
      });

      // If nothing actually changed, return the course as is
      if (!newlyCompleted) return course;

      // Recalculate progress
      const completedCount = updatedLessons.filter(l => l.isCompleted).length;
      const totalCount = updatedLessons.length;
      const progress = Math.round((completedCount / totalCount) * 100);
      
      // Determine next lesson
      const nextIncomplete = updatedLessons.find(l => !l.isCompleted);
      const nextLessonTitle = nextIncomplete ? nextIncomplete.title : null;
      const status = progress === 100 ? 'completed' : 'active';

      return {
        ...course,
        lessons: updatedLessons,
        completedLessons: completedCount,
        progress,
        nextLesson: nextLessonTitle,
        status,
      };
    });

    // 2. Update dashboard data (Recent Activity and Overall Progress)
    const activeCourse = updatedCourses.find(c => c.id === courseId);
    const completedLesson = activeCourse?.lessons.find(l => l.id === lessonId);
    
    let updatedDashboardData = state.dashboardData;
    if (activeCourse && completedLesson && state.dashboardData) {
      const newActivity = {
        id: `ACT-${Date.now()}`,
        type: 'course',
        title: 'Lesson Completed',
        description: `You completed '${completedLesson.title}' in ${activeCourse.title}.`,
        timestamp: new Date().toISOString(),
        icon: 'check_circle'
      };

      // Simple overall progress recalculation based on updated courses array
      const totalCourseProgress = updatedCourses.reduce((sum, c) => sum + c.progress, 0);
      const newOverallProgress = Math.round(totalCourseProgress / updatedCourses.length);

      updatedDashboardData = {
        ...state.dashboardData,
        recentActivity: [newActivity, ...state.dashboardData.recentActivity].slice(0, 10), // keep top 10
        progressStats: {
          ...state.dashboardData.progressStats,
          overall: newOverallProgress,
        }
      };
    }

    return {
      courses: updatedCourses,
      dashboardData: updatedDashboardData
    };
  }),

  joinClass: (classId) => {
    // In a real app, this might dispatch an analytics event or open a window
    console.log(`Joining class ${classId}`);
  }
}));
