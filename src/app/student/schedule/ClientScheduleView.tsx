"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getValidTimezone, toLocal } from '@/lib/date-utils';

export default function ClientScheduleView({ schedule, profileTimezone }: { schedule: any[], profileTimezone?: string }) {
  const [groupedSchedule, setGroupedSchedule] = useState<any>({});
  const [timezoneName, setTimezoneName] = useState('Loading...');

  useEffect(() => {
    // Determine timezone to use
    const tz = getValidTimezone(profileTimezone);
    setTimezoneName(tz);

    // Convert all schedules to local time before grouping
    const localSchedule = schedule.map(session => {
      if (!session.date || !session.time) return session;
      const local = toLocal(session.date, session.time, tz);
      return { ...session, date: local.date, time: local.time };
    });

    // Group by local date string
    const grouped = localSchedule.reduce((acc: any, curr: any) => {
      // Create a date object in local time for formatting the header
      // Since curr.date is now YYYY-MM-DD in local time, we can parse it directly
      // Append T00:00:00 to avoid timezone shifting when formatting the date string
      const dateObj = new Date(`${curr.date}T00:00:00`);
      const dateStr = dateObj.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      });
      if (!acc[dateStr]) acc[dateStr] = [];
      acc[dateStr].push(curr);
      return acc;
    }, {});
    
    setGroupedSchedule(grouped);
  }, [schedule]);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">My Schedule</h1>
          <p className="text-on-surface-variant text-[18px]">Your upcoming live classes and mentoring sessions.</p>
        </div>
        <div className="bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/30 text-sm font-medium text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">public</span>
          Timezone: {timezoneName}
        </div>
      </header>

      <div className="flex flex-col gap-8">
        {Object.keys(groupedSchedule).length > 0 ? (
          Object.keys(groupedSchedule).map((dateStr) => (
            <div key={dateStr} className="flex flex-col gap-4">
              <h2 className="font-headline text-[20px] font-bold text-on-surface border-b border-outline-variant/30 pb-2">
                {dateStr}
              </h2>
              <div className="flex flex-col gap-4">
                {groupedSchedule[dateStr].map((session: any) => (
                  <div key={session.id} className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-primary/30 transition-colors">
                    
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex flex-col items-center justify-center min-w-[80px] border-r border-outline-variant/30 pr-4">
                        <span className="font-headline text-[24px] font-bold text-primary">
                          {session.time}
                        </span>
                        <span className="text-xs text-on-surface-variant uppercase tracking-wider">{session.duration}</span>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${
                            session.sessionType.includes('Mentoring') || session.sessionType.includes('1-on-1') 
                              ? 'bg-tertiary-container text-on-tertiary-container' 
                              : 'bg-secondary-container text-on-secondary-container'
                          }`}>
                            {session.sessionType}
                          </span>
                        </div>
                        <h3 className="font-headline text-[20px] font-bold text-on-surface mb-1">{session.title}</h3>
                        <p className="text-primary font-medium mb-1">{session.courseTitle}</p>
                        <p className="text-on-surface-variant flex items-center gap-2 text-sm">
                          <span className="material-symbols-outlined text-[16px]">person</span> {session.tutor}
                          <span className="sm:hidden material-symbols-outlined text-[16px] ml-2">schedule</span>
                          <span className="sm:hidden">{session.time}</span>
                        </p>
                      </div>
                    </div>

                    <Link href={session.meetingLink || "#"} className="w-full md:w-auto bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label-sm font-medium hover:bg-primary hover:text-on-primary transition-all text-center whitespace-nowrap shadow-sm group-hover:shadow-md">
                      Join Live Session
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-surface-container-lowest rounded-xl p-12 shadow-ambient text-center border border-outline-variant/30 flex flex-col items-center justify-center text-on-surface-variant">
            <span className="material-symbols-outlined text-[48px] mb-4 opacity-50">event_busy</span>
            <p className="text-lg">You have no upcoming sessions scheduled.</p>
          </div>
        )}
      </div>
    </div>
  );
}
