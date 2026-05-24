"use client";
import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ConsultationTypes from "./components/ConsultationTypes";
import ProcessTimeline from "./components/ProcessTimeline";
import NumerologyForm from "./components/NumerologyForm";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import "./numerology.css";

export default function NumerologyPage() {
  const [selectedType, setSelectedType] = useState<"Basic" | "Advanced" | "">("");

  const handleSelectType = (type: "Basic" | "Advanced") => {
    setSelectedType(type);
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const WA_LINK = "https://wa.me/919444559071?text=Hello%20Gokul's%20Astrological%20Insights,%20I%20want%20to%20enquire%20about%20Numerology%20Consultation.";

  return (
    <div className="nc-root">
      {/* Floating WhatsApp Button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="nc-float-wa"
        aria-label="Chat on WhatsApp"
      >
        <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/>
        </svg>
      </a>

      <HeroSection />
      <ConsultationTypes onSelect={handleSelectType} />
      <ProcessTimeline />
      <NumerologyForm selectedType={selectedType} />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <FinalCTA />

      <footer className="nc-footer">
        <div className="nc-container">
          <div className="nc-footer-grid">
            <div className="nc-footer-brand">
              <h3>Gokul&apos;s Astrological Insights</h3>
              <p>Astrologer: Gokul Murugan</p>
              <p>Astrosage ID: 11195</p>
              <p>📍 Thiruverkadu, Chennai</p>
            </div>
            <div>
              <h4 className="nc-footer-h4">Quick Links</h4>
              <a href="#" className="nc-footer-link">Home</a>
              <a href="#types" className="nc-footer-link">Consultation Types</a>
              <a href="#form" className="nc-footer-link">Book Now</a>
            </div>
            <div>
              <h4 className="nc-footer-h4">Contact Us</h4>
              <a href={WA_LINK} className="nc-footer-link">📱 +91 9444 55 9071</a>
              <a href="mailto:gokulsastrologicalinsights@gmail.com" className="nc-footer-link">📧 gokulsastrologicalinsights@gmail.com</a>
            </div>
            <div>
              <h4 className="nc-footer-h4">Follow Us</h4>
              <div className="nc-footer-social">
                <a href="#" className="nc-social-btn">YT</a>
                <a href="#" className="nc-social-btn">IG</a>
                <a href="#" className="nc-social-btn">FB</a>
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
