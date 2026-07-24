import * as mockData from './mock-data';
import { getDB, saveDB } from './db';

/**
 * Simulates a backend API routing by matching endpoints to mock data functions.
 */
export async function mockApiRouter(endpoint: string, method: string = 'GET', body?: any): Promise<any> {
  const path = endpoint.split('?')[0];
  console.log(`[Mock API Intercepted] ${method} ${path}`);

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
  if (path === '/api/tutor/assignments' && method === 'GET') return mockData.getTutorAssignments();
  if (path === '/api/tutor/assignments/grade' && method === 'POST') {
    const db = getDB();
    const assignmentId = body?.assignmentId;
    db.assignments = db.assignments.filter((a: any) => a.id !== assignmentId);
    saveDB(db);
    return { success: true, message: 'Grade submitted successfully' };
  }
  if (path === '/api/tutor/schedule/class' && method === 'POST') {
    const db = getDB();
    db.classes.push(body);
    saveDB(db);
    return { success: true, message: 'Class scheduled successfully' };
  }
  if (path === '/api/tutor/earnings' && method === 'GET') return mockData.getTutorEarnings();
  if (path === '/api/tutor/community' && method === 'GET') return mockData.getTutorCommunity();
  if (path === '/api/tutor/messages' && method === 'GET') return mockData.getTutorMessages();
  if (path === '/api/tutor/settings' && method === 'GET') return mockData.getTutorSettings();

  // --- ADMIN ROUTES ---
  if (path === '/api/admin/financials' && method === 'GET') return mockData.getAdminFinancials();
  if (path === '/api/admin/reports' && method === 'GET') return mockData.getAdminReports();
  if (path === '/api/admin/settings' && method === 'GET') return mockData.getAdminSettings();
  if (path === '/api/admin/tickets' && method === 'GET') return mockData.getAdminTickets();
  if (path === '/api/admin/users' && method === 'GET') return mockData.getAdminUsers();
  if (path === '/api/admin/classes' && method === 'GET') return mockData.getAdminClasses();
  
  if (path === '/api/admin/users' && method === 'POST') {
    const db = getDB();
    const newUser = { id: `USR-${Date.now()}`, ...body, progress: 0, attendance: 100 };
    db.users.push(newUser);
    saveDB(db);
    return { success: true, user: newUser };
  }
  
  if (path === '/api/admin/classes' && method === 'POST') {
    const db = getDB();
    const newClass = { id: `CLS-${Date.now()}`, ...body };
    db.classes.push(newClass);
    saveDB(db);
    return { success: true, class: newClass };
  }

  if (path === '/api/admin/tickets/resolve' && method === 'POST') {
    const db = getDB();
    const ticketId = body?.ticketId;
    const ticket = db.tickets.find((t: any) => t.ticketId === ticketId);
    if (ticket) {
      ticket.status = 'Resolved';
      saveDB(db);
    }
    return { success: true };
  }

  console.error(`[Mock API Error] Unhandled endpoint: ${method} ${path}`);
  throw new Error(`Mock API Error: Endpoint not found (${method} ${path})`);
}
