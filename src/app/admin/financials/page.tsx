import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { fetchAPI } from '@/lib/api-client';

export default async function AdminFinancialsPage() {
  const data = await fetchAPI('/api/admin/financials');

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <AdminSidebar activePath="/admin/financials" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full px-4 md:px-10 py-8 md:py-12 bg-surface-bright min-h-screen">
        
        {/* Mobile Nav Header */}
        <div className="lg:hidden flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
           <span className="font-headline text-[24px] font-bold text-primary">Abu-Yahya</span>
           <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgUWIh3NShjVW_YjjZngKemTnbJ7MsfVwKj7VkiPmDXtPKM7ciOvAIuIsMwVZrecyiKL5FVfBhiko4L1U3BlDYeFk0v-Vao1a4Q3FzXBaWL3yxch6CXttNfRym9j87OOewN4U856hYjWwxX831eWkjojsQxTAcO8bDVxsZnX-0bX6qtKUlE3iUO_pXrbxVIWqcihmSsfUe1B928US4jMabESrNpTjAqUo_pCj86iZZg9eeCid8NPWQ"
                alt="Admin Profile"
              />
            </div>
        </div>

        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Financials Overview</h1>
            <p className="font-body text-[16px] text-on-surface-variant">Monitor revenue, subscriptions, and payouts.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none py-3 px-6 bg-surface-container-high text-primary rounded-lg font-label-sm text-[14px] font-bold hover:bg-surface-container-highest transition-all shadow-sm flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">download</span> Export
            </button>
          </div>
        </header>

        {/* High-Level Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col gap-2">
            <div className="flex justify-between items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-primary-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">attach_money</span>
              </div>
              <span className="text-xs font-bold text-secondary flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 14%</span>
            </div>
            <p className="text-sm text-on-surface-variant font-medium">Total Revenue</p>
            <p className="text-2xl lg:text-3xl font-bold text-on-surface">${data.totalRevenue.toLocaleString()}</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col gap-2">
            <div className="flex justify-between items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <span className="text-xs font-bold text-secondary flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 5%</span>
            </div>
            <p className="text-sm text-on-surface-variant font-medium">Monthly Recurring Revenue</p>
            <p className="text-2xl lg:text-3xl font-bold text-on-surface">${data.mrr.toLocaleString()}</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col gap-2">
            <div className="flex justify-between items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-tertiary-container text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined">card_membership</span>
              </div>
              <span className="text-xs font-bold text-secondary flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12</span>
            </div>
            <p className="text-sm text-on-surface-variant font-medium">Active Subscriptions</p>
            <p className="text-2xl lg:text-3xl font-bold text-on-surface">{data.activeSubscriptions}</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col gap-2">
            <div className="flex justify-between items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center">
                <span className="material-symbols-outlined">payments</span>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant font-medium">Pending Payouts</p>
            <p className="text-2xl lg:text-3xl font-bold text-on-surface">${data.pendingPayouts.toLocaleString()}</p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Payments */}
          <section className="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 overflow-hidden">
            <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
              <h2 className="font-headline text-[20px] font-bold text-on-surface">Recent Payments</h2>
              <button className="text-primary text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/30">
                    <th className="p-4 font-semibold text-on-surface text-sm">Student</th>
                    <th className="p-4 font-semibold text-on-surface text-sm">Plan</th>
                    <th className="p-4 font-semibold text-on-surface text-sm">Date</th>
                    <th className="p-4 font-semibold text-on-surface text-sm text-right">Amount</th>
                    <th className="p-4 font-semibold text-on-surface text-sm text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {data.recentPayments.map((payment: any) => (
                    <tr key={payment.id} className="hover:bg-surface-container-lowest/50 transition-colors">
                      <td className="p-4">
                        <span className="font-medium text-on-surface">{payment.student}</span>
                      </td>
                      <td className="p-4 text-sm text-on-surface-variant">{payment.plan}</td>
                      <td className="p-4 text-sm text-on-surface-variant">{payment.date}</td>
                      <td className="p-4 text-right font-bold text-on-surface">${payment.amount.toFixed(2)}</td>
                      <td className="p-4 text-center">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          payment.status === 'Completed' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-variant text-on-surface-variant'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Payouts Widget */}
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col h-full">
            <h2 className="font-headline text-[20px] font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">account_balance</span>
              Process Payouts
            </h2>
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
              <div className="w-20 h-20 bg-error-container text-error rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[32px]">warning</span>
              </div>
              <p className="text-on-surface-variant">There are currently tutors awaiting their monthly payouts.</p>
              <button className="w-full mt-4 bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                Review & Process Payouts
              </button>
            </div>
          </section>

        </div>

      </main>
    </div>
  );
}
