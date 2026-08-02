import React from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import HeroSection from '../components/landing/HeroSection';
import ProductPreview from '../components/landing/ProductPreview';
import FeaturesGrid from '../components/landing/FeaturesGrid';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="antialiased overflow-x-hidden">
      <LandingNavbar />
      
      <main className="relative pt-xxl">
        <div className="hero-mesh"></div>
        
        <HeroSection />
        
        <ProductPreview />
        
        <FeaturesGrid />
        
        {/* CTA Section */}
        <section className="max-w-container_max mx-auto px-xl py-xxl">
          <div className="relative overflow-hidden rounded-[3rem] bg-primary-container/10 border border-primary/20 p-xl md:p-xxl flex flex-col items-center text-center">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tertiary/20 blur-[100px] rounded-full"></div>
            <h2 className="font-display-lg text-display-lg mb-md relative z-10">Ready to secure your dream role?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-xl relative z-10">
              Join thousands of students who are landing top tier placements using our streamlined tracking workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-md relative z-10">
              <button className="bg-primary text-on-primary font-headline-md text-headline-md px-xxl py-md rounded-xl active:scale-95 transition-transform hover:shadow-xl shadow-primary/10">Get Started For Free</button>
              <button className="bg-surface-container-highest text-on-surface font-headline-md text-headline-md px-xxl py-md rounded-xl active:scale-95 transition-transform">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
