'use client';

import React, { useEffect, useState } from 'react';
import { useAdminStore } from '@/store/admin-store';

export default function ClassesClient() {
  const { classes, users, courses, fetchClasses, fetchUsers, fetchCourses, addClass, isLoading } = useAdminStore();
  
  const [courseTitle, setCourseTitle] = useState('');
  const [className, setClassName] = useState('');
  const [tutorId, setTutorId] = useState('');
  
  useEffect(() => {
    fetchClasses();
    fetchUsers();
    fetchCourses();
  }, [fetchClasses, fetchUsers, fetchCourses]);

  const tutors = users.filter((u) => u.role === 'tutor');
  
  const handleCreateClass = async () => {
    if (!courseTitle || !tutorId || !className) {
      alert('Please fill out all class details.');
      return;
    }
    const tutor = tutors.find(t => t.id === tutorId);
    await addClass({
      courseTitle: courseTitle,
      title: className,
      tutor: tutor?.name || 'Unknown Tutor',
      tutorId,
      type: 'Live Class',
    });
    alert('Class created successfully!');
    setCourseTitle('');
    setClassName('');
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column: Create Class */}
        <div className="xl:col-span-2 flex flex-col gap-8">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/10">
            <h3 className="font-label-sm text-lg text-on-surface mb-6 border-b border-outline-variant/20 pb-4 flex items-center gap-2 font-bold">
              <span className="material-symbols-outlined text-primary">edit_square</span>
              New Class Configuration
            </h3>
            
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
                <label className="font-label-sm text-[14px] text-on-surface-variant">Assign Tutor</label>
                <div className="relative">
                  <select 
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface pr-10"
                    value={tutorId}
                    onChange={(e) => setTutorId(e.target.value)}
                  >
                    <option disabled value="">Select a Tutor...</option>
                    {tutors.map(t => (
                      <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={handleCreateClass} className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-sm text-[14px] font-bold hover:bg-primary-container transition-colors shadow-sm">
                Initialize Class
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
                    <span className="flex items-center gap-1 text-xs text-surface-tint font-bold">
                      <span className="material-symbols-outlined text-[14px]">group</span>
                      {cls.studentCount || 0}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-1">Tutor: {cls.tutor}</p>
                  <p className="text-xs text-on-surface-variant/70 mb-3">{cls.type}</p>
                </div>
                ))
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
