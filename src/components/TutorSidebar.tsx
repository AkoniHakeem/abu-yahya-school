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

export default function TutorSidebar({ activePath: propActivePath }: { activePath?: string }) {
  const pathname = usePathname();
  const activePath = propActivePath || pathname;

  return (
    <aside className="flex flex-col h-screen p-2 lg:p-4 gap-4 bg-surface-container-lowest shadow-md fixed left-0 top-0 w-16 lg:w-64 z-40 overflow-y-auto shrink-0">
      <div className="mb-6 flex items-center justify-center lg:justify-start pt-4 px-2">
        <span className="font-headline text-[24px] lg:text-[32px] font-semibold text-primary text-center lg:text-left hidden lg:block tracking-tight">Abu-Yahya</span>
        <span className="font-headline text-[20px] font-semibold text-primary lg:hidden">AY</span>
      </div>
      
      <div className="flex items-center gap-3 lg:p-3 bg-surface-container-low rounded-lg mb-4 justify-center lg:justify-start">
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQmNn3_wV9f949N304033z2a7u29W47J4n9172V73412V4a984J7a49K7f9185J8a1V1a1a9a84a5K2V9J9a812J14J5K24V74V7574K4V147J15V7K2V5K2J47K9a5V7K24a5a5K24J815V45V7a11V1V74V15K21K91a5K87J7K91"
            alt="Tutor Profile"
          />
        </div>
        <div className="hidden lg:block">
          <p className="font-label-sm text-[14px] font-semibold text-primary truncate">Tutor User</p>
          <p className="text-xs text-on-surface-variant truncate">Arabic Instructor</p>
        </div>
      </div>
      
      <ul className="flex-1 flex flex-col gap-2">
        <NavItem href="/tutor/dashboard" icon="dashboard" text="Dashboard" isActive={activePath === '/tutor/dashboard'} />
        <NavItem href="/tutor/classroom" icon="co_present" text="My Classroom" isActive={activePath === '/tutor/classroom'} />
        <NavItem href="/tutor/scheduling" icon="calendar_month" text="Scheduling" isActive={activePath === '/tutor/scheduling'} />
        <NavItem href="/tutor/assignments/grade" icon="upload_file" text="Assignments" isActive={activePath === '/tutor/assignments/grade'} />
        <NavItem href="/tutor/students" icon="group" text="My Students" isActive={activePath === '/tutor/students'} />
        <NavItem href="/tutor/community" icon="forum" text="Community" isActive={activePath === '/tutor/community'} />
        <NavItem href="/tutor/earnings" icon="account_balance_wallet" text="Earnings" isActive={activePath === '/tutor/earnings'} />
        <NavItem href="/tutor/messages" icon="mail" text="Messages" isActive={activePath === '/tutor/messages'} />
        <NavItem href="/tutor/settings" icon="settings" text="Settings" isActive={activePath === '/tutor/settings'} />
      </ul>
      
      <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-outline-variant/30">
        <NavItem href="/tutor/support" icon="help" text="Support" isActive={activePath === '/tutor/support'} />
        <NavItem href="/api/logout" icon="logout" text="Logout" isActive={false} isError />
      </div>
    </aside>
  );
}
