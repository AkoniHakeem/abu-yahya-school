export type Role = 'student' | 'tutor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: Role;
}

// In-memory dummy database
export const users: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@abu-yahya.com',
    password: 'password123',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Tutor User',
    email: 'tutor@abu-yahya.com',
    password: 'password123',
    role: 'tutor',
  },
  {
    id: '3',
    name: 'Student User',
    email: 'student@abu-yahya.com',
    password: 'password123',
    role: 'student',
  },
];
