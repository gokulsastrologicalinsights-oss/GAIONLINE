"use client";
import React from "react";

import { SOCIAL_LINKS } from "../../../constants";
const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to find the right gemstone for my horoscope.")}`;

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
