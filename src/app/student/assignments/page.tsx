"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchAPI } from '@/lib/api-client';

export default function StudentAssignmentsPage() {
  const [assignments, setAssignments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingId, setUploadingId] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchAPI('/api/student/assignments');
        setAssignments(data);
      } catch (error) {
        console.error('Failed to load assignments', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    setUploadingId(id);
    
    try {
      // Simulate API upload call
      await fetchAPI(`/api/student/assignments/${id}/submit`, {
        method: 'POST',
      });
      
      // Update local state to reflect submission
      setAssignments(prev => prev.map(a => 
        a.id === id ? { ...a, status: 'submitted' } : a
      ));
    } catch (error) {
      console.error('Upload failed', error);
      alert('Failed to upload assignment.');
    } finally {
      setUploadingId(null);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-on-surface-variant animate-pulse">Loading assignments...</div>;
  }

  // Group assignments by status
  const pending = assignments.filter(a => a.status === 'pending');
  const submitted = assignments.filter(a => a.status === 'submitted');
  const graded = assignments.filter(a => a.status === 'graded');

  const renderAssignmentCard = (assignment: any) => (
    <div key={assignment.id} className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
      <div className="flex justify-between items-start gap-2">
        <span className={`text-xs font-bold uppercase px-2 py-1 rounded w-fit ${
          assignment.type === 'Monthly Assessment' ? 'bg-error-container text-on-error-container' : 'bg-secondary-container text-on-secondary-container'
        }`}>
          {assignment.type}
        </span>
        {assignment.grade && (
          <span className="font-headline text-[18px] font-bold text-primary">{assignment.grade}</span>
        )}
      </div>
      
      <div>
        <h3 className="font-headline text-[16px] font-bold text-on-surface">{assignment.title}</h3>
        <p className="text-on-surface-variant text-sm">{assignment.courseTitle}</p>
      </div>

      <div className="flex items-center gap-2 text-sm text-on-surface-variant border-b border-outline-variant/30 pb-3 mb-1">
        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
        {new Date(assignment.dueDate).toLocaleDateString()}
      </div>

      {/* Attachments Section */}
      {assignment.attachedFiles && assignment.attachedFiles.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-on-surface-variant">Materials:</p>
          {assignment.attachedFiles.map((file: any, idx: number) => (
            <Link key={idx} href={file.url} className="flex items-center gap-2 text-sm text-primary hover:underline bg-surface-container-low p-2 rounded-lg">
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span className="truncate">{file.name}</span>
              <span className="text-xs text-on-surface-variant ml-auto">{file.size}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Action Area based on status */}
      <div className="mt-auto pt-2">
        {assignment.status === 'pending' && (
          <div>
            <input 
              type="file" 
              id={`upload-${assignment.id}`} 
              className="hidden" 
              onChange={(e) => handleFileUpload(e, assignment.id)}
              disabled={uploadingId === assignment.id}
            />
            <label 
              htmlFor={`upload-${assignment.id}`} 
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-label-sm font-medium transition-colors cursor-pointer text-center
                ${uploadingId === assignment.id ? 'bg-surface-variant text-on-surface-variant' : 'bg-primary text-on-primary hover:bg-primary/90 shadow-sm'}
              `}
            >
              <span className="material-symbols-outlined text-[18px]">
                {uploadingId === assignment.id ? 'hourglass_empty' : 'upload_file'}
              </span>
              {uploadingId === assignment.id ? 'Uploading...' : 'Upload Work'}
            </label>
          </div>
        )}

        {assignment.status === 'submitted' && (
          <div className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-lg font-label-sm font-medium cursor-not-allowed">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            Submitted - Pending Grade
          </div>
        )}

        {assignment.status === 'graded' && assignment.feedback && (
          <div className="bg-primary-container/30 border border-primary/20 p-3 rounded-lg mt-2">
            <p className="text-xs font-bold text-primary mb-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">comment</span> Feedback
            </p>
            <p className="text-sm text-on-surface-variant italic">"{assignment.feedback}"</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Assignments & Assessments</h1>
        <p className="text-on-surface-variant text-[18px]">Submit your work, download materials, and review feedback.</p>
      </header>

      {/* Kanban-style Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Pending Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-surface-container border border-outline-variant/30 rounded-lg p-3 flex justify-between items-center">
            <h2 className="font-headline text-[18px] font-bold text-on-surface">To Do</h2>
            <span className="bg-primary text-on-primary text-xs font-bold px-2 py-1 rounded-full">{pending.length}</span>
          </div>
          <div className="flex flex-col gap-4">
            {pending.length > 0 ? pending.map(renderAssignmentCard) : (
              <div className="text-center p-6 text-on-surface-variant text-sm border border-dashed border-outline-variant/50 rounded-xl">No pending assignments!</div>
            )}
          </div>
        </div>

        {/* Submitted Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-surface-container border border-outline-variant/30 rounded-lg p-3 flex justify-between items-center">
            <h2 className="font-headline text-[18px] font-bold text-on-surface">Submitted</h2>
            <span className="bg-surface-variant text-on-surface-variant text-xs font-bold px-2 py-1 rounded-full">{submitted.length}</span>
          </div>
          <div className="flex flex-col gap-4">
            {submitted.length > 0 ? submitted.map(renderAssignmentCard) : (
              <div className="text-center p-6 text-on-surface-variant text-sm border border-dashed border-outline-variant/50 rounded-xl">You haven't submitted anything yet.</div>
            )}
          </div>
        </div>

        {/* Graded Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-surface-container border border-outline-variant/30 rounded-lg p-3 flex justify-between items-center">
            <h2 className="font-headline text-[18px] font-bold text-on-surface">Graded</h2>
            <span className="bg-secondary text-on-secondary text-xs font-bold px-2 py-1 rounded-full">{graded.length}</span>
          </div>
          <div className="flex flex-col gap-4">
            {graded.length > 0 ? graded.map(renderAssignmentCard) : (
              <div className="text-center p-6 text-on-surface-variant text-sm border border-dashed border-outline-variant/50 rounded-xl">No grades received yet.</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
