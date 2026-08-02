import React from 'react';

const FeaturesGrid = () => {
  return (
    <section className="max-w-container_max mx-auto px-xl py-xxl">
      <div className="text-center mb-xxl">
        <h2 className="font-headline-lg text-headline-lg md:text-display-lg mb-md">
          Why Choose <span className="text-gradient-blue">PlacementFlow?</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Everything you need to organize your placement journey without spreadsheets, scattered notes or missed deadlines.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {/* Card 1 */}
        <div className="group glass-card p-xl rounded-[2rem] hover:border-primary transition-all duration-300 flex flex-col h-full">
          <div className="w-14 h-14 bg-primary-container/20 rounded-2xl flex items-center justify-center mb-xl group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-md">Track Applications</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl flex-grow">
            Manage every company application from wishlist to final offer in one organized, Kanban-style dashboard.
          </p>
          <div className="flex gap-xs items-center text-primary font-label-md text-label-md cursor-pointer group-hover:gap-sm transition-all">
            Learn how <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group glass-card p-xl rounded-[2rem] hover:border-primary transition-all duration-300 flex flex-col h-full">
          <div className="w-14 h-14 bg-tertiary-container/20 rounded-2xl flex items-center justify-center mb-xl group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-md">Never Miss Deadlines</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl flex-grow">
            Keep important OA dates, interview schedules and technical round deadlines synced with your local calendar.
          </p>
          <div className="flex gap-xs items-center text-primary font-label-md text-label-md cursor-pointer group-hover:gap-sm transition-all">
            View Scheduler <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group glass-card p-xl rounded-[2rem] hover:border-primary transition-all duration-300 flex flex-col h-full">
          <div className="w-14 h-14 bg-secondary-container/20 rounded-2xl flex items-center justify-center mb-xl group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-md">Simple Analytics</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl flex-grow">
            View application statistics and placement conversion rates with clean, intuitive visual insights.
          </p>
          <div className="flex gap-xs items-center text-primary font-label-md text-label-md cursor-pointer group-hover:gap-sm transition-all">
            Explore Insights <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
