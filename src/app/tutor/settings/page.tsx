"use client";

import React, { useState, useEffect } from 'react';
import TutorSidebar from '@/components/TutorSidebar';
import SettingsForm from '@/components/shared/SettingsForm';
import { fetchAPI } from '@/lib/api-client';

export default function TutorSettingsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchAPI('/api/tutor/settings');
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
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Saved profile:', updatedProfile);
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      <TutorSidebar activePath="/tutor/settings" />

      <main className="flex-1 ml-16 lg:ml-64 w-full flex flex-col h-screen overflow-y-auto bg-surface-bright">
        
        <div className="lg:hidden flex justify-between items-center border-b border-outline-variant/30 p-4 shrink-0">
           <span className="font-headline text-[24px] font-bold text-primary">Abu-Yahya</span>
           <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/20">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQmNn3_wV9f949N304033z2a7u29W47J4n9172V73412V4a984J7a49K7f9185J8a1V1a1a9a84a5K2V9J9a812J14J5K24V74V7574K4V147J15V7K2V5K2J47K9a5V7K24a5a5K24J815V45V7a11V1V74V15K21K91a5K87J7K91"
                alt="Tutor Profile"
              />
            </div>
        </div>

        <div className="flex-1 p-4 lg:p-10 max-w-[1280px] mx-auto w-full">
          {loading ? (
            <div className="p-8 text-center text-on-surface-variant animate-pulse">Loading settings...</div>
          ) : data ? (
            <SettingsForm 
              initialProfile={data}
              role="tutor"
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
