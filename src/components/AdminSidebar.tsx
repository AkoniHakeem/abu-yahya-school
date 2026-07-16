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

export default function AdminSidebar({ activePath: propActivePath }: { activePath?: string }) {
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgUWIh3NShjVW_YjjZngKemTnbJ7MsfVwKj7VkiPmDXtPKM7ciOvAIuIsMwVZrecyiKL5FVfBhiko4L1U3BlDYeFk0v-Vao1a4Q3FzXBaWL3yxch6CXttNfRym9j87OOewN4U856hYjWwxX831eWkjojsQxTAcO8bDVxsZnX-0bX6qtKUlE3iUO_pXrbxVIWqcihmSsfUe1B928US4jMabESrNpTjAqUo_pCj86iZZg9eeCid8NPWQ"
            alt="Admin Profile"
          />
        </div>
        <div className="hidden lg:block">
          <p className="font-label-sm text-[14px] font-semibold text-primary truncate">Admin User</p>
          <p className="text-xs text-on-surface-variant truncate">System Manager</p>
        </div>
      </div>
      
      <ul className="flex-1 flex flex-col gap-2">
        <NavItem href="/admin/dashboard" icon="dashboard" text="Dashboard" isActive={activePath === '/admin/dashboard'} />
        <NavItem href="/admin/users" icon="group" text="Users" isActive={activePath === '/admin/users'} />
        <NavItem href="/admin/classes" icon="menu_book" text="Classes" isActive={activePath === '/admin/classes'} />
        <NavItem href="/admin/financials" icon="payments" text="Financials" isActive={activePath === '/admin/financials'} />
        <NavItem href="/admin/reports" icon="bar_chart" text="Reports" isActive={activePath === '/admin/reports'} />
        <NavItem href="/admin/settings" icon="settings" text="Settings" isActive={activePath === '/admin/settings'} />
      </ul>
      
      <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-outline-variant/30">
        <NavItem href="/admin/support" icon="help" text="Support" isActive={activePath === '/admin/support'} />
        <NavItem href="/api/logout" icon="logout" text="Logout" isActive={false} isError />
      </div>
    </aside>
  );
}
