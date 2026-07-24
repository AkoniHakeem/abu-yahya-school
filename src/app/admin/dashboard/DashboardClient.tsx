'use client';

import React, { useEffect } from 'react';
import { useAdminStore } from '@/store/admin-store';

export default function DashboardClient() {
  const { fetchFinancials, fetchUsers, financials, users, isLoading } = useAdminStore();

  useEffect(() => {
    fetchFinancials();
    fetchUsers();
  }, [fetchFinancials, fetchUsers]);

  const activeStudents = users.filter(u => u.role === 'student').length;
  const totalTutors = users.filter(u => u.role === 'tutor').length;
  const revenue = financials?.totalRevenue || 0;

  return (
    <div className="flex-1 p-4 lg:p-10 mt-16 lg:mt-0 max-w-[1280px] mx-auto w-full flex flex-col gap-20">
      <header>
        <h1 className="font-display text-[48px] font-bold text-primary mb-2 hidden lg:block">Admin Overview</h1>
        <h1 className="font-headline text-[24px] font-bold text-primary mb-2 lg:hidden">Admin Overview</h1>
        <p className="text-on-surface-variant font-body text-[18px]">Platform statistics, financial performance, and content management.</p>
      </header>

      {isLoading && !financials ? (
        <div className="text-center text-on-surface-variant">Loading overview...</div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container rounded-bl-full opacity-10 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-on-surface-variant font-label-sm text-[14px] mb-1 uppercase tracking-wider">Total Revenue</p>
                <h2 className="font-headline text-[32px] font-semibold text-primary">
                  ${revenue.toLocaleString()}<span className="text-sm text-on-surface-variant font-normal ml-1">USD</span>
                </h2>
              </div>
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-primary-fixed">
                <span className="material-symbols-outlined">account_balance</span>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-container rounded-bl-full opacity-20 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-on-surface-variant font-label-sm text-[14px] mb-1 uppercase tracking-wider">Active Students</p>
                <h2 className="font-headline text-[32px] font-semibold text-primary">{activeStudents}</h2>
              </div>
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">school</span>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-fixed rounded-bl-full opacity-30 transition-transform group-hover:scale-110"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-on-surface-variant font-label-sm text-[14px] mb-1 uppercase tracking-wider">Total Tutors</p>
                <h2 className="font-headline text-[32px] font-semibold text-primary">{totalTutors}</h2>
              </div>
              <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">co_present</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
