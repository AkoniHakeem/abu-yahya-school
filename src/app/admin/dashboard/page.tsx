import React from 'react';
import Link from 'next/link';
import AdminSidebar from '@/components/AdminSidebar';
export default function AdminDashboardPage() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <AdminSidebar activePath="/admin/dashboard" />

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
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo3qWoZ-ab5nE0dltTmeo0bkevZyQSevy6NN8Pnv6oHnyYg9Pxj2uY4ft5MOTHKUkI_gAWmGt7tXHHaZf816A5Bq4bBudH_jpkrux-KPhCbgiacD5HI2uC_g7BuGIJ4dzlQu1nrCVCHGopJujYVzjTAecKwqLjSU4AhZLvTPmlaHMUNm01o7IH8OJhY4X265xsnoOsh-RaVsszrtY0aQe74iYgtScquMlBpGO8nNd7ygEvivCn7RWg"
              alt="Admin Profile"
            />
          </div>
        </nav>
        
        <div className="flex-1 p-4 lg:p-10 mt-16 lg:mt-0 max-w-[1280px] mx-auto w-full flex flex-col gap-20">
          
          {/* Page Header */}
          <header>
            <h1 className="font-display text-[48px] font-bold text-primary mb-2 hidden lg:block">Admin Overview</h1>
            <h1 className="font-headline text-[24px] font-bold text-primary mb-2 lg:hidden">Admin Overview</h1>
            <p className="text-on-surface-variant font-body text-[18px]">Platform statistics, financial performance, and content management.</p>
          </header>
          
          {/* High-Level Stats (Bento Grid Style) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stat Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container rounded-bl-full opacity-10 transition-transform group-hover:scale-110"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-on-surface-variant font-label-sm text-[14px] mb-1 uppercase tracking-wider">Total Revenue</p>
                  <h2 className="font-headline text-[32px] font-semibold text-primary">
                    $45,280<span className="text-sm text-on-surface-variant font-normal ml-1">USD</span>
                  </h2>
                </div>
                <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-primary-fixed">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary font-medium flex items-center">
                  <span className="material-symbols-outlined text-sm">trending_up</span>+12.5%
                </span>
                <span className="text-on-surface-variant">vs last month</span>
              </div>
            </div>
            
            {/* Stat Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-container rounded-bl-full opacity-20 transition-transform group-hover:scale-110"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-on-surface-variant font-label-sm text-[14px] mb-1 uppercase tracking-wider">Active Students</p>
                  <h2 className="font-headline text-[32px] font-semibold text-primary">1,248</h2>
                </div>
                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">school</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary font-medium flex items-center">
                  <span className="material-symbols-outlined text-sm">trending_up</span>+5.2%
                </span>
                <span className="text-on-surface-variant">vs last month</span>
              </div>
            </div>
            
            {/* Stat Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-fixed rounded-bl-full opacity-30 transition-transform group-hover:scale-110"></div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-on-surface-variant font-label-sm text-[14px] mb-1 uppercase tracking-wider">Total Tutors</p>
                  <h2 className="font-headline text-[32px] font-semibold text-primary">42</h2>
                </div>
                <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">co_present</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-on-surface-variant font-medium flex items-center">
                  <span className="material-symbols-outlined text-sm">horizontal_rule</span>0%
                </span>
                <span className="text-on-surface-variant">vs last month</span>
              </div>
            </div>
            
          </section>
        </div>
      </main>
    </div>
  );
}
