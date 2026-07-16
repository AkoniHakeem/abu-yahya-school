import React from 'react';
import Link from 'next/link';
import AdminSidebar from '@/components/AdminSidebar';
export default function AdminUserDirectoryPage() {
  return (
    <div className="bg-surface text-on-surface font-body h-screen w-full flex overflow-hidden">
      {/* SideNavBar */}

      <AdminSidebar activePath="/admin/users" />

      {/* Main Canvas */}
      <main className="flex-1 flex flex-col h-full bg-surface-container-low overflow-hidden relative ml-16 lg:ml-64">
        {/* TopAppBar Contextual Header */}
        <header className="w-full h-20 bg-surface-container-lowest border-b border-outline-variant/30 flex justify-between items-center px-4 lg:px-10 shrink-0 z-10 shadow-sm">
          <h1 className="font-headline text-[24px] text-on-surface font-semibold">User Directory</h1>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-sm text-[14px] font-bold hover:shadow-md transition-all active:scale-95 duration-150">
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            Add New User
          </button>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-10 flex flex-col gap-6">
          
          {/* Filters Toolbar */}
          <div className="w-full bg-surface-container-lowest rounded-xl p-4 shadow-card border border-outline-variant/40 flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input 
                className="w-full pl-12 pr-4 py-3 bg-surface rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary font-body text-on-surface outline-none transition-all" 
                placeholder="Search users by name, email, or ID..." 
                type="text" 
              />
            </div>
            
            {/* Role Filter */}
            <div className="w-full md:w-64 relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">filter_list</span>
              <select className="w-full pl-12 pr-10 py-3 appearance-none bg-surface rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary font-body text-on-surface outline-none transition-all cursor-pointer">
                <option value="all">All Roles</option>
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
                <option value="admin">Admin</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
            </div>
          </div>

          {/* Data Table Container */}
          <div className="w-full bg-surface-container-lowest rounded-xl shadow-card border border-outline-variant/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-surface-container/50 border-b border-outline-variant/40">
                    <th className="py-4 px-6 font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold">User</th>
                    <th className="py-4 px-6 font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold">Role</th>
                    <th className="py-4 px-6 font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold">Plan / Level</th>
                    <th className="py-4 px-6 font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold">Status</th>
                    <th className="py-4 px-6 font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden shrink-0">
                          <img 
                            className="w-full h-full object-cover" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBq0puOaBjUGPQWSQvPPr76OHlKQWnz0h1uficD5zpjVaUGA6nlG5lPaUzvAXvaDkH0Vl0r7CXntPnecKugHNS1exKgTwhljurmqLog-CcmiiPjyc3K1ZCnbkyxTYXj6C7MFoLcmYXpEnj_nbkqtFx88ishsCXRrW5gdY-HjGTUhS4HH_fQ6r_p4jtckiQKNpgmpjgDTUY61u8Qj_httcdbEukcoV3YD4e9BSHiv1DQg424KD-sFxK"
                            alt="Ahmad Khalid"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-[15px] text-on-surface group-hover:text-primary transition-colors">Ahmad Khalid</span>
                          <span className="text-[13px] text-on-surface-variant">ahmad.k@student.edu</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-tertiary-container/10 text-tertiary-container border border-tertiary-container/20">
                        Student
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-body text-[14px] text-on-surface">Comprehensive Arabic</span>
                        <span className="text-xs text-on-surface-variant">Level 3 (Intermediate)</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-fixed text-on-primary-fixed">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors" title="View Profile">
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors" title="Edit User">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" title="Reset Password">
                          <span className="material-symbols-outlined text-[20px]">key</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden shrink-0 flex items-center justify-center text-primary font-bold">
                          SA
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-[15px] text-on-surface group-hover:text-primary transition-colors">Sheikh Abdullah</span>
                          <span className="text-[13px] text-on-surface-variant">abdullah@tutor.edu</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-secondary-container/20 text-on-secondary-container border border-secondary-container/30">
                        Tutor
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-on-surface-variant italic">N/A</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-fixed text-on-primary-fixed">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors" title="View Profile">
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors" title="Edit User">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden shrink-0">
                          <img 
                            className="w-full h-full object-cover" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnIyvgPlXXqieP8TQweofZbhXXQ1KismfH5mm_lOxRVRe79UDDLlo-UQCpz31lRrjA85UpoVniC89JXbi2OajCqVm_NOYIv0w1W19v8XkpPn1safUZhByeSIygDQxJTC4xvpE9TxZB3CeYZBySWbWsN5ay_a-aY_vMtdXVM0aIjyqNTiKZIOsddnrKeB3s-MQZe68eLRhOvGIRyqSJYDhyV3X2C4-yFA-h3lut8JD7hpqzZZwrxxPh"
                            alt="Fatima Noor"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-[15px] text-on-surface group-hover:text-primary transition-colors">Fatima Noor</span>
                          <span className="text-[13px] text-on-surface-variant">f.noor@student.edu</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-tertiary-container/10 text-tertiary-container border border-tertiary-container/20">
                        Student
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-body text-[14px] text-on-surface">Quranic Reading</span>
                        <span className="text-xs text-on-surface-variant">Level 1 (Beginner)</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-surface-variant text-on-surface-variant">
                        <div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
                        Inactive
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors" title="View Profile">
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors" title="Edit User">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-error-container hover:text-error transition-colors" title="Reset Password">
                          <span className="material-symbols-outlined text-[20px]">key</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            
            {/* Pagination Footer */}
            <div className="border-t border-outline-variant/40 bg-surface px-6 py-4 flex items-center justify-between">
              <span className="text-sm text-on-surface-variant font-body">Showing 1 to 3 of 124 users</span>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50" disabled>Previous</button>
                <button className="px-3 py-1.5 rounded border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container transition-colors">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
