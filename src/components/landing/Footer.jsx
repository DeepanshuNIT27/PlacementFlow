import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant pt-xxl pb-xl mt-xxl">
      <div className="max-w-container_max mx-auto px-xl grid grid-cols-1 md:grid-cols-4 gap-xl">
        <div className="col-span-1 md:col-span-2">
          <div className="font-headline-md text-headline-md font-bold text-primary mb-md">PlacementFlow</div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-lg">
            The ultimate student companion for navigating the placement season with clarity and precision.
          </p>
          <div className="flex gap-md">
            <div className="p-sm bg-surface-container rounded-lg border border-outline-variant hover:bg-surface-container-high cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">terminal</span>
            </div>
            <div className="p-sm bg-surface-container rounded-lg border border-outline-variant hover:bg-surface-container-high cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">forum</span>
            </div>
            <div className="p-sm bg-surface-container rounded-lg border border-outline-variant hover:bg-surface-container-high cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">rss_feed</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-widest mb-lg">Platform</h4>
          <ul className="space-y-md font-body-md text-body-md text-on-surface-variant">
            <li><a className="hover:text-primary transition-colors" href="#">About</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Features</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-widest mb-lg">Legal</h4>
          <ul className="space-y-md font-body-md text-body-md text-on-surface-variant">
            <li><a className="hover:text-primary transition-colors" href="#">Privacy</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-container_max mx-auto px-xl mt-xxl pt-xl border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="font-label-sm text-label-sm text-on-surface-variant">
          © 2024 PlacementFlow. All rights reserved. Built for high-performance students.
        </div>
        <div className="flex items-center gap-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
