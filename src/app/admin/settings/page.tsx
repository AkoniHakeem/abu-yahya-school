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
        const response = await fetchAPI('/api/admin/settings');
        setData(response.profileData);
      } catch (error) {
        console.error('Failed to load settings', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSave = async (updatedProfile: any) => {
    await fetchAPI('/api/admin/settings', {
      method: 'PUT',
      body: JSON.stringify(updatedProfile),
    });
    setData(updatedProfile);
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
                src={data?.avatar || "/avatars/default.png"}
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
