"use client";
import React from "react";

const WA_LINK = "https://wa.me/919444559071?text=Hello%20Gokul's%20Astrological%20Insights,%20I%20want%20to%20order%20a%20personalized%20astrology%20report.";

export default function FinalCTA() {
  return (
    <section className="rp-final-cta">
      <div className="rp-cta-glow" />
      <div className="rp-container">
        <h2 className="rp-cta-h2">Get Personalized Astrology<br /><span className="rp-gold">Guidance Professionally</span></h2>
        <p className="rp-cta-sub">Premium astrology reports, predictions, compatibility analysis, remedies, and consultation services.</p>
        <div className="rp-cta-btns">
          <a href="#reports" className="rp-btn-primary rp-btn-large">Explore Reports</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="rp-btn-wa rp-btn-large">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
