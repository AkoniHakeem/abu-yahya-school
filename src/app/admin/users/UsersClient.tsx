'use client';

import React, { useEffect, useState } from 'react';
import { useAdminStore } from '@/store/admin-store';

export default function UsersClient() {
  const { users, fetchUsers, addUser, updateUser, isLoading } = useAdminStore();
  const [filterRole, setFilterRole] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', middle: '', email: '', password: 'defaultPassword123', role: 'student' });
  const [showPassword, setShowPassword] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState({ id: '', firstName: '', lastName: '', password: '', role: 'student' });
  const [showEditPassword, setShowEditPassword] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = users.filter((user) => {
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesSearch = user.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.id?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const handleAddUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.firstName && newUser.lastName && newUser.email && newUser.role && newUser.password) {
      await addUser({ ...newUser, plan: 'Standard Plan' });
      setIsAddModalOpen(false);
      setNewUser({ firstName: '', lastName: '', middle: '', email: '', password: 'defaultPassword123', role: 'student' });
    }
  };

  const handleEditUser = (user: any) => {
    setEditingUser({
      id: user.id,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      password: '',
      role: user.role,
    });
    setIsEditModalOpen(true);
  };

  const handleEditUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser.firstName && editingUser.lastName && editingUser.role) {
      const data: any = {
        firstName: editingUser.firstName,
        lastName: editingUser.lastName,
        role: editingUser.role,
      };
      
      if (editingUser.password) {
        data.password = editingUser.password;
      }
      
      await updateUser(editingUser.id, data);
      setIsEditModalOpen(false);
    }
  };

  return (
    <div className="flex-1 min-h-0 overflow-y-auto p-4 lg:p-10 flex flex-col gap-6 relative">
      <div className="w-full h-20 bg-surface-container-lowest border-b border-outline-variant/30 flex justify-between items-center px-4 lg:px-10 shrink-0 z-10 shadow-sm mb-6 rounded-xl">
        <h1 className="font-headline text-[24px] text-on-surface font-semibold">User Directory</h1>
        <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-sm text-[14px] font-bold hover:shadow-md transition-all active:scale-95 duration-150">
          <span className="material-symbols-outlined text-[20px]">person_add</span>
          Add New User
        </button>
      </div>

      <div className="w-full bg-surface-container-lowest rounded-xl p-4 shadow-card border border-outline-variant/40 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            className="w-full pl-12 pr-4 py-3 bg-surface rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary font-body text-on-surface outline-none transition-all" 
            placeholder="Search users by name, email, or ID..." 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-64 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">filter_list</span>
          <select 
            className="w-full pl-12 pr-10 py-3 appearance-none bg-surface rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary font-body text-on-surface outline-none transition-all cursor-pointer"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
            <option value="admin">Admin</option>
          </select>
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
        </div>
      </div>

      <div className="w-full bg-surface-container-lowest rounded-xl shadow-card border border-outline-variant/40 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-on-surface-variant">Loading users...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-surface-container/50 border-b border-outline-variant/40">
                  <th className="py-4 px-6 font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold">User</th>
                  <th className="py-4 px-6 font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold">Role</th>
                  <th className="py-4 px-6 font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold">Plan / Level</th>
                  <th className="py-4 px-6 font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold">Status</th>
                  <th className="py-4 px-6 font-label-sm text-[12px] text-on-surface-variant uppercase tracking-wider font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-surface-container-low/50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden shrink-0 flex items-center justify-center text-primary font-bold">
                          {user.avatar ? (
                            <img className="w-full h-full object-cover" src={user.avatar} alt={user.name} />
                          ) : (
                            user.name.substring(0, 2).toUpperCase()
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-[15px] text-on-surface group-hover:text-primary transition-colors">{user.name}</span>
                          <span className="text-[13px] text-on-surface-variant">{user.email || 'No email provided'}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        user.role === 'student' ? 'bg-tertiary-container/10 text-tertiary-container border border-tertiary-container/20' :
                        user.role === 'tutor' ? 'bg-secondary-container/20 text-on-secondary-container border border-secondary-container/30' :
                        'bg-primary-container/20 text-on-primary-container border border-primary-container/30'
                      }`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-on-surface-variant italic">{user.plan || 'N/A'}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-fixed text-on-primary-fixed">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        Active
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleEditUser(user)} className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors" title="Edit User">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
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

      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-surface-container-lowest w-full max-w-md rounded-xl shadow-card flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant/30 flex justify-between items-center">
              <h2 className="font-headline text-[20px] font-bold text-on-surface">Add New User</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleAddUserSubmit} className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-on-surface">First Name</label>
                <input 
                  type="text" 
                  required
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface"
                  value={newUser.firstName}
                  onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-on-surface">Last Name</label>
                <input 
                  type="text" 
                  required
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface"
                  value={newUser.lastName}
                  onChange={(e) => setNewUser({...newUser, lastName: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-on-surface">Middle Name (Optional)</label>
                <input 
                  type="text" 
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface"
                  value={newUser.middle}
                  onChange={(e) => setNewUser({...newUser, middle: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-on-surface">Email</label>
                <input 
                  type="email" 
                  required
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-on-surface">Default Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    className="w-full px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface pr-10"
                    value={newUser.password}
                    onChange={(e) => setNewUser({...newUser, password: e.target.value})}
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
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-on-surface">Role</label>
                <select 
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface"
                  value={newUser.role}
                  onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                >
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-bold text-on-surface-variant hover:bg-surface-variant">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-lg text-sm font-bold bg-primary text-on-primary hover:bg-primary/90">
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-surface-container-lowest w-full max-w-md rounded-xl shadow-card flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-outline-variant/30 flex justify-between items-center">
              <h2 className="font-headline text-[20px] font-bold text-on-surface">Edit User</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleEditUserSubmit} className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-on-surface">First Name</label>
                <input 
                  type="text" 
                  required
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface"
                  value={editingUser.firstName}
                  onChange={(e) => setEditingUser({...editingUser, firstName: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-on-surface">Last Name</label>
                <input 
                  type="text" 
                  required
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface"
                  value={editingUser.lastName}
                  onChange={(e) => setEditingUser({...editingUser, lastName: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-on-surface">Override Password (Optional)</label>
                <div className="relative">
                  <input 
                    type={showEditPassword ? "text" : "password"} 
                    placeholder="Leave blank to keep current"
                    className="w-full px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface pr-10"
                    value={editingUser.password}
                    onChange={(e) => setEditingUser({...editingUser, password: e.target.value})}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface"
                    onClick={() => setShowEditPassword(!showEditPassword)}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showEditPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-on-surface">Role</label>
                <select 
                  className="px-4 py-2 bg-surface border border-outline-variant/50 rounded-lg focus:outline-none focus:border-primary text-on-surface"
                  value={editingUser.role}
                  onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
                >
                  <option value="student">Student</option>
                  <option value="tutor">Tutor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 rounded-lg text-sm font-bold text-on-surface-variant hover:bg-surface-variant">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-lg text-sm font-bold bg-primary text-on-primary hover:bg-primary/90">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
