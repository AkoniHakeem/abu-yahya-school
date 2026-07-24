'use client';

import React, { useActionState, useState } from 'react';
import { loginUser } from '../actions/auth';

const initialState = {
  error: '',
};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginUser, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-4" action={formAction}>
      {state?.error && (
        <div className="mb-4 rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {state.error}
              </h3>
            </div>
          </div>
        </div>
      )}
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
        <div className="mt-1 relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="block w-full appearance-none rounded-lg border border-outline-variant px-3 py-2 text-on-surface bg-surface-container-low placeholder-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm pr-10"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface"
            onClick={() => setShowPassword(!showPassword)}
          >
            <span className="material-symbols-outlined text-[20px]">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        </div>
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
          disabled={isPending}
          className="flex w-full justify-center rounded-lg border border-transparent bg-primary py-2.5 px-4 text-sm font-bold text-on-primary shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isPending ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
}
