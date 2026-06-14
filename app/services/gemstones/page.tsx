"use client";

import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import AnnouncementBanner from "./components/AnnouncementBanner";
import HowItWorks from "./components/HowItWorks";
import PromoSection from "./components/PromoSection";
import GemstoneGrid, { Gemstone } from "./components/GemstoneGrid";
import GemstoneModal from "./components/GemstoneModal";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import FloatingWA from "./components/FloatingWA";
import "./gemstones.css";

export default function GemstonesPage() {
  const [selectedGem, setSelectedGem] = useState<Gemstone | null>(null);

  return (
    <div className="w-full bg-white min-h-screen text-slate-900 font-sans antialiased overflow-hidden">
      <AnnouncementBanner />

      <HeroSection />

      {/* Modern How It Works Process Section */}
      <HowItWorks />
      
      {/* Gemstone collection section */}
      <GemstoneGrid onSelect={(gem) => setSelectedGem(gem)} />
      
      {/* Gemstone wearing guide promo section (Rendered exactly once) */}
      <PromoSection />
      
      <WhyChooseUs />
      
      <Testimonials />
      
      <FAQSection />
      
      <FinalCTA />

      {/* Configuration & Consultation Modal */}
      {selectedGem && (
        <GemstoneModal 
          gemstone={selectedGem} 
          onClose={() => setSelectedGem(null)} 
        />
      )}

      {/* Gemstone-specific Floating Sticky WhatsApp Button */}
      <FloatingWA />
    </div>
  );
}
