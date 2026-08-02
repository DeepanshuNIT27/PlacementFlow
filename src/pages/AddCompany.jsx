import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavBar from '../components/TopNavBar';

function AddCompany() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    package: '',
    priority: 'Medium',
    stage: 'Wishlist',
    deadline: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would save to state/backend
    navigate('/dashboard');
  };

  return (
    <div className="h-screen overflow-hidden bg-background text-on-surface">
      <Sidebar activePage="dashboard" />
      <main className="ml-64 h-full flex flex-col bg-background relative overflow-hidden">
        <TopNavBar />
        <div className="flex-1 overflow-y-auto px-xl py-xl z-10">
          <div className="max-w-2xl mx-auto">
            <section className="mb-xl">
              <h2 className="font-headline-lg text-headline-lg text-on-background">Add New Company</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Fill in the details to track a new placement application.</p>
            </section>

            <form onSubmit={handleSubmit} className="space-y-lg">
              {/* Company Name */}
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant block mb-sm">Company Name *</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-md px-md text-body-md text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  placeholder="e.g. Google, Microsoft, Amazon"
                />
              </div>

              {/* Role */}
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant block mb-sm">Role *</label>
                <input
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-md px-md text-body-md text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  placeholder="e.g. SDE Intern, Software Engineer"
                />
              </div>

              {/* Package & Priority Row */}
              <div className="grid grid-cols-2 gap-lg">
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant block mb-sm">Package</label>
                  <input
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-md px-md text-body-md text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    placeholder="e.g. ₹12 LPA"
                  />
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant block mb-sm">Priority</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-md px-md text-body-md text-on-surface focus:ring-primary"
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>

              {/* Stage & Deadline Row */}
              <div className="grid grid-cols-2 gap-lg">
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant block mb-sm">Stage</label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-md px-md text-body-md text-on-surface focus:ring-primary"
                  >
                    <option>Wishlist</option>
                    <option>Applied</option>
                    <option>OA</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                  </select>
                </div>
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant block mb-sm">Deadline</label>
                  <input
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-md px-md text-body-md text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant block mb-sm">Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-md px-md text-body-md text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                  placeholder="Any additional notes about this application..."
                />
              </div>

              {/* Actions */}
              <div className="flex gap-md pt-md">
                <button
                  type="submit"
                  className="flex items-center gap-sm bg-primary-container text-on-primary-container px-xl py-md rounded-xl font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary-container/10"
                >
                  <span className="material-symbols-outlined">check</span>
                  Save Application
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high px-xl py-md rounded-xl font-label-md text-label-md transition-colors border border-outline-variant"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddCompany;
