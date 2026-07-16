import React from 'react';
import Link from 'next/link';
import { loginUser } from '../actions/auth';

export default function LoginPage() {
  return (
    <div className="font-body min-h-screen bg-surface-container-low flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-4 text-center text-3xl font-headline font-bold tracking-tight text-on-surface">
          Sign in to Abu-Yahya
        </h2>
        <p className="mt-2 text-center text-sm text-on-surface-variant">
          Or{' '}
          <Link href="/signup" className="font-bold text-primary hover:text-primary-container transition-colors">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-surface-container-lowest py-6 px-4 shadow-ambient sm:rounded-xl sm:px-10 border border-outline-variant/20">
          
          {/* Real Form (Dummy behavior) */}
          <form className="space-y-4" action={loginUser}>
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
                  defaultValue="demo@abu-yahya.com"
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
                  autoComplete="current-password"
                  required
                  defaultValue="password123"
                  className="block w-full appearance-none rounded-lg border border-outline-variant px-3 py-2 text-on-surface bg-surface-container-low placeholder-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
            </div>

            {/* Dummy Account Helper */}
            <div className="bg-primary/5 p-3 rounded-lg border border-primary/20">
              <p className="text-xs font-label-sm text-primary mb-1 font-bold">Demo Accounts:</p>
              <ul className="text-xs text-on-surface-variant space-y-1">
                <li><span className="font-semibold text-on-surface">Admin:</span> admin@abu-yahya.com / password123</li>
                <li><span className="font-semibold text-on-surface">Tutor:</span> tutor@abu-yahya.com / password123</li>
                <li><span className="font-semibold text-on-surface">Student:</span> student@abu-yahya.com / password123</li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-low"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-on-surface-variant">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-bold text-primary hover:text-primary-container">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg border border-transparent bg-primary py-2.5 px-4 text-sm font-bold text-on-primary shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all active:scale-[0.98]"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
