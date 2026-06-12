"use client";
import React from "react";

import { SOCIAL_LINKS } from "../../../constants";
const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I'm interested in Marriage Matching services.")}`;

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
