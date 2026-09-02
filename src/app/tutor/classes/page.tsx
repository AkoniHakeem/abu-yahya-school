"use client";

import React, { useEffect, useState } from 'react';
import TutorSidebar from '@/components/TutorSidebar';
import TutorMobileNav from '@/components/TutorMobileNav';
import { useTutorStore } from '@/store/tutor-store';
import ConfirmModal from '@/components/shared/ConfirmModal';
import { toUTC, toLocal, formatTo12Hour } from '@/lib/date-utils';

export default function TutorClassroomPage() {
  const { assignedClasses, fetchAssignedClasses, createSchedule, updateSchedule, deleteSchedule, settings, fetchSettings } = useTutorStore();
  const [loading, setLoading] = useState(true);
  const [expandedClassId, setExpandedClassId] = useState<string | null>(null);

  const userTimezone = settings?.profileData?.timezone;

  // Schedule Form
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [scheduleClassId, setScheduleClassId] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [scheduleLink, setScheduleLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Edit Schedule
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<any>(null);
  const [confirmConfig, setConfirmConfig] = useState({ isOpen: false, message: '', onConfirm: () => {} });

  useEffect(() => {
    const load = async () => {
      await Promise.all([fetchAssignedClasses(), fetchSettings()]);
      setLoading(false);
    };
    load();
  }, [fetchAssignedClasses, fetchSettings]);

  const toggleExpand = (classId: string) => {
    setExpandedClassId(expandedClassId === classId ? null : classId);
  };

  const openScheduleModal = (classId: string) => {
    setScheduleClassId(classId);
    setScheduleDate('');
    setScheduleTime('');
    setScheduleLink('');
    setIsScheduleModalOpen(true);
  };

  const handleCreateSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scheduleClassId || !scheduleDate || !scheduleTime) return;
    setIsSubmitting(true);
    const utcObj = toUTC(scheduleDate, scheduleTime, userTimezone);
    await createSchedule({
      classId: scheduleClassId,
      date: utcObj.date,
      time: utcObj.time,
      classLink: scheduleLink || undefined,
    });
    setIsSubmitting(false);
    setIsScheduleModalOpen(false);
  };

  const openEditModal = (schedule: any) => {
    const local = toLocal(schedule.date, schedule.time, userTimezone);
    setEditingSchedule({ ...schedule, date: local.date, time: local.time });
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSchedule) return;
    setIsSubmitting(true);
    const utcObj = toUTC(editingSchedule.date, editingSchedule.time, userTimezone);
    await updateSchedule(editingSchedule.id, {
      date: utcObj.date,
      time: utcObj.time,
      classLink: editingSchedule.classLink,
    });
    setIsSubmitting(false);
    setIsEditModalOpen(false);
    setEditingSchedule(null);
  };

  const handleDeleteSchedule = (scheduleId: string) => {
    setConfirmConfig({
      isOpen: true,
      message: 'Are you sure you want to delete this schedule?',
      onConfirm: async () => {
        await deleteSchedule(scheduleId);
      }
    });
  };

  return (
    <div className="bg-background text-on-background antialiased flex h-screen overflow-hidden">
      <TutorSidebar activePath="/tutor/classes" />

      <main className="flex-grow flex flex-col h-full overflow-y-auto w-full ml-16 lg:ml-64">
        <TutorMobileNav />

        <div className="p-4 lg:p-10 mt-16 lg:mt-0 flex-grow max-w-[1280px] mx-auto w-full">
          {/* Header */}
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <h2 className="font-headline text-[24px] md:text-[32px] font-semibold text-on-surface mb-2">My Classes</h2>
              <p className="font-body text-[16px] text-on-surface-variant">View your assigned classes, students, and manage schedules.</p>
            </div>
          </div>

          {/* Classes List */}
          {loading ? (
            <div className="animate-pulse text-on-surface-variant text-center py-20">Loading your classes...</div>
          ) : assignedClasses.length === 0 ? (
            <div className="text-center py-20 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-ambient">
              <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-on-surface-variant">school</span>
              </div>
              <h4 className="font-headline text-[18px] font-semibold text-on-surface mb-2">No Classes Assigned</h4>
              <p className="font-body text-on-surface-variant max-w-md mx-auto">You have not been assigned to any classes yet. Contact an administrator to get assigned.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {assignedClasses.map((cls: any) => (
                <div key={cls.id} className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 overflow-hidden">
                  {/* Class Header - always visible */}
                  <button
                    onClick={() => toggleExpand(cls.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-surface-container-low/50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cls.type === 'Live Class' ? 'bg-primary-container text-primary' : 'bg-secondary-container text-secondary'}`}>
                        <span className="material-symbols-outlined">{cls.type === 'Live Class' ? 'groups' : 'person'}</span>
                      </div>
                      <div>
                        <h3 className="font-headline text-[18px] font-bold text-on-surface">{cls.title}</h3>
                        <p className="text-sm font-medium text-primary mb-1">{cls.courseTitle}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">category</span>
                            {cls.type}
                          </span>
                          <span className="text-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">group</span>
                            {cls.students?.length || 0} student{(cls.students?.length || 0) !== 1 ? 's' : ''}
                          </span>
                          <span className="text-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">event</span>
                            {cls.schedules?.length || 0} schedule{(cls.schedules?.length || 0) !== 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className={`material-symbols-outlined text-on-surface-variant transition-transform ${expandedClassId === cls.id ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>

                  {/* Expanded Content */}
                  {expandedClassId === cls.id && (
                    <div className="border-t border-outline-variant/30 p-5 md:p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Students Section */}
                        <div>
                          <h4 className="font-headline text-[16px] font-bold text-on-surface mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[20px]">group</span>
                            Enrolled Students
                          </h4>
                          {cls.students && cls.students.length > 0 ? (
                            <div className="flex flex-col gap-2">
                              {cls.students.map((student: any) => (
                                <div key={student.id} className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-outline-variant/20">
                                  <div className="w-9 h-9 rounded-full bg-primary-container/20 text-primary flex items-center justify-center font-bold text-sm">
                                    {student.name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || '?'}
                                  </div>
                                  <span className="text-sm font-medium text-on-surface">{student.name}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-on-surface-variant p-3 bg-surface rounded-lg border border-dashed border-outline-variant/30">No students enrolled in this class yet.</p>
                          )}
                        </div>

                        {/* Schedules Section */}
                        <div>
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-headline text-[16px] font-bold text-on-surface flex items-center gap-2">
                              <span className="material-symbols-outlined text-secondary text-[20px]">calendar_month</span>
                              Schedules
                            </h4>
                            <button
                              onClick={() => openScheduleModal(cls.id)}
                              className="text-sm font-bold text-primary hover:bg-primary-container/30 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                            >
                              <span className="material-symbols-outlined text-[18px]">add</span>
                              Add
                            </button>
                          </div>
                          {cls.schedules && cls.schedules.length > 0 ? (
                            <div className="flex flex-col gap-2">
                              {cls.schedules.map((sched: any) => {
                                const local = toLocal(sched.date, sched.time, userTimezone);
                                return (
                                <div key={sched.id} className="flex items-center justify-between p-3 rounded-lg bg-surface border border-outline-variant/20 group">
                                  <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center">
                                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                                    </div>
                                    <div>
                                      <p className="text-sm font-bold text-on-surface">{local.date || 'No date'} at {formatTo12Hour(local.time)}</p>
                                      {sched.classLink && (
                                        <a href={sched.classLink} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline truncate block max-w-[200px]">
                                          {sched.classLink}
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => openEditModal(sched)} className="p-1.5 rounded-full text-primary hover:bg-primary-container/30 transition-colors" title="Edit">
                                      <span className="material-symbols-outlined text-[18px]">edit</span>
                                    </button>
                                    <button onClick={() => handleDeleteSchedule(sched.id)} className="p-1.5 rounded-full text-error hover:bg-error-container/30 transition-colors" title="Delete">
                                      <span className="material-symbols-outlined text-[18px]">delete</span>
                                    </button>
                                  </div>
                                </div>
                                );
                              })}
                            </div>
                          ) : (
                            <p className="text-sm text-on-surface-variant p-3 bg-surface rounded-lg border border-dashed border-outline-variant/30">No schedules created yet.</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Create Schedule Modal */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4">
          <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-md w-full border border-surface-variant">
            <div className="p-6 border-b border-surface-variant flex justify-between items-center">
              <h3 className="font-headline text-[20px] font-bold text-primary">Schedule Session</h3>
              <button className="text-on-surface-variant hover:text-error transition-colors p-1" onClick={() => setIsScheduleModalOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form className="p-6 space-y-5" onSubmit={handleCreateSchedule}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">Date</label>
                  <input type="date" required className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">Time</label>
                  <input type="time" required className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">Class Link (Optional)</label>
                <input type="url" placeholder="https://meet.google.com/..." className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value={scheduleLink} onChange={(e) => setScheduleLink(e.target.value)} />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setIsScheduleModalOpen(false)} className="px-5 py-2 rounded-lg font-bold text-sm border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="px-5 py-2 rounded-lg font-bold text-sm bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50">
                  {isSubmitting ? 'Creating...' : 'Create Schedule'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Schedule Modal */}
      {isEditModalOpen && editingSchedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4">
          <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-md w-full border border-surface-variant">
            <div className="p-6 border-b border-surface-variant flex justify-between items-center">
              <h3 className="font-headline text-[20px] font-bold text-primary">Edit Schedule</h3>
              <button className="text-on-surface-variant hover:text-error transition-colors p-1" onClick={() => setIsEditModalOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form className="p-6 space-y-5" onSubmit={handleEditSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">Date</label>
                  <input type="date" required className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value={editingSchedule.date || ''} onChange={(e) => setEditingSchedule({ ...editingSchedule, date: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">Time</label>
                  <input type="time" required className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value={editingSchedule.time || ''} onChange={(e) => setEditingSchedule({ ...editingSchedule, time: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">Class Link</label>
                <input type="url" placeholder="https://meet.google.com/..." className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" value={editingSchedule.classLink || ''} onChange={(e) => setEditingSchedule({ ...editingSchedule, classLink: e.target.value })} />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-5 py-2 rounded-lg font-bold text-sm border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="px-5 py-2 rounded-lg font-bold text-sm bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50">
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmModal 
        isOpen={confirmConfig.isOpen} 
        message={confirmConfig.message} 
        onConfirm={confirmConfig.onConfirm} 
        onCancel={() => setConfirmConfig({ ...confirmConfig, isOpen: false })} 
      />
    </div>
  );
}
