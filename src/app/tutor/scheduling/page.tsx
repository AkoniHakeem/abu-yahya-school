"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TutorSidebar from '@/components/TutorSidebar';
import TutorMobileNav from '@/components/TutorMobileNav';
import { useTutorStore, TutorClass } from '@/store/tutor-store';
import { fetchAPI } from '@/lib/api-client';
import { toUTC, toLocal, formatTo12Hour } from '@/lib/date-utils';

export default function TutorSchedulingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { dashboardStats, upcomingClasses, initializeStore, scheduleClass, allClasses, fetchAllClasses, assignedClasses, fetchAssignedClasses, settings, fetchSettings } = useTutorStore();
  const [loading, setLoading] = useState(dashboardStats.todaysClasses.length === 0);

  // Calendar State
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Form State
  const [classId, setClassId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [classLink, setClassLink] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        if (dashboardStats.todaysClasses.length === 0) {
          const data = await fetchAPI('/api/tutor/dashboard');
          initializeStore({ dashboardStats: data, upcomingClasses: data.todaysClasses });
        }
        if (allClasses.length === 0) {
          fetchAllClasses();
        }
        if (assignedClasses.length === 0) {
          fetchAssignedClasses();
        }
        if (!settings) {
          fetchSettings();
        }
      } catch (error) {
        console.error('Failed to load classes', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [dashboardStats.todaysClasses.length, initializeStore, allClasses.length, fetchAllClasses, assignedClasses.length, fetchAssignedClasses, settings, fetchSettings]);

  // Calendar Logic
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => {
    let day = new Date(year, month, 1).getDay();
    // Adjust so Monday is 0 and Sunday is 6
    return day === 0 ? 6 : day - 1;
  };

  const currentYear = currentMonth.getFullYear();
  const currentMonthIndex = currentMonth.getMonth();
  
  const daysInMonth = getDaysInMonth(currentYear, currentMonthIndex);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonthIndex);
  
  const handlePrevMonth = () => setCurrentMonth(new Date(currentYear, currentMonthIndex - 1, 1));
  const handleNextMonth = () => setCurrentMonth(new Date(currentYear, currentMonthIndex + 1, 1));

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Helper to format date string to matching format (YYYY-MM-DD)
  const formatDateString = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!classId || !date || !time) return;
    
    setIsSubmitting(true);
    
    const selectedClass = assignedClasses.find(c => c.id === classId);
    
    const userTimezone = settings?.profileData?.timezone;
    const utcSchedule = toUTC(date, time, userTimezone);

    const newClass: TutorClass = {
      id: `cls-${Date.now()}`,
      title: selectedClass ? selectedClass.title : '',
      time: utcSchedule.time,
      date: utcSchedule.date,
      type: selectedClass ? selectedClass.type : 'Live Class',
      studentCount: 0,
      classLink
    };

    try {
      await fetchAPI('/api/tutor/classes', {
        method: 'POST',
        body: JSON.stringify({ ...newClass, classId })
      });
      
      // Update global states to sync latest schedule
      const dashboardData = await fetchAPI('/api/tutor/dashboard');
      initializeStore({ dashboardStats: dashboardData, upcomingClasses: dashboardData.todaysClasses });
      fetchAllClasses();

      setIsModalOpen(false);
      // Reset form
      setClassId('');
      setDate('');
      setTime('');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sessionsToList = upcomingClasses.length > 0 ? upcomingClasses : dashboardStats.todaysClasses;
  const userTimezone = settings?.profileData?.timezone;

  // Convert all classes to local time for calendar display
  const localAllClasses = allClasses.map(c => {
    if (!c.date || !c.time) return c;
    const local = toLocal(c.date, c.time, userTimezone);
    return { ...c, date: local.date, time: local.time };
  });

  const localSessionsToList = sessionsToList.map(session => {
    if (!session.date || !session.time) return session;
    const local = toLocal(session.date, session.time, userTimezone);
    return { ...session, date: local.date, time: local.time };
  });

  return (
    <div className="bg-background text-on-background antialiased flex h-screen overflow-hidden">
      {/* SideNavBar */}
      <TutorSidebar activePath="/tutor/scheduling" />

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col h-full overflow-y-auto w-full ml-16 lg:ml-64">
        
        {/* TopNavBar (Mobile only) */}
        <TutorMobileNav />
        
        <div className="p-4 lg:p-10 mt-16 lg:mt-0 flex-grow max-w-[1280px] mx-auto w-full">
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <h2 className="font-headline text-[32px] font-semibold text-on-surface mb-2">Live Class Schedule</h2>
              <p className="font-body text-[16px] text-on-surface-variant">Manage your upcoming Arabic and Quran sessions.</p>
            </div>
            <button 
              className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm text-[14px] font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center gap-2 shadow-ambient"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="material-symbols-outlined">add</span>
              Schedule New Session
            </button>
          </div>
          
          {/* Bento Grid Layout for Dashboard Focus */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full pb-20">
            
            {/* Main Calendar View (Takes up 2 cols on XL) */}
            <div className="xl:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-surface-variant flex flex-col h-[600px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline text-[18px] font-semibold text-on-surface">{monthNames[currentMonthIndex]} {currentYear}</h3>
                <div className="flex gap-2">
                  <button onClick={handlePrevMonth} className="p-2 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors border border-outline-variant">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button onClick={handleNextMonth} className="p-2 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors border border-outline-variant">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
              
              {/* Simplified Weekly Calendar Structure */}
              <div className="flex-grow flex flex-col overflow-hidden">
                <div className="grid grid-cols-7 gap-2 mb-2 text-center border-b border-surface-variant pb-2">
                  <div className="font-label-sm text-[14px] text-on-surface-variant hidden sm:block">Mon</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant hidden sm:block">Tue</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant hidden sm:block">Wed</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant hidden sm:block">Thu</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant hidden sm:block">Fri</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant hidden sm:block">Sat</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant hidden sm:block">Sun</div>
                  {/* Shorter names for mobile */}
                  <div className="font-label-sm text-[12px] text-on-surface-variant sm:hidden">M</div>
                  <div className="font-label-sm text-[12px] text-on-surface-variant sm:hidden">T</div>
                  <div className="font-label-sm text-[12px] text-on-surface-variant sm:hidden">W</div>
                  <div className="font-label-sm text-[12px] text-on-surface-variant sm:hidden">T</div>
                  <div className="font-label-sm text-[12px] text-on-surface-variant sm:hidden">F</div>
                  <div className="font-label-sm text-[12px] text-on-surface-variant sm:hidden">S</div>
                  <div className="font-label-sm text-[12px] text-on-surface-variant sm:hidden">S</div>
                </div>
                
                <div className="grid grid-cols-7 gap-2 flex-grow auto-rows-[minmax(60px,auto)] overflow-y-auto pr-1">
                  {/* Empty days */}
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="p-1 sm:p-2 border border-surface-variant/50 rounded-lg bg-surface-container/30 min-h-[60px]"></div>
                  ))}
                  
                  {/* Actual days */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const dateString = formatDateString(currentYear, currentMonthIndex, day);
                    const dayClasses = localAllClasses.filter(c => c.date === dateString);
                    const isToday = dateString === new Date().toISOString().split('T')[0];
                    
                    return (
                      <div key={`day-${day}`} className={`p-1 sm:p-2 border ${isToday ? 'border-2 border-primary bg-surface-container-low' : 'border-surface-variant bg-surface-container-lowest'} rounded-lg min-h-[60px] sm:min-h-[80px] relative`}>
                        <span className={`font-label-sm text-[12px] sm:text-[14px] absolute top-1 sm:top-2 right-1 sm:right-2 ${isToday ? 'text-primary font-bold' : 'text-on-surface'}`}>{day}</span>
                        <div className="mt-4 sm:mt-6 flex flex-col gap-1 overflow-hidden h-full">
                          {dayClasses.map((cls, idx) => (
                            <div key={cls.id || idx} className="bg-secondary-container text-on-secondary-container text-[10px] sm:text-xs p-1 rounded font-body truncate leading-tight" title={`${formatTo12Hour(cls.time)} - ${cls.title} ${cls.courseTitle ? `(${cls.courseTitle})` : ''}`}>
                              <span className="font-semibold">{formatTo12Hour(cls.time)}</span> <span className="hidden sm:inline">- {cls.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Upcoming & Status List */}
            <div className="flex flex-col gap-6">
              
              {/* Session Status Widget */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-surface-variant">
                <h3 className="font-headline text-[18px] font-semibold text-on-surface mb-4">Upcoming Sessions</h3>
                <div className="space-y-4">
                  
                  {loading ? (
                    <div className="animate-pulse text-on-surface-variant">Loading sessions...</div>
                  ) : localSessionsToList.length > 0 ? (
                    localSessionsToList.map((session, i) => (
                      <div key={session.id} className="flex items-start gap-4 p-4 rounded-lg bg-surface border border-outline-variant/30 hover:border-primary/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-secondary-fixed-dim">schedule</span>
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h4 className="font-label-sm text-[14px] text-on-surface font-bold">{session.title}</h4>
                            <span className="text-xs font-semibold px-2 py-1 rounded bg-secondary-container text-on-secondary-container">Upcoming</span>
                          </div>
                          <p className="font-body text-xs text-primary font-medium mb-1">{session.courseTitle}</p>
                          <p className="font-body text-sm text-on-surface-variant">{session.date ? `${session.date} | ` : ''}{formatTo12Hour(session.time)}</p>
                          <div className="mt-2 flex gap-2">
                            <span className="text-xs bg-surface-container-high px-2 py-1 rounded text-on-surface-variant">
                              {session.type === 'Live Class' ? `${session.studentCount} Students` : session.studentName || '1-on-1'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-on-surface-variant text-sm">No upcoming sessions.</div>
                  )}
                  

                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      {/* Schedule New Session Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4" id="schedule-modal">
          <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-lg w-full max-h-[921px] overflow-y-auto border border-surface-variant">
            <div className="p-6 border-b border-surface-variant flex justify-between items-center sticky top-0 bg-surface-container-lowest z-10">
              <h3 className="font-headline text-[32px] font-semibold text-primary">Schedule Session</h3>
              <button 
                className="text-on-surface-variant hover:text-error transition-colors p-1"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form className="p-6 space-y-6" onSubmit={handleSubmit}>
              {/* Class Selection */}
              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Class</label>
                <select 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  value={classId}
                  onChange={(e) => setClassId(e.target.value)}
                  required
                >
                  <option value="" disabled>Select a class</option>
                  {assignedClasses.map((c: any) => (
                    <option key={c.id} value={c.id}>{c.title} - {c.courseTitle} ({c.type})</option>
                  ))}
                </select>
              </div>
              
              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-[14px] text-on-surface mb-2">Date</label>
                  <input 
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-[14px] text-on-surface mb-2">Time</label>
                  <input 
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    type="time" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              {/* Duration */}
              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Duration (Minutes)</label>
                <select 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  defaultValue="60"
                >
                  <option value="30">30</option>
                  <option value="45">45</option>
                  <option value="60">60</option>
                  <option value="90">90</option>
                </select>
              </div>

              {/* Video/Recording Link */}
              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Video/Recording Link (Optional)</label>
                <input 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="e.g., https://youtube.com/watch?v=..." 
                  type="url" 
                  value={classLink}
                  onChange={(e) => setClassLink(e.target.value)}
                />
              </div>
              
              <div className="pt-4 border-t border-surface-variant flex justify-end gap-3">
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors" 
                  onClick={() => setIsModalOpen(false)} 
                  type="button"
                >
                  Cancel
                </button>
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <><span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Scheduling...</>
                  ) : (
                    'Create Session'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
