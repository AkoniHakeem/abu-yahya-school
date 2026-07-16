import React from 'react';
import Link from 'next/link';
import { registerUser } from '../actions/auth';

export default function SignupPage() {
  return (
    <div className="font-body min-h-screen bg-surface-container-low flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-4 text-center text-3xl font-headline font-bold tracking-tight text-on-surface">
          Join Abu-Yahya School
        </h2>
        <p className="mt-2 text-center text-sm text-on-surface-variant">
          Already have an account?{' '}
          <Link href="/login" className="font-bold text-primary hover:text-primary-container transition-colors">
            Sign in instead
          </Link>
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-surface-container-lowest py-6 px-4 shadow-ambient sm:rounded-xl sm:px-10 border border-outline-variant/20">
          
          <form className="space-y-4" action={registerUser}>
            <div>
              <label htmlFor="name" className="block text-sm font-label-sm text-on-surface">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full appearance-none rounded-lg border border-outline-variant px-3 py-2 text-on-surface bg-surface-container-low placeholder-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-label-sm text-on-surface">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-lg border border-outline-variant px-3 py-2 text-on-surface bg-surface-container-low placeholder-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-label-sm text-on-surface">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full appearance-none rounded-lg border border-outline-variant px-3 py-2 text-on-surface bg-surface-container-low placeholder-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="block text-sm font-label-sm text-on-surface">
                I want to register as a:
              </label>
              <div className="mt-1">
                <select
                  id="role"
                  name="role"
                  required
                  className="block w-full rounded-lg border border-outline-variant px-3 py-2 text-on-surface bg-surface-container-low focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                >
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg border border-transparent bg-primary py-2.5 px-4 text-sm font-bold text-on-primary shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all active:scale-[0.98]"
              >
                Create Account
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
