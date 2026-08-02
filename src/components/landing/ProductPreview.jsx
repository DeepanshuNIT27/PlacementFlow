import React from 'react';

const ProductPreview = () => {
  return (
    <section className="max-w-container_max mx-auto px-xl py-xxl">
      <div className="relative rounded-[2rem] overflow-hidden border border-outline-variant bg-surface-container-lowest p-md md:p-lg">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
        <div className="flex items-center justify-between mb-lg px-md">
          <div className="flex items-center gap-sm">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-tertiary"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <div className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-xs">
            <span className="material-symbols-outlined text-sm">lock</span>
            placementflow.app/dashboard
          </div>
        </div>
        <img 
          className="w-full h-auto rounded-xl shadow-2xl border border-outline-variant" 
          alt="Dashboard Interface Preview" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDirhnvvvEjWfy81o5VFkaNzkjsa636DKnfOuLTAc41NESQhoKMViNQ4XFJG9W24GnS5v6wZ92WjhkzHiSDlBjyx2KYk8jQFOiS_PPvT2CxYvasKMeCbfiQ0y84jpXFSTQCE6eN8xIqSmgnaijf61ftynzq_LE3BQW2zRBQeAx55IAN5ZGnGioxFvYqit4iTGoa7XTXFbONRnsiAB3CVxrX_N26y7R2qysyLntKAmRUTsERPKkG-u6IOQ" 
        />
      </div>
    </section>
  );
};

export default ProductPreview;
