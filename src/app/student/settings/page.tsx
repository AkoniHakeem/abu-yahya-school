"use client";

import React, { useState, useEffect } from 'react';
import SettingsForm from '@/components/shared/SettingsForm';
import { fetchAPI } from '@/lib/api-client';

export default function StudentSettingsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchAPI('/api/student/settings');
        // We'll also fetch dashboard data to get the active plan for the settings sidebar
        const dashboardData = await fetchAPI('/api/student/dashboard');
        
        setData({
          profileData: response.profileData,
          activePlan: dashboardData.activePlan
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
    await fetchAPI('/api/student/settings', {
      method: 'PUT',
      body: JSON.stringify(updatedProfile),
    });
    
    setData((prev: any) => ({
      ...prev,
      profileData: {
        ...prev.profileData,
        ...updatedProfile
      }
    }));
    console.log('Saved profile:', updatedProfile);
  };

  if (loading) {
    return <div className="p-8 text-center text-on-surface-variant animate-pulse">Loading settings...</div>;
  }

  if (!data?.profileData) {
    return <div className="p-8 text-center text-error">Failed to load profile data.</div>;
  }

  return (
    <SettingsForm 
      initialProfile={{
        name: data.profileData.name,
        firstName: data.profileData.firstName,
        lastName: data.profileData.lastName,
        middle: data.profileData.middle,
        email: data.profileData.email,
        timezone: data.profileData.timezone,
        avatar: data.profileData.avatar
      }}
      role="student"
      activePlan={data.activePlan}
      onSave={handleSave}
    />
  );
}
