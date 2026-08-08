import React from 'react';
import { fetchAPI } from '@/lib/api-client';
import ClientScheduleView from './ClientScheduleView';

export default async function StudentSchedulePage() {
  const [schedule, settings] = await Promise.all([
    fetchAPI('/api/student/schedule'),
    fetchAPI('/api/student/settings')
  ]);

  return <ClientScheduleView schedule={schedule} profileTimezone={settings?.profileData?.timezone} />;
}
