import React from 'react';
import StudentSidebar from '@/components/StudentSidebar';
import StudentMobileNav from '@/components/StudentMobileNav';

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
        <StudentMobileNav />
        {/* Actual Page Content */}
        <div className="flex-1 mt-16 lg:mt-0 p-4 lg:p-10 max-w-[1280px] mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
