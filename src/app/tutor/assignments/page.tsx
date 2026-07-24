"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import TutorSidebar from '@/components/TutorSidebar';
import { useTutorStore } from '@/store/tutor-store';
import { fetchAPI } from '@/lib/api-client';

export default function TutorAssignmentGradingPage() {
  const { pendingAssignments, initializeStore, submitGrade } = useTutorStore();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  // Grading form state
  const [grammarScore, setGrammarScore] = useState<number | ''>('');
  const [comprehensionScore, setComprehensionScore] = useState<number | ''>('');
  const [presentationScore, setPresentationScore] = useState<number | ''>('');
  const [comments, setComments] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        if (pendingAssignments.length === 0) {
          const data = await fetchAPI('/api/tutor/assignments');
          initializeStore({ pendingAssignments: data });
        }
      } catch (error) {
        console.error('Failed to load assignments', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [pendingAssignments.length, initializeStore]);

  const currentAssignment = pendingAssignments[0];

  const totalScore = (Number(grammarScore) || 0) + (Number(comprehensionScore) || 0) + (Number(presentationScore) || 0);

  const handleSubmitGrade = async () => {
    if (!currentAssignment) return;
    setSubmitting(true);
    try {
      await fetchAPI('/api/tutor/assignments/grade', {
        method: 'POST',
        body: JSON.stringify({ assignmentId: currentAssignment.id, score: totalScore, comments })
      });
      submitGrade(currentAssignment.id, totalScore);
      // Reset form
      setGrammarScore('');
      setComprehensionScore('');
      setPresentationScore('');
      setComments('');
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <TutorSidebar activePath="/tutor/assignments" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full p-4 md:p-10 bg-surface-bright min-h-screen">
        <div className="max-w-[1280px] mx-auto h-full flex flex-col gap-6">
          
          {loading ? (
             <div className="flex-1 flex justify-center items-center text-on-surface-variant animate-pulse">Loading assignments...</div>
          ) : !currentAssignment ? (
             <div className="flex-1 flex flex-col justify-center items-center text-on-surface-variant p-10 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-[64px] mb-4 opacity-50">task_alt</span>
                <h2 className="font-headline text-[24px] font-bold text-on-surface mb-2">All Caught Up!</h2>
                <p>There are no pending assignments to grade at the moment.</p>
                <Link href="/tutor/dashboard" className="mt-6 px-6 py-2 bg-primary text-on-primary rounded-lg font-bold hover:bg-primary/90 transition-colors">Return to Dashboard</Link>
             </div>
          ) : (
            <>
              {/* Page Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-surface-container-lowest p-6 rounded-xl shadow-ambient border border-outline-variant/30 gap-4">
                <div>
                  <h1 className="font-headline text-[32px] font-semibold text-primary mb-1">Grade Submission</h1>
                  <p className="font-body text-[16px] text-on-surface-variant">Reviewing: <span className="font-semibold text-on-background">{currentAssignment.course} - {currentAssignment.title}</span></p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-surface-container-high text-primary rounded-full font-label-sm text-[14px] border border-outline-variant/50">Pending Review</span>
                  <Link href="/tutor/dashboard" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Dashboard
                  </Link>
                </div>
              </div>
              
              {/* Grading Interface Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 min-h-[600px] h-full lg:h-[calc(100vh-220px)]">
                
                {/* Left: Document Viewer */}
                <div className="xl:col-span-7 bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 flex flex-col overflow-hidden">
                  <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">picture_as_pdf</span>
                      <span className="font-label-sm text-[14px] font-semibold text-on-background">{currentAssignment.documentUrl}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined">zoom_in</span></button>
                      <button className="p-2 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined">zoom_out</span></button>
                      <button className="p-2 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined">download</span></button>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-surface-dim/30 p-8 overflow-y-auto flex justify-center relative">
                    {/* Placeholder for PDF */}
                    <div className="w-full max-w-[800px] min-h-[800px] h-full bg-white shadow-md border border-outline-variant/20 p-12 flex flex-col items-center justify-center text-on-surface-variant relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center w-full h-full opacity-50 mix-blend-multiply" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUkEkgJ9bMtar9WC7KTTwXAuz3S_4KLkzhq699U52YT_1txGgey9DoF5nvnFU4HEed7gxfVWha_ALZNoTXr5rl28QzVcLlq3aancIBF9or827ypIWPral8xqLNN465fcjzTcBr4cHfwt6dX8GB6PuXKf-uIpXy6QKGgiM1ozyN-a1hwzkUqjJKpXQP66jO1w76Zq4cPzQHX5-vHaQHA9uk8DZDb8kW_s86URyQXG8sJuxSW3kYvLFU')" }}
                      ></div>
                      <span className="material-symbols-outlined text-[64px] mb-4 opacity-30">description</span>
                      <p className="font-body text-[16px] z-10 text-center">Student PDF Content renders here.<br />Use controls above to zoom.</p>
                    </div>
                  </div>
                </div>
                
                {/* Right: Grading & Sidebar Info */}
                <div className="xl:col-span-5 flex flex-col gap-6 h-full">
                  
                  {/* Student Context Mini-Sidebar */}
                  <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        className="w-12 h-12 rounded-full object-cover border border-outline-variant" 
                        src={currentAssignment.studentAvatar}
                        alt="Student Thumbnail" 
                      />
                      <div>
                        <h4 className="font-label-sm text-[14px] text-on-background font-bold">{currentAssignment.studentName}</h4>
                        <p className="font-body text-[16px] text-on-surface-variant text-sm">Submitted: {currentAssignment.submittedAt}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/30">
                        <p className="text-xs text-on-surface-variant mb-1">Previous Grade</p>
                        <p className="font-label-sm text-[14px] text-primary font-bold">{currentAssignment.previousGrade || '--'}/100</p>
                      </div>
                      <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/30">
                        <p className="text-xs text-on-surface-variant mb-1">Avg. Performance</p>
                        <p className="font-label-sm text-[14px] text-primary font-bold">{currentAssignment.avgPerformance || '--'}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Grading Form */}
                  <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 flex-1 flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-outline-variant/30 bg-surface-container-low">
                      <h3 className="font-label-sm text-[14px] text-primary font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined">edit_note</span>
                        Evaluation Rubric
                      </h3>
                    </div>
                    <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-6">
                      {/* Rubric Items */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="font-body text-[16px] text-on-background">Grammar &amp; Syntax (Nahw)</label>
                          <div className="flex items-center gap-2">
                            <input 
                              className="w-20 px-3 py-2 bg-surface-container-lowest border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body text-[16px] text-center" 
                              max="40" min="0" placeholder="--" type="number" 
                              value={grammarScore}
                              onChange={(e) => setGrammarScore(e.target.value ? Number(e.target.value) : '')}
                            />
                            <span className="text-on-surface-variant font-label-sm text-[14px]">/ 40</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="font-body text-[16px] text-on-background">Comprehension (Fahm)</label>
                          <div className="flex items-center gap-2">
                            <input 
                              className="w-20 px-3 py-2 bg-surface-container-lowest border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body text-[16px] text-center" 
                              max="40" min="0" placeholder="--" type="number" 
                              value={comprehensionScore}
                              onChange={(e) => setComprehensionScore(e.target.value ? Number(e.target.value) : '')}
                            />
                            <span className="text-on-surface-variant font-label-sm text-[14px]">/ 40</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="font-body text-[16px] text-on-background">Presentation &amp; Clarity</label>
                          <div className="flex items-center gap-2">
                            <input 
                              className="w-20 px-3 py-2 bg-surface-container-lowest border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body text-[16px] text-center" 
                              max="20" min="0" placeholder="--" type="number" 
                              value={presentationScore}
                              onChange={(e) => setPresentationScore(e.target.value ? Number(e.target.value) : '')}
                            />
                            <span className="text-on-surface-variant font-label-sm text-[14px]">/ 20</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-outline-variant/30 pt-4 flex justify-between items-center">
                        <span className="font-label-sm text-[14px] text-on-background font-bold">Total Score:</span>
                        <span className="font-headline text-[32px] font-semibold text-primary">{totalScore} / 100</span>
                      </div>
                      
                      {/* Feedback Area */}
                      <div className="flex flex-col gap-2 flex-1 min-h-[150px]">
                        <label className="font-label-sm text-[14px] text-on-background">Tutor Comments</label>
                        <textarea 
                          className="w-full flex-1 p-4 bg-surface-container-lowest border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body text-[16px] resize-none" 
                          placeholder="Provide detailed feedback here to aid the student's learning journey..."
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="p-6 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-end gap-4 shrink-0">
                      <button className="px-6 py-2 rounded-lg border border-primary text-primary font-label-sm text-[14px] font-bold hover:bg-surface-container-high transition-colors">Save Draft</button>
                      <button 
                        onClick={handleSubmitGrade}
                        disabled={submitting}
                        className="px-6 py-2 rounded-lg bg-primary text-on-primary font-label-sm text-[14px] font-bold shadow-sm hover:bg-primary-container transition-colors flex items-center gap-2 disabled:opacity-50"
                      >
                        {submitting ? (
                          <><span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> Submitting...</>
                        ) : (
                          <><span className="material-symbols-outlined text-[18px]">send</span> Submit Grade</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
