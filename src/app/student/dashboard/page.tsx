import React from 'react';
import Link from 'next/link';
import { fetchAPI } from '@/lib/api-client';

export default async function StudentDashboardPage() {
  const data = await fetchAPI('/api/student/dashboard');
  
  const { profile, upcomingClass, recentActivity, progressStats, activePlan } = data;

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Section */}
      <section className="bg-primary-container rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-bl-full opacity-10"></div>
        <div className="z-10">
          <h1 className="font-display text-[32px] md:text-[40px] font-bold text-on-primary-container mb-2">
            Welcome back, {profile?.name}!
          </h1>
          <p className="text-on-primary-container/80 text-[18px]">
            Keep up the great work. You've completed {progressStats?.coursesCompleted} course so far.
          </p>
        </div>
        <div className="z-10 flex flex-col items-center justify-center bg-surface-container-lowest rounded-xl p-4 shadow-sm min-w-[150px]">
          <span className="text-on-surface-variant text-sm font-medium mb-1">Overall Progress</span>
          <div className="text-3xl font-bold text-primary">{progressStats?.overall}%</div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Upcoming Class */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-headline text-[24px] font-bold text-primary">Next Up</h2>
              <Link href="/student/schedule" className="text-primary hover:underline text-sm font-medium">
                View Schedule
              </Link>
            </div>
            
            {upcomingClass ? (
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary-container text-on-secondary-container p-3 rounded-lg flex flex-col items-center justify-center min-w-[60px]">
                    <span className="text-xs font-bold uppercase">{new Date(upcomingClass.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                    <span className="text-xl font-bold">{new Date(upcomingClass.date).getDate()}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-[20px] font-semibold text-on-surface mb-1">{upcomingClass.courseTitle}</h3>
                    <p className="text-on-surface-variant flex items-center gap-1 text-sm mb-2">
                      <span className="material-symbols-outlined text-[16px]">schedule</span> 
                      {new Date(upcomingClass.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} ({upcomingClass.duration})
                    </p>
                    <p className="text-primary flex items-center gap-1 text-sm font-medium">
                      <span className="material-symbols-outlined text-[16px]">person</span> {upcomingClass.tutor}
                    </p>
                  </div>
                </div>
                <Link href={upcomingClass.meetingLink || "#"} className="w-full sm:w-auto bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors text-center whitespace-nowrap shadow-sm">
                  Join Class
                </Link>
              </div>
            ) : (
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient text-center text-on-surface-variant">
                No upcoming classes scheduled.
              </div>
            )}
          </section>

          {/* Recent Activity */}
          <section>
            <h2 className="font-headline text-[24px] font-bold text-primary mb-4">Recent Activity</h2>
            <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 overflow-hidden">
              {recentActivity && recentActivity.length > 0 ? (
                <ul className="divide-y divide-outline-variant/30">
                  {recentActivity.map((activity: any) => (
                    <li key={activity.id} className="p-4 flex gap-4 hover:bg-surface-container-low transition-colors">
                      <div className="mt-1">
                        <span className={`material-symbols-outlined text-white p-2 rounded-full ${
                          activity.type === 'grade' ? 'bg-secondary' : 
                          activity.type === 'message' ? 'bg-tertiary' : 'bg-primary'
                        }`}>
                          {activity.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-on-surface">{activity.title}</h4>
                        <p className="text-on-surface-variant text-sm mb-1">{activity.description}</p>
                        <span className="text-xs text-on-surface-variant/70">{new Date(activity.timestamp).toLocaleString()}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-8 text-center text-on-surface-variant">
                  No recent activity.
                </div>
              )}
            </div>
          </section>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="flex flex-col gap-6">
          
          {/* Subscription Status */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30">
            <h3 className="font-headline text-[18px] font-bold text-primary mb-4">Subscription</h3>
            <div className="mb-4">
              <p className="text-on-surface-variant text-sm">Current Plan</p>
              <p className="font-semibold text-on-surface text-lg">{activePlan?.name || 'No Active Plan'}</p>
            </div>
            {activePlan?.status === 'Active' ? (
              <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                <span className="material-symbols-outlined text-[18px]">check_circle</span> Active
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-error font-medium">
                  <span className="material-symbols-outlined text-[18px]">error</span> Past Due
                </div>
                <Link href="/billing" className="bg-error text-onError px-4 py-2 rounded-lg font-label-sm text-center font-medium hover:bg-error/90 transition-colors">
                  Update Payment
                </Link>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30">
            <h3 className="font-headline text-[18px] font-bold text-primary mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/student/courses" className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-primary">menu_book</span>
                <span className="font-medium">Continue Learning</span>
              </Link>
              <Link href="/student/assignments" className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-primary">assignment</span>
                <span className="font-medium">Submit Assignment</span>
              </Link>
              <Link href="/student/community" className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
                <span className="material-symbols-outlined text-primary">forum</span>
                <span className="font-medium">Community Board</span>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
