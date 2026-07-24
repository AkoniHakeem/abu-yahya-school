"use client";

import React, { useState, useEffect } from 'react';
import TutorSidebar from '@/components/TutorSidebar';
import TutorMobileNav from '@/components/TutorMobileNav';
import { fetchAPI } from '@/lib/api-client';

export default function TutorMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchAPI('/api/tutor/messages');
        setMessages(data);
      } catch (error) {
        console.error('Failed to load messages', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const selectedMessage = messages.find(m => m.id === selectedId);

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <TutorSidebar activePath="/tutor/messages" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full flex flex-col h-screen bg-surface-bright">
        
        {/* Mobile Nav Header */}
        <TutorMobileNav />

        <div className="flex-1 flex flex-col p-4 lg:p-10 max-w-[1280px] mx-auto w-full h-full overflow-hidden gap-6">
          <header className="flex justify-between items-center shrink-0">
            <div>
              <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Messages</h1>
              <p className="text-on-surface-variant text-[18px]">Communicate with your students and administration.</p>
            </div>
            <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2 hidden md:flex">
              <span className="material-symbols-outlined">edit</span> New Message
            </button>
          </header>

          <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 flex-1 flex overflow-hidden min-h-[500px]">
            
            {/* Inbox List */}
            <div className={`w-full md:w-1/3 border-r border-outline-variant/30 flex flex-col ${selectedId ? 'hidden md:flex' : 'flex'}`}>
              <div className="p-4 border-b border-outline-variant/30">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                  <input 
                    type="text" 
                    placeholder="Search messages..." 
                    className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary text-sm"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                {loading ? (
                  <div className="p-4 text-center text-on-surface-variant animate-pulse">Loading...</div>
                ) : messages.length > 0 ? (
                  <ul className="divide-y divide-outline-variant/30">
                    {messages.map((msg) => (
                      <li 
                        key={msg.id} 
                        className={`p-4 cursor-pointer hover:bg-surface-container-low transition-colors ${selectedId === msg.id ? 'bg-primary-container/20 border-l-4 border-primary' : 'border-l-4 border-transparent'}`}
                        onClick={() => {
                          setSelectedId(msg.id);
                          if (!msg.isRead) {
                            setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, isRead: true } : m));
                          }
                        }}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <div className="flex items-center gap-2 truncate">
                            {!msg.isRead && <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>}
                            <span className={`text-sm truncate ${msg.isRead ? 'font-medium text-on-surface' : 'font-bold text-on-surface'}`}>
                              {msg.sender}
                            </span>
                          </div>
                          <span className="text-xs text-on-surface-variant whitespace-nowrap ml-2">
                            {new Date(msg.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className={`text-sm truncate ${msg.isRead ? 'text-on-surface-variant' : 'text-on-surface font-medium'}`}>
                          {msg.subject}
                        </p>
                        <p className="text-xs text-on-surface-variant truncate mt-1">{msg.preview}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-8 text-center text-on-surface-variant text-sm">No messages.</div>
                )}
              </div>
            </div>

            {/* Message Detail Pane */}
            <div className={`w-full md:w-2/3 flex flex-col ${!selectedId ? 'hidden md:flex' : 'flex'}`}>
              {selectedMessage ? (
                <>
                  <div className="p-4 md:p-6 border-b border-outline-variant/30 flex items-center gap-4 bg-surface-container-lowest shrink-0">
                    <button 
                      className="md:hidden text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg transition-colors flex items-center justify-center"
                      onClick={() => setSelectedId(null)}
                    >
                      <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <img src={selectedMessage.avatar} alt={selectedMessage.sender} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-headline text-[20px] font-bold text-on-surface">{selectedMessage.subject}</h2>
                      <div className="flex justify-between items-center text-sm text-on-surface-variant mt-1">
                        <span>From: <span className="font-medium text-on-surface">{selectedMessage.sender}</span></span>
                        <span>{new Date(selectedMessage.date).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 overflow-y-auto bg-surface-container-lowest">
                    <p className="text-on-surface leading-relaxed">{selectedMessage.preview} <br/><br/>(Mock detail content would go here. This represents the full body of the email/message.)</p>
                  </div>
                  <div className="p-4 border-t border-outline-variant/30 bg-surface-container-low shrink-0">
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder="Type your reply..." 
                        className="flex-1 px-4 py-2 bg-surface-container-lowest border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary"
                      />
                      <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        Send
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-on-surface-variant p-8 text-center bg-surface-container-lowest/50">
                  <span className="material-symbols-outlined text-[64px] mb-4 opacity-50">mail</span>
                  <p className="text-lg">Select a message to read.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Floating Action Button */}
          <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-elevated flex items-center justify-center hover:bg-primary/90 transition-colors z-50">
            <span className="material-symbols-outlined text-[24px]">edit</span>
          </button>
        </div>
      </main>
    </div>
  );
}
