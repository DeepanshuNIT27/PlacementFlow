import React from 'react';
import Sidebar from '../components/Sidebar';
import TopNavBar from '../components/TopNavBar';

function Analytics() {
  return (
    <div className="h-screen overflow-hidden bg-background text-on-surface">
      <Sidebar activePage="analytics" />
      <main className="ml-64 h-full flex flex-col bg-background relative overflow-hidden">
        <TopNavBar />
        <div className="flex-1 overflow-y-auto px-xl py-xl space-y-xl z-10">
          <section>
            <h2 className="font-headline-lg text-headline-lg text-on-background">Analytics</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Visualize your placement journey with insightful charts and data.</p>
          </section>

          {/* Stats Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            <div className="bg-surface-container p-xl rounded-xl border border-outline-variant">
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-sm">Conversion Rate</p>
              <div className="flex items-end justify-between">
                <span className="font-display-lg text-display-lg text-primary font-bold">7.1%</span>
                <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant mt-sm">2 offers from 28 applications</p>
            </div>
            <div className="bg-surface-container p-xl rounded-xl border border-outline-variant">
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-sm">Interview Success</p>
              <div className="flex items-end justify-between">
                <span className="font-display-lg text-display-lg text-tertiary font-bold">40%</span>
                <span className="material-symbols-outlined text-tertiary text-3xl">emoji_events</span>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant mt-sm">2 offers from 5 interviews</p>
            </div>
            <div className="bg-surface-container p-xl rounded-xl border border-outline-variant">
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-sm">OA Clear Rate</p>
              <div className="flex items-end justify-between">
                <span className="font-display-lg text-display-lg text-primary-container font-bold">62.5%</span>
                <span className="material-symbols-outlined text-primary-container text-3xl">laptop_mac</span>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant mt-sm">5 interviews from 8 OAs</p>
            </div>
          </section>

          {/* Application Funnel */}
          <section className="bg-surface-container p-xl rounded-xl border border-outline-variant">
            <h3 className="font-headline-md text-headline-md mb-lg">Application Funnel</h3>
            <div className="space-y-md">
              {[
                { label: 'Applied', count: 28, width: '100%', color: 'bg-primary' },
                { label: 'Online Assessment', count: 8, width: '28.5%', color: 'bg-tertiary' },
                { label: 'Interview', count: 5, width: '17.8%', color: 'bg-primary-container' },
                { label: 'Offer', count: 2, width: '7.1%', color: 'bg-secondary' },
              ].map((stage) => (
                <div key={stage.label} className="flex items-center gap-lg">
                  <span className="font-label-md text-label-md text-on-surface-variant w-40 text-right">{stage.label}</span>
                  <div className="flex-1 bg-surface-container-lowest rounded-full h-8 overflow-hidden">
                    <div 
                      className={`${stage.color} h-full rounded-full flex items-center px-md transition-all duration-500`} 
                      style={{ width: stage.width }}
                    >
                      <span className="font-label-sm text-label-sm text-on-primary-container font-bold">{stage.count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Priority Breakdown */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            <div className="bg-surface-container p-xl rounded-xl border border-outline-variant">
              <h3 className="font-headline-md text-headline-md mb-lg">Priority Breakdown</h3>
              <div className="space-y-md">
                <div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-md">
                    <span className="w-3 h-3 rounded-full bg-error"></span>
                    <span className="font-label-md text-label-md">High Priority</span>
                  </div>
                  <span className="font-headline-md text-headline-md text-error">3</span>
                </div>
                <div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-md">
                    <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                    <span className="font-label-md text-label-md">Medium Priority</span>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary-container">1</span>
                </div>
                <div className="flex items-center justify-between p-md bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-md">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                    <span className="font-label-md text-label-md">Low Priority</span>
                  </div>
                  <span className="font-headline-md text-headline-md text-secondary">0</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-xl rounded-xl border border-outline-variant">
              <h3 className="font-headline-md text-headline-md mb-lg">Stage Distribution</h3>
              <div className="space-y-md">
                {[
                  { stage: 'Wishlist', count: 1, color: 'text-on-surface-variant' },
                  { stage: 'Applied', count: 1, color: 'text-primary' },
                  { stage: 'OA', count: 1, color: 'text-tertiary' },
                  { stage: 'Interview', count: 1, color: 'text-primary-container' },
                  { stage: 'Offer', count: 0, color: 'text-secondary' },
                  { stage: 'Rejected', count: 0, color: 'text-error' },
                ].map((item) => (
                  <div key={item.stage} className="flex items-center justify-between p-md bg-surface-container-low rounded-lg">
                    <span className="font-label-md text-label-md">{item.stage}</span>
                    <span className={`font-headline-md text-headline-md ${item.color}`}>{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Analytics;
