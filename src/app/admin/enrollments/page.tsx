"use client";

import React, { useState, useEffect } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import AdminMobileNav from '@/components/AdminMobileNav';
import { useAdminStore } from '@/store/admin-store';
import ConfirmModal from '@/components/shared/ConfirmModal';

export default function AdminEnrollmentsPage() {
  const { enrollments, fetchEnrollments, courses, fetchCourses, users, fetchUsers, enrollStudent, updateEnrollment, deleteEnrollment, isLoading } = useAdminStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [confirmConfig, setConfirmConfig] = useState({ isOpen: false, message: '', onConfirm: () => {} });
  
  // Form State
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);
  const [studentSearchTerm, setStudentSearchTerm] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingEnrollment, setEditingEnrollment] = useState<any>(null);

  useEffect(() => {
    fetchEnrollments();
    if (courses.length === 0) fetchCourses();
    if (users.length === 0) fetchUsers();
  }, [fetchEnrollments, fetchCourses, fetchUsers, courses.length, users.length]);

  const students = users.filter((u: any) => u.role === 'student');
  const filteredStudents = students.filter((s: any) => 
    s.name?.toLowerCase().includes(studentSearchTerm.toLowerCase()) || 
    s.email?.toLowerCase().includes(studentSearchTerm.toLowerCase())
  );

  const toggleStudentSelection = (id: string) => {
    setSelectedStudentIds(prev => 
      prev.includes(id) ? prev.filter(studentId => studentId !== id) : [...prev, id]
    );
  };
  
  const handleSelectAllStudents = () => {
    if (selectedStudentIds.length === filteredStudents.length && filteredStudents.length > 0) {
      setSelectedStudentIds([]);
    } else {
      setSelectedStudentIds(filteredStudents.map((s: any) => s.id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedStudentIds.length === 0 || !selectedCourseId) return;
    
    setIsSubmitting(true);
    await enrollStudent({
      studentIds: selectedStudentIds,
      courseId: selectedCourseId
    });
    
    setIsSubmitting(false);
    setIsModalOpen(false);
    setSelectedStudentIds([]);
    setStudentSearchTerm('');
    setSelectedCourseId('');
  };

  const openEditModal = (enrollment: any) => {
    setEditingEnrollment(enrollment);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEnrollment) return;
    setIsSubmitting(true);
    await updateEnrollment(editingEnrollment.id, {
      studentId: editingEnrollment.studentId,
      courseId: editingEnrollment.courseId,
      status: editingEnrollment.status,
      progress: parseInt(editingEnrollment.progress, 10),
    });
    setIsSubmitting(false);
    setIsEditModalOpen(false);
    setEditingEnrollment(null);
  };

  const handleDelete = (id: string) => {
    setConfirmConfig({
      isOpen: true,
      message: 'Are you sure you want to delete this enrollment?',
      onConfirm: async () => {
        await deleteEnrollment(id);
      }
    });
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
                      <th className="p-4 font-label-sm font-bold text-on-surface-variant uppercase tracking-wider text-[12px] text-right">Actions</th>
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
                        <td className="p-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button onClick={() => openEditModal(e)} className="text-primary hover:bg-primary-container p-2 rounded-full transition-colors" title="Edit">
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button onClick={() => handleDelete(e.id)} className="text-error hover:bg-error-container p-2 rounded-full transition-colors" title="Delete">
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </td>
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
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Select Students</label>
                <input 
                  type="text" 
                  placeholder="Search students..." 
                  className="w-full mb-3 bg-surface border border-outline-variant rounded-lg px-4 py-2 font-body text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={studentSearchTerm}
                  onChange={(e) => setStudentSearchTerm(e.target.value)}
                />
                <div className="bg-surface-container-low border border-outline-variant rounded-lg p-3 max-h-48 overflow-y-auto custom-scrollbar flex flex-col gap-2">
                  <div className="flex items-center gap-3 pb-2 border-b border-outline-variant/50 mb-2">
                    <input 
                      type="checkbox" 
                      id="selectAll" 
                      className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary"
                      checked={selectedStudentIds.length === filteredStudents.length && filteredStudents.length > 0}
                      onChange={handleSelectAllStudents}
                    />
                    <label htmlFor="selectAll" className="font-label-sm text-sm text-on-surface select-none cursor-pointer">
                      Select All
                    </label>
                  </div>
                  {filteredStudents.length === 0 ? (
                    <div className="text-on-surface-variant text-sm text-center py-4">No students found</div>
                  ) : (
                    filteredStudents.map((student: any) => (
                      <div key={student.id} className="flex items-center gap-3 hover:bg-surface-container-highest p-1 rounded transition-colors">
                        <input 
                          type="checkbox" 
                          id={`student-${student.id}`} 
                          className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary"
                          checked={selectedStudentIds.includes(student.id)}
                          onChange={() => toggleStudentSelection(student.id)}
                        />
                        <label htmlFor={`student-${student.id}`} className="font-label-sm text-sm text-on-surface select-none cursor-pointer flex-grow flex flex-col">
                          <span>{student.name}</span>
                          <span className="text-xs text-on-surface-variant font-normal">{student.email}</span>
                        </label>
                      </div>
                    ))
                  )}
                </div>
                <div className="text-xs text-on-surface-variant mt-2 text-right">
                  {selectedStudentIds.length} student(s) selected
                </div>
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
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedStudentIds([]);
                    setStudentSearchTerm('');
                  }} 
                  type="button"
                >
                  Cancel
                </button>
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2" 
                  type="submit"
                  disabled={isSubmitting || selectedStudentIds.length === 0 || !selectedCourseId}
                >
                  {isSubmitting ? 'Enrolling...' : 'Confirm Enrollment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Enrollment Modal */}
      {isEditModalOpen && editingEnrollment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4">
          <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-lg w-full border border-surface-variant">
            <div className="p-6 border-b border-surface-variant flex justify-between items-center">
              <h3 className="font-headline text-[24px] font-semibold text-primary">Edit Enrollment</h3>
              <button 
                className="text-on-surface-variant hover:text-error transition-colors p-1"
                onClick={() => setIsEditModalOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form className="p-6 space-y-6" onSubmit={handleEditSubmit}>
              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Student</label>
                <select 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  value={editingEnrollment.studentId}
                  onChange={(e) => setEditingEnrollment({...editingEnrollment, studentId: e.target.value})}
                  required
                >
                  <option value="" disabled>-- Select a Student --</option>
                  {students.map((student: any) => (
                    <option key={student.id} value={student.id}>{student.name} ({student.email})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-label-sm text-[14px] text-on-surface mb-2">Course</label>
                <select 
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  value={editingEnrollment.courseId}
                  onChange={(e) => setEditingEnrollment({...editingEnrollment, courseId: e.target.value})}
                  required
                >
                  <option value="" disabled>-- Select a Course --</option>
                  {courses.map((course: any) => (
                    <option key={course.id} value={course.id}>{course.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-[14px] text-on-surface mb-2">Status</label>
                  <select 
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    value={editingEnrollment.status}
                    onChange={(e) => setEditingEnrollment({...editingEnrollment, status: e.target.value})}
                  >
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="dropped">Dropped</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-[14px] text-on-surface mb-2">Progress (%)</label>
                  <input 
                    type="number"
                    min="0"
                    max="100"
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body text-[16px] text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    value={editingEnrollment.progress}
                    onChange={(e) => setEditingEnrollment({...editingEnrollment, progress: e.target.value})}
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors" 
                  onClick={() => setIsEditModalOpen(false)} 
                  type="button"
                >
                  Cancel
                </button>
                <button 
                  className="px-6 py-2 rounded-lg font-label-sm font-bold bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2" 
                  type="submit"
                  disabled={isSubmitting || !editingEnrollment.studentId || !editingEnrollment.courseId}
                >
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmModal 
        isOpen={confirmConfig.isOpen} 
        message={confirmConfig.message} 
        onConfirm={confirmConfig.onConfirm} 
        onCancel={() => setConfirmConfig({ ...confirmConfig, isOpen: false })} 
      />
    </div>
  );
}
