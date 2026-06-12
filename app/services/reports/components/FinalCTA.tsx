"use client";
import React from "react";

import { SOCIAL_LINKS } from "../../../constants";
const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to order a personalized astrology report.")}`;

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
