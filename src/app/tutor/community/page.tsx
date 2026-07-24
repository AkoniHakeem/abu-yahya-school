"use client";

import React, { useState, useEffect } from 'react';
import TutorSidebar from '@/components/TutorSidebar';
import TutorMobileNav from '@/components/TutorMobileNav';
import { fetchAPI } from '@/lib/api-client';

export default function TutorCommunityPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // New Post State
  const [isComposing, setIsComposing] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchAPI('/api/tutor/community');
        setPosts(data);
      } catch (error) {
        console.error('Failed to load community posts', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API post creation
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const newPost = {
        id: `POST-${Date.now()}`,
        title: newTitle,
        content: newContent,
        author: 'Tutor User', // Mock current user
        date: new Date().toISOString()
      };
      
      setPosts([newPost, ...posts]);
      setNewTitle('');
      setNewContent('');
      setIsComposing(false);
    } catch (error) {
      console.error('Failed to create post', error);
      alert('Failed to post announcement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <TutorSidebar activePath="/tutor/community" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full px-4 md:px-10 py-8 md:py-12 bg-surface-bright min-h-screen flex justify-center">
        
        <div className="w-full max-w-3xl flex flex-col gap-8">
          
          {/* Mobile Nav Header */}
          <TutorMobileNav />

          <header className="flex justify-between items-center">
            <div>
              <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Community Board</h1>
              <p className="text-on-surface-variant text-[18px]">Broadcast announcements to your students.</p>
            </div>
            {!isComposing && (
              <button 
                onClick={() => setIsComposing(true)}
                className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined">campaign</span>
                New Broadcast
              </button>
            )}
          </header>

          {isComposing && (
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-elevated border border-primary/30">
              <h2 className="font-headline text-[20px] font-bold text-on-surface mb-4">Compose Announcement</h2>
              <form onSubmit={handlePostSubmit} className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Subject / Title" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface w-full"
                  required
                />
                <textarea 
                  placeholder="Write your message here... This will be visible to all your students." 
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  rows={5}
                  className="px-4 py-3 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface resize-y w-full"
                  required
                />
                <div className="flex justify-end gap-3 mt-2">
                  <button 
                    type="button" 
                    onClick={() => setIsComposing(false)}
                    className="px-6 py-2 rounded-lg font-label-sm font-medium border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmitting ? 'Posting...' : 'Post Announcement'}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {loading ? (
              <div className="p-8 text-center text-on-surface-variant animate-pulse">Loading feed...</div>
            ) : posts.length > 0 ? (
              posts.map((post: any) => (
                <article key={post.id} className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container text-primary-fixed flex items-center justify-center font-bold text-lg">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-headline font-semibold text-on-surface leading-tight">{post.author}</h3>
                        <span className="text-xs text-on-surface-variant">Tutor</span>
                      </div>
                    </div>
                    <div className="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">
                      {new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  
                  <h2 className="font-headline text-[20px] font-bold text-primary mb-3">{post.title}</h2>
                  <p className="text-on-surface leading-relaxed whitespace-pre-wrap">{post.content}</p>
                  
                  <div className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-between items-center text-sm text-on-surface-variant">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                      <span>Broadcasted to all your students</span>
                    </div>
                    <button className="text-error hover:underline flex items-center gap-1 text-xs font-medium">
                      <span className="material-symbols-outlined text-[14px]">delete</span> Delete
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="bg-surface-container-lowest rounded-xl p-12 text-center text-on-surface-variant shadow-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-[48px] mb-4 opacity-50">forum</span>
                <p className="text-lg">No announcements posted yet.</p>
                <button 
                  onClick={() => setIsComposing(true)}
                  className="text-primary font-medium mt-2 hover:underline"
                >
                  Create your first broadcast
                </button>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
