"use client";
import React from "react";

import { SOCIAL_LINKS } from "../../../constants";
const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I'm interested in Numerology Consultation.")}`;

export default function FinalCTA() {
  return (
    <section className="nc-final-cta">
      <div className="nc-cta-glow" />
      <div className="nc-container nc-cta-inner">
        <span className="nc-section-tag">✦ Your Destiny Awaits ✦</span>
        <h2 className="nc-cta-h2">Unlock The Power<br /><span className="nc-gold">Of Numbers</span></h2>
        <p className="nc-cta-sub">Discover how numerology can guide your life, career, relationships, and success.</p>
        <div className="nc-cta-btns">
          <a href="#types" className="nc-btn-primary nc-btn-large">✦ Start Numerology Analysis</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="nc-btn-wa nc-btn-large">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
