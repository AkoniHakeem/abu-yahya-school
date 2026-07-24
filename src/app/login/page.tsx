import React from 'react';
import Link from 'next/link';
import LoginForm from './LoginForm';

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedParams = await searchParams;
  const isRegistered = resolvedParams?.registered === 'true';
  return (
    <div className="font-body min-h-screen bg-surface-container-low flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-4 text-center text-3xl font-headline font-bold tracking-tight text-on-surface">
          Sign in to Abu-Yahya
        </h2>
        {/* Signup is temporarily disabled
        <p className="text-center text-sm font-medium text-on-surface-variant mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="font-bold text-primary hover:text-primary-container transition-colors">
            Sign up
          </Link>
        </p>
        */}
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-surface-container-lowest py-6 px-4 shadow-ambient sm:rounded-xl sm:px-10 border border-outline-variant/20">
          
          {isRegistered && (
            <div className="mb-4 rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Registration successful! Please check your email to verify your account before logging in.
                  </h3>
                </div>
              </div>
            </div>
          )}
          
          {/* Real Form */}
          <LoginForm />

        </div>
      </div>
    </div>
  );
}
