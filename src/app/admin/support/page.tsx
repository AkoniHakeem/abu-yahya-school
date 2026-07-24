import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import SupportClient from './SupportClient';

export default function AdminSupportPage() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      <AdminSidebar activePath="/admin/support" />

      <main className="flex-1 ml-16 lg:ml-64 w-full flex flex-col h-screen bg-surface-bright">
        
        {/* Mobile Nav Header */}
        <div className="lg:hidden flex justify-between items-center border-b border-outline-variant/30 p-4 shrink-0">
           <span className="font-headline text-[24px] font-bold text-primary">Abu-Yahya</span>
           <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgUWIh3NShjVW_YjjZngKemTnbJ7MsfVwKj7VkiPmDXtPKM7ciOvAIuIsMwVZrecyiKL5FVfBhiko4L1U3BlDYeFk0v-Vao1a4Q3FzXBaWL3yxch6CXttNfRym9j87OOewN4U856hYjWwxX831eWkjojsQxTAcO8bDVxsZnX-0bX6qtKUlE3iUO_pXrbxVIWqcihmSsfUe1B928US4jMabESrNpTjAqUo_pCj86iZZg9eeCid8NPWQ"
                alt="Admin Profile"
              />
            </div>
        </div>

        <SupportClient />

      </main>
    </div>
  );
}
