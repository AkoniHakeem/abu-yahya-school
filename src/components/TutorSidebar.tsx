"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTutorStore } from '@/store/tutor-store';

interface NavItemProps {
  href: string;
  icon: string;
  text: string;
  isActive: boolean;
  isError?: boolean;
}

function NavItem({ href, icon, text, isActive, isError = false }: NavItemProps) {
  const baseClass = "flex items-center gap-3 p-3 rounded-lg transition-all justify-center lg:justify-start";
  const activeClass = isActive 
    ? "bg-primary-container text-on-primary-container font-bold" 
    : (isError ? "text-error hover:bg-error-container" : "text-on-surface-variant hover:bg-surface-container-high");
  
  const content = (
    <>
      <span className={`material-symbols-outlined ${isActive ? 'icon-filled' : ''}`}>{icon}</span>
      <span className="font-label-sm text-[14px] hidden lg:inline">{text}</span>
    </>
  );

  return (
    <li>
      {href.startsWith('/api/') ? (
        <a href={href} className={`${baseClass} ${activeClass}`} title={text}>
          {content}
        </a>
      ) : (
        <Link href={href} className={`${baseClass} ${activeClass}`} title={text}>
          {content}
        </Link>
      )}
    </li>
  );
}

export default function TutorSidebar({ activePath: propActivePath }: { activePath?: string }) {
  const pathname = usePathname();
  const activePath = propActivePath || pathname;
  
  const { settings, fetchSettings } = useTutorStore();

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const profileData = settings?.profileData || {};
  const name = profileData.name || 'Tutor User';
  const avatar = profileData.avatar;

  return (
    <aside className="flex flex-col h-screen p-2 lg:p-4 gap-4 bg-surface-container-lowest shadow-md fixed left-0 top-0 w-16 lg:w-64 z-40 overflow-y-auto shrink-0">
      <div className="mb-6 flex items-center justify-center lg:justify-start pt-4 px-2">
        <span className="font-headline text-[24px] lg:text-[32px] font-semibold text-primary text-center lg:text-left hidden lg:block tracking-tight">Abu-Yahya</span>
        <span className="font-headline text-[20px] font-semibold text-primary lg:hidden">AY</span>
      </div>
      
      <div className="flex items-center gap-3 lg:p-3 bg-surface-container-low rounded-lg mb-4 justify-center lg:justify-start">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold overflow-hidden shrink-0 ring-2 ring-primary/20">
          {avatar && avatar.length > 2 ? (
            <img 
              className="w-full h-full object-cover" 
              src={avatar}
              alt="Tutor Profile"
            />
          ) : (
            <span className="text-sm">{avatar || 'T'}</span>
          )}
        </div>
        <div className="hidden lg:block">
          <p className="font-label-sm text-[14px] font-semibold text-primary truncate">{name}</p>
          <p className="text-xs text-on-surface-variant truncate">Ustadh</p>
        </div>
      </div>
      
      <ul className="flex-1 flex flex-col gap-2">
        <NavItem href="/tutor/dashboard" icon="dashboard" text="Dashboard" isActive={activePath === '/tutor/dashboard'} />
        <NavItem href="/tutor/classes" icon="school" text="Classes" isActive={activePath === '/tutor/classes'} />
        <NavItem href="/tutor/scheduling" icon="calendar_month" text="Schedule" isActive={activePath === '/tutor/scheduling'} />
        <NavItem href="/tutor/students" icon="groups" text="Students" isActive={activePath === '/tutor/students'} />
        <NavItem href="/tutor/settings" icon="settings" text="Settings" isActive={activePath === '/tutor/settings'} />
        {/* Hidden as requested:
        <NavItem href="/tutor/assignments" icon="assignment_turned_in" text="Grading" isActive={activePath === '/tutor/assignments'} />
        <NavItem href="/tutor/earnings" icon="payments" text="Earnings" isActive={activePath === '/tutor/earnings'} />
        <NavItem href="/tutor/community" icon="forum" text="Community" isActive={activePath === '/tutor/community'} />
        <NavItem href="/tutor/messages" icon="mail" text="Messages" isActive={activePath === '/tutor/messages'} />
        */}
      </ul>
      
      <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-outline-variant/30">
        {/* <NavItem href="/tutor/support" icon="help" text="Support" isActive={activePath === '/tutor/support'} /> */}
        <NavItem href="/api/logout" icon="logout" text="Logout" isActive={false} isError />
      </div>
    </aside>
  );
}
