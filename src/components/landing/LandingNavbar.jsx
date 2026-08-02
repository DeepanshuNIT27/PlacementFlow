import React, { useEffect, useRef, useState } from 'react';

const LandingNavbar = () => {
  const navRef = useRef(null);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const nav = navRef.current;
      
      if (!nav) return;

      if (currentScroll <= 0) {
        setHasShadow(false);
        nav.style.transform = 'translateY(0)';
        return;
      }
      
      if (currentScroll > lastScroll) {
        // Scroll Down
        nav.style.transform = 'translateY(-100%)';
      } else {
        // Scroll Up
        nav.style.transform = 'translateY(0)';
        setHasShadow(true);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-xl py-md transition-transform duration-300 ease-in-out ${hasShadow ? 'shadow-xl' : ''}`}
    >
      <div className="flex items-center gap-sm">
        <span className="font-headline-md text-headline-md font-bold text-primary">PlacementFlow</span>
      </div>
      <div className="hidden md:flex items-center gap-xl">
        <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">Home</a>
        <a className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors font-body-md text-body-md px-md py-xs rounded-lg" href="#">Product</a>
        <a className="text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors font-body-md text-body-md px-md py-xs rounded-lg" href="#">Success Stories</a>
      </div>
      <div className="flex items-center gap-md">
        <div className="relative group cursor-pointer active:scale-95 transition-transform p-sm rounded-full hover:bg-surface-container-high">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
