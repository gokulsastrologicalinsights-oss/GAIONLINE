"use client";
import React from "react";

const WA_LINK = "https://wa.me/919444559071?text=Hello%20Gokul's%20Astrological%20Insights,%20I%20want%20to%20find%20the%20right%20gemstone%20for%20my%20horoscope.";

export default function FinalCTA() {
  return (
    <section className="gs-final-cta">
      <div className="gs-cta-glow" />
      <div className="gs-container gs-cta-inner">
        <span className="gs-section-tag">✦ Personalized Selection ✦</span>
        <h2 className="gs-cta-h2">Find The Right Gemstone<br /><span className="gs-gold">For Your Horoscope</span></h2>
        <p className="gs-cta-sub">Strengthen planetary energies with premium astrological gemstones and expert guidance.</p>
        <div className="gs-cta-btns">
          <a href="#collection" className="gs-btn-primary gs-btn-large">✦ Explore Gemstones</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="gs-btn-wa gs-btn-large">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
