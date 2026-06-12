import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import WhatYouGet from "./components/WhatYouGet";
import PricingSection from "./components/PricingSection";
import ProcessTimeline from "./components/ProcessTimeline";
import ConsultationForm from "./components/ConsultationForm";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import "./consultation.css";

import { SOCIAL_LINKS, CONTACT_INFO } from "../../constants";
import "./consultation.css";

export const metadata: Metadata = {
  title: "Online Astrology Consultation | Gokul's Astrological Insights",
  description: "Book an online astrology consultation with expert astrologer Gokul Murugan. Get personalized horoscope analysis, KP astrology predictions, and remedies. ₹1001 only.",
};

export default function OnlineConsultationPage() {
  const waLink = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to book an online consultation.")}`;

  return (
    <div className="oc-root">
      <HeroSection />
      <WhatYouGet />
      <PricingSection />
      <ProcessTimeline />
      <ConsultationForm />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <FinalCTA />

      <footer className="oc-page-footer">
        <div className="oc-container">
          <div className="oc-footer-grid">
            <div className="oc-footer-brand">
              <div className="oc-footer-logo">🔮</div>
              <h3 className="oc-footer-name">Gokul&apos;s Astrological Insights</h3>
              <p className="oc-footer-tagline">Astrologer: Gokul Murugan | Astrosage ID: {CONTACT_INFO.astrosage_id}</p>
            </div>
            <div className="oc-footer-contact">
              <h4 className="oc-footer-h4">Contact</h4>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="oc-footer-link">📱 {CONTACT_INFO.phone}</a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="oc-footer-link">📧 {CONTACT_INFO.email}</a>
              <p className="oc-footer-link">📍 {CONTACT_INFO.address}</p>
            </div>
            <div className="oc-footer-social">
              <h4 className="oc-footer-h4">Follow Us</h4>
              <div className="oc-social-row">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="oc-social-btn" aria-label="Instagram">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="oc-social-btn" aria-label="Facebook">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="oc-footer-bottom">
            <p>© {new Date().getFullYear()} Gokul&apos;s Astrological Insights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

