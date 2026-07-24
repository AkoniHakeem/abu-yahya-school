"use client";

import React, { useEffect } from 'react';
import { useTutorStore } from '@/store/tutor-store';

export default function TutorMobileNav() {
  const { settings, fetchSettings } = useTutorStore();
  
  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const profileData = settings?.profileData || {};
  const avatar = profileData.avatar;

  return (
    <div className="lg:hidden flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
       <span className="font-headline text-[24px] font-bold text-primary">Abu-Yahya</span>
       <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold overflow-hidden shrink-0 ring-2 ring-primary/20">
          {avatar && avatar.length > 2 ? (
            <img 
              className="w-full h-full object-cover" 
              src={avatar}
              alt="Tutor Profile"
            />
          ) : (
            <span className="text-xs">{avatar || 'T'}</span>
          )}
        </div>
    </div>
  );
}
