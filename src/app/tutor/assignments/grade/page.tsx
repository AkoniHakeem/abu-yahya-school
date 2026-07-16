import React from 'react';
import Link from 'next/link';
import TutorSidebar from '@/components/TutorSidebar';

export default function TutorAssignmentGradingPage() {
  return (
    <div className="flex flex-col min-h-screen font-body text-body-md bg-background text-on-background">
      {/* TopNavBar (Web) / Hidden on Mobile due to lack of BottomNavBar in destination rule logic contextually */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-10 h-20 bg-surface dark:bg-surface-dim shadow-sm">
        <div className="flex items-center gap-4">
          <span className="font-headline text-[32px] font-bold text-primary dark:text-primary-fixed">Abu-Yahya School</span>
        </div>
        
        <TutorSidebar activePath="/tutor/assignments/grade" />
        
        <div className="flex items-center gap-4">
          <button className="font-label-sm text-[14px] px-4 py-2 rounded-lg border border-primary text-primary hover:bg-surface-container-high transition-colors">Sign In</button>
        </div>
      </header>
      
      <div className="flex flex-1 mt-20">
        
        {/* SideNavBar */}
        <aside className="hidden lg:flex flex-col h-screen p-4 gap-4 bg-surface-container-lowest dark:bg-inverse-surface shadow-md left-0 top-0 w-64 fixed z-40 overflow-y-auto">
          <div className="flex flex-col items-center mb-8 mt-4">
            <img 
              className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-primary-container" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtOzpYidStmIf-4OJa-s_H6m62Xfxf4eY71xHvZL23pXwy1fuIRAaqW1SCdPZFVolhm1ruhUrbmjiAHJSZs4S-r_NH1hqbZFFbwIrPK7ZQuHu0kw479oRRc0EP1g3pzZYt4iCZzjAC3qBS69FFpoW0YlWRUQp0jh6LALs1Ke66NV4r2Kaa_3tmAtJO9_HodZ03uxbjuJQTqzWZe8aF6oaDtL1l_7uMcIiiAObb_at6puyeHD66IwmI"
              alt="Student Profile" 
            />
            <h3 className="font-label-sm text-[14px] text-primary font-bold">Welcome, Abu Yahya</h3>
            <p className="font-label-sm text-[14px] text-on-surface-variant">Arabic Level 2</p>
          </div>
          
          <nav className="flex flex-col gap-2 flex-1">
            <Link href="/tutor/classroom" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg transition-all active:translate-x-1 duration-200">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-sm text-[14px]">Dashboard</span>
            </Link>
            <Link href="/tutor/scheduling" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg transition-all active:translate-x-1 duration-200">
              <span className="material-symbols-outlined">menu_book</span>
              <span className="font-label-sm text-[14px]">Lessons</span>
            </Link>
            
            {/* Active Nav Item */}
            <Link href="/tutor/assignments/grade" className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-lg font-bold transition-all active:translate-x-1 duration-200">
              <span className="material-symbols-outlined icon-filled">upload_file</span>
              <span className="font-label-sm text-[14px]">Assignments</span>
            </Link>
            
            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg transition-all active:translate-x-1 duration-200">
              <span className="material-symbols-outlined">quiz</span>
              <span className="font-label-sm text-[14px]">Quizzes</span>
            </Link>
            <Link href="/billing" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg transition-all active:translate-x-1 duration-200">
              <span className="material-symbols-outlined">payments</span>
              <span className="font-label-sm text-[14px]">Billing</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg transition-all active:translate-x-1 duration-200">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-label-sm text-[14px]">Settings</span>
            </Link>
          </nav>
          
          <button className="w-full py-2 bg-gradient-to-r from-secondary-container to-secondary-fixed text-on-secondary-container rounded-lg font-label-sm text-[14px] shadow-sm mt-4 hover:opacity-90 transition-opacity">
            Resume Last Lesson
          </button>
          
          <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-outline-variant">
            <Link href="#" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg transition-all active:translate-x-1 duration-200">
              <span className="material-symbols-outlined">help</span>
              <span className="font-label-sm text-[14px]">Support</span>
            </Link>
            <Link href="/api/logout" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg transition-all active:translate-x-1 duration-200">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-sm text-[14px]">Logout</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-16 lg:ml-64 p-4 md:p-10 bg-background min-h-[calc(100vh-80px)]">
          <div className="max-w-[1280px] mx-auto h-full flex flex-col gap-6">
            
            {/* Page Header */}
            <div className="flex justify-between items-center bg-surface-container-lowest p-6 rounded-xl shadow-ambient border border-outline-variant/30">
              <div>
                <h1 className="font-headline text-[32px] font-semibold text-primary mb-1">Grade Submission</h1>
                <p className="font-body text-[16px] text-on-surface-variant">Reviewing: <span className="font-semibold text-on-background">Tafseer Al-Jalalayn - Surah Al-Mulk Analysis</span></p>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-surface-container-high text-primary rounded-full font-label-sm text-[14px] border border-outline-variant/50">Pending Review</span>
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                  Back to List
                </button>
              </div>
            </div>
            
            {/* Grading Interface Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 min-h-[600px] h-full lg:h-[calc(100vh-280px)]">
              
              {/* Left: Document Viewer */}
              <div className="xl:col-span-7 bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 flex flex-col overflow-hidden">
                <div className="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">picture_as_pdf</span>
                    <span className="font-label-sm text-[14px] font-semibold text-on-background">assignment_submission_final.pdf</span>
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
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7wWVVIb0c2WB_0srPvkLxr9JEcExnBJ_Qiq1eGCIb-lbaB76U4mR47b3g-fFgLWxuQxxKUvJHBN8nBbQkFjr_ClO2HT2If9za3rKF-hvuV6J3xrJRycMHn7X-oYFmN059-dvyAliN3tEu3R707qb2vvnanRcOniq6ffP8JkFZTUhAWTWLvhYuLhnc9qRom-dQDO7J4YlGJ8J3gr8q4wlDNCAcBz3upSAn0C-ocgO2wOTlwFiB4rzN"
                      alt="Student Thumbnail" 
                    />
                    <div>
                      <h4 className="font-label-sm text-[14px] text-on-background font-bold">Ahmed Al-Farsi</h4>
                      <p className="font-body text-[16px] text-on-surface-variant text-sm">Submitted: Oct 24, 2024 - 10:30 AM</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/30">
                      <p className="text-xs text-on-surface-variant mb-1">Previous Grade</p>
                      <p className="font-label-sm text-[14px] text-primary font-bold">92/100</p>
                    </div>
                    <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/30">
                      <p className="text-xs text-on-surface-variant mb-1">Avg. Performance</p>
                      <p className="font-label-sm text-[14px] text-primary font-bold">Excellent</p>
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
                          />
                          <span className="text-on-surface-variant font-label-sm text-[14px]">/ 20</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-outline-variant/30 pt-4 flex justify-between items-center">
                      <span className="font-label-sm text-[14px] text-on-background font-bold">Total Score:</span>
                      <span className="font-headline text-[32px] font-semibold text-primary">-- / 100</span>
                    </div>
                    
                    {/* Feedback Area */}
                    <div className="flex flex-col gap-2 flex-1 min-h-[150px]">
                      <label className="font-label-sm text-[14px] text-on-background">Tutor Comments</label>
                      <textarea 
                        className="w-full flex-1 p-4 bg-surface-container-lowest border border-outline rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body text-[16px] resize-none" 
                        placeholder="Provide detailed feedback here to aid the student's learning journey..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="p-6 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-end gap-4 shrink-0">
                    <button className="px-6 py-2 rounded-lg border border-primary text-primary font-label-sm text-[14px] font-bold hover:bg-surface-container-high transition-colors">Save Draft</button>
                    <button className="px-6 py-2 rounded-lg bg-primary text-on-primary font-label-sm text-[14px] font-bold shadow-sm hover:bg-primary-container transition-colors flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      Submit Grade
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
