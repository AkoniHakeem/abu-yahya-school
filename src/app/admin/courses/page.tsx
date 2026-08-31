"use client";

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import AdminMobileNav from '@/components/AdminMobileNav';
import { useAdminStore } from '@/store/admin-store';
import ConfirmModal from '@/components/shared/ConfirmModal';

export default function AdminCoursesPage() {
  const { courses, fetchCourses, addCourse, updateCourse, deleteCourse, isLoading } = useAdminStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [confirmConfig, setConfirmConfig] = useState({ isOpen: false, message: '', onConfirm: () => {} });
  
  // Form State
  const [title, setTitle] = useState('');
  const [mediaList, setMediaList] = useState<{url: string, type: string}[]>([]);
  const [currentMediaUrl, setCurrentMediaUrl] = useState('');
  const [currentMediaType, setCurrentMediaType] = useState('video');
  const [lessonList, setLessonList] = useState<{title: string, videoUrl: string, duration: string}[]>([]);
  const [currentLessonTitle, setCurrentLessonTitle] = useState('');
  const [currentLessonUrl, setCurrentLessonUrl] = useState('');
  const [currentLessonDuration, setCurrentLessonDuration] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleAddMedia = () => {
    if (currentMediaUrl.trim()) {
      setMediaList([...mediaList, { url: currentMediaUrl, type: currentMediaType }]);
      setCurrentMediaUrl('');
    }
  };

  const handleRemoveMedia = (index: number) => {
    setMediaList(mediaList.filter((_, i) => i !== index));
  };

  const handleAddLesson = () => {
    if (currentLessonTitle.trim()) {
      setLessonList([...lessonList, { title: currentLessonTitle, videoUrl: currentLessonUrl, duration: currentLessonDuration }]);
      setCurrentLessonTitle('');
      setCurrentLessonUrl('');
      setCurrentLessonDuration('');
    }
  };

  const handleRemoveLesson = (index: number) => {
    setLessonList(lessonList.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    
    setIsSubmitting(true);
    if (editingCourseId) {
      await updateCourse(editingCourseId, { title, media: mediaList, lessons: lessonList });
    } else {
      await addCourse({ title, media: mediaList, lessons: lessonList });
    }
    
    setIsSubmitting(false);
    setIsModalOpen(false);
    setEditingCourseId(null);
    setTitle('');
    setMediaList([]);
    setLessonList([]);
  };

  const handleEdit = (course: any) => {
    setTitle(course.title);
    setMediaList(course.media || []);
    setLessonList(course.lessons || []);
    setEditingCourseId(course.id);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setConfirmConfig({
      isOpen: true,
      message: 'Are you sure you want to delete this course?',
      onConfirm: async () => {
        await deleteCourse(id);
      }
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCourseId(null);
    setTitle('');
    setMediaList([]);
    setLessonList([]);
  };

  return (
    <div className="bg-background text-on-background antialiased flex h-screen overflow-hidden">
      <AdminSidebar activePath="/admin/courses" />

      <main className="flex-grow flex flex-col h-full overflow-y-auto w-full ml-16 lg:ml-64">
        <AdminMobileNav />
        
        <div className="p-4 lg:p-10 mt-16 lg:mt-0 flex-grow max-w-[1280px] mx-auto w-full">
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <h2 className="font-headline text-[32px] font-semibold text-on-surface mb-2">Course Management</h2>
              <p className="font-body text-[16px] text-on-surface-variant">Create and manage courses and their media.</p>
            </div>
            <button 
              className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm text-[14px] font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center gap-2 shadow-ambient"
              onClick={() => {
                setEditingCourseId(null);
                setTitle('');
                setMediaList([]);
                setLessonList([]);
                setIsModalOpen(true);
              }}
            >
              <span className="material-symbols-outlined">add</span>
              Create Course
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-surface-variant flex flex-col min-h-[400px]">
            <h3 className="font-headline text-[18px] font-semibold text-on-surface mb-6">All Courses</h3>
            
            {isLoading ? (
              <div className="animate-pulse text-on-surface-variant text-center py-10">Loading courses...</div>
            ) : courses.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-outline-variant rounded-xl">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 opacity-50">school</span>
                <p className="font-body text-on-surface-variant">No courses found. Create one to get started.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course: any) => (
                  <div key={course.id} className="p-5 border border-surface-variant rounded-xl bg-surface hover:border-primary/50 transition-colors shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="font-headline text-[18px] font-bold text-on-surface mb-3">{course.title}</h4>
                      <div className="space-y-2">
                      <p className="font-label-sm text-sm text-on-surface-variant">Media Files: {course.media?.length || 0} | Lessons: {course.lessons?.length || 0}</p>
                      {course.media && course.media.length > 0 && (
                        <ul className="text-xs space-y-1">
                          {course.media.map((m: any, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-primary bg-primary/10 p-2 rounded">
                              <span className="material-symbols-outlined text-[16px]">
                                {m.type === 'video' ? 'play_circle' : m.type === 'audio' ? 'headphones' : 'picture_as_pdf'}
                              </span>
                              <span className="truncate">{m.url}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-end gap-2">
                      <button onClick={() => handleEdit(course)} className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button onClick={() => handleDelete(course.id)} className="text-error hover:bg-error/10 p-2 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Create Course Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4">
          <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-surface-variant">
            <div className="p-6 border-b border-surface-variant flex justify-between items-center sticky top-0 bg-surface-container-lowest z-10">
              <h3 className="font-headline text-[24px] font-semibold text-primary">{editingCourseId ? 'Edit Course' : 'Create New Course'}</h3>
              <button 
                className="text-on-surface-variant hover:text-error transition-colors p-1"
                onClick={handleCloseModal}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form className="p-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Course Title</label>
                <input 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="e.g., Advanced Arabic Grammar" 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="border-t border-outline-variant pt-6">
                <label className="block font-label-sm text-[14px] text-on-surface mb-4">Course Media Links (Optional)</label>
                
                <div className="flex gap-2 mb-4">
                  <select 
                    className="bg-surface border border-outline-variant rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-primary"
                    value={currentMediaType}
                    onChange={(e) => setCurrentMediaType(e.target.value)}
                  >
                    <option value="video">Video</option>
                    <option value="audio">Audio</option>
                    <option value="pdf">PDF</option>
                  </select>
                  <input 
                    className="flex-grow bg-surface border border-outline-variant rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-primary"
                    placeholder="https://..." 
                    type="url" 
                    value={currentMediaUrl}
                    onChange={(e) => setCurrentMediaUrl(e.target.value)}
                  />
                  <button 
                    type="button" 
                    onClick={handleAddMedia}
                    className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg font-bold text-sm hover:bg-secondary-container/80 transition-colors"
                  >
                    Add
                  </button>
                </div>

                {mediaList.length > 0 && (
                  <ul className="space-y-2">
                    {mediaList.map((m, i) => (
                      <li key={i} className="flex justify-between items-center bg-surface-container-low p-3 rounded-lg border border-outline-variant/50">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary text-sm">
                            {m.type === 'video' ? 'play_circle' : m.type === 'audio' ? 'headphones' : 'picture_as_pdf'}
                          </span>
                          <span className="text-sm font-body truncate max-w-[300px]">{m.url}</span>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveMedia(i)}
                          className="text-error hover:bg-error/10 p-1 rounded transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="border-t border-outline-variant pt-6">
                <label className="block font-label-sm text-[14px] text-on-surface mb-4">Lessons / Modules</label>
                
                <div className="flex flex-col gap-3 mb-4 bg-surface-container-low p-4 rounded-lg border border-outline-variant/50">
                  <div className="flex flex-col md:flex-row gap-3">
                    <input 
                      className="flex-grow bg-surface border border-outline-variant rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-primary"
                      placeholder="Lesson Title" 
                      type="text" 
                      value={currentLessonTitle}
                      onChange={(e) => setCurrentLessonTitle(e.target.value)}
                    />
                    <input 
                      className="w-full md:w-32 bg-surface border border-outline-variant rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-primary"
                      placeholder="Duration (e.g., 10m)" 
                      type="text" 
                      value={currentLessonDuration}
                      onChange={(e) => setCurrentLessonDuration(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <input 
                      className="flex-grow bg-surface border border-outline-variant rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-primary"
                      placeholder="Video/Doc URL (Optional)" 
                      type="url" 
                      value={currentLessonUrl}
                      onChange={(e) => setCurrentLessonUrl(e.target.value)}
                    />
                    <button 
                      type="button" 
                      onClick={handleAddLesson}
                      className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg font-bold text-sm hover:bg-secondary-container/80 transition-colors w-full md:w-auto"
                    >
                      Add Lesson
                    </button>
                  </div>
                </div>

                {lessonList.length > 0 && (
                  <ul className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                    {lessonList.map((l, i) => (
                      <li key={i} className="flex justify-between items-center bg-surface-container-low p-3 rounded-lg border border-outline-variant/50">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary text-sm">
                            menu_book
                          </span>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold font-body">{l.title} {l.duration && <span className="font-normal text-on-surface-variant text-xs">({l.duration})</span>}</span>
                            {l.videoUrl && <span className="text-xs text-primary truncate max-w-[200px]">{l.videoUrl}</span>}
                          </div>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveLesson(i)}
                          className="text-error hover:bg-error/10 p-1 rounded transition-colors flex-shrink-0"
                        >
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-6 border-t border-surface-variant flex justify-end gap-3">
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors" 
                  onClick={handleCloseModal} 
                  type="button"
                >
                  Cancel
                </button>
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2" 
                  type="submit"
                  disabled={isSubmitting || !title}
                >
                  {isSubmitting ? (editingCourseId ? 'Saving...' : 'Creating...') : (editingCourseId ? 'Save Changes' : 'Create Course')}
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
