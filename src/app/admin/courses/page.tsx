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
  const [activeTab, setActiveTab] = useState<'basic' | 'lessons' | 'media'>('basic');
  
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

  // Edit item index (to know if we're editing an existing lesson/media inside the modal)
  const [editingLessonIndex, setEditingLessonIndex] = useState<number | null>(null);
  const [editingMediaIndex, setEditingMediaIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleAddMedia = () => {
    if (currentMediaUrl.trim()) {
      if (editingMediaIndex !== null) {
        const updated = [...mediaList];
        updated[editingMediaIndex] = { url: currentMediaUrl, type: currentMediaType };
        setMediaList(updated);
        setEditingMediaIndex(null);
      } else {
        setMediaList([...mediaList, { url: currentMediaUrl, type: currentMediaType }]);
      }
      setCurrentMediaUrl('');
    }
  };

  const handleEditMedia = (index: number) => {
    const m = mediaList[index];
    setCurrentMediaUrl(m.url);
    setCurrentMediaType(m.type);
    setEditingMediaIndex(index);
  };

  const handleRemoveMedia = (index: number) => {
    setMediaList(mediaList.filter((_, i) => i !== index));
    if (editingMediaIndex === index) setEditingMediaIndex(null);
  };

  const handleAddLesson = () => {
    if (currentLessonTitle.trim()) {
      if (editingLessonIndex !== null) {
        const updated = [...lessonList];
        updated[editingLessonIndex] = { title: currentLessonTitle, videoUrl: currentLessonUrl, duration: currentLessonDuration };
        setLessonList(updated);
        setEditingLessonIndex(null);
      } else {
        setLessonList([...lessonList, { title: currentLessonTitle, videoUrl: currentLessonUrl, duration: currentLessonDuration }]);
      }
      setCurrentLessonTitle('');
      setCurrentLessonUrl('');
      setCurrentLessonDuration('');
    }
  };

  const handleEditLesson = (index: number) => {
    const l = lessonList[index];
    setCurrentLessonTitle(l.title);
    setCurrentLessonUrl(l.videoUrl || '');
    setCurrentLessonDuration(l.duration || '');
    setEditingLessonIndex(index);
  };

  const handleRemoveLesson = (index: number) => {
    setLessonList(lessonList.filter((_, i) => i !== index));
    if (editingLessonIndex === index) setEditingLessonIndex(null);
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
    handleCloseModal();
  };

  const handleEdit = (course: any) => {
    setTitle(course.title);
    setMediaList(course.media || []);
    setLessonList(course.lessons || []);
    setEditingCourseId(course.id);
    setActiveTab('basic');
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
    setCurrentLessonTitle('');
    setCurrentLessonUrl('');
    setCurrentLessonDuration('');
    setEditingLessonIndex(null);
    setCurrentMediaUrl('');
    setEditingMediaIndex(null);
    setActiveTab('basic');
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
                setActiveTab('basic');
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

      {/* Create/Edit Course Modal (Tabbed) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4">
          <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-surface-variant">
            {/* Header */}
            <div className="p-6 border-b border-surface-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline text-[24px] font-semibold text-primary">{editingCourseId ? 'Edit Course' : 'Create New Course'}</h3>
              <button 
                className="text-on-surface-variant hover:text-error transition-colors p-1"
                onClick={handleCloseModal}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            {/* Tabs Navigation */}
            <div className="flex border-b border-surface-variant bg-surface-container-low px-6">
              <button 
                onClick={() => setActiveTab('basic')}
                className={`px-4 py-3 font-label-sm font-bold text-[14px] border-b-2 cursor-pointer transition-colors ${activeTab === 'basic' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
              >
                Basic Info
              </button>
              <button 
                onClick={() => setActiveTab('lessons')}
                className={`px-4 py-3 font-label-sm font-bold text-[14px] border-b-2 cursor-pointer transition-colors flex items-center gap-2 ${activeTab === 'lessons' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
              >
                Lessons / Modules
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">{lessonList.length}</span>
              </button>
              <button 
                onClick={() => setActiveTab('media')}
                className={`px-4 py-3 font-label-sm font-bold text-[14px] border-b-2 cursor-pointer transition-colors flex items-center gap-2 ${activeTab === 'media' ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
              >
                Additional Media
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">{mediaList.length}</span>
              </button>
            </div>

            {/* Modal Body */}
            <form className="flex-1 overflow-y-auto p-6 bg-surface-container-lowest custom-scrollbar" onSubmit={handleSubmit}>
              
              {/* Tab 1: Basic Info */}
              <div className={activeTab === 'basic' ? 'block' : 'hidden'}>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Course Title</label>
                <input 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="e.g., Advanced Arabic Grammar" 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required={activeTab === 'basic'}
                />
                
                <div className="mt-8 bg-surface-container-low p-5 rounded-xl border border-surface-variant">
                  <h4 className="font-headline text-md font-bold mb-2">Instructions</h4>
                  <p className="text-sm text-on-surface-variant">
                    Start by setting the title of the course. Then, use the <strong>Lessons / Modules</strong> tab to build the main curriculum structure (e.g. videos with durations).
                    Use the <strong>Additional Media</strong> tab to attach supplementary files such as PDFs or audio files.
                  </p>
                </div>
              </div>

              {/* Tab 2: Lessons / Modules */}
              <div className={activeTab === 'lessons' ? 'block space-y-6' : 'hidden'}>
                <div className="flex flex-col gap-3 bg-surface-container-low p-5 rounded-xl border border-outline-variant/50 shadow-sm">
                  <h4 className="font-label-sm font-bold text-on-surface">{editingLessonIndex !== null ? 'Edit Lesson' : 'Add New Lesson'}</h4>
                  <div className="flex flex-col md:flex-row gap-3">
                    <input 
                      className="flex-grow bg-surface border border-outline-variant rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-primary"
                      placeholder="Lesson Title (e.g. Module 1: Intro)" 
                      type="text" 
                      value={currentLessonTitle}
                      onChange={(e) => setCurrentLessonTitle(e.target.value)}
                    />
                    <input 
                      className="w-full md:w-32 bg-surface border border-outline-variant rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-primary"
                      placeholder="Duration (e.g. 10m)" 
                      type="text" 
                      value={currentLessonDuration}
                      onChange={(e) => setCurrentLessonDuration(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <input 
                      className="flex-grow bg-surface border border-outline-variant rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-primary"
                      placeholder="Video URL (YouTube or Direct Link)" 
                      type="url" 
                      value={currentLessonUrl}
                      onChange={(e) => setCurrentLessonUrl(e.target.value)}
                    />
                    <div className="flex gap-2 w-full md:w-auto">
                      {editingLessonIndex !== null && (
                        <button 
                          type="button" 
                          onClick={() => {
                            setEditingLessonIndex(null);
                            setCurrentLessonTitle('');
                            setCurrentLessonUrl('');
                            setCurrentLessonDuration('');
                          }}
                          className="bg-surface-variant text-on-surface px-4 py-2 rounded-lg font-bold text-sm hover:bg-surface-variant/80 transition-colors flex-1 md:flex-none"
                        >
                          Cancel
                        </button>
                      )}
                      <button 
                        type="button" 
                        onClick={handleAddLesson}
                        className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-sm flex-1 md:flex-none"
                        disabled={!currentLessonTitle.trim()}
                      >
                        {editingLessonIndex !== null ? 'Update' : 'Add Lesson'}
                      </button>
                    </div>
                  </div>
                </div>

                {lessonList.length > 0 ? (
                  <div className="bg-surface rounded-xl border border-surface-variant overflow-hidden">
                    <ul className="divide-y divide-surface-variant">
                      {lessonList.map((l, i) => (
                        <li key={i} className={`flex justify-between items-center p-4 transition-colors ${editingLessonIndex === i ? 'bg-primary/5' : 'hover:bg-surface-container-lowest'}`}>
                          <div className="flex items-start gap-4 overflow-hidden">
                            <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                              {i + 1}
                            </div>
                            <div className="flex flex-col overflow-hidden">
                              <span className="text-sm font-bold font-body text-on-surface flex items-center gap-2">
                                {l.title} 
                                {l.duration && <span className="bg-surface-container-high px-2 py-0.5 rounded text-xs font-normal text-on-surface-variant">{l.duration}</span>}
                              </span>
                              {l.videoUrl && <span className="text-xs text-primary truncate max-w-full mt-1 opacity-80">{l.videoUrl}</span>}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0 ml-4">
                            <button 
                              type="button" 
                              onClick={() => handleEditLesson(i)}
                              className="text-on-surface-variant hover:text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors"
                            >
                              <span className="material-symbols-outlined text-[18px]">edit</span>
                            </button>
                            <button 
                              type="button" 
                              onClick={() => handleRemoveLesson(i)}
                              className="text-on-surface-variant hover:text-error hover:bg-error/10 p-2 rounded-lg transition-colors"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="text-center py-10 border border-dashed border-outline-variant rounded-xl bg-surface">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant opacity-50 mb-2">menu_book</span>
                    <p className="text-sm text-on-surface-variant">No lessons added yet.</p>
                  </div>
                )}
              </div>

              {/* Tab 3: Additional Media */}
              <div className={activeTab === 'media' ? 'block space-y-6' : 'hidden'}>
                <div className="flex flex-col gap-3 bg-surface-container-low p-5 rounded-xl border border-outline-variant/50 shadow-sm">
                  <h4 className="font-label-sm font-bold text-on-surface">{editingMediaIndex !== null ? 'Edit Media' : 'Add Media Resource'}</h4>
                  <div className="flex flex-col md:flex-row gap-2">
                    <select 
                      className="bg-surface border border-outline-variant rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-primary w-full md:w-28"
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
                    <div className="flex gap-2 w-full md:w-auto">
                      {editingMediaIndex !== null && (
                        <button 
                          type="button" 
                          onClick={() => {
                            setEditingMediaIndex(null);
                            setCurrentMediaUrl('');
                          }}
                          className="bg-surface-variant text-on-surface px-4 py-2 rounded-lg font-bold text-sm hover:bg-surface-variant/80 transition-colors flex-1 md:flex-none"
                        >
                          Cancel
                        </button>
                      )}
                      <button 
                        type="button" 
                        onClick={handleAddMedia}
                        className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-sm flex-1 md:flex-none"
                        disabled={!currentMediaUrl.trim()}
                      >
                        {editingMediaIndex !== null ? 'Update' : 'Add'}
                      </button>
                    </div>
                  </div>
                </div>

                {mediaList.length > 0 ? (
                  <div className="bg-surface rounded-xl border border-surface-variant overflow-hidden">
                    <ul className="divide-y divide-surface-variant">
                      {mediaList.map((m, i) => (
                        <li key={i} className={`flex justify-between items-center p-4 transition-colors ${editingMediaIndex === i ? 'bg-primary/5' : 'hover:bg-surface-container-lowest'}`}>
                          <div className="flex items-center gap-4 overflow-hidden">
                            <span className={`material-symbols-outlined text-[24px] ${m.type === 'video' ? 'text-blue-500' : m.type === 'pdf' ? 'text-red-500' : 'text-purple-500'}`}>
                              {m.type === 'video' ? 'play_circle' : m.type === 'audio' ? 'headphones' : 'picture_as_pdf'}
                            </span>
                            <span className="text-sm font-body text-on-surface truncate max-w-[400px]">{m.url}</span>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0 ml-4">
                            <button 
                              type="button" 
                              onClick={() => handleEditMedia(i)}
                              className="text-on-surface-variant hover:text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors"
                            >
                              <span className="material-symbols-outlined text-[18px]">edit</span>
                            </button>
                            <button 
                              type="button" 
                              onClick={() => handleRemoveMedia(i)}
                              className="text-on-surface-variant hover:text-error hover:bg-error/10 p-2 rounded-lg transition-colors"
                            >
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="text-center py-10 border border-dashed border-outline-variant rounded-xl bg-surface">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant opacity-50 mb-2">folder_open</span>
                    <p className="text-sm text-on-surface-variant">No media resources added yet.</p>
                  </div>
                )}
              </div>

            </form>

            {/* Footer Actions */}
            <div className="p-6 border-t border-surface-variant flex justify-end gap-3 bg-surface-container-lowest">
              <button 
                className="px-6 py-2.5 rounded-lg font-label-sm font-bold border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors" 
                onClick={handleCloseModal} 
                type="button"
              >
                Cancel
              </button>
              <button 
                className="px-6 py-2.5 rounded-lg font-label-sm font-bold bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2" 
                onClick={handleSubmit}
                disabled={isSubmitting || !title}
              >
                {isSubmitting ? (editingCourseId ? 'Saving...' : 'Creating...') : (editingCourseId ? 'Save Changes' : 'Create Course')}
              </button>
            </div>
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
