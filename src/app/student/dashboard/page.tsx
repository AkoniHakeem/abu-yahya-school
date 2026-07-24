import React from 'react';
import { fetchAPI } from '@/lib/api-client';
import DashboardClient from './DashboardClient';

export default async function StudentDashboardPage() {
  const data = await fetchAPI('/api/student/dashboard');

  return (
    <DashboardClient initialData={data} />
  );
}
