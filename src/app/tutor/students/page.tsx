"use client";

import React, { useState, useEffect } from 'react';
import TutorSidebar from '@/components/TutorSidebar';
import TutorMobileNav from '@/components/TutorMobileNav';
import { fetchAPI } from '@/lib/api-client';

export default function TutorStudentsPage() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchAPI('/api/tutor/students');
        setStudents(data);
      } catch (error) {
        console.error('Failed to load students', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex">
      {/* SideNavBar */}
      <TutorSidebar activePath="/tutor/students" />

      {/* Main Content Area */}
      <main className="flex-1 ml-16 lg:ml-64 w-full px-4 md:px-10 py-8 md:py-12 bg-surface-bright min-h-screen">
        
        {/* Mobile Nav Header */}
        <TutorMobileNav />

        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h1 className="font-display text-[32px] md:text-[40px] font-bold text-primary mb-2">My Students</h1>
            <p className="font-body text-[16px] text-on-surface-variant">View and manage the students enrolled in your courses.</p>
          </div>
          <div className="w-full md:w-auto relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              type="text" 
              placeholder="Search students..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary text-sm"
            />
          </div>
        </header>

        {loading ? (
          <div className="p-8 text-center text-on-surface-variant animate-pulse">Loading students...</div>
        ) : (
          <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/30">
                    <th className="p-4 font-semibold text-on-surface text-sm">Student Name</th>
                    <th className="p-4 font-semibold text-on-surface text-sm">Course</th>
                    <th className="p-4 font-semibold text-on-surface text-sm">Plan</th>
                    <th className="p-4 font-semibold text-on-surface text-sm">Progress</th>
                    <th className="p-4 font-semibold text-on-surface text-sm">Attendance</th>
                    <th className="p-4 font-semibold text-on-surface text-sm text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-surface-container-lowest/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary-container text-primary-fixed flex items-center justify-center font-bold text-xs">
                              {student.name.split(' ').map((n: string) => n[0]).join('')}
                            </div>
                            <span className="font-medium text-on-surface">{student.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-on-surface-variant">{student.course}</td>
                        <td className="p-4">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                            student.plan === 'Premium Plan' ? 'bg-tertiary-container text-on-tertiary-container' : 
                            student.plan === 'Personal Plan' ? 'bg-secondary-container text-on-secondary-container' : 
                            'bg-surface-variant text-on-surface-variant'
                          }`}>
                            {student.plan?.replace(' Plan', '') || 'No Plan'}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
                              <div className="h-full bg-primary rounded-full" style={{ width: `${student.progress}%` }}></div>
                            </div>
                            <span className="text-xs text-on-surface-variant">{student.progress}%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`text-sm font-medium ${student.attendance >= 90 ? 'text-secondary' : student.attendance >= 75 ? 'text-on-surface' : 'text-error'}`}>
                            {student.attendance}%
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-primary hover:bg-primary-container p-2 rounded-lg transition-colors inline-flex" title="Message Student">
                            <span className="material-symbols-outlined text-[18px]">mail</span>
                          </button>
                          <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-lg transition-colors inline-flex ml-1" title="View Details">
                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-on-surface-variant">
                        No students found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
