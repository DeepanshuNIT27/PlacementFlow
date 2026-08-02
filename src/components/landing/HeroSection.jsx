import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="max-w-container_max mx-auto px-xl py-xxl flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-xs px-md py-base rounded-full border border-outline-variant bg-surface-container-low mb-lg">
        <span className="material-symbols-outlined text-sm text-primary">rocket_launch</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Campus Placement Manager</span>
      </div>
      <h1 className="font-display-lg text-display-lg md:text-[64px] leading-tight mb-md max-w-4xl">
        Organize Your Entire <br/>
        <span className="text-gradient-blue">Placement Journey</span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-xl">
        Track applications, online assessments, interviews, deadlines, offers and preparation notes from one clean dashboard.
      </p>
      <div className="flex flex-col md:flex-row gap-md items-center mb-xxl">
        <Link to="/dashboard" className="bg-primary-container text-on-primary-container px-xxl py-md rounded-xl font-headline-md text-headline-md flex items-center gap-sm hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/20">
          Start Tracking
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
        <button className="text-on-surface hover:bg-surface-container-high px-xl py-md rounded-xl font-headline-md text-headline-md transition-colors border border-outline-variant">
          Learn More
        </button>
      </div>
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md w-full max-w-4xl">
        <div className="glass-card p-xl rounded-2xl hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(173,198,255,0.1)] transition-all duration-300">
          <div className="font-headline-lg text-headline-lg text-primary">100+</div>
          <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">Applications</div>
        </div>
        <div className="glass-card p-xl rounded-2xl hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(173,198,255,0.1)] transition-all duration-300">
          <div className="font-headline-lg text-headline-lg text-primary">40+</div>
          <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">Assessments</div>
        </div>
        <div className="glass-card p-xl rounded-2xl hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(173,198,255,0.1)] transition-all duration-300">
          <div className="font-headline-lg text-headline-lg text-primary">18</div>
          <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">Interviews</div>
        </div>
        <div className="glass-card p-xl rounded-2xl hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(173,198,255,0.1)] transition-all duration-300">
          <div className="font-headline-lg text-headline-lg text-primary">6</div>
          <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">Offers</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
