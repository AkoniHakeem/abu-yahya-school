"use client";

import React, { useState } from 'react';
import TutorSidebar from '@/components/TutorSidebar';
import TutorMobileNav from '@/components/TutorMobileNav';

export default function TutorSupportPage() {
  const [issueType, setIssueType] = useState('technical');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Mock list of previous tickets
  const [tickets, setTickets] = useState([
    { id: 'TCK-2026-102', type: 'Platform', status: 'Resolved', date: '2026-06-20', preview: 'Unable to upload video recording for class...' },
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setTickets([{
      id: `TCK-2026-${Math.floor(Math.random() * 900) + 100}`,
      type: issueType === 'technical' ? 'Technical' : issueType === 'payroll' ? 'Payroll' : 'Other',
      status: 'Open',
      date: new Date().toISOString().split('T')[0],
      preview: description.substring(0, 50) + '...'
    }, ...tickets]);
    
    setIsSubmitting(false);
    setSubmitted(true);
    setDescription('');
    
    // Reset success message after a few seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <TutorSidebar activePath="/tutor/support" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full flex flex-col h-screen overflow-y-auto bg-surface-bright">
        
        {/* Mobile Nav Header */}
        <TutorMobileNav />

        <div className="flex-1 p-4 lg:p-10 max-w-[1280px] mx-auto w-full">
          <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full">
            <header>
              <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Help & Support</h1>
              <p className="text-on-surface-variant text-[18px]">Contact administration for support.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Submit Ticket Form */}
              <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-ambient border border-outline-variant/30 flex flex-col gap-6 h-fit">
                <div className="flex flex-col gap-2">
                  <h2 className="font-headline text-[24px] font-bold text-on-surface">Submit a Ticket</h2>
                  <p className="text-sm text-on-surface-variant">Describe your issue in detail so we can help you efficiently.</p>
                </div>

                {submitted && (
                  <div className="bg-secondary-container text-on-secondary-container p-4 rounded-lg text-sm font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Ticket submitted successfully! Admin will review it shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="issueType" className="text-sm font-medium text-on-surface">Issue Type</label>
                    <select 
                      id="issueType" 
                      value={issueType}
                      onChange={(e) => setIssueType(e.target.value)}
                      className="px-4 py-3 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface appearance-none"
                      required
                    >
                      <option value="technical">Platform & Technical Support</option>
                      <option value="payroll">Payroll & Earnings</option>
                      <option value="student">Student Issues</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="text-sm font-medium text-on-surface">Description</label>
                    <textarea 
                      id="description" 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={5}
                      placeholder="Please describe the issue you are experiencing..."
                      className="px-4 py-3 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface resize-y"
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                  </button>
                </form>
              </div>

              {/* Previous Tickets */}
              <div className="flex flex-col gap-6">
                <div className="bg-surface-container-low rounded-xl p-6 md:p-8 border border-outline-variant/30 flex flex-col gap-6 flex-1">
                  <h2 className="font-headline text-[24px] font-bold text-on-surface">Your Tickets</h2>
                  
                  <div className="flex flex-col gap-4">
                    {tickets.length > 0 ? (
                      tickets.map(ticket => (
                        <div key={ticket.id} className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/50 flex flex-col gap-3 hover:border-primary/50 transition-colors cursor-pointer group">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-on-surface text-sm">{ticket.id}</span>
                              <span className="text-xs text-on-surface-variant bg-surface-variant px-2 py-0.5 rounded-md">{ticket.type}</span>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                              ticket.status === 'Resolved' ? 'bg-secondary-container text-on-secondary-container' : 'bg-tertiary-container text-on-tertiary-container'
                            }`}>
                              {ticket.status}
                            </span>
                          </div>
                          <p className="text-sm text-on-surface-variant line-clamp-2">{ticket.preview}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-on-surface-variant">{ticket.date}</span>
                            <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                              View Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center p-8 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[48px] mb-2 opacity-50">inbox</span>
                        <p>You haven't submitted any tickets yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
