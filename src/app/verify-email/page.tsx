import React from 'react';
import Link from 'next/link';
import { fetchAPI } from '@/lib/api-client';

export default async function VerifyEmailPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const resolvedParams = await searchParams;
  const token = resolvedParams?.token as string;

  let success = false;
  let error = '';

  if (!token) {
    error = 'Verification token is missing';
  } else {
    try {
      await fetchAPI(`/api/auth/verify-email?token=${token}`);
      success = true;
    } catch (err: any) {
      error = err.message || 'Invalid or expired verification token';
    }
  }

  return (
    <div className="font-body min-h-screen bg-surface-container-low flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-surface-container-lowest py-8 px-4 shadow-ambient sm:rounded-xl sm:px-10 border border-outline-variant/20 text-center">
          {success ? (
            <>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Email Verified!</h2>
              <p className="text-on-surface-variant mb-6">
                Your account has been successfully verified. You can now log in.
              </p>
              <Link 
                href="/login" 
                className="inline-flex justify-center rounded-lg border border-transparent bg-primary py-2 px-4 text-sm font-bold text-on-primary shadow-sm hover:bg-primary/90"
              >
                Go to Login
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-red-600 mb-4">Verification Failed</h2>
              <p className="text-on-surface-variant mb-6">
                {error}
              </p>
              <Link 
                href="/login" 
                className="inline-flex justify-center rounded-lg border border-outline bg-surface-container py-2 px-4 text-sm font-bold text-on-surface shadow-sm hover:bg-surface-container-high"
              >
                Back to Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
