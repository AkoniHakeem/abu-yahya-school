import React from 'react';
import TutorSidebar from '@/components/TutorSidebar';
import { fetchAPI } from '@/lib/api-client';

export default async function TutorEarningsPage() {
  const earningsData = await fetchAPI('/api/tutor/earnings');

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <TutorSidebar activePath="/tutor/earnings" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full px-4 md:px-10 py-8 md:py-12 bg-surface-bright min-h-screen">
        
        {/* Mobile Nav Header */}
        <div className="lg:hidden flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
           <span className="font-headline text-[24px] font-bold text-primary">Abu-Yahya</span>
           <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQmNn3_wV9f949N304033z2a7u29W47J4n9172V73412V4a984J7a49K7f9185J8a1V1a1a9a84a5K2V9J9a812J14J5K24V74V7574K4V147J15V7K2V5K2J47K9a5V7K24a5a5K24J815V45V7a11V1V74V15K21K91a5K87J7K91"
                alt="Tutor Profile"
              />
            </div>
        </div>

        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Earnings</h1>
            <p className="font-body text-[16px] text-on-surface-variant">Track your revenue and payout history.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none py-3 px-6 bg-primary text-on-primary rounded-lg font-label-sm text-[14px] font-bold hover:bg-primary/90 transition-all shadow-sm">
              Request Payout
            </button>
          </div>
        </header>

        {/* High-Level Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full"></div>
            <p className="text-sm text-on-surface-variant font-medium">Total Balance (Pending)</p>
            <p className="text-4xl font-bold text-primary">${earningsData.totalBalance.toFixed(2)}</p>
            <p className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-secondary">trending_up</span>
              +12% from last month
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col gap-2">
            <p className="text-sm text-on-surface-variant font-medium">Available for Payout</p>
            <p className="text-4xl font-bold text-on-surface">${earningsData.availablePayout.toFixed(2)}</p>
            <p className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
               Minimum payout: $50.00
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col gap-2">
            <p className="text-sm text-on-surface-variant font-medium">Next Payout Date</p>
            <p className="text-4xl font-bold text-on-surface">15th</p>
            <p className="text-xs text-on-surface-variant mt-2">
               Automatic monthly payouts are enabled.
            </p>
          </div>
        </section>

        {/* Transactions List */}
        <section className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
            <h2 className="font-headline text-[20px] font-bold text-on-surface">Recent Transactions</h2>
            <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
              Download CSV <span className="material-symbols-outlined text-[16px]">download</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/30">
                  <th className="p-4 font-semibold text-on-surface text-sm">Date</th>
                  <th className="p-4 font-semibold text-on-surface text-sm">Description</th>
                  <th className="p-4 font-semibold text-on-surface text-sm">Student</th>
                  <th className="p-4 font-semibold text-on-surface text-sm">Status</th>
                  <th className="p-4 font-semibold text-on-surface text-sm text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {earningsData.transactions.map((tx: any) => (
                  <tr key={tx.id} className="hover:bg-surface-container-lowest/50 transition-colors">
                    <td className="p-4 text-sm text-on-surface-variant">{tx.date}</td>
                    <td className="p-4">
                      <span className="font-medium text-on-surface">{tx.description}</span>
                    </td>
                    <td className="p-4 text-sm text-on-surface-variant">{tx.student || '-'}</td>
                    <td className="p-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        tx.status === 'Completed' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-variant text-on-surface-variant'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <span className="font-bold text-on-surface">${tx.amount.toFixed(2)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}
