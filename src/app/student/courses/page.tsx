import React from 'react';
import { fetchAPI } from '@/lib/api-client';
import CoursesListClient from './CoursesListClient';

export default async function StudentCoursesPage() {
  const courses = await fetchAPI('/api/student/courses');

  return (
    <CoursesListClient initialCourses={courses} />
  );
}
