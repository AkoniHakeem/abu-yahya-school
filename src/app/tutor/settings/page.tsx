"use client";

import React, { useState, useEffect } from 'react';
import TutorSidebar from '@/components/TutorSidebar';
import SettingsForm from '@/components/shared/SettingsForm';
import TutorMobileNav from '@/components/TutorMobileNav';
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
    await fetchAPI('/api/tutor/settings', {
      method: 'PUT',
      body: JSON.stringify(updatedProfile),
    });
    setData(updatedProfile);
    console.log('Saved profile:', updatedProfile);
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      <TutorSidebar activePath="/tutor/settings" />

      <main className="flex-1 ml-16 lg:ml-64 w-full flex flex-col h-screen overflow-y-auto bg-surface-bright">
        {/* Mobile Nav Header */}
        <TutorMobileNav />

        <div className="flex-1 p-4 lg:p-10 max-w-[1280px] mx-auto w-full">
          {loading ? (
            <div className="p-8 text-center text-on-surface-variant animate-pulse">Loading settings...</div>
          ) : data ? (
            <SettingsForm 
              initialProfile={{
                name: data.name,
                firstName: data.firstName,
                lastName: data.lastName,
                middle: data.middle,
                email: data.email,
                timezone: data.timezone,
                avatar: data.avatar
              }}
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
