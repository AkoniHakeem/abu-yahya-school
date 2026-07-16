import React from 'react';
import Link from 'next/link';
import AdminSidebar from '@/components/AdminSidebar';
export default function ClassCoordinationPage() {
  return (
    <div className="font-body text-body-md flex h-screen overflow-hidden bg-background text-on-background">
      {/* SideNavBar */}
      <AdminSidebar activePath="/admin/classes" />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-surface-container-low ml-16 lg:ml-64">
        
        {/* Header */}
        <header className="bg-surface-container-lowest border-b border-outline-variant/20 px-8 py-6 flex justify-between items-center z-10 shadow-sm">
          <div>
            <h2 className="font-headline text-[32px] font-semibold text-on-surface">Class Coordination</h2>
            <p className="text-on-surface-variant mt-1 text-sm">Manage class groups, tutors, and student enrollments.</p>
          </div>
          <button className="bg-primary hover:bg-primary-container text-on-primary font-label-sm text-[14px] font-bold py-2.5 px-5 rounded-lg shadow-sm transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            Create New Class
          </button>
        </header>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Left Column: Create/Edit Class Form & Student Assignment (2/3 width) */}
            <div className="xl:col-span-2 flex flex-col gap-8">
              
              {/* Class Details Card */}
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
                      placeholder="e.g. Arabic Level 2 - Morning Batch" 
                      type="text"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-[14px] text-on-surface-variant">Assign Tutor</label>
                    <div className="relative">
                      <select 
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface pr-10"
                        defaultValue=""
                      >
                        <option disabled value="">Select a Tutor...</option>
                        <option value="ahmad">Ustadh Ahmad (Advanced)</option>
                        <option value="tariq">Ustadh Tariq (Beginner/Intermediate)</option>
                        <option value="fatima">Ustadha Fatima (Sisters Only)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">expand_more</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-[14px] text-on-surface-variant">Schedule</label>
                    <input 
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface placeholder:text-outline" 
                      placeholder="e.g. Mon/Wed 9:00 AM EST" 
                      type="text"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="font-label-sm text-[14px] text-on-surface-variant">Curriculum Level</label>
                    <div className="relative">
                      <select 
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2.5 appearance-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface pr-10"
                        defaultValue="level2"
                      >
                        <option value="level1">Level 1 (Foundation)</option>
                        <option value="level2">Level 2 (Intermediate)</option>
                        <option value="level3">Level 3 (Advanced)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3 mt-4">
                  <button className="px-5 py-2.5 rounded-lg border border-secondary text-secondary font-label-sm text-[14px] font-bold hover:bg-secondary/5 transition-colors">Save Draft</button>
                  <button className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-sm text-[14px] font-bold hover:bg-primary-container transition-colors shadow-sm">Initialize Class</button>
                </div>
              </div>

              {/* Student Directory for Assignment */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/10 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-6 border-b border-outline-variant/20 pb-4">
                  <h3 className="font-label-sm text-lg text-on-surface flex items-center gap-2 font-bold">
                    <span className="material-symbols-outlined text-primary">group_add</span>
                    Assign Students
                  </h3>
                  <div className="relative w-64">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-sm">search</span>
                    <input 
                      className="w-full bg-surface-container-low border border-outline-variant rounded-full pl-9 pr-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm text-on-surface placeholder:text-outline" 
                      placeholder="Search student directory..." 
                      type="text"
                    />
                  </div>
                </div>
                
                {/* Student List (Scrollable Area) */}
                <div className="overflow-y-auto pr-2 max-h-[400px]">
                  <ul className="flex flex-col gap-2">
                    {/* Student Row 1 */}
                    <li className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low border border-transparent hover:border-outline-variant/30 transition-colors group">
                      <div className="flex items-center gap-4">
                        <input defaultChecked className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest cursor-pointer" type="checkbox" />
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold text-sm">
                          ZA
                        </div>
                        <div>
                          <p className="font-label-sm text-on-surface font-bold">Zaid Abdullah</p>
                          <p className="text-xs text-on-surface-variant">Completed L1 &bull; ID: STU-492</p>
                        </div>
                      </div>
                      <span className="bg-primary-fixed text-on-primary-fixed-variant text-xs px-2 py-1 rounded-md font-bold">Recommended</span>
                    </li>
                    
                    {/* Student Row 2 */}
                    <li className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low border border-transparent hover:border-outline-variant/30 transition-colors group">
                      <div className="flex items-center gap-4">
                        <input defaultChecked className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest cursor-pointer" type="checkbox" />
                        <img 
                          className="w-10 h-10 rounded-full object-cover" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGw7IurFd5eI6yyBm8UR_6stNF0cGzmN5sNItgrL4hk-Kt3L8Kw9nVIe2U9LTFIpg6OIeTltrwXsWJm712t6VpUxz1ZNqe07tU2J77ynQv67zBa_EBeO2rKtgIhpace1xal-SpW2sCEkHned9JEheufSgI90WA9AcBaqEONNpvE8V6WJgdmjty6q1RVy0-ODbQDMBwkeuYe_InBx30IXvSJuryjmP0-WwvaadvDhzwUHYt6azqhBRh"
                          alt="Student Portrait"
                        />
                        <div>
                          <p className="font-label-sm text-on-surface font-bold">Omar Farooq</p>
                          <p className="text-xs text-on-surface-variant">Completed L1 &bull; ID: STU-118</p>
                        </div>
                      </div>
                    </li>
                    
                    {/* Student Row 3 */}
                    <li className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low border border-transparent hover:border-outline-variant/30 transition-colors group">
                      <div className="flex items-center gap-4">
                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest cursor-pointer" type="checkbox" />
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold text-sm">
                          YH
                        </div>
                        <div>
                          <p className="font-label-sm text-on-surface font-bold">Yusuf Hassan</p>
                          <p className="text-xs text-on-surface-variant">Transfer Student &bull; ID: STU-882</p>
                        </div>
                      </div>
                    </li>
                    
                    {/* Student Row 4 */}
                    <li className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low border border-transparent hover:border-outline-variant/30 transition-colors group opacity-60">
                      <div className="flex items-center gap-4">
                        <input disabled className="w-5 h-5 rounded border-outline-variant/50 bg-surface-container-lowest cursor-not-allowed" type="checkbox" />
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary/50 font-bold text-sm">
                          IA
                        </div>
                        <div>
                          <p className="font-label-sm text-on-surface font-bold">Ibrahim Ali</p>
                          <p className="text-xs text-error">Requires L1 Retake &bull; ID: STU-304</p>
                        </div>
                      </div>
                      <span className="text-xs text-on-surface-variant font-bold">Ineligible</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-4 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-sm text-on-surface-variant">
                  <span className="font-bold">2 Students Selected</span>
                  <button className="text-primary font-label-sm font-bold hover:underline">Clear Selection</button>
                </div>
              </div>
            </div>
            
            {/* Right Column: Active Classes Overview (1/3 width) */}
            <div className="flex flex-col gap-8">
              <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/10 overflow-hidden flex flex-col h-full">
                <div className="bg-surface-container-low p-4 border-b border-outline-variant/20 flex justify-between items-center">
                  <h3 className="font-label-sm text-on-surface font-bold">Active Classes</h3>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-bold">12 Total</span>
                </div>
                
                <div className="p-2 flex-1 overflow-y-auto">
                  {/* Class Card 1 */}
                  <div className="p-4 border-b border-outline-variant/10 hover:bg-surface-container-low/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-label-sm text-primary font-bold">Arabic L1 - Evening</h4>
                      <span className="flex items-center gap-1 text-xs text-surface-tint font-bold">
                        <span className="material-symbols-outlined text-[14px]">group</span>
                        15/20
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-3">Tutor: Ustadh Tariq</p>
                    <div className="w-full bg-surface-container-high rounded-full h-1.5 mb-1">
                      <div className="bg-surface-tint h-1.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-[10px] text-right text-on-surface-variant font-bold">75% Capacity</p>
                  </div>
                  
                  {/* Class Card 2 */}
                  <div className="p-4 border-b border-outline-variant/10 hover:bg-surface-container-low/50 transition-colors cursor-pointer bg-primary/5 border-l-2 border-l-primary">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-label-sm text-primary font-bold">Quranic Roots - Weekend</h4>
                      <span className="flex items-center gap-1 text-xs text-error font-bold">
                        <span className="material-symbols-outlined text-[14px]">group</span>
                        20/20
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-3">Tutor: Ustadha Fatima</p>
                    <div className="w-full bg-surface-container-high rounded-full h-1.5 mb-1">
                      <div className="bg-error h-1.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <p className="text-[10px] text-right text-error font-bold">Full Capacity</p>
                  </div>
                  
                  {/* Class Card 3 */}
                  <div className="p-4 hover:bg-surface-container-low/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-label-sm text-primary font-bold">Advanced Grammar (Nahw)</h4>
                      <span className="flex items-center gap-1 text-xs text-surface-tint font-bold">
                        <span className="material-symbols-outlined text-[14px]">group</span>
                        8/15
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-3">Tutor: Ustadh Ahmad</p>
                    <div className="w-full bg-surface-container-high rounded-full h-1.5 mb-1">
                      <div className="bg-surface-tint h-1.5 rounded-full" style={{ width: '53%' }}></div>
                    </div>
                    <p className="text-[10px] text-right text-on-surface-variant font-bold">53% Capacity</p>
                  </div>
                </div>
                
                <div className="p-4 bg-surface-container-low border-t border-outline-variant/20">
                  <button className="w-full text-center text-sm font-label-sm text-primary font-bold hover:underline">View All Classes</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
