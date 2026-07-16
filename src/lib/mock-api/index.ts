import * as mockData from './mock-data';

/**
 * Simulates a backend API routing by matching endpoints to mock data functions.
 */
export async function mockApiRouter(endpoint: string, method: string = 'GET', body?: any): Promise<any> {
  // Normalize endpoint to remove query parameters for matching
  const path = endpoint.split('?')[0];

  console.log(`[Mock API Intercepted] ${method} ${path}`);

  // Simulate network delay (disabled as per user request)
  // await new Promise(resolve => setTimeout(resolve, 500));

  // --- STUDENT ROUTES ---
  if (path === '/api/student/dashboard' && method === 'GET') return mockData.getStudentDashboard();
  if (path === '/api/student/courses' && method === 'GET') return mockData.getStudentCourses();
  if (path === '/api/student/schedule' && method === 'GET') return mockData.getStudentSchedule();
  if (path === '/api/student/assignments' && method === 'GET') return mockData.getStudentAssignments();
  if (path === '/api/student/messages' && method === 'GET') return mockData.getStudentMessages();
  if (path === '/api/student/community' && method === 'GET') return mockData.getStudentCommunity();
  if (path.startsWith('/api/student/assignments/') && path.endsWith('/submit') && method === 'POST') {
    return { success: true, message: 'Assignment submitted successfully' };
  }
  if (path === '/api/student/settings' && method === 'GET') {
    return { profileData: mockData.studentProfile, preferences: { notifications: true } };
  }

  // --- TUTOR ROUTES ---
  if (path === '/api/tutor/dashboard' && method === 'GET') return mockData.getTutorDashboard();
  if (path === '/api/tutor/students' && method === 'GET') return mockData.getTutorStudents();
  if (path === '/api/tutor/earnings' && method === 'GET') return mockData.getTutorEarnings();
  if (path === '/api/tutor/community' && method === 'GET') return mockData.getTutorCommunity();
  if (path === '/api/tutor/messages' && method === 'GET') return mockData.getTutorMessages();
  if (path === '/api/tutor/settings' && method === 'GET') return mockData.getTutorSettings();
  if (path === '/api/tutor/community' && method === 'POST') {
    return { success: true, message: 'Post created successfully' };
  }

  // --- ADMIN ROUTES ---
  if (path === '/api/admin/financials' && method === 'GET') return mockData.getAdminFinancials();
  if (path === '/api/admin/reports' && method === 'GET') return mockData.getAdminReports();
  if (path === '/api/admin/settings' && method === 'GET') return mockData.getAdminSettings();
  if (path === '/api/admin/tickets' && method === 'GET') return mockData.getAdminTickets();

  console.error(`[Mock API Error] Unhandled endpoint: ${method} ${path}`);
  throw new Error(`Mock API Error: Endpoint not found (${method} ${path})`);
}
