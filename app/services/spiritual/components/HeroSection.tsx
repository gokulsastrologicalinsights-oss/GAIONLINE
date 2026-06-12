"use client";
import React from "react";

import { SOCIAL_LINKS } from "../../../constants";
const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I'm interested in Spiritual Remedies and Pooja services.")}`;

const highlights = [
  "Horoscope-Based Remedies",
  "Personalized Pariharam Guidance",
  "Homam & Pooja Services",
  "Online + Offline Support",
  "Temple-Based Spiritual Solutions",
];

export default function HeroSection() {
  return (
    <section className="sp-hero">
      <div className="sp-overlay" aria-hidden="true" />
      <div className="sp-hero-inner">
        <div className="sp-hero-text">
          <span className="sp-badge-label">✦ divine healing & remedies ✦</span>
          <h1 className="sp-hero-h1">Spiritual Remedies &<br /><span className="sp-gold">Divine Astrology</span></h1>
          <p className="sp-hero-sub">
            Personalized spiritual remedies, poojas, homams, gemstone guidance, mantra solutions, and planetary healing services based on your horoscope.
          </p>
          <div className="sp-cta-row">
            <a href="#services" className="sp-btn-primary">✦ Explore Spiritual Services</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="sp-btn-wa">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
              WhatsApp Consultation
            </a>
          </div>
          <div className="sp-trust-badges">
            {highlights.map(h => (
              <span key={h} className="sp-trust-item">✅ {h}</span>
            ))}
          </div>
        </div>
        <div className="sp-hero-visual">
          <div className="sp-homam-fire">
            <div className="sp-flame sp-flame-1" />
            <div className="sp-flame sp-flame-2" />
            <div className="sp-flame sp-flame-3" />
            <div className="sp-fire-base" />
          </div>
          <div className="sp-om-glow">ॐ</div>
        </div>
      </div>
    </section>
  );
}
