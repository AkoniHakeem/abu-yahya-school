'use client';

import React, { useState, useEffect } from 'react';
import { useAdminStore } from '@/store/admin-store';

export default function SupportClient() {
  const { tickets, fetchTickets, resolveTicket } = useAdminStore();
  const [activeTab, setActiveTab] = useState('open');
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const filteredTickets = tickets.filter((t: any) => 
    activeTab === 'all' || 
    (activeTab === 'open' && t.status === 'Open') || 
    (activeTab === 'resolved' && t.status === 'Resolved')
  );

  const selectedTicket = tickets.find((t: any) => t.ticketId === selectedTicketId);

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedTicket) return;
    // In a real app we'd save this reply. For this mock, we'll just resolve or alert.
    alert('Reply sent! (Mock implementation)');
    setReplyText('');
  };

  const handleResolve = async () => {
    if (!selectedTicket) return;
    await resolveTicket(selectedTicket.ticketId);
    setSelectedTicketId(null);
  };

  return (
    <div className="flex-1 flex flex-col p-4 lg:p-10 max-w-[1440px] mx-auto w-full h-full overflow-hidden gap-6">
      <header className="shrink-0 flex justify-between items-end">
        <div>
          <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Support Desk</h1>
          <p className="font-body text-[16px] text-on-surface-variant">Manage and resolve tickets from students and tutors.</p>
        </div>
      </header>

      <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 flex-1 flex overflow-hidden min-h-[500px]">
        
        {/* Ticket List Panel */}
        <div className={`w-full md:w-1/3 border-r border-outline-variant/30 flex flex-col ${selectedTicketId ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-4 border-b border-outline-variant/30 flex flex-col gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input 
                type="text" 
                placeholder="Search tickets..." 
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary text-sm"
              />
            </div>
            <div className="flex gap-2 bg-surface-container-low p-1 rounded-lg">
              <button 
                onClick={() => setActiveTab('open')}
                className={`flex-1 text-sm font-medium py-1.5 rounded-md transition-colors ${activeTab === 'open' ? 'bg-surface text-on-surface shadow-sm' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}
              >
                Open
              </button>
              <button 
                onClick={() => setActiveTab('resolved')}
                className={`flex-1 text-sm font-medium py-1.5 rounded-md transition-colors ${activeTab === 'resolved' ? 'bg-surface text-on-surface shadow-sm' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}
              >
                Resolved
              </button>
              <button 
                onClick={() => setActiveTab('all')}
                className={`flex-1 text-sm font-medium py-1.5 rounded-md transition-colors ${activeTab === 'all' ? 'bg-surface text-on-surface shadow-sm' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}
              >
                All
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredTickets.length > 0 ? (
              <ul className="divide-y divide-outline-variant/30">
                {filteredTickets.map((ticket: any) => (
                  <li 
                    key={ticket.ticketId}
                    className={`p-4 cursor-pointer hover:bg-surface-container-low transition-colors ${selectedTicketId === ticket.ticketId ? 'bg-primary-container/20 border-l-4 border-primary' : 'border-l-4 border-transparent'}`}
                    onClick={() => setSelectedTicketId(ticket.ticketId)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-bold text-on-surface">{ticket.ticketId}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        ticket.status === 'Resolved' ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container text-on-error-container'
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-on-surface truncate mb-1">{ticket.issue}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-on-surface-variant truncate mr-2">{ticket.user}</span>
                      <span className="text-xs text-on-surface-variant whitespace-nowrap">{ticket.role}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-8 text-center text-on-surface-variant text-sm">No tickets found.</div>
            )}
          </div>
        </div>

        {/* Ticket Detail Panel */}
        <div className={`w-full md:w-2/3 flex flex-col ${!selectedTicketId ? 'hidden md:flex' : 'flex'}`}>
          {selectedTicket ? (
            <>
              <div className="p-4 md:p-6 border-b border-outline-variant/30 bg-surface-container-lowest shrink-0">
                <div className="flex items-center gap-4 mb-4">
                  <button 
                    className="md:hidden text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg transition-colors flex items-center justify-center -ml-2"
                    onClick={() => setSelectedTicketId(null)}
                  >
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="font-headline text-[20px] font-bold text-on-surface">{selectedTicket.issue}</h2>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        selectedTicket.status === 'Resolved' ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container text-on-error-container'
                      }`}>
                        {selectedTicket.status}
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant">Reported by: <span className="font-medium text-on-surface">{selectedTicket.user}</span> • {selectedTicket.role}</p>
                  </div>
                </div>
                {selectedTicket.status !== 'Resolved' && (
                  <div className="flex gap-2">
                    <button onClick={handleResolve} className="text-sm font-medium text-secondary border border-secondary hover:bg-secondary-container px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">check_circle</span> Mark Resolved
                    </button>
                  </div>
                )}
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto bg-surface-container-lowest flex flex-col gap-6">
                 {/* Mock history */}
                 <div className={`flex flex-col max-w-[80%] self-start items-start`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-on-surface-variant">{selectedTicket.user}</span>
                      <span className="text-xs text-on-surface-variant/70">Recently</span>
                    </div>
                    <div className="p-4 rounded-xl text-sm bg-surface-container-high text-on-surface rounded-bl-sm border border-outline-variant/30">
                      {selectedTicket.issue}
                    </div>
                  </div>
              </div>
              
              {selectedTicket.status !== 'Resolved' && (
                <div className="p-4 border-t border-outline-variant/30 bg-surface-container-low shrink-0">
                  <form onSubmit={handleReply} className="flex gap-4">
                    <textarea 
                      placeholder="Type your reply..." 
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      rows={2}
                      className="flex-1 px-4 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary resize-none"
                    />
                    <button 
                      type="submit"
                      disabled={!replyText.trim()}
                      className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex flex-col items-center justify-center gap-1 disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      Send
                    </button>
                  </form>
                </div>
              )}
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-on-surface-variant p-8 text-center bg-surface-container-lowest/50">
              <span className="material-symbols-outlined text-[64px] mb-4 opacity-50">support_agent</span>
              <p className="text-lg">Select a ticket to view details and reply.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
