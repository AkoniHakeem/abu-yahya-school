import React from 'react';
import Link from 'next/link';
import TutorSidebar from '@/components/TutorSidebar';
import { fetchAPI } from '@/lib/api-client';

export default async function TutorDashboardPage() {
  const dashboardData = await fetchAPI('/api/tutor/dashboard');
  
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <TutorSidebar activePath="/tutor/dashboard" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full px-4 md:px-10 py-8 md:py-12 bg-surface-bright min-h-screen">
        
        {/* Mobile Nav Header */}
        <div className="lg:hidden flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
           <span className="font-headline text-[24px] font-bold text-primary">Abu-Yahya</span>
           <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQmNn3_wV9f949N304033z2a7u29W47J4n9172V73412V4a984J7a49K7f9185J8a1V1a1a9a84a5K2V9J9a812J14J5K24V74V7574K4V147J15V7K2V5K2J47K9a5V7K24a5a5K24J815V45V7a11V1V74V15K21K91a5K87J7K91"
                alt="Tutor Profile"
              />
            </div>
        </div>

        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Welcome Back, Ustadh</h1>
            <p className="font-body text-[16px] text-on-surface-variant">Here is your schedule and pending tasks for today.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Link href="/tutor/community" className="flex-1 md:flex-none py-3 px-6 bg-primary-container text-on-primary-container rounded-lg font-label-sm text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all shadow-sm">
              <span className="material-symbols-outlined">campaign</span>
              Broadcast Message
            </Link>
          </div>
        </header>

        {/* High-Level Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-container text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">event</span>
            </div>
            <div>
              <p className="text-sm text-on-surface-variant font-medium">Classes Today</p>
              <p className="text-2xl font-bold text-on-surface">{dashboardData.todaysClasses.length}</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-error-container text-error flex items-center justify-center">
              <span className="material-symbols-outlined">assignment_late</span>
            </div>
            <div>
              <p className="text-sm text-on-surface-variant font-medium">Pending Grading</p>
              <p className="text-2xl font-bold text-on-surface">{dashboardData.pendingGradingCount}</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div>
              <p className="text-sm text-on-surface-variant font-medium">Total Students</p>
              <p className="text-2xl font-bold text-on-surface">{dashboardData.studentCount}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Schedule */}
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline text-[20px] font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Today's Schedule
              </h2>
              <Link href="/tutor/scheduling" className="text-sm text-primary font-medium hover:underline">View All</Link>
            </div>
            <div className="flex flex-col gap-4">
              {dashboardData.todaysClasses.length > 0 ? (
                dashboardData.todaysClasses.map((cls: any) => (
                  <div key={cls.id} className="flex justify-between items-center p-4 border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors">
                    <div>
                      <span className="text-xs font-bold text-primary mb-1 block">{cls.time}</span>
                      <h3 className="font-bold text-on-surface">{cls.title}</h3>
                      <p className="text-sm text-on-surface-variant flex items-center gap-1 mt-1">
                        <span className={`w-2 h-2 rounded-full ${cls.type === 'Live Class' ? 'bg-secondary' : 'bg-tertiary'}`}></span>
                        {cls.type} {cls.studentCount ? `(${cls.studentCount} students)` : `with ${cls.studentName}`}
                      </p>
                    </div>
                    <button className="bg-surface-variant text-on-surface-variant hover:bg-primary hover:text-on-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Start
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center p-8 text-on-surface-variant border border-dashed border-outline-variant/50 rounded-lg">
                  No classes scheduled for today.
                </div>
              )}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col h-full">
            <h2 className="font-headline text-[20px] font-bold text-on-surface flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">bolt</span>
              Quick Actions
            </h2>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <Link href="/tutor/assignments/grade" className="bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2 transition-all hover:-translate-y-1">
                <span className="material-symbols-outlined text-[32px] text-primary">grading</span>
                <span className="font-bold text-on-surface">Grade Assignments</span>
              </Link>
              <Link href="/tutor/classroom" className="bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2 transition-all hover:-translate-y-1">
                <span className="material-symbols-outlined text-[32px] text-secondary">co_present</span>
                <span className="font-bold text-on-surface">Manage Classroom</span>
              </Link>
              <Link href="/tutor/students" className="bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2 transition-all hover:-translate-y-1">
                <span className="material-symbols-outlined text-[32px] text-tertiary">groups</span>
                <span className="font-bold text-on-surface">View Students</span>
              </Link>
              <Link href="/tutor/earnings" className="bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2 transition-all hover:-translate-y-1">
                <span className="material-symbols-outlined text-[32px] text-primary-fixed">account_balance_wallet</span>
                <span className="font-bold text-on-surface">Check Earnings</span>
              </Link>
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}
