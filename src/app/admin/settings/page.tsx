"use client";

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import SettingsForm from '@/components/shared/SettingsForm';
import { fetchAPI } from '@/lib/api-client';

export default function AdminSettingsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // We have an explicit admin mock now.
        const response = await fetchAPI('/api/admin/settings');
        
        // Customizing the mock response slightly for admin
        setData({
          ...response.adminProfile,
          name: 'Admin User',
          email: 'admin@abuyahya.com'
        });
      } catch (error) {
        console.error('Failed to load settings', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSave = async (updatedProfile: any) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Saved admin profile:', updatedProfile);
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      <AdminSidebar activePath="/admin/settings" />

      <main className="flex-1 ml-16 lg:ml-64 w-full flex flex-col h-screen overflow-y-auto bg-surface-bright">
        
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

        <div className="flex-1 p-4 lg:p-10 max-w-[1280px] mx-auto w-full">
          {loading ? (
            <div className="p-8 text-center text-on-surface-variant animate-pulse">Loading settings...</div>
          ) : data ? (
            <SettingsForm 
              initialProfile={data}
              role="admin"
              onSave={handleSave}
            />
          ) : (
            <div className="p-8 text-center text-error">Failed to load profile data.</div>
          )}
        </div>
      </main>
    </div>
  );
}
