'use client';

import React, { useEffect, useState } from 'react';
import { useAdminStore } from '@/store/admin-store';
import AlertModal from '@/components/shared/AlertModal';
import ConfirmModal from '@/components/shared/ConfirmModal';
import { toLocal, formatTo12Hour } from '@/lib/date-utils';

export default function ClassesClient() {
  const { classes, users, courses, fetchClasses, fetchUsers, fetchCourses, addClass, updateClass, deleteClass, isLoading } = useAdminStore();
  
  const [courseTitle, setCourseTitle] = useState('');
  const [className, setClassName] = useState('');
  const [tutorId, setTutorId] = useState('');
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);
  const [editingClassId, setEditingClassId] = useState<string | null>(null);
  const [expandedClassId, setExpandedClassId] = useState<string | null>(null);
  const [viewAllSchedulesClassId, setViewAllSchedulesClassId] = useState<string | null>(null);
  const [alertConfig, setAlertConfig] = useState({ isOpen: false, message: '' });
  const [confirmConfig, setConfirmConfig] = useState({ isOpen: false, message: '', onConfirm: () => {} });
  
  useEffect(() => {
    fetchClasses();
    fetchUsers();
    fetchCourses();
  }, [fetchClasses, fetchUsers, fetchCourses]);

  const tutors = users.filter((u) => u.role === 'tutor');
  const students = users.filter((u) => u.role === 'student');
  
  const handleToggleStudent = (studentId: string) => {
    setSelectedStudentIds(prev => 
      prev.includes(studentId) ? prev.filter(id => id !== studentId) : [...prev, studentId]
    );
  };

  const handleCreateClass = async () => {
    if (!courseTitle || !className) {
      setAlertConfig({ isOpen: true, message: 'Please fill out all class details.' });
      return;
    }
    const tutor = tutors.find(t => t.id === tutorId);
    
    if (editingClassId) {
      await updateClass(editingClassId, {
        courseTitle: courseTitle,
        title: className,
        tutor: tutor?.name || 'Unknown Tutor',
        tutorId,
        type: 'Live Class',
        studentIds: selectedStudentIds,
      });
      setAlertConfig({ isOpen: true, message: 'Class updated successfully!' });
      setEditingClassId(null);
    } else {
      await addClass({
        courseTitle: courseTitle,
        title: className,
        tutor: tutor?.name || 'Unknown Tutor',
        tutorId,
        type: 'Live Class',
        studentIds: selectedStudentIds,
      });
      setAlertConfig({ isOpen: true, message: 'Class created successfully!' });
    }
    
    setCourseTitle('');
    setClassName('');
    setTutorId('');
    setSelectedStudentIds([]);
  };

  const handleEditClass = (cls: any) => {
    setCourseTitle(cls.courseTitle || (cls.course ? cls.course.title : ''));
    setClassName(cls.title || '');
    setTutorId(cls.tutorId || '');
    setSelectedStudentIds(cls.students ? cls.students.map((s: any) => s.id) : []);
    setEditingClassId(cls.id);
  };

  const handleDeleteClass = (id: string) => {
    setConfirmConfig({
      isOpen: true,
      message: 'Are you sure you want to delete this class?',
      onConfirm: async () => {
        await deleteClass(id);
      }
    });
  };

  const handleCancelEdit = () => {
    setEditingClassId(null);
    setCourseTitle('');
    setClassName('');
    setTutorId('');
    setSelectedStudentIds([]);
  };

  return (
    <div className="flex-1 min-h-0 overflow-y-auto p-8 custom-scrollbar">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column: Create Class */}
        <div className="xl:col-span-2 flex flex-col gap-8">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/10">
            <div className="flex justify-between items-center mb-6 border-b border-outline-variant/20 pb-4">
              <h3 className="font-label-sm text-lg text-on-surface flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-primary">{editingClassId ? 'edit' : 'edit_square'}</span>
                {editingClassId ? 'Edit Class Configuration' : 'New Class Configuration'}
              </h3>
              {editingClassId && (
                <button onClick={handleCancelEdit} className="text-on-surface-variant hover:text-error transition-colors text-sm font-bold">
                  Cancel Edit
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-[14px] text-on-surface-variant">Class Name</label>
                <input 
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface placeholder:text-outline" 
                  placeholder="e.g. Morning Batch" 
                  type="text"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-[14px] text-on-surface-variant">Course</label>
                <div className="relative">
                  <select 
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface pr-10"
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                  >
                    <option disabled value="">Select a Course...</option>
                    {courses.map(c => (
                      <option key={c.id} value={c.title}>{c.title}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">expand_more</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-label-sm text-[14px] text-on-surface-variant">Assign Tutor (Optional)</label>
                <div className="relative">
                  <select 
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface pr-10"
                    value={tutorId}
                    onChange={(e) => setTutorId(e.target.value)}
                  >
                    <option value="">Select a Tutor...</option>
                    {tutors.map(t => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="font-label-sm text-[14px] text-on-surface-variant block mb-2">Assign Students</label>
              <div className="bg-surface-container-low border border-outline-variant rounded-lg p-3 max-h-48 overflow-y-auto custom-scrollbar flex flex-col gap-2">
                {students.length === 0 ? (
                  <p className="text-sm text-on-surface-variant italic">No students available.</p>
                ) : (
                  students.map(student => (
                    <label key={student.id} className="flex items-center gap-3 cursor-pointer hover:bg-surface-container p-2 rounded transition-colors">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 text-primary bg-surface border-outline-variant rounded focus:ring-primary focus:ring-2"
                        checked={selectedStudentIds.includes(student.id)}
                        onChange={() => handleToggleStudent(student.id)}
                      />
                      <span className="text-sm text-on-surface font-medium">{student.name}</span>
                    </label>
                  ))
                )}
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={handleCreateClass} className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-sm text-[14px] font-bold hover:bg-primary-container transition-colors shadow-sm">
                {editingClassId ? 'Update Class' : 'Initialize Class'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Column: Active Classes Overview */}
        <div className="flex flex-col gap-8">
          <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/10 overflow-hidden flex flex-col h-full">
            <div className="bg-surface-container-low p-4 border-b border-outline-variant/20 flex justify-between items-center">
              <h3 className="font-label-sm text-on-surface font-bold">Active Classes</h3>
              <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-bold">{classes.length} Total</span>
            </div>
            
            <div className="p-2 flex-1 overflow-y-auto max-h-[600px]">
              {isLoading ? (
                <div className="p-4 text-center text-sm text-on-surface-variant">Loading classes...</div>
              ) : (
                classes.map((cls, idx) => (
                <div key={cls.id || idx} className="p-4 border-b border-outline-variant/10 hover:bg-surface-container-low/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-label-sm text-primary font-bold">{cls.courseTitle}</h4>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-surface-tint font-bold bg-primary/10 px-2 py-1 rounded">
                        <span className="material-symbols-outlined text-[14px]">group</span>
                        {cls.studentCount || (cls.students?.length) || 0}
                      </span>
                      <div className="flex gap-1">
                        <button onClick={() => setExpandedClassId(expandedClassId === cls.id ? null : cls.id)} className="text-on-surface-variant hover:text-primary transition-colors p-1" title="View Schedules">
                          <span className="material-symbols-outlined text-[18px]">{expandedClassId === cls.id ? 'expand_less' : 'expand_more'}</span>
                        </button>
                        <button onClick={() => handleEditClass(cls)} className="text-on-surface-variant hover:text-primary transition-colors p-1" title="Edit">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button onClick={() => handleDeleteClass(cls.id)} className="text-on-surface-variant hover:text-error transition-colors p-1" title="Delete">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <h5 className="text-sm font-bold text-on-surface mb-1">{cls.title}</h5>
                  <p className="text-sm text-on-surface-variant mb-1">Tutor: {cls.tutor}</p>
                  <p className="text-xs text-on-surface-variant/70 mb-1">{cls.type}</p>
                  
                  {expandedClassId === cls.id && (
                    <div className="mt-4 bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/20">
                      <h6 className="text-xs font-bold text-primary mb-2 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">calendar_today</span> Schedules
                      </h6>
                      {cls.schedules && cls.schedules.length > 0 ? (
                        <div className="flex flex-col gap-2">
                          {cls.schedules.slice(0, 3).map((sched: any, sIdx: number) => {
                            const local = toLocal(sched.date, sched.time);
                            return (
                            <div key={sched.id || sIdx} className="flex justify-between items-center text-xs p-2 bg-surface rounded">
                              <div>
                                <p className="font-bold text-on-surface">{local.date || 'No Date'} at {local.time ? formatTo12Hour(local.time) : 'No Time'} (Local)</p>
                              </div>
                              {sched.classLink && (
                                <a href={sched.classLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Link</a>
                              )}
                            </div>
                            );
                          })}
                          {cls.schedules.length > 3 && (
                            <button 
                              onClick={() => setViewAllSchedulesClassId(cls.id)}
                              className="text-xs font-bold text-primary hover:underline text-left mt-1"
                            >
                              View All ({cls.schedules.length})
                            </button>
                          )}
                        </div>
                      ) : (
                        <p className="text-xs text-on-surface-variant italic">No schedules for this class.</p>
                      )}
                    </div>
                  )}
                </div>
                ))
              )}
            </div>
          </div>
        </div>
        
      </div>
      
      {/* View All Schedules Modal */}
      {viewAllSchedulesClassId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4" onClick={() => setViewAllSchedulesClassId(null)}>
          <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-lg w-full max-h-[80vh] flex flex-col border border-surface-variant" onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b border-surface-variant flex justify-between items-center sticky top-0 bg-surface-container-lowest rounded-t-xl z-10">
              <h3 className="font-headline text-[24px] font-bold text-primary">All Schedules</h3>
              <button onClick={() => setViewAllSchedulesClassId(null)} className="text-on-surface-variant hover:text-error transition-colors p-1">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex flex-col gap-3">
              {classes.find((c) => c.id === viewAllSchedulesClassId)?.schedules?.map((sched: any, sIdx: number) => {
                const local = toLocal(sched.date, sched.time);
                return (
                <div key={sched.id || sIdx} className="flex justify-between items-center p-4 border border-outline-variant/30 rounded-lg hover:border-primary/50 transition-colors bg-surface">
                  <div>
                    <span className="text-sm font-bold text-primary mb-1 block">{local.date || 'No Date'}</span>
                    <h4 className="font-bold text-on-surface">{local.time ? formatTo12Hour(local.time) : 'No Time'} (Local)</h4>
                  </div>
                  {sched.classLink && (
                    <a href={sched.classLink} target="_blank" rel="noopener noreferrer" className="bg-primary/10 text-primary hover:bg-primary hover:text-on-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Join Link
                    </a>
                  )}
                </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <AlertModal 
        isOpen={alertConfig.isOpen} 
        message={alertConfig.message} 
        onClose={() => setAlertConfig({ ...alertConfig, isOpen: false })} 
      />
      <ConfirmModal 
        isOpen={confirmConfig.isOpen} 
        message={confirmConfig.message} 
        onConfirm={confirmConfig.onConfirm} 
        onCancel={() => setConfirmConfig({ ...confirmConfig, isOpen: false })} 
      />
    </div>
  );
}
