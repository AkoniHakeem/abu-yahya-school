"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  
  return (
    <li>
      <Link href={href} className={`${baseClass} ${activeClass}`} title={text}>
        <span className={`material-symbols-outlined ${isActive ? 'icon-filled' : ''}`}>{icon}</span>
        <span className="font-label-sm text-[14px] hidden lg:inline">{text}</span>
      </Link>
    </li>
  );
}

export default function StudentSidebar({ activePath: propActivePath }: { activePath?: string }) {
  const pathname = usePathname();
  const activePath = propActivePath || pathname;

  return (
    <aside className="flex flex-col h-screen p-2 lg:p-4 gap-4 bg-surface-container-lowest shadow-md fixed left-0 top-0 w-16 lg:w-64 z-40 overflow-y-auto shrink-0">
      <div className="mb-6 flex items-center justify-center lg:justify-start pt-4 px-2">
        <span className="font-headline text-[24px] lg:text-[32px] font-semibold text-primary text-center lg:text-left hidden lg:block tracking-tight">Abu-Yahya</span>
        <span className="font-headline text-[20px] font-semibold text-primary lg:hidden">AY</span>
      </div>
      
      <div className="flex items-center gap-3 lg:p-3 bg-surface-container-low rounded-lg mb-4 justify-center lg:justify-start">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden shrink-0 bg-surface-variant flex items-center justify-center ring-2 ring-primary/20">
          <span className="material-symbols-outlined text-primary text-[24px]">person</span>
        </div>
        <div className="hidden lg:block">
          <p className="font-label-sm text-[14px] font-semibold text-primary truncate">Student User</p>
          <p className="text-xs text-on-surface-variant truncate">Arabic Level 2</p>
        </div>
      </div>
      
      <ul className="flex-1 flex flex-col gap-2">
        <NavItem href="/student/dashboard" icon="dashboard" text="Dashboard" isActive={activePath === '/student/dashboard'} />
        <NavItem href="/student/courses" icon="menu_book" text="My Courses" isActive={activePath === '/student/courses'} />
        <NavItem href="/student/schedule" icon="calendar_month" text="Schedule" isActive={activePath === '/student/schedule'} />
        <NavItem href="/student/assignments" icon="assignment" text="Assignments" isActive={activePath === '/student/assignments'} />
        <NavItem href="/student/community" icon="forum" text="Community" isActive={activePath === '/student/community'} />
        <NavItem href="/billing" icon="payments" text="Billing" isActive={activePath === '/billing'} />
        <NavItem href="/student/messages" icon="mail" text="Messages" isActive={activePath === '/student/messages'} />
        <NavItem href="/student/settings" icon="settings" text="Settings" isActive={activePath === '/student/settings'} />
      </ul>
      
      <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-outline-variant/30">
        <NavItem href="/student/support" icon="help" text="Support" isActive={activePath === '/student/support'} />
        <NavItem href="/api/logout" icon="logout" text="Logout" isActive={false} isError />
      </div>
    </aside>
  );
}
