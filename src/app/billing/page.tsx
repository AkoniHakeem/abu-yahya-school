import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StudentSidebar from '@/components/StudentSidebar';

export default function BillingPage() {
  return (
    <div className="bg-background text-on-background font-body text-body-md antialiased min-h-screen flex">
      <StudentSidebar activePath="/billing" />

      {/* Main Content Canvas */}
      <main className="flex-1 ml-16 lg:ml-64 p-4 lg:p-10 min-h-screen">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-headline text-[32px] font-semibold text-primary mb-2">Billing &amp; Plans</h2>
            <p className="text-on-surface-variant">Manage your subscriptions and view payment history.</p>
          </div>
        </header>

        {/* Current Plan Status */}
        <section className="mb-20">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">star</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Current Plan</p>
                <h3 className="font-headline text-[32px] font-semibold text-primary">Standard Plan</h3>
                <p className="text-on-surface-variant mt-1">Next billing date: <strong>Nov 15, 2024</strong></p>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button className="px-6 py-3 border border-outline rounded-lg text-primary font-label-sm text-[14px] font-bold hover:bg-surface-container-low transition-colors">
                Cancel Subscription
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Plans Bento */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-primary mb-6">Upgrade Your Learning Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Standard Plan */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 flex flex-col opacity-75">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-on-surface">Standard</h4>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-primary">$40</span>
                  <span className="text-on-surface-variant ml-2">/ month</span>
                </div>
                <p className="mt-2 text-sm text-on-surface-variant">Essential Arabic language learning.</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="text-sm">Access to all Level 1 &amp; 2 courses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="text-sm">Weekly group Q&amp;A sessions</span>
                </li>
                <li className="flex items-start gap-3 text-on-surface-variant/50">
                  <span className="material-symbols-outlined text-xl">cancel</span>
                  <span className="text-sm">1-on-1 Tutoring</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-surface-variant text-on-surface rounded-lg font-label-sm text-[14px] font-bold cursor-not-allowed" disabled>
                Current Plan
              </button>
            </div>

            {/* Personal Plan */}
            <div className="bg-primary text-on-primary rounded-xl p-6 shadow-lg border border-primary relative transform md:-translate-y-4 flex flex-col">
              <div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                RECOMMENDED
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold text-on-primary">Personal</h4>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">$50</span>
                  <span className="text-on-primary/80 ml-2">/ month</span>
                </div>
                <p className="mt-2 text-sm text-on-primary/80">Accelerated learning with feedback.</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-xl">check_circle</span>
                  <span className="text-sm">All Standard features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-xl">check_circle</span>
                  <span className="text-sm">Monthly 1-on-1 progress review</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-xl">check_circle</span>
                  <span className="text-sm">Assignment grading &amp; feedback</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-lg font-label-sm text-[14px] font-bold hover:bg-secondary-fixed transition-colors shadow-sm">
                Upgrade to Personal
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 flex flex-col">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-on-surface">Premium</h4>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-primary">$70</span>
                  <span className="text-on-surface-variant ml-2">/ month</span>
                </div>
                <p className="mt-2 text-sm text-on-surface-variant">The complete mastery program.</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="text-sm">All Personal features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="text-sm">Weekly 1-on-1 tutoring sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="text-sm">Priority support &amp; direct messaging</span>
                </li>
              </ul>

              <button className="w-full py-3 border-2 border-primary text-primary rounded-lg font-label-sm text-[14px] font-bold hover:bg-primary hover:text-on-primary transition-colors">
                Upgrade to Premium
              </button>
            </div>

          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">

          {/* Payment Methods */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-primary">Payment Methods</h3>
              <button className="text-primary hover:text-primary-container font-label-sm text-[14px] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">add</span> Add New
              </button>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
              <div className="p-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-surface-variant rounded flex items-center justify-center border border-outline-variant">
                    <span className="font-bold text-xs text-on-surface-variant">VISA</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Visa ending in 4242</p>
                    <p className="text-xs text-on-surface-variant">Expires 12/25 <span className="mx-1">•</span> <span className="text-primary bg-primary-container/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold">Default</span></p>
                  </div>
                </div>
                <button className="p-2 text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-surface-variant">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>

              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-surface-variant rounded flex items-center justify-center border border-outline-variant">
                    <span className="font-bold text-xs text-on-surface-variant">MC</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface-variant">Mastercard ending in 8899</p>
                    <p className="text-xs text-on-surface-variant">Expires 08/24</p>
                  </div>
                </div>
                <button className="p-2 text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-surface-variant">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </section>

          {/* Payment History */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-primary">Payment History</h3>
              <button className="text-primary hover:text-primary-container font-label-sm text-[14px] font-bold flex items-center gap-1">
                View All
              </button>
            </div>

            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/20">
                    <th className="p-4 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Date</th>
                    <th className="p-4 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Amount</th>
                    <th className="p-4 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Status</th>
                    <th className="p-4 text-xs font-semibold text-on-surface-variant uppercase tracking-wider text-right">Receipt</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-outline-variant/20">
                  <tr>
                    <td className="p-4 text-on-surface">Oct 15, 2024</td>
                    <td className="p-4 font-medium">$40.00</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-container/20 text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Paid
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">download</span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-on-surface">Sep 15, 2024</td>
                    <td className="p-4 font-medium">$40.00</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-container/20 text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Paid
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">download</span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-on-surface">Aug 15, 2024</td>
                    <td className="p-4 font-medium">$40.00</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-container/20 text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Paid
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">download</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
