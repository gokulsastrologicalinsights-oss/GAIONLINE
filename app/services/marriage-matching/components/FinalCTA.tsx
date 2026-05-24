"use client";
import React from "react";

const WA_LINK = "https://wa.me/919444559071?text=Hello%20Gokul's%20Astrological%20Insights,%20I'm%20interested%20in%20Marriage%20Matching%20services.";

export default function FinalCTA() {
  return (
    <section className="mm-final-cta">
      <div className="mm-cta-glow" />
      <div className="mm-container mm-cta-inner">
        <span className="mm-section-tag">✦ Get Started ✦</span>
        <h2 className="mm-cta-h2">Find Better Compatibility<br /><span className="mm-gold">Before Marriage</span></h2>
        <p className="mm-cta-sub">Get astrology-based compatibility analysis for a better future together.</p>
        <div className="mm-cta-btns">
          <a href="#types" className="mm-btn-primary mm-btn-large">✦ Start Matching</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mm-btn-wa mm-btn-large">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
