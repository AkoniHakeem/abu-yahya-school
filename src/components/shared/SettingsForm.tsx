"use client";

import React, { useState } from 'react';

interface SettingsFormProps {
  initialProfile: {
    name: string;
    email: string;
    timezone?: string;
    avatar?: string;
  };
  role: 'student' | 'tutor' | 'admin';
  activePlan?: {
    name: string;
    status: string;
    nextBillingDate?: string;
  };
  onSave: (data: any) => Promise<void>;
}

export default function SettingsForm({ initialProfile, role, activePlan, onSave }: SettingsFormProps) {
  const [profile, setProfile] = useState(initialProfile);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);
    try {
      await onSave(profile);
      setMessage({ type: 'success', text: 'Settings saved successfully.' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save settings. Please try again.' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <header>
        <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">Account Settings</h1>
        <p className="text-on-surface-variant text-[18px]">Manage your profile, preferences, and account details.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Profile Form */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col gap-6">
            
            {message && (
              <div className={`p-4 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container text-on-error-container'}`}>
                {message.text}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <h2 className="font-headline text-[20px] font-bold text-on-surface">Personal Information</h2>
              <p className="text-sm text-on-surface-variant">Update your basic profile details.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-on-surface">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={profile.name} 
                  onChange={handleChange}
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface"
                  required 
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-on-surface">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={profile.email} 
                  onChange={handleChange}
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface"
                  required 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="timezone" className="text-sm font-medium text-on-surface">Timezone</label>
              <select 
                id="timezone" 
                name="timezone" 
                value={profile.timezone || ''} 
                onChange={handleChange}
                className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface appearance-none"
              >
                <option value="UTC">UTC (Universal Coordinated Time)</option>
                <option value="UTC+1">UTC+1 (West Africa Time)</option>
                <option value="UTC+3">UTC+3 (Arabia Standard Time)</option>
                <option value="UTC-5">UTC-5 (Eastern Standard Time)</option>
                <option value="UTC-8">UTC-8 (Pacific Standard Time)</option>
              </select>
            </div>

            <div className="pt-4 border-t border-outline-variant/30 flex justify-end">
              <button 
                type="submit" 
                disabled={isSaving}
                className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                    Saving...
                  </>
                ) : 'Save Changes'}
              </button>
            </div>
          </form>

          {/* Password Section (Mock) */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col gap-4">
             <div className="flex flex-col gap-2">
              <h2 className="font-headline text-[20px] font-bold text-on-surface">Password & Security</h2>
              <p className="text-sm text-on-surface-variant">Update your password to keep your account secure.</p>
            </div>
            <button className="w-fit border border-outline-variant text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-4 py-2 rounded-lg font-label-sm font-medium transition-colors">
              Change Password
            </button>
          </div>

        </div>

        {/* Sidebar Info */}
        <div className="flex flex-col gap-6">
          
          {/* Profile Picture */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30 flex flex-col items-center text-center gap-4">
            <div className="w-24 h-24 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden ring-4 ring-primary-container relative group">
              {profile.avatar ? (
                <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="material-symbols-outlined text-primary text-[40px]">person</span>
              )}
              <div className="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center cursor-pointer transition-all">
                <span className="material-symbols-outlined text-white">photo_camera</span>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-[18px] font-bold text-on-surface mb-1">{profile.name}</h3>
              <p className="text-sm text-on-surface-variant capitalize">{role} Account</p>
            </div>
          </div>

          {/* Subscription Info (if student) */}
          {role === 'student' && activePlan && (
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/30">
              <h3 className="font-headline text-[18px] font-bold text-primary mb-4">Subscription Plan</h3>
              <div className="mb-4">
                <p className="text-sm font-medium text-on-surface">{activePlan.name}</p>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <span className={`w-2 h-2 rounded-full ${activePlan.status === 'Active' ? 'bg-secondary' : 'bg-error'}`}></span>
                  <span className="text-on-surface-variant">{activePlan.status}</span>
                </div>
              </div>
              {activePlan.nextBillingDate && (
                <p className="text-xs text-on-surface-variant mb-4">
                  Next billing date: {new Date(activePlan.nextBillingDate).toLocaleDateString()}
                </p>
              )}
              <button className="w-full bg-surface-container-low text-primary hover:bg-surface-container border border-outline-variant/30 px-4 py-2 rounded-lg font-label-sm font-medium transition-colors">
                Manage Billing
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
