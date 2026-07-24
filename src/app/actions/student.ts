'use server';

import { 
  studentProfile, 
  enrolledCourses, 
  upcomingSchedule, 
  assignments, 
  recentActivity, 
  messages, 
  billingData 
} from '@/lib/mock-data/student';

// Utility function to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getStudentProfile() {
  await delay(800); // Simulate network latency
  return studentProfile;
}

export async function getEnrolledCourses() {
  await delay(1000);
  return enrolledCourses;
}

export async function getUpcomingSchedule() {
  await delay(600);
  return upcomingSchedule;
}

export async function getAssignments() {
  await delay(1200);
  return assignments;
}

export async function getRecentActivity() {
  await delay(500);
  return recentActivity;
}

export async function getMessages() {
  await delay(900);
  return messages;
}

export async function getBillingData() {
  await delay(1100);
  return billingData;
}
