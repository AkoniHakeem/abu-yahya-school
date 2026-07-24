'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStudentStore, Course, Lesson } from '@/store/student-store';

interface CoursePlayerClientProps {
  initialCourse: Course;
  allCourses: Course[];
}

export default function CoursePlayerClient({ initialCourse, allCourses }: CoursePlayerClientProps) {
  const router = useRouter();
  const initialize = useStudentStore(state => state.initialize);
  const storeCourses = useStudentStore(state => state.courses);
  const markLessonComplete = useStudentStore(state => state.markLessonComplete);

  useEffect(() => {
    // Initialize the store if it's empty (e.g. hard refresh on this page)
    if (storeCourses.length === 0) {
      initialize(null as any, allCourses);
    }
  }, [allCourses, initialize, storeCourses.length]);

  // Use the live course from the store to ensure progress reflects immediately
  // We merge recordings from initialCourse because initialCourse is freshly fetched via SSR
  const storeCourse = storeCourses.find(c => c.id === initialCourse.id);
  const liveCourse = storeCourse ? { ...storeCourse, recordings: initialCourse.recordings } : initialCourse;
  
  // Auto-select the first recording
  const [activeRecording, setActiveRecording] = useState<any>(
    liveCourse.recordings && liveCourse.recordings.length > 0 ? liveCourse.recordings[0] : null
  );

  useEffect(() => {
    // If we don't have an active recording but we do have recordings, or if the active recording is no longer in the list
    if (liveCourse.recordings && liveCourse.recordings.length > 0) {
      if (!activeRecording || !liveCourse.recordings.find((r: any) => r.id === activeRecording.id)) {
        setActiveRecording(liveCourse.recordings[0]);
      }
    } else {
      setActiveRecording(null);
    }
  }, [liveCourse.recordings, activeRecording]);

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
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
          {activeRecording ? (
            <>
              <div className="bg-black w-full aspect-video rounded-2xl overflow-hidden shadow-ambient relative group">
                {activeRecording.type === 'pdf' ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={activeRecording.url} 
                    title="PDF viewer" 
                    className="w-full h-full bg-white"
                  ></iframe>
                ) : activeRecording.type === 'audio' ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-white bg-surface-container-high">
                    <span className="material-symbols-outlined text-[80px] text-primary">audio_file</span>
                    <audio controls className="w-3/4 max-w-md mt-4">
                      <source src={activeRecording.url} />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                ) : activeRecording.url ? (
                  activeRecording.url.includes('youtube.com') || activeRecording.url.includes('youtu.be') ? (
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={getEmbedUrl(activeRecording.url)} 
                      title="Video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    <video 
                      controls 
                      className="w-full h-full bg-black object-contain"
                      src={activeRecording.url}
                    >
                      Your browser does not support the video element.
                    </video>
                  )
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white flex-col gap-4">
                    <span className="material-symbols-outlined text-[64px] opacity-50">play_circle</span>
                    <p>No media available for this recording.</p>
                  </div>
                )}
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-ambient border border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <h2 className="font-headline text-[24px] font-bold text-on-surface mb-2">{activeRecording.title}</h2>
                  {activeRecording.duration && activeRecording.duration !== 'N/A' && (
                    <p className="text-on-surface-variant text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">schedule</span> {activeRecording.duration}
                    </p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
              <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">video_library</span>
              <h3 className="font-headline text-[24px] font-bold text-on-surface mb-2">No Media Available</h3>
              <p className="text-on-surface-variant">This course does not have any media recordings added yet.</p>
            </div>
          )}
        </div>

        {/* Sidebar - Media List */}
        <div className="w-full lg:w-[350px] flex flex-col bg-surface-container-lowest rounded-2xl shadow-ambient border border-outline-variant/30 overflow-hidden flex-shrink-0 lg:h-full">
          <div className="p-4 border-b border-outline-variant/30 bg-surface-container-low flex justify-between items-center">
            <h3 className="font-headline text-[18px] font-bold text-on-surface">Course Media</h3>
          </div>
          <ul className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
            {liveCourse.recordings && liveCourse.recordings.length > 0 ? (
              liveCourse.recordings.map((recording: any, index: number) => (
                <li key={recording.id}>
                  <button
                    onClick={() => setActiveRecording(recording)}
                    className={`w-full text-left p-3 rounded-xl flex items-start gap-3 transition-colors ${
                      activeRecording?.id === recording.id 
                        ? 'bg-primary-container text-on-primary-container' 
                        : 'hover:bg-surface-container-low text-on-surface'
                    }`}
                  >
                    <div className="mt-0.5">
                      <span className={`material-symbols-outlined text-[20px] ${activeRecording?.id === recording.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                        {recording.type === 'pdf' ? 'picture_as_pdf' : recording.type === 'audio' ? 'audio_file' : 'play_circle'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-sm font-semibold mb-1 ${activeRecording?.id === recording.id ? 'text-primary-fixed' : ''}`}>
                        {index + 1}. {recording.title}
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
              ))
            ) : (
              <li className="p-4 text-center text-on-surface-variant text-sm italic">
                No media added yet.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
