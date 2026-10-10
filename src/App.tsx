import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { YoutubeVideoShowcase } from './components/showcase/YoutubeVideoShowcase';
import { Showcase } from './components/showcase/Showcase';
import { Features } from './components/features/Features';
import { Plans } from './components/plans/Plans';
import { FaqSection } from './components/features/FaqSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-neon selection:text-white flex flex-col font-sans overflow-x-hidden w-full max-w-[100vw]">
      {/* Header & Navigation */}
      <Navbar />

      <main className="flex-grow w-full overflow-x-hidden">
        {/* Hero Section with Live Player Simulation */}
        <Hero />

        {/* YouTube Video: Sets do YouTube ao Corte Vertical */}
        <YoutubeVideoShowcase />

        {/* Interactive Templates Showcase with Safe Zones */}
        <Showcase />

        {/* Technical Mechanism & Safe Zones */}
        <Features />

        {/* Packages & Production Plans */}
        <Plans />

        {/* Operational FAQ */}
        <FaqSection />

        {/* Exclusive Contact via djclipcutter@gmail.com */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
