"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import TutorSidebar from '@/components/TutorSidebar';

export default function TutorSchedulingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-background text-on-background antialiased flex h-screen overflow-hidden">
      {/* SideNavBar */}
      <TutorSidebar activePath="/tutor/scheduling" />

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col h-full overflow-y-auto w-full ml-16 lg:ml-64">
        
        {/* TopNavBar (Mobile only) */}
        <header className="flex lg:hidden bg-surface dark:bg-surface-dim shadow-sm fixed top-0 w-full z-50 justify-between items-center px-4 h-16">
          <h1 className="font-headline text-[24px] font-bold text-primary dark:text-primary-fixed">Abu-Yahya School</h1>
          <button className="text-primary p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>
        
        <div className="p-4 lg:p-10 mt-16 lg:mt-0 flex-grow max-w-[1280px] mx-auto w-full">
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <h2 className="font-headline text-[32px] font-semibold text-on-surface mb-2">Live Class Schedule</h2>
              <p className="font-body text-[16px] text-on-surface-variant">Manage your upcoming Arabic and Quran sessions.</p>
            </div>
            <button 
              className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm text-[14px] font-bold hover:bg-primary-container transition-colors flex items-center gap-2 shadow-ambient"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="material-symbols-outlined">add</span>
              Schedule New Session
            </button>
          </div>
          
          {/* Bento Grid Layout for Dashboard Focus */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full pb-20">
            
            {/* Main Calendar View (Takes up 2 cols on XL) */}
            <div className="xl:col-span-2 bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-surface-variant flex flex-col h-[600px]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline text-[18px] font-semibold text-on-surface">September 2024</h3>
                <div className="flex gap-2">
                  <button className="p-2 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors border border-outline-variant">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="p-2 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors border border-outline-variant">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
              
              {/* Simplified Weekly Calendar Structure */}
              <div className="flex-grow flex flex-col">
                <div className="grid grid-cols-7 gap-2 mb-2 text-center border-b border-surface-variant pb-2">
                  <div className="font-label-sm text-[14px] text-on-surface-variant">Mon</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant">Tue</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant">Wed</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant">Thu</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant">Fri</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant">Sat</div>
                  <div className="font-label-sm text-[14px] text-on-surface-variant">Sun</div>
                </div>
                
                <div className="grid grid-cols-7 gap-2 flex-grow">
                  {/* Empty days */}
                  <div className="p-2 border border-surface-variant/50 rounded-lg bg-surface-container/30 min-h-[80px]"></div>
                  <div className="p-2 border border-surface-variant/50 rounded-lg bg-surface-container/30 min-h-[80px]"></div>
                  
                  {/* Day 1 */}
                  <div className="p-2 border border-surface-variant rounded-lg bg-surface-container-lowest min-h-[80px] relative">
                    <span className="font-label-sm text-[14px] text-on-surface absolute top-2 right-2">1</span>
                  </div>
                  
                  {/* Day 2 (Active/Current) */}
                  <div className="p-2 border-2 border-primary rounded-lg bg-surface-container-low min-h-[80px] relative">
                    <span className="font-label-sm text-[14px] text-primary font-bold absolute top-2 right-2">2</span>
                    <div className="mt-6 bg-secondary-container text-on-secondary-container text-xs p-1 rounded font-body truncate">10:00 - Beginner</div>
                  </div>
                  
                  {/* Day 3 */}
                  <div className="p-2 border border-surface-variant rounded-lg bg-surface-container-lowest min-h-[80px] relative">
                    <span className="font-label-sm text-[14px] text-on-surface absolute top-2 right-2">3</span>
                    <div className="mt-6 bg-primary-container text-on-primary-container text-xs p-1 rounded font-body truncate">14:00 - Adv.</div>
                  </div>
                  
                  {/* More days (simplified for structural representation) */}
                  <div className="p-2 border border-surface-variant rounded-lg bg-surface-container-lowest min-h-[80px] relative"><span className="font-label-sm text-[14px] text-on-surface absolute top-2 right-2">4</span></div>
                  <div className="p-2 border border-surface-variant rounded-lg bg-surface-container-lowest min-h-[80px] relative"><span className="font-label-sm text-[14px] text-on-surface absolute top-2 right-2">5</span></div>
                  <div className="p-2 border border-surface-variant rounded-lg bg-surface-container-lowest min-h-[80px] relative"><span className="font-label-sm text-[14px] text-on-surface absolute top-2 right-2">6</span></div>
                  <div className="p-2 border border-surface-variant rounded-lg bg-surface-container-lowest min-h-[80px] relative"><span className="font-label-sm text-[14px] text-on-surface absolute top-2 right-2">7</span></div>
                  <div className="p-2 border border-surface-variant rounded-lg bg-surface-container-lowest min-h-[80px] relative"><span className="font-label-sm text-[14px] text-on-surface absolute top-2 right-2">8</span></div>
                </div>
              </div>
            </div>
            
            {/* Upcoming & Status List */}
            <div className="flex flex-col gap-6">
              
              {/* Session Status Widget */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-surface-variant">
                <h3 className="font-headline text-[18px] font-semibold text-on-surface mb-4">Today's Sessions</h3>
                <div className="space-y-4">
                  
                  {/* Upcoming Class */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-surface border border-outline-variant/30 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary-fixed-dim">schedule</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className="font-label-sm text-[14px] text-on-surface font-bold">Arabic Level 1</h4>
                        <span className="text-xs font-semibold px-2 py-1 rounded bg-secondary-container text-on-secondary-container">Upcoming</span>
                      </div>
                      <p className="font-body text-sm text-on-surface-variant mt-1">10:00 AM - 11:30 AM</p>
                      <div className="mt-2 flex gap-2">
                        <span className="text-xs bg-surface-container-high px-2 py-1 rounded text-on-surface-variant">3 Students</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Completed Class */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-surface border border-outline-variant/30 opacity-70">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className="font-label-sm text-[14px] text-on-surface font-bold">Quran Recitation</h4>
                        <span className="text-xs font-semibold px-2 py-1 rounded bg-primary-fixed text-on-primary-fixed">Completed</span>
                      </div>
                      <p className="font-body text-sm text-on-surface-variant mt-1">08:00 AM - 09:00 AM</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      {/* Schedule New Session Modal (Hidden by default based on state) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4" id="schedule-modal">
          <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-lg w-full max-h-[921px] overflow-y-auto border border-surface-variant">
            <div className="p-6 border-b border-surface-variant flex justify-between items-center sticky top-0 bg-surface-container-lowest z-10">
              <h3 className="font-headline text-[32px] font-semibold text-primary">Schedule Session</h3>
              <button 
                className="text-on-surface-variant hover:text-error transition-colors p-1"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form className="p-6 space-y-6">
              {/* Class Name */}
              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Class Title</label>
                <input 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="e.g., Arabic Level 2 - Grammar" 
                  type="text" 
                />
              </div>
              
              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-[14px] text-on-surface mb-2">Date</label>
                  <input 
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    type="date" 
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-[14px] text-on-surface mb-2">Time</label>
                  <input 
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    type="time" 
                  />
                </div>
              </div>
              
              {/* Duration */}
              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Duration (Minutes)</label>
                <select 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  defaultValue="60"
                >
                  <option value="30">30</option>
                  <option value="45">45</option>
                  <option value="60">60</option>
                  <option value="90">90</option>
                </select>
              </div>
              
              {/* Assigned Level/Students */}
              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Target Audience</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center p-3 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
                    <input 
                      className="text-primary focus:ring-primary w-4 h-4" 
                      name="audience" 
                      type="radio"
                      defaultChecked 
                    />
                    <span className="ml-3 font-body text-sm text-on-surface">Specific Level</span>
                  </label>
                  <label className="flex items-center p-3 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
                    <input 
                      className="text-primary focus:ring-primary w-4 h-4" 
                      name="audience" 
                      type="radio" 
                    />
                    <span className="ml-3 font-body text-sm text-on-surface">Individual Student</span>
                  </label>
                </div>
              </div>
              
              <div className="pt-4 border-t border-surface-variant flex justify-end gap-3">
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors" 
                  onClick={() => setIsModalOpen(false)} 
                  type="button"
                >
                  Cancel
                </button>
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold bg-primary text-on-primary hover:bg-primary-container transition-colors shadow-sm" 
                  type="button"
                >
                  Create Session
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
