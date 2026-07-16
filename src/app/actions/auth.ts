'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { users, Role, User } from '@/lib/users'

export async function loginUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  // Find user in dummy database
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Set cookies (valid for 1 day)
  const cookieStore = await cookies();
  cookieStore.set('auth_role', user.role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
  });
  
  cookieStore.set('auth_user_name', user.name, {
    httpOnly: false, // Allow client side access if needed for display
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  });

  // Redirect based on role
  if (user.role === 'admin') {
    redirect('/admin/dashboard');
  } else if (user.role === 'tutor') {
    redirect('/tutor/classroom');
  } else if (user.role === 'student') {
    redirect('/billing');
  } else {
    redirect('/');
  }
}

export async function registerUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const role = formData.get('role') as Role;
  
  if (!name || !email || !password || !role) {
    throw new Error('All fields are required');
  }
  
  if (role === 'admin') {
    throw new Error('Cannot register as admin');
  }
  
  // In a real app we'd save to DB here. For the dummy, we'll just log them in
  // as if it succeeded, but we won't mutate the hardcoded array since it's serverless/stateless in Next.js.
  // Actually, mutating works in dev server memory, but let's just log them in.
  
  const newUser: User = {
    id: Math.random().toString(),
    name,
    email,
    password,
    role
  };
  
  users.push(newUser);

  // Set cookies
  const cookieStore = await cookies();
  cookieStore.set('auth_role', newUser.role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  });
  
  cookieStore.set('auth_user_name', newUser.name, {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  });

  if (newUser.role === 'tutor') {
    redirect('/tutor/classroom');
  } else {
    redirect('/billing');
  }
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete('auth_role');
  cookieStore.delete('auth_user_name');
  redirect('/login');
}

