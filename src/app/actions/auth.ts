'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { fetchAPI } from '@/lib/api-client'

export async function loginUser(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  let data;
  try {
    data = await fetchAPI('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  } catch (err: any) {
    return { error: err.message || 'Invalid email or password' };
  }

  const { access_token, user } = data;

  // Set cookies (valid for 1 day)
  const cookieStore = await cookies();
  cookieStore.set('auth_token', access_token, {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  });

  cookieStore.set('auth_role', user.role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  });
  
  cookieStore.set('auth_user_name', user.name, {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  });

  // Redirect based on role
  if (user.role === 'admin') {
    redirect('/admin/dashboard');
  } else if (user.role === 'tutor') {
    redirect('/tutor/dashboard');
  } else if (user.role === 'student') {
    redirect('/student/dashboard');
  } else {
    redirect('/');
  }
}

export async function registerUser(prevState: any, formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const middle = formData.get('middle') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const role = formData.get('role') as string;
  
  if (!firstName || !lastName || !email || !password || !role) {
    return { error: 'First name, last name, email, password, and role are required' };
  }
  
  if (role === 'admin') {
    return { error: 'Cannot register as admin' };
  }

  try {
    await fetchAPI('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, middle, email, password, role }),
    });
  } catch (err: any) {
    return { error: err.message || 'Registration failed' };
  }
  
  // Registration successful, redirect to verification pending page or login page
  redirect('/login?registered=true');
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
  cookieStore.delete('auth_role');
  cookieStore.delete('auth_user_name');
  redirect('/login');
}
