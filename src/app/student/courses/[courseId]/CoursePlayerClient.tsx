'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStudentStore, Course, Lesson } from '@/store/student-store';

interface CoursePlayerClientProps {
  initialCourse: Course;
  allCourses: Course[];
}

type ActiveItem = {
  type: 'lesson' | 'media';
  data: any;
};

export default function CoursePlayerClient({ initialCourse, allCourses }: CoursePlayerClientProps) {
  const router = useRouter();
  const initialize = useStudentStore(state => state.initialize);
  const storeCourses = useStudentStore(state => state.courses);
  const markLessonComplete = useStudentStore(state => state.markLessonComplete);

  const [activeTab, setActiveTab] = useState<'lessons' | 'media'>('lessons');

  useEffect(() => {
    if (storeCourses.length === 0) {
      initialize(null as any, allCourses);
    }
  }, [allCourses, initialize, storeCourses.length]);

  const storeCourse = storeCourses.find(c => c.id === initialCourse.id);
  const liveCourse = storeCourse ? { ...storeCourse, recordings: initialCourse.recordings } : initialCourse;
  
  // Default to the first lesson if available, else first media
  const defaultItem: ActiveItem | null = 
    liveCourse.lessons && liveCourse.lessons.length > 0 
      ? { type: 'lesson', data: liveCourse.lessons[0] }
      : (liveCourse.recordings && liveCourse.recordings.length > 0 
          ? { type: 'media', data: liveCourse.recordings[0] } 
          : null);

  const [activeItem, setActiveItem] = useState<ActiveItem | null>(defaultItem);

  useEffect(() => {
    // Basic validation to ensure the active item still exists
    if (!activeItem && defaultItem) {
      setActiveItem(defaultItem);
    }
  }, [liveCourse, activeItem, defaultItem]);

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('/embed/')) return url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
  };

  const renderPlayer = () => {
    if (!activeItem || !activeItem.data) {
      return (
        <div className="absolute inset-0 flex items-center justify-center text-white flex-col gap-4">
          <span className="material-symbols-outlined text-[64px] opacity-50">play_circle</span>
          <p>No content selected.</p>
        </div>
      );
    }

    const { type, data } = activeItem;
    const url = type === 'lesson' ? data.videoUrl : data.url;
    
    if (!url) {
      return (
        <div className="absolute inset-0 flex items-center justify-center text-white flex-col gap-4 bg-surface-container-highest">
          <span className="material-symbols-outlined text-[64px] opacity-50">videocam_off</span>
          <p>No media link provided for this {type}.</p>
        </div>
      );
    }

    if (type === 'media' && data.type === 'pdf') {
      return (
        <iframe 
          width="100%" 
          height="100%" 
          src={url} 
          title="PDF viewer" 
          className="w-full h-full bg-white"
        ></iframe>
      );
    }
    
    if (type === 'media' && data.type === 'audio') {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-white bg-surface-container-high">
          <span className="material-symbols-outlined text-[80px] text-primary">audio_file</span>
          <audio controls className="w-3/4 max-w-md mt-4">
            <source src={url} />
            Your browser does not support the audio element.
          </audio>
        </div>
      );
    }

    // Video rendering
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return (
        <iframe 
          width="100%" 
          height="100%" 
          src={getEmbedUrl(url)} 
          title="Video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      );
    } else {
      return (
        <video 
          controls 
          className="w-full h-full bg-black object-contain"
          src={url}
        >
          Your browser does not support the video element.
        </video>
      );
    }
  };

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-140px)]">
      {/* Header */}
      <header className="flex items-center gap-4">
        <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="font-display text-[24px] md:text-[32px] font-bold text-primary leading-tight">{liveCourse.title}</h1>
          <p className="text-on-surface-variant text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">person</span> {liveCourse.tutor}
          </p>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 h-full overflow-hidden">
        {/* Main Player Area */}
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 pb-8">
          {activeItem ? (
            <>
              <div className="bg-black w-full aspect-video rounded-2xl overflow-hidden shadow-ambient relative group">
                {renderPlayer()}
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-ambient border border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <h2 className="font-headline text-[24px] font-bold text-on-surface mb-2">{activeItem.data.title}</h2>
                  {activeItem.data.duration && activeItem.data.duration !== 'N/A' && (
                    <p className="text-on-surface-variant text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">schedule</span> {activeItem.data.duration}
                    </p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
              <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">video_library</span>
              <h3 className="font-headline text-[24px] font-bold text-on-surface mb-2">No Content Available</h3>
              <p className="text-on-surface-variant">This course does not have any lessons or media added yet.</p>
            </div>
          )}
        </div>

        {/* Sidebar - Course Content */}
        <div className="w-full lg:w-[380px] flex flex-col bg-surface-container-lowest rounded-2xl shadow-ambient border border-outline-variant/30 overflow-hidden flex-shrink-0 lg:h-full">
          {/* Sidebar Tabs */}
          <div className="flex border-b border-outline-variant/30 bg-surface-container-low">
            <button
              onClick={() => setActiveTab('lessons')}
              className={`flex-1 py-4 text-sm font-bold border-b-2 cursor-pointer transition-colors ${activeTab === 'lessons' ? 'border-primary text-primary bg-surface-container-lowest' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
            >
              Lessons / Modules
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`flex-1 py-4 text-sm font-bold border-b-2 cursor-pointer transition-colors ${activeTab === 'media' ? 'border-primary text-primary bg-surface-container-lowest' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
            >
              Resources
            </button>
          </div>
          
          <ul className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 custom-scrollbar">
            {activeTab === 'lessons' && (
              liveCourse.lessons && liveCourse.lessons.length > 0 ? (
                liveCourse.lessons.map((lesson: any, index: number) => {
                  const isActive = activeItem?.type === 'lesson' && activeItem.data.id === lesson.id;
                  return (
                    <li key={lesson.id || index}>
                      <button
                        onClick={() => setActiveItem({ type: 'lesson', data: lesson })}
                        className={`w-full text-left p-3 rounded-xl flex items-start gap-3 transition-colors border ${
                          isActive 
                            ? 'bg-primary/10 border-primary/30 text-primary-fixed' 
                            : 'bg-surface border-surface-variant hover:border-primary/30 text-on-surface'
                        }`}
                      >
                        <div className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${isActive ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h4 className={`text-sm font-bold mb-1 truncate ${isActive ? 'text-primary' : ''}`}>
                            {lesson.title}
                          </h4>
                          {lesson.duration && (
                            <span className="text-xs opacity-80 flex items-center gap-1 font-medium">
                              <span className="material-symbols-outlined text-[14px]">schedule</span>
                              {lesson.duration}
                            </span>
                          )}
                        </div>
                      </button>
                    </li>
                  );
                })
              ) : (
                <li className="p-8 flex flex-col items-center justify-center text-center text-on-surface-variant opacity-70">
                   <span className="material-symbols-outlined text-4xl mb-2">menu_book</span>
                   <p className="text-sm">No modules added yet.</p>
                </li>
              )
            )}

            {activeTab === 'media' && (
              liveCourse.recordings && liveCourse.recordings.length > 0 ? (
                liveCourse.recordings.map((recording: any, index: number) => {
                  const isActive = activeItem?.type === 'media' && activeItem.data.id === recording.id;
                  return (
                    <li key={recording.id || index}>
                      <button
                        onClick={() => setActiveItem({ type: 'media', data: recording })}
                        className={`w-full text-left p-3 rounded-xl flex items-start gap-3 transition-colors border ${
                          isActive 
                            ? 'bg-secondary-container border-secondary/30 text-on-secondary-container' 
                            : 'bg-surface border-surface-variant hover:border-secondary/30 text-on-surface'
                        }`}
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-secondary' : 'text-on-surface-variant'}`}>
                            {recording.type === 'pdf' ? 'picture_as_pdf' : recording.type === 'audio' ? 'audio_file' : 'play_circle'}
                          </span>
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h4 className={`text-sm font-semibold mb-1 truncate ${isActive ? 'text-secondary-fixed' : ''}`}>
                            {recording.title}
                          </h4>
                          {recording.duration && recording.duration !== 'N/A' && (
                            <span className="text-xs opacity-80 flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px]">schedule</span>
                              {recording.duration}
                            </span>
                          )}
                        </div>
                      </button>
                    </li>
                  );
                })
              ) : (
                <li className="p-8 flex flex-col items-center justify-center text-center text-on-surface-variant opacity-70">
                  <span className="material-symbols-outlined text-4xl mb-2">folder_open</span>
                  <p className="text-sm">No resources available.</p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
