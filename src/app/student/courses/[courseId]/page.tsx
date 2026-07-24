import React from 'react';
import { fetchAPI } from '@/lib/api-client';
import CoursePlayerClient from './CoursePlayerClient';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ courseId: string }>;
}

export default async function CoursePlayerPage({ params }: Props) {
  const { courseId } = await params;
  
  // We fetch all courses and find the one we need. 
  // In a real app with a DB, we'd fetch just the single course by ID.
  const courses = await fetchAPI('/api/student/courses');
  const course = courses.find((c: any) => c.id === courseId);

  if (!course) {
    notFound();
  }

  // We pass all courses so the store can be fully initialized if this is a hard-refresh.
  return (
    <CoursePlayerClient 
      initialCourse={course} 
      allCourses={courses} 
    />
  );
}
