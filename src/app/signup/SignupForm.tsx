'use client';

import React, { useActionState, useState } from 'react';
import { registerUser } from '../actions/auth';

const initialState = {
  error: '',
};

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(registerUser, initialState);
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
        <div>
          <label className="block text-sm font-medium text-on-surface mb-1">First Name</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[20px]">person</span>
            <input
              type="text"
              name="firstName"
              required
              className="w-full pl-10 pr-4 py-2.5 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface"
              placeholder="First Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface mb-1">Last Name</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[20px]">person</span>
            <input
              type="text"
              name="lastName"
              required
              className="w-full pl-10 pr-4 py-2.5 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-on-surface mb-1">Middle Name (Optional)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-[20px]">person</span>
            <input
              type="text"
              name="middle"
              className="w-full pl-10 pr-4 py-2.5 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface"
              placeholder="Middle Name"
            />
          </div>
        </div>
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
            autoComplete="new-password"
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

      <div>
        <label htmlFor="role" className="block text-sm font-label-sm text-on-surface">
          I want to join as a
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

      <div>
        <button
          type="submit"
          disabled={isPending}
          className="flex w-full justify-center rounded-lg border border-transparent bg-primary py-2.5 px-4 text-sm font-bold text-on-primary shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isPending ? 'Creating account...' : 'Create account'}
        </button>
      </div>
    </form>
  );
}
