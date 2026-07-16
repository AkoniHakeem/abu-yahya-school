import React from 'react';
import { fetchAPI } from '@/lib/api-client';

export default async function StudentCommunityPage() {
  const posts = await fetchAPI('/api/student/community');

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto w-full">
      <header className="text-center md:text-left border-b border-outline-variant/30 pb-6">
        <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Community Announcements</h1>
        <p className="text-on-surface-variant text-[18px]">Stay updated with the latest news and broadcasts from your tutors and the administration.</p>
      </header>

      <div className="flex flex-col gap-6">
        {posts && posts.length > 0 ? (
          posts.map((post: any) => (
            <article key={post.id} className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-primary-fixed flex items-center justify-center font-bold text-lg">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-headline font-semibold text-on-surface leading-tight">{post.author}</h3>
                    <span className="text-xs text-on-surface-variant">Tutor / Administrator</span>
                  </div>
                </div>
                <div className="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded-md">
                  {new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
              
              <h2 className="font-headline text-[20px] font-bold text-primary mb-3">{post.title}</h2>
              <p className="text-on-surface leading-relaxed whitespace-pre-wrap">{post.content}</p>
              
              {/* Optional: Read-only interaction markers (e.g. likes/seen by) can be added here */}
              <div className="mt-4 pt-4 border-t border-outline-variant/30 flex items-center gap-4 text-sm text-on-surface-variant">
                <div className="flex items-center gap-1 cursor-not-allowed">
                  <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                  <span>Like</span>
                </div>
                <div className="flex items-center gap-1 cursor-not-allowed">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                  <span>Seen by everyone</span>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="bg-surface-container-lowest rounded-xl p-12 text-center text-on-surface-variant shadow-sm border border-outline-variant/30">
            <span className="material-symbols-outlined text-[48px] mb-4 opacity-50">forum</span>
            <p className="text-lg">No announcements have been posted yet.</p>
            <p className="text-sm mt-2">Check back later for updates from your tutors.</p>
          </div>
        )}
      </div>
    </div>
  );
}
