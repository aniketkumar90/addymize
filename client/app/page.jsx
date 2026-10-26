'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import StatsCard from '@/components/StatsCard';
import OurClients from '@/sections/OurClients';
import DashboardPreview from '@/sections/DashboardPreview';
import Features from '@/sections/Features';
import Pricing from '@/sections/Pricing';
import CaseStudies from '@/sections/CaseStudies';
import About from '@/sections/About';
import Blog from '@/sections/Blog';
import Contact from '@/sections/Contact';
import CTA from '@/sections/CTA';
import FooterSection from '@/sections/FooterSection';
import DemoModal from '@/components/DemoModal';
import BackgroundGlow from '@/components/BackgroundGlow';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import StickySocialBar from '@/components/StickySocialBar';
import IntroVideoPreloader from '@/components/IntroVideoPreloader';

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#073e4a] text-slate-100 w-full overflow-x-hidden selection:bg-amber-400 selection:text-black relative">
      {/* Cinematic Intro Video Preloader (Plays on site load like TechSnitch) */}
      <IntroVideoPreloader />

      {/* Smooth Ambient Background Glow matching reference image */}
      <BackgroundGlow />

      {/* Main Content Area */}
      <main id="main-content" className="relative w-full z-10">
        {/* Floating Glass Navbar */}
        <Navbar
          onBookDemoClick={() => setDemoModalOpen(true)}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Hero Section */}
        <Hero
          onGetStarted={() => setDemoModalOpen(true)}
          onExploreSolutions={() => scrollToSection('solutions')}
        />

        {/* 4-Column Stats Card Bar */}
        <StatsCard />

        {/* Our Clients & Enterprise Partners - Auto Loop Marquee Cards (Commented Out) */}
        {/* <OurClients /> */}

        {/* Dedicated Interactive Dashboard Preview */}
        <DashboardPreview onExploreClick={() => setDemoModalOpen(true)} />

        {/* 8-Grid Features Architecture */}
        <Features />

        {/* Pricing Section with Monthly/Annual toggle */}
        <Pricing onSelectPlan={() => setDemoModalOpen(true)} />

        {/* Real-World Case Studies */}
        <CaseStudies onSelectCase={() => setDemoModalOpen(true)} />

        {/* About / Why Us Split Section */}
        <About onBookDemoClick={() => setDemoModalOpen(true)} />

        {/* Engineering & Design Blog */}
        <Blog onReadArticle={() => setDemoModalOpen(true)} />

        {/* Functional Contact Form Section */}
        <Contact />

        {/* Final CTA Section */}
        <CTA
          onStartProject={() => scrollToSection('contact')}
          onBookDemo={() => setDemoModalOpen(true)}
        />

        {/* Minimalist Footer */}
        <FooterSection />
      </main>

      {/* Sticky Transparent Social Media Dock on Left Edge */}
      <StickySocialBar />

      {/* Floating WhatsApp and Call Action Buttons */}
      <FloatingContactButtons />

      {/* Demo Booking Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
