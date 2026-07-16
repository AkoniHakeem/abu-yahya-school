import React from 'react';
import StudentSidebar from '@/components/StudentSidebar';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <StudentSidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full flex flex-col min-h-screen">
        {/* TopNavBar (Mobile Only) */}
        <nav className="bg-surface shadow-sm fixed top-0 w-full z-30 flex lg:hidden justify-between items-center px-4 h-16">
          <div className="flex items-center gap-2">
            <button aria-label="Menu" className="p-2 text-primary">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-headline text-[24px] font-bold text-primary">Abu-Yahya</span>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[20px]">person</span>
          </div>
        </nav>
        
        {/* Actual Page Content */}
        <div className="flex-1 mt-16 lg:mt-0 p-4 lg:p-10 max-w-[1280px] mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
