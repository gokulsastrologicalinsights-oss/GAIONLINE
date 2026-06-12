"use client";
import React, { useState } from "react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../../constants";
import HeroSection from "./components/HeroSection";
import AnnouncementBanner from "./components/AnnouncementBanner";
import PromoSection from "./components/PromoSection";
import GemstoneGrid, { Gemstone } from "./components/GemstoneGrid";
import GemstoneModal from "./components/GemstoneModal";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import "./gemstones.css";

export default function GemstonesPage() {
  const [selectedGem, setSelectedGem] = useState<Gemstone | null>(null);

  const waLink = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to enquire about Astrological Gemstones.")}`;

  return (
    <div className="gs-root">
      <AnnouncementBanner />

      <HeroSection />
      <PromoSection />
      <GemstoneGrid onSelect={(gem) => setSelectedGem(gem)} />
      <PromoSection />
      <WhyChooseUs />
      <Testimonials />
      <PromoSection />
      <FAQSection />
      <FinalCTA />

      {selectedGem && (
        <GemstoneModal 
          gemstone={selectedGem} 
          onClose={() => setSelectedGem(null)} 
        />
      )}

      <footer className="gs-footer">
        <div className="gs-container">
          <div className="gs-footer-grid">
            <div className="gs-footer-brand">
              <h3>Gokul&apos;s Astrological Insights</h3>
              <p>Astrologer: Gokul Murugan</p>
              <p>Astrosage ID: {CONTACT_INFO.astrosage_id}</p>
              <p>📍 {CONTACT_INFO.address}</p>
            </div>
            <div>
              <h4 className="gs-footer-h4">Quick Links</h4>
              <a href="#" className="gs-footer-link">Home</a>
              <a href="#collection" className="gs-footer-link">Gemstone Collection</a>
              <a href="#faq" className="gs-footer-link">FAQs</a>
            </div>
            <div>
              <h4 className="gs-footer-h4">Contact Us</h4>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="gs-footer-link">📱 {CONTACT_INFO.phone}</a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="gs-footer-link">📧 {CONTACT_INFO.email}</a>
            </div>
            <div>
              <h4 className="gs-footer-h4">Follow Us</h4>
              <div className="gs-footer-social" style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="gs-footer-link" aria-label="Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="gs-footer-link" aria-label="Facebook" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="nc-footer-bottom">
            <p>© {new Date().getFullYear()} Gokul&apos;s Astrological Insights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
