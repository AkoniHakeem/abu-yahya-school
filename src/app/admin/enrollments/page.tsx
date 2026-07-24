"use client";

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import AdminMobileNav from '@/components/AdminMobileNav';
import { useAdminStore } from '@/store/admin-store';

export default function AdminEnrollmentsPage() {
  const { enrollments, fetchEnrollments, courses, fetchCourses, users, fetchUsers, enrollStudent, isLoading } = useAdminStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchEnrollments();
    if (courses.length === 0) fetchCourses();
    if (users.length === 0) fetchUsers();
  }, [fetchEnrollments, fetchCourses, fetchUsers, courses.length, users.length]);

  const students = users.filter((u: any) => u.role === 'student');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentId || !selectedCourseId) return;
    
    setIsSubmitting(true);
    await enrollStudent({
      studentId: selectedStudentId,
      courseId: selectedCourseId
    });
    
    setIsSubmitting(false);
    setIsModalOpen(false);
    setSelectedStudentId('');
    setSelectedCourseId('');
  };

  return (
    <div className="bg-background text-on-background antialiased flex h-screen overflow-hidden">
      <AdminSidebar activePath="/admin/enrollments" />

      <main className="flex-grow flex flex-col h-full overflow-y-auto w-full ml-16 lg:ml-64">
        <AdminMobileNav />
        
        <div className="p-4 lg:p-10 mt-16 lg:mt-0 flex-grow max-w-[1280px] mx-auto w-full">
          <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
            <div>
              <h2 className="font-headline text-[32px] font-semibold text-on-surface mb-2">Enrollment Management</h2>
              <p className="font-body text-[16px] text-on-surface-variant">Enroll students into courses and view current enrollments.</p>
            </div>
            <button 
              className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm text-[14px] font-bold hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center gap-2 shadow-ambient"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="material-symbols-outlined">add</span>
              Enroll Student
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-surface-variant overflow-hidden">
            <div className="p-6 border-b border-surface-variant">
              <h3 className="font-headline text-[18px] font-semibold text-on-surface">Existing Enrollments</h3>
            </div>
            
            {isLoading ? (
              <div className="animate-pulse text-on-surface-variant text-center py-10">Loading enrollments...</div>
            ) : enrollments.length === 0 ? (
              <div className="text-center py-20 bg-surface-container-lowest">
                <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant">how_to_reg</span>
                </div>
                <h4 className="font-headline text-[18px] font-semibold text-on-surface mb-2">No Enrollment Records Found</h4>
                <p className="font-body text-on-surface-variant max-w-md mx-auto mb-6">There are currently no students enrolled in any courses. Use the "Enroll Student" button above to create the first enrollment.</p>
                <button 
                  className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-lg font-bold text-sm hover:bg-secondary-container/80 transition-colors"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enroll a Student
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-surface-variant">
                      <th className="p-4 font-label-sm font-bold text-on-surface-variant uppercase tracking-wider text-[12px]">Student</th>
                      <th className="p-4 font-label-sm font-bold text-on-surface-variant uppercase tracking-wider text-[12px]">Course</th>
                      <th className="p-4 font-label-sm font-bold text-on-surface-variant uppercase tracking-wider text-[12px]">Enrollment Date</th>
                      <th className="p-4 font-label-sm font-bold text-on-surface-variant uppercase tracking-wider text-[12px]">Status</th>
                      <th className="p-4 font-label-sm font-bold text-on-surface-variant uppercase tracking-wider text-[12px]">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-[14px]">
                    {enrollments.map((e) => (
                      <tr key={e.id} className="border-b border-surface-variant hover:bg-surface-container-lowest/50 transition-colors">
                        <td className="p-4 font-medium text-on-surface">{e.studentName}</td>
                        <td className="p-4 text-on-surface-variant">{e.courseTitle}</td>
                        <td className="p-4 text-on-surface-variant">{new Date(e.enrolledAt).toLocaleDateString()}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-[12px] font-bold ${
                            e.status === 'active' ? 'bg-primary-container text-on-primary-container' : 
                            e.status === 'completed' ? 'bg-secondary-container text-on-secondary-container' : 
                            'bg-error-container text-on-error-container'
                          }`}>
                            {e.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="p-4 text-on-surface-variant">{e.progress}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Enroll Student Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4">
          <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-lg w-full border border-surface-variant">
            <div className="p-6 border-b border-surface-variant flex justify-between items-center">
              <h3 className="font-headline text-[24px] font-semibold text-primary">Enroll Student</h3>
              <button 
                className="text-on-surface-variant hover:text-error transition-colors p-1"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form className="p-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Select Student</label>
                <select 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  value={selectedStudentId}
                  onChange={(e) => setSelectedStudentId(e.target.value)}
                  required
                >
                  <option value="" disabled>-- Select a Student --</option>
                  {students.map((student: any) => (
                    <option key={student.id} value={student.id}>{student.name} ({student.email})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Select Course</label>
                <select 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                  required
                >
                  <option value="" disabled>-- Select a Course --</option>
                  {courses.map((course: any) => (
                    <option key={course.id} value={course.id}>{course.title}</option>
                  ))}
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors" 
                  onClick={() => setIsModalOpen(false)} 
                  type="button"
                >
                  Cancel
                </button>
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2" 
                  type="submit"
                  disabled={isSubmitting || !selectedStudentId || !selectedCourseId}
                >
                  {isSubmitting ? 'Enrolling...' : 'Confirm Enrollment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
