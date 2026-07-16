import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminReportsPage() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <AdminSidebar activePath="/admin/reports" />

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
            <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Analytics & Reports</h1>
            <p className="font-body text-[16px] text-on-surface-variant">View platform engagement and performance metrics.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <select className="px-4 py-3 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface appearance-none pr-10">
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="ytd">Year to Date</option>
              <option value="all">All Time</option>
            </select>
          </div>
        </header>

        {/* Mock Charts Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col min-h-[300px]">
            <h2 className="font-headline text-[20px] font-bold text-on-surface mb-6">Student Growth</h2>
            <div className="flex-1 flex items-end gap-2 border-b border-l border-outline-variant/30 pb-2 pl-2 h-48">
              {/* Mock Bar Chart */}
              <div className="w-1/6 bg-primary/20 hover:bg-primary/40 rounded-t-md relative group h-[40%] transition-all">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">120</span>
              </div>
              <div className="w-1/6 bg-primary/30 hover:bg-primary/50 rounded-t-md relative group h-[55%] transition-all">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">150</span>
              </div>
              <div className="w-1/6 bg-primary/50 hover:bg-primary/70 rounded-t-md relative group h-[70%] transition-all">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">190</span>
              </div>
              <div className="w-1/6 bg-primary/70 hover:bg-primary/80 rounded-t-md relative group h-[60%] transition-all">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">170</span>
              </div>
              <div className="w-1/6 bg-primary/90 hover:bg-primary rounded-t-md relative group h-[85%] transition-all">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">230</span>
              </div>
              <div className="w-1/6 bg-primary hover:bg-primary-fixed rounded-t-md relative group h-[100%] transition-all">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">280</span>
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-on-surface-variant font-medium">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col min-h-[300px]">
            <h2 className="font-headline text-[20px] font-bold text-on-surface mb-6">Subscription Breakdown</h2>
            <div className="flex-1 flex items-center justify-center gap-8">
              {/* Mock Pie Chart Visualization */}
              <div className="relative w-40 h-40 rounded-full bg-surface-container flex items-center justify-center overflow-hidden" 
                   style={{ background: 'conic-gradient(var(--md-sys-color-primary) 0% 60%, var(--md-sys-color-secondary) 60% 85%, var(--md-sys-color-tertiary) 85% 100%)' }}>
                <div className="w-24 h-24 bg-surface-container-lowest rounded-full flex flex-col items-center justify-center">
                  <span className="text-xl font-bold">245</span>
                  <span className="text-xs text-on-surface-variant">Total</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary block"></span>
                  <span className="text-sm font-medium">Standard (60%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary block"></span>
                  <span className="text-sm font-medium">Personal (25%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-tertiary block"></span>
                  <span className="text-sm font-medium">Premium (15%)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Metrics Table */}
        <section className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 overflow-hidden">
          <div className="p-6 border-b border-outline-variant/30">
            <h2 className="font-headline text-[20px] font-bold text-on-surface">Course Completion Rates</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/30">
                  <th className="p-4 font-semibold text-on-surface text-sm">Course Name</th>
                  <th className="p-4 font-semibold text-on-surface text-sm">Enrolled</th>
                  <th className="p-4 font-semibold text-on-surface text-sm">Completed</th>
                  <th className="p-4 font-semibold text-on-surface text-sm w-1/3">Completion Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                <tr className="hover:bg-surface-container-lowest/50 transition-colors">
                  <td className="p-4 font-medium text-on-surface">Tajweed Fundamentals</td>
                  <td className="p-4 text-sm text-on-surface-variant">120</td>
                  <td className="p-4 text-sm text-on-surface-variant">95</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '79%' }}></div>
                      </div>
                      <span className="text-xs font-bold w-10 text-right">79%</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-lowest/50 transition-colors">
                  <td className="p-4 font-medium text-on-surface">Arabic Grammar Level 1</td>
                  <td className="p-4 text-sm text-on-surface-variant">85</td>
                  <td className="p-4 text-sm text-on-surface-variant">40</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-error rounded-full" style={{ width: '47%' }}></div>
                      </div>
                      <span className="text-xs font-bold w-10 text-right">47%</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-lowest/50 transition-colors">
                  <td className="p-4 font-medium text-on-surface">Memorization Intensive</td>
                  <td className="p-4 text-sm text-on-surface-variant">40</td>
                  <td className="p-4 text-sm text-on-surface-variant">38</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: '95%' }}></div>
                      </div>
                      <span className="text-xs font-bold w-10 text-right">95%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}
