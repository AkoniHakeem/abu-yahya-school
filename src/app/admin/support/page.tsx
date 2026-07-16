"use client";

import React, { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminSupportPage() {
  const [activeTab, setActiveTab] = useState('open');
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  // Mock tickets data
  const [tickets, setTickets] = useState([
    {
      id: 'TCK-2026-089',
      user: 'Ahmed Hassan (Student)',
      type: 'Technical',
      status: 'Open',
      date: '2026-07-10',
      subject: 'Video recording not playing',
      description: 'The video recording for the Nahw Class on July 8th is not playing. It just shows a loading spinner.',
      history: [
        { sender: 'Ahmed Hassan', time: '2026-07-10 14:30', text: 'The video recording for the Nahw Class on July 8th is not playing. It just shows a loading spinner.' }
      ]
    },
    {
      id: 'TCK-2026-102',
      user: 'Tutor User (Tutor)',
      type: 'Platform',
      status: 'Open',
      date: '2026-07-15',
      subject: 'Unable to upload video recording',
      description: 'I tried uploading the recording for my 10am class but I keep getting a 500 error.',
      history: [
        { sender: 'Tutor User', time: '2026-07-15 11:15', text: 'I tried uploading the recording for my 10am class but I keep getting a 500 error.' }
      ]
    },
    {
      id: 'TCK-2026-042',
      user: 'Fatima Khan (Student)',
      type: 'Billing',
      status: 'Resolved',
      date: '2026-06-15',
      subject: 'Double charged for Standard Plan',
      description: 'I noticed two charges of $40 on my credit card this month.',
      history: [
        { sender: 'Fatima Khan', time: '2026-06-15 09:00', text: 'I noticed two charges of $40 on my credit card this month.' },
        { sender: 'Admin Support', time: '2026-06-15 11:30', text: 'Apologies for the inconvenience. We have refunded the duplicate charge. It should reflect in 3-5 business days.' }
      ]
    }
  ]);

  const [replyText, setReplyText] = useState('');

  const filteredTickets = tickets.filter(t => 
    activeTab === 'all' || 
    (activeTab === 'open' && t.status === 'Open') || 
    (activeTab === 'resolved' && t.status === 'Resolved')
  );

  const selectedTicket = tickets.find(t => t.id === selectedTicketId);

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedTicket) return;

    const updatedTickets = tickets.map(t => {
      if (t.id === selectedTicket.id) {
        return {
          ...t,
          history: [
            ...t.history,
            { sender: 'Admin Support', time: new Date().toLocaleString(), text: replyText }
          ]
        };
      }
      return t;
    });

    setTickets(updatedTickets);
    setReplyText('');
  };

  const handleResolve = () => {
    if (!selectedTicket) return;
    const updatedTickets = tickets.map(t => {
      if (t.id === selectedTicket.id) {
        return { ...t, status: 'Resolved' };
      }
      return t;
    });
    setTickets(updatedTickets);
    setSelectedTicketId(null);
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      <AdminSidebar activePath="/admin/support" />

      <main className="flex-1 ml-16 lg:ml-64 w-full flex flex-col h-screen bg-surface-bright">
        
        {/* Mobile Nav Header */}
        <div className="lg:hidden flex justify-between items-center border-b border-outline-variant/30 p-4 shrink-0">
           <span className="font-headline text-[24px] font-bold text-primary">Abu-Yahya</span>
           <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgUWIh3NShjVW_YjjZngKemTnbJ7MsfVwKj7VkiPmDXtPKM7ciOvAIuIsMwVZrecyiKL5FVfBhiko4L1U3BlDYeFk0v-Vao1a4Q3FzXBaWL3yxch6CXttNfRym9j87OOewN4U856hYjWwxX831eWkjojsQxTAcO8bDVxsZnX-0bX6qtKUlE3iUO_pXrbxVIWqcihmSsfUe1B928US4jMabESrNpTjAqUo_pCj86iZZg9eeCid8NPWQ"
                alt="Admin Profile"
              />
            </div>
        </div>

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
                    {filteredTickets.map(ticket => (
                      <li 
                        key={ticket.id}
                        className={`p-4 cursor-pointer hover:bg-surface-container-low transition-colors ${selectedTicketId === ticket.id ? 'bg-primary-container/20 border-l-4 border-primary' : 'border-l-4 border-transparent'}`}
                        onClick={() => setSelectedTicketId(ticket.id)}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-sm font-bold text-on-surface">{ticket.id}</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            ticket.status === 'Resolved' ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container text-on-error-container'
                          }`}>
                            {ticket.status}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-on-surface truncate mb-1">{ticket.subject}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-on-surface-variant truncate mr-2">{ticket.user}</span>
                          <span className="text-xs text-on-surface-variant whitespace-nowrap">{ticket.date}</span>
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
                          <h2 className="font-headline text-[20px] font-bold text-on-surface">{selectedTicket.subject}</h2>
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                            selectedTicket.status === 'Resolved' ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container text-on-error-container'
                          }`}>
                            {selectedTicket.status}
                          </span>
                        </div>
                        <p className="text-sm text-on-surface-variant">Reported by: <span className="font-medium text-on-surface">{selectedTicket.user}</span> • {selectedTicket.type}</p>
                      </div>
                    </div>
                    {selectedTicket.status === 'Open' && (
                      <div className="flex gap-2">
                        <button onClick={handleResolve} className="text-sm font-medium text-secondary border border-secondary hover:bg-secondary-container px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">check_circle</span> Mark Resolved
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 p-6 overflow-y-auto bg-surface-container-lowest flex flex-col gap-6">
                    {selectedTicket.history.map((msg, idx) => (
                      <div key={idx} className={`flex flex-col max-w-[80%] ${msg.sender === 'Admin Support' ? 'self-end items-end' : 'self-start items-start'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-on-surface-variant">{msg.sender}</span>
                          <span className="text-xs text-on-surface-variant/70">{msg.time}</span>
                        </div>
                        <div className={`p-4 rounded-xl text-sm ${
                          msg.sender === 'Admin Support' 
                            ? 'bg-primary text-on-primary rounded-br-sm' 
                            : 'bg-surface-container-high text-on-surface rounded-bl-sm border border-outline-variant/30'
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {selectedTicket.status === 'Open' && (
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
      </main>
    </div>
  );
}
