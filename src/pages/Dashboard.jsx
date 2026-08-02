import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import TopNavBar from '../components/TopNavBar';
import MetricCard from '../components/MetricCard';
import FilterBar from '../components/FilterBar';
import KanbanBoard from '../components/KanbanBoard';

function Dashboard() {
  useEffect(() => {
    // Micro-interactions and effects for glass-card
    const handleMouseMove = (e) => {
      document.querySelectorAll('.glass-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-background text-on-surface">
      <Sidebar />
      <main className="ml-64 h-full flex flex-col bg-background relative overflow-hidden">
        <TopNavBar />
        
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-xl py-xl space-y-xl z-10">
          
          {/* Dashboard Header */}
          <section>
            <h2 className="font-headline-lg text-headline-lg text-on-background">Dashboard</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Manage and track all your placement applications from one place.</p>
          </section>

          {/* Metric Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            <MetricCard 
              title="Total Applications" 
              value="28" 
              icon="assignment" 
              colorClass={{ hoverText: 'group-hover:text-primary', text: 'text-primary' }}
              hoverBorderColorClass="hover:border-primary/40"
            />
            <MetricCard 
              title="Online Assessments" 
              value="8" 
              icon="laptop_mac" 
              colorClass={{ hoverText: 'group-hover:text-tertiary', text: 'text-tertiary' }}
              hoverBorderColorClass="hover:border-tertiary/40"
            />
            <MetricCard 
              title="Interviews" 
              value="5" 
              icon="groups" 
              colorClass={{ hoverText: 'group-hover:text-primary-container', text: 'text-primary-container' }}
              hoverBorderColorClass="hover:border-primary-container/40"
            />
            <MetricCard 
              title="Offers" 
              value="2" 
              icon="workspace_premium" 
              colorClass={{ hoverText: 'group-hover:text-secondary', text: 'text-secondary' }}
              hoverBorderColorClass="hover:border-secondary/40"
            />
          </section>

          <FilterBar />
          
          <KanbanBoard />

        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-xl right-xl w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-all group">
          <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">add</span>
        </button>
      </main>
    </div>
  );
}

export default Dashboard;
