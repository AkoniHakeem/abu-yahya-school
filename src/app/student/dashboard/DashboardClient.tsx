'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useStudentStore } from '@/store/student-store';
import { getValidTimezone, toLocal } from '@/lib/date-utils';

interface DashboardClientProps {
  initialData: any;
}

export default function DashboardClient({ initialData }: DashboardClientProps) {
  const initialize = useStudentStore(state => state.initialize);
  const dashboardData = useStudentStore(state => state.dashboardData);

  useEffect(() => {
    // Initialize the store with server data, but only update if we don't already have it
    // or if we want to refresh on every mount. For this mock, we refresh to get latest.
    if (initialData && !dashboardData) {
      initialize(initialData, null as any);
    }
  }, [initialData, initialize, dashboardData]);

  // Use store data if available, otherwise fallback to initialData for first render
  const data = dashboardData || initialData;
  const { profile, recentActivity, progressStats, activePlan } = data;
  
  const tz = getValidTimezone(profile?.timezone);
  const upcomingClass = data.upcomingClass;
  const localUpcomingClass = upcomingClass && upcomingClass.date && upcomingClass.time 
    ? { ...upcomingClass, ...toLocal(upcomingClass.date, upcomingClass.time, tz) } 
    : upcomingClass;

  let monthStr = '', dayStr = '', timeStr = '';
  if (localUpcomingClass?.date) {
    const [year, month, day] = localUpcomingClass.date.split('-');
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    monthStr = dateObj.toLocaleDateString('en-US', { month: 'short' });
    dayStr = dateObj.toLocaleDateString('en-US', { day: 'numeric' });
    
    // Format time to 12h if it's in 24h format
    if (localUpcomingClass.time) {
      const [h, m] = localUpcomingClass.time.split(':');
      let hour = parseInt(h);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12 || 12;
      timeStr = `${hour.toString().padStart(2, '0')}:${m} ${ampm}`;
    }
  }

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
              <div className="flex items-center gap-3">
                <h2 className="font-headline text-[24px] font-bold text-primary">Next Up</h2>
                <span className="text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-md border border-outline-variant/30">
                  {getValidTimezone(profile?.timezone)}
                </span>
              </div>
              <Link href="/student/schedule" className="text-primary hover:underline text-sm font-medium">
                View Schedule
              </Link>
            </div>
            
            {localUpcomingClass ? (
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary-container text-on-secondary-container p-3 rounded-lg flex flex-col items-center justify-center min-w-[60px]">
                    <span className="text-xs font-bold uppercase">{monthStr}</span>
                    <span className="text-xl font-bold">{dayStr}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-[20px] font-semibold text-on-surface mb-1">{localUpcomingClass.title}</h3>
                    <p className="text-primary font-medium mb-1">{localUpcomingClass.courseTitle}</p>
                    <p className="text-on-surface-variant flex items-center gap-1 text-sm mb-2">
                      <span className="material-symbols-outlined text-[16px]">schedule</span> 
                      {timeStr} ({localUpcomingClass.duration})
                    </p>
                    <p className="text-primary flex items-center gap-1 text-sm font-medium">
                      <span className="material-symbols-outlined text-[16px]">person</span> {localUpcomingClass.tutor}
                    </p>
                  </div>
                </div>
                <Link href={localUpcomingClass.meetingLink || "#"} className="w-full sm:w-auto bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors text-center whitespace-nowrap shadow-sm">
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
            {activePlan ? (
              activePlan.status === 'Active' ? (
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
              )
            ) : (
              <div className="text-sm text-on-surface-variant italic mt-2">
                You are not currently subscribed to any plan.
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
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
