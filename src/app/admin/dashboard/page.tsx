import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import AdminMobileNav from '@/components/AdminMobileNav';
import DashboardClient from './DashboardClient';

export default function AdminDashboardPage() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <AdminSidebar activePath="/admin/dashboard" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full flex flex-col min-h-screen">
        
        <AdminMobileNav />
        
        <DashboardClient />

      </main>
    </div>
  );
}
