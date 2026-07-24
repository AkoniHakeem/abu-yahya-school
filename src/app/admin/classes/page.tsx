import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import ClassesClient from './ClassesClient';

export default function ClassCoordinationPage() {
  return (
    <div className="font-body text-body-md flex h-screen overflow-hidden bg-background text-on-background">
      {/* SideNavBar */}
      <AdminSidebar activePath="/admin/classes" />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-surface-container-low ml-16 lg:ml-64">
        
        {/* Header */}
        <header className="bg-surface-container-lowest border-b border-outline-variant/20 px-8 py-6 flex justify-between items-center z-10 shadow-sm">
          <div>
            <h2 className="font-headline text-[32px] font-semibold text-on-surface">Class Coordination</h2>
            <p className="text-on-surface-variant mt-1 text-sm">Manage class groups, tutors, and student enrollments.</p>
          </div>
        </header>

        {/* Content */}
        <ClassesClient />
        
      </main>
    </div>
  );
}
