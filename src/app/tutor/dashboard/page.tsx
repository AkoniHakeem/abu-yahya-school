import React from 'react';
import { fetchAPI } from '@/lib/api-client';
import DashboardClient from './DashboardClient';

export default async function TutorDashboardPage() {
  const dashboardData = await fetchAPI('/api/tutor/dashboard');
  
  return (
    <DashboardClient initialData={dashboardData} />
  );
}
