"use client";

import React from 'react';
import { useAdminStore } from '@/store/admin-store';

export default function AdminMobileNav() {
  const { settings } = useAdminStore();
  
  const profileData = settings?.profileData || {};
  const avatar = profileData.avatar;

  return (
    <nav className="bg-surface shadow-sm fixed top-0 w-full z-30 flex lg:hidden justify-between items-center px-4 h-16">
      <div className="flex items-center gap-2">
        <button aria-label="Menu" className="p-2 text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <span className="font-headline text-[24px] font-bold text-primary">Abu-Yahya</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold overflow-hidden shrink-0 ring-2 ring-primary/20">
        {avatar && avatar.length > 2 ? (
          <img 
            className="w-full h-full object-cover" 
            src={avatar}
            alt="Admin Profile"
          />
        ) : (
          <span className="text-xs">{avatar || 'AU'}</span>
        )}
      </div>
    </nav>
  );
}
