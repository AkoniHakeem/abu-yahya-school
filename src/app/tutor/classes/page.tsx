"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import TutorSidebar from '@/components/TutorSidebar';
import { useTutorStore } from '@/store/tutor-store';
import { fetchAPI } from '@/lib/api-client';

export default function TutorClassroomPage() {
  const { dashboardStats, upcomingClasses, pendingAssignments, students, initializeStore } = useTutorStore();
  const [loading, setLoading] = useState(dashboardStats.todaysClasses.length === 0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchPromises = [];
        if (dashboardStats.todaysClasses.length === 0) {
          fetchPromises.push(fetchAPI('/api/tutor/dashboard').then(data => ({ type: 'dashboard', data })));
        }
        if (pendingAssignments.length === 0) {
          fetchPromises.push(fetchAPI('/api/tutor/assignments').then(data => ({ type: 'assignments', data })));
        }
        if (students.length === 0) {
          fetchPromises.push(fetchAPI('/api/tutor/students').then(data => ({ type: 'students', data })));
        }

        const results = await Promise.all(fetchPromises);
        let updates: any = {};
        
        results.forEach(res => {
          if (res.type === 'dashboard') {
            updates.dashboardStats = res.data;
            updates.upcomingClasses = res.data.todaysClasses;
          }
          if (res.type === 'assignments') {
            updates.pendingAssignments = res.data;
          }
          if (res.type === 'students') {
            updates.students = res.data;
          }
        });

        if (Object.keys(updates).length > 0) {
          initializeStore(updates);
        }
      } catch (error) {
        console.error('Failed to load classroom data', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [dashboardStats.todaysClasses.length, pendingAssignments.length, students.length, initializeStore]);

  const classesToList = upcomingClasses.length > 0 ? upcomingClasses : dashboardStats.todaysClasses;

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <TutorSidebar activePath="/tutor/classes" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full px-4 md:px-10 py-8 md:py-12 bg-surface-bright min-h-screen">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h2 className="font-headline text-[24px] md:text-[32px] font-semibold text-on-surface mb-2">Classroom Management</h2>
            <p className="font-body text-[16px] text-on-surface-variant">Manage your upcoming classes and student progress.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none py-3 px-6 bg-surface-container-high text-primary rounded-lg font-label-sm text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors shadow-sm">
              <span className="material-symbols-outlined">campaign</span>
              Send Announcement
            </button>
          </div>
        </header>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Left Column: Upcoming Classes & Quick Actions */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            
            {/* Upcoming Classes Section */}
            <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-variant/50">
              <div className="flex justify-between items-center mb-6 border-b border-surface-variant pb-4">
                <h3 className="font-headline text-[24px] font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">event</span>
                  My Upcoming Classes
                </h3>
                <div className="flex gap-2">
                  <Link href="/tutor/scheduling" className="p-2 rounded-md hover:bg-surface-container-high text-primary transition-colors flex items-center gap-2 text-sm font-bold">
                    <span className="material-symbols-outlined">add</span> Schedule
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                {loading ? (
                  <div className="animate-pulse text-on-surface-variant p-4">Loading classes...</div>
                ) : classesToList.length > 0 ? (
                  classesToList.map((cls, index) => (
                    <div key={cls.id || index} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant group">
                      <div className="flex items-start gap-4 w-full md:w-auto mb-4 md:mb-0">
                        <div className={`w-16 h-16 rounded-lg ${index === 0 ? 'bg-primary-container/10 text-primary' : 'bg-surface-variant text-on-surface-variant'} flex flex-col items-center justify-center flex-shrink-0`}>
                          <span className="material-symbols-outlined">{cls.type === 'Live Class' ? 'groups' : 'person'}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-[12px]">{cls.type}</span>
                            <span className="text-on-surface-variant text-sm flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">schedule</span> {cls.date ? `${cls.date} ` : ''}{cls.time}
                            </span>
                          </div>
                          <h4 className="font-body text-[18px] font-bold text-on-surface">{cls.title}</h4>
                          <p className="font-body text-[16px] text-on-surface-variant mt-1">
                            {cls.type === 'Live Class' ? `${cls.studentCount} Students Enrolled` : `With ${cls.studentName}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none py-2 px-4 rounded-md border border-outline-variant text-on-surface font-label-sm text-[14px] hover:bg-surface-variant/30 transition-colors">Details</button>
                        {index === 0 && (
                          cls.classLink ? (
                            <a href={cls.classLink} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none py-2 px-4 rounded-md bg-primary text-on-primary font-label-sm text-[14px] hover:bg-primary/90 transition-colors shadow-sm text-center">Start Class</a>
                          ) : (
                            <button onClick={() => alert('No video link available for this class.')} className="flex-1 md:flex-none py-2 px-4 rounded-md bg-primary text-on-primary font-label-sm text-[14px] hover:bg-primary/90 transition-colors shadow-sm">Start Class</button>
                          )
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-on-surface-variant border border-dashed border-outline-variant/50 rounded-lg">
                    No upcoming classes scheduled.
                  </div>
                )}
              </div>
              
              <Link href="/tutor/scheduling" className="w-full mt-6 py-3 text-primary font-label-sm text-[14px] hover:bg-surface-container-low rounded-lg transition-colors flex items-center justify-center gap-2">
                View Full Schedule <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </section>
            
            {/* Materials Needs Attention */}
            <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-variant/50">
              <h3 className="font-headline text-[24px] font-semibold text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">assignment_late</span>
                Needs Grading
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {loading ? (
                   <div className="animate-pulse text-on-surface-variant col-span-2">Loading assignments...</div>
                ) : pendingAssignments.length > 0 ? (
                  <div className="p-4 rounded-lg bg-error-container/20 border border-error-container md:col-span-2 flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-error-container text-on-error-container rounded text-xs font-bold">{pendingAssignments.length} Pending</span>
                      </div>
                      <h4 className="font-body text-[16px] font-bold text-on-surface">You have assignments waiting for your review.</h4>
                      <p className="text-sm text-on-surface-variant">Timely feedback helps students improve faster.</p>
                    </div>
                    <Link href="/tutor/assignments" className="px-6 py-2 bg-primary text-on-primary rounded-lg font-bold text-sm shadow-sm hover:bg-primary/90 transition-colors">
                      Start Grading
                    </Link>
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-surface border border-surface-variant md:col-span-2 flex items-center gap-4 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-[32px]">task_alt</span>
                    <div>
                      <h4 className="font-bold text-on-surface">All Caught Up!</h4>
                      <p className="text-sm">There are no pending assignments.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
            
          </div>
          
          {/* Right Column: My Students Roster */}
          <div className="xl:col-span-1">
            <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-variant/50 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline text-[24px] font-semibold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">groups</span>
                  My Students
                </h3>
              </div>
              
              {/* Search Box */}
              <div className="relative mb-6">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                <input 
                  className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" 
                  placeholder="Search students..." 
                  type="text" 
                />
              </div>
              
              {/* Roster List */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                {loading ? (
                  <div className="animate-pulse text-on-surface-variant">Loading students...</div>
                ) : students.length > 0 ? (
                  students.map(student => (
                    <div key={student.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-bold text-sm">
                          {student.name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-label-sm text-[14px] text-on-surface">{student.name}</p>
                          <p className="text-xs text-on-surface-variant flex items-center gap-1">
                            <span className={`w-2 h-2 rounded-full block ${student.attendance >= 90 ? 'bg-primary' : student.attendance >= 75 ? 'bg-secondary-container' : 'bg-error'}`}></span> {student.attendance}% Attendance
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">more_vert</span>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-on-surface-variant p-4">No students found.</div>
                )}
              </div>
              
              <Link href="/tutor/students" className="w-full mt-4 py-2 border-t border-surface-variant text-center text-on-surface-variant font-label-sm text-[14px] hover:text-primary transition-colors block">
                View Complete Roster
              </Link>
            </section>
          </div>
          
        </div>
      </main>
    </div>
  );
}
