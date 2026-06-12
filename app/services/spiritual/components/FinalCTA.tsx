"use client";
import React from "react";

import { SOCIAL_LINKS } from "../../../constants";
const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to start my spiritual consultation.")}`;

export default function FinalCTA() {
  return (
    <section className="sp-final-cta">
      <div className="sp-cta-glow" />
      <div className="sp-container sp-cta-inner">
        <span className="sp-section-tag">✦ Begin Your Healing ✦</span>
        <h2 className="sp-cta-h2">Transform Your Life Through<br /><span className="sp-gold">Spiritual Remedies</span></h2>
        <p className="sp-cta-sub">Get astrology-based spiritual guidance, remedies, poojas, and divine support for life problems and planetary healing.</p>
        <div className="sp-cta-btns">
          <a href="#services" className="sp-btn-primary sp-btn-large">✦ Start Spiritual Consultation</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="sp-btn-wa sp-btn-large">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
