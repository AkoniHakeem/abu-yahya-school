import React from 'react';
import Link from 'next/link';
import TutorSidebar from '@/components/TutorSidebar';
export default function TutorClassroomPage() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}

      <TutorSidebar activePath="/tutor/classroom" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full px-4 md:px-10 py-8 md:py-12 bg-surface-bright min-h-screen">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
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
                  <button className="p-2 rounded-md hover:bg-surface-container-high text-on-surface-variant transition-colors">
                    <span className="material-symbols-outlined">calendar_view_week</span>
                  </button>
                  <button className="p-2 rounded-md bg-surface-container-high text-primary transition-colors">
                    <span className="material-symbols-outlined icon-filled">view_list</span>
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                {/* Class Card 1 */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant group">
                  <div className="flex items-start gap-4 w-full md:w-auto mb-4 md:mb-0">
                    <div className="w-16 h-16 rounded-lg bg-primary-container/10 flex flex-col items-center justify-center text-primary flex-shrink-0">
                      <span className="font-label-sm text-[14px] font-bold">OCT</span>
                      <span className="font-headline text-[24px] font-semibold">12</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-[12px]">Level 2</span>
                        <span className="text-on-surface-variant text-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">schedule</span> 10:00 AM - 11:30 AM
                        </span>
                      </div>
                      <h4 className="font-body text-[18px] font-bold text-on-surface">Tajweed Fundamentals: Surah Al-Fatiha</h4>
                      <p className="font-body text-[16px] text-on-surface-variant mt-1">12 Students Enrolled</p>
                    </div>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none py-2 px-4 rounded-md border border-primary text-primary font-label-sm text-[14px] hover:bg-primary/5 transition-colors">Details</button>
                    <button className="flex-1 md:flex-none py-2 px-4 rounded-md bg-primary text-on-primary font-label-sm text-[14px] hover:bg-primary/90 transition-colors shadow-sm">Start Class</button>
                  </div>
                </div>
                
                {/* Class Card 2 */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant group">
                  <div className="flex items-start gap-4 w-full md:w-auto mb-4 md:mb-0">
                    <div className="w-16 h-16 rounded-lg bg-surface-variant flex flex-col items-center justify-center text-on-surface-variant flex-shrink-0">
                      <span className="font-label-sm text-[14px] font-bold">OCT</span>
                      <span className="font-headline text-[24px] font-semibold">14</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-[12px]">Level 2</span>
                        <span className="text-on-surface-variant text-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">schedule</span> 02:00 PM - 03:30 PM
                        </span>
                      </div>
                      <h4 className="font-body text-[18px] font-bold text-on-surface">Arabic Grammar: Present Tense Verbs</h4>
                      <p className="font-body text-[16px] text-on-surface-variant mt-1">10 Students Enrolled</p>
                    </div>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none py-2 px-4 rounded-md border border-outline-variant text-on-surface font-label-sm text-[14px] hover:bg-surface-variant/30 transition-colors">Details</button>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 py-3 text-primary font-label-sm text-[14px] hover:bg-surface-container-low rounded-lg transition-colors flex items-center justify-center gap-2">
                View Full Schedule <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </section>
            
            {/* Materials Needs Attention */}
            <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-variant/50">
              <h3 className="font-headline text-[24px] font-semibold text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">assignment_late</span>
                Needs Grading
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-error-container/20 border border-error-container">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 bg-error-container text-on-error-container rounded text-xs font-bold">3 Pending</span>
                    <span className="text-xs text-on-surface-variant">Due: Yesterday</span>
                  </div>
                  <h4 className="font-body text-[16px] font-bold text-on-surface">Vocabulary Quiz 4</h4>
                  <p className="text-sm text-on-surface-variant mb-4">Level 2 Arabic</p>
                  <button className="text-primary font-label-sm text-[14px] hover:underline">Grade Now</button>
                </div>
                <div className="p-4 rounded-lg bg-surface border border-surface-variant">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 bg-surface-variant text-on-surface-variant rounded text-xs font-bold">12 Submitted</span>
                    <span className="text-xs text-on-surface-variant">Due: Today</span>
                  </div>
                  <h4 className="font-body text-[16px] font-bold text-on-surface">Reading Comprehension: Surah Al-Kahf</h4>
                  <p className="text-sm text-on-surface-variant mb-4">Level 2 Arabic</p>
                  <button className="text-primary font-label-sm text-[14px] hover:underline">View Submissions</button>
                </div>
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
                <span className="bg-surface-container-high text-primary px-3 py-1 rounded-full text-sm font-bold">Level 2</span>
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
                
                {/* Student Item */}
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold text-sm">
                      AH
                    </div>
                    <div>
                      <p className="font-label-sm text-[14px] text-on-surface">Ahmed Hassan</p>
                      <p className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary block"></span> 95% Attendance
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">more_vert</span>
                </div>
                
                {/* Student Item */}
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold text-sm">
                      FK
                    </div>
                    <div>
                      <p className="font-label-sm text-[14px] text-on-surface">Fatima Khan</p>
                      <p className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary block"></span> 98% Attendance
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">more_vert</span>
                </div>
                
                {/* Student Item */}
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold text-sm">
                      OM
                    </div>
                    <div>
                      <p className="font-label-sm text-[14px] text-on-surface">Omar Malik</p>
                      <p className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-secondary-container block"></span> 82% Attendance
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">more_vert</span>
                </div>
                
                {/* Student Item */}
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold text-sm">
                      ZA
                    </div>
                    <div>
                      <p className="font-label-sm text-[14px] text-on-surface">Zainab Ali</p>
                      <p className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary block"></span> 90% Attendance
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">more_vert</span>
                </div>
                
                {/* Student Item */}
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-bold text-sm">
                      YR
                    </div>
                    <div>
                      <p className="font-label-sm text-[14px] text-on-surface">Yusuf Rahman</p>
                      <p className="text-xs text-error flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-error block"></span> 65% Attendance
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">more_vert</span>
                </div>
                
              </div>
              
              <button className="w-full mt-4 py-2 border-t border-surface-variant text-on-surface-variant font-label-sm text-[14px] hover:text-primary transition-colors">
                View Complete Roster
              </button>
            </section>
          </div>
          
        </div>
      </main>
    </div>
  );
}
