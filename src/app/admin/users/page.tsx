import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import UsersClient from './UsersClient';

export default function AdminUserDirectoryPage() {
  return (
    <div className="bg-surface text-on-surface font-body h-screen w-full flex overflow-hidden">
      {/* SideNavBar */}
      <AdminSidebar activePath="/admin/users" />

      {/* Main Canvas */}
      <main className="flex-1 flex flex-col h-full bg-surface-container-low overflow-hidden relative ml-16 lg:ml-64">
        <UsersClient />
      </main>
    </div>
  );
}
