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

export const metadata: Metadata = {
  title: "Online Astrology Consultation | Gokul's Astrological Insights",
  description: "Book an online astrology consultation with expert astrologer Gokul Murugan. Get personalized horoscope analysis, KP astrology predictions, and remedies. ₹1001 only.",
};

const WA_LINK = "https://wa.me/919444559071?text=Hello%20Gokul's%20Astrological%20Insights,%20I%20want%20to%20book%20an%20online%20consultation.";

export default function OnlineConsultationPage() {
  return (
    <div className="oc-root">
      {/* Floating WhatsApp Button */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="oc-float-wa" aria-label="Chat on WhatsApp">
        <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/>
        </svg>
        <span className="oc-float-pulse" />
      </a>

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
              <p className="oc-footer-tagline">Astrologer: Gokul Murugan | Astrosage ID: 11195</p>
            </div>
            <div className="oc-footer-contact">
              <h4 className="oc-footer-h4">Contact</h4>
              <a href={WA_LINK} className="oc-footer-link">📱 +91 9444 55 9071</a>
              <a href="mailto:gokulsastrologicalinsights@gmail.com" className="oc-footer-link">📧 gokulsastrologicalinsights@gmail.com</a>
              <p className="oc-footer-link">📍 Thiruverkadu, Chennai</p>
            </div>
            <div className="oc-footer-social">
              <h4 className="oc-footer-h4">Follow Us</h4>
              <div className="oc-social-row">
                <a href="#" className="oc-social-btn" aria-label="YouTube">YT</a>
                <a href="#" className="oc-social-btn" aria-label="Instagram">IG</a>
                <a href="#" className="oc-social-btn" aria-label="Facebook">FB</a>
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
