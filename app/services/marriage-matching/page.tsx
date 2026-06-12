"use client";
import React, { useState } from "react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../../constants";
import HeroSection from "./components/HeroSection";
import MatchingTypes from "./components/MatchingTypes";
import ProcessTimeline from "./components/ProcessTimeline";
import MatchingForm from "./components/MatchingForm";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import "./marriage-matching.css";

export default function MarriageMatchingPage() {
  const [selectedType, setSelectedType] = useState<"Basic" | "Advanced" | "">("");

  const handleSelectType = (type: "Basic" | "Advanced") => {
    setSelectedType(type);
    // Scroll to form after selection
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const waLink = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to enquire about Marriage Matching services.")}`;

  return (
    <div className="mm-root">
      <HeroSection />
      <MatchingTypes onSelect={handleSelectType} />
      <ProcessTimeline />
      <MatchingForm selectedType={selectedType} />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <FinalCTA />

      <footer className="mm-footer">
        <div className="mm-container">
          <div className="mm-footer-grid">
            <div className="mm-footer-brand">
              <h3>Gokul&apos;s Astrological Insights</h3>
              <p>Astrologer: Gokul Murugan</p>
              <p>Astrosage ID: {CONTACT_INFO.astrosage_id}</p>
              <p>📍 {CONTACT_INFO.address}</p>
            </div>
            <div>
              <h4 className="mm-footer-h4">Contact Us</h4>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="mm-footer-link">📱 {CONTACT_INFO.phone}</a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="mm-footer-link">📧 {CONTACT_INFO.email}</a>
            </div>
            <div>
              <h4 className="mm-footer-h4">Follow Us</h4>
              <div className="mm-footer-social">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="mm-social-btn" aria-label="Instagram">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="mm-social-btn" aria-label="Facebook">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mm-footer-bottom">
            <p>© {new Date().getFullYear()} Gokul&apos;s Astrological Insights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
