'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useStudentStore, Course } from '@/store/student-store';

interface CoursesListClientProps {
  initialCourses: Course[];
}

export default function CoursesListClient({ initialCourses }: CoursesListClientProps) {
  const initialize = useStudentStore(state => state.initialize);
  const storeCourses = useStudentStore(state => state.courses);

  useEffect(() => {
    // Sync the store with fresh SSR data on mount/update
    if (initialCourses) {
      initialize(null as any, initialCourses);
    }
  }, [initialCourses, initialize]);

  // Use the fresh initial data provided by SSR as the source of truth
  const courses = initialCourses;

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">My Courses</h1>
        <p className="text-on-surface-variant text-[18px]">Access your enrolled courses, materials, and recordings.</p>
      </header>

      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course: Course) => (
            <div key={course.id} className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 flex flex-col overflow-hidden relative">
              
              {/* Locked Overlay */}
              {course.isLocked && (
                <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center">
                  <span className="material-symbols-outlined text-[48px] text-error mb-4">lock</span>
                  <h3 className="font-headline text-[20px] font-bold text-on-surface mb-2">Access Locked</h3>
                  <p className="text-on-surface-variant text-sm mb-6">Your subscription is past due. Update your payment method to unlock course materials and recordings.</p>
                  <Link href="/billing" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                    Update Payment
                  </Link>
                </div>
              )}

              <div className="p-6 border-b border-outline-variant/30 flex-1">
                <div className="w-12 h-12 bg-primary-container text-primary-fixed rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">{course.thumbnail}</span>
                </div>
                <h2 className="font-headline text-[20px] font-bold text-on-surface mb-1">{course.title}</h2>
                <p className="text-primary text-sm font-medium mb-4">{course.tutor}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-on-surface-variant mt-2 text-right">
                    {course.completedLessons} / {course.totalLessons || 0} lessons completed
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-4 border-t border-outline-variant/30">
                <h4 className="font-label-sm text-[14px] text-on-surface font-semibold mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">video_library</span>
                  Recent Recordings
                </h4>
                <ul className="flex flex-col gap-2 mb-4">
                  {course.recordings && course.recordings.length > 0 ? (
                    course.recordings.map((rec: any) => (
                      <li key={rec.id}>
                        <Link href={`/student/courses/${course.id}`} className="flex justify-between items-center p-2 rounded hover:bg-surface-container-low transition-colors text-sm text-on-surface-variant group">
                          <span className="group-hover:text-primary transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px]">
                              {rec.type === 'pdf' ? 'picture_as_pdf' : rec.type === 'audio' ? 'audio_file' : 'play_circle'}
                            </span>
                            {rec.title}
                          </span>
                          <span className="text-xs">{rec.duration || 'N/A'}</span>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="text-xs text-on-surface-variant italic p-2">No recordings available yet.</li>
                  )}
                </ul>

                <h4 className="font-label-sm text-[14px] text-on-surface font-semibold mb-3 flex items-center gap-2 border-t border-outline-variant/20 pt-4">
                  <span className="material-symbols-outlined text-[18px] text-primary">group</span>
                  My Classes
                </h4>
                <ul className="flex flex-col gap-2">
                  {course.enrolledClasses && course.enrolledClasses.length > 0 ? (
                    course.enrolledClasses.map((cls: any) => (
                      <li key={cls.id} className="flex justify-between items-center p-2 rounded bg-surface-container-low text-sm text-on-surface-variant">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface">{cls.title}</span>
                          <span className="text-xs text-on-surface-variant">Tutor: {cls.tutor}</span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{cls.type}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-xs text-on-surface-variant italic p-2">You are not assigned to any classes for this course.</li>
                  )}
                </ul>
              </div>
              
              <div className="p-4 bg-surface-container-low flex justify-between items-center">
                 <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${
                   course.status === 'completed' ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-secondary-container text-on-secondary-container'
                 }`}>
                   {course.status}
                 </span>
                 <Link 
                    href={`/student/courses/${course.id}`} 
                    className={`text-primary text-sm font-medium hover:underline ${course.isLocked ? 'pointer-events-none opacity-50' : ''}`}
                 >
                   Go to Course
                 </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 p-12 text-center flex flex-col items-center justify-center">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">school</span>
          <h3 className="font-headline text-[24px] font-bold text-on-surface mb-2">No Enrolled Courses</h3>
          <p className="text-on-surface-variant mb-6">You are not enrolled in any courses yet. Once you enroll, your courses will appear here.</p>
        </div>
      )}
    </div>
  );
}
