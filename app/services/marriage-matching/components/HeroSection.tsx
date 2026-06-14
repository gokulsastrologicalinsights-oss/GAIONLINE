"use client";
import React from "react";

import { SOCIAL_LINKS } from "../../../constants";
const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to enquire about Marriage Matching services.")}`;

const highlights = [
  "Raasi & Lagna Matching",
  "11 Porutham Analysis",
  "Dosha Compatibility",
  "Detailed PDF Reports",
  "Tamil & English Support",
];

const STARS = [
  { left: "10%", top: "15%", delay: "0.2s", size: "2px" },
  { left: "25%", top: "80%", delay: "1.4s", size: "3px" },
  { left: "35%", top: "45%", delay: "0.8s", size: "1.5px" },
  { left: "50%", top: "20%", delay: "2.1s", size: "2.5px" },
  { left: "60%", top: "75%", delay: "1.7s", size: "2px" },
  { left: "75%", top: "35%", delay: "0.5s", size: "3px" },
  { left: "90%", top: "60%", delay: "1.1s", size: "1.5px" },
  { left: "15%", top: "65%", delay: "2.4s", size: "2px" },
  { left: "45%", top: "85%", delay: "0.3s", size: "3px" },
  { left: "80%", top: "90%", delay: "1.9s", size: "1px" },
  { left: "5%", top: "30%", delay: "0.7s", size: "2.5px" },
  { left: "95%", top: "25%", delay: "1.3s", size: "2px" },
  { left: "40%", top: "10%", delay: "2.5s", size: "1.5px" },
  { left: "70%", top: "50%", delay: "0.1s", size: "3px" },
  { left: "20%", top: "40%", delay: "1.6s", size: "2px" },
  { left: "65%", top: "15%", delay: "2.2s", size: "1px" },
  { left: "30%", top: "70%", delay: "0.9s", size: "2.5px" },
  { left: "85%", top: "55%", delay: "1.8s", size: "3px" },
  { left: "55%", top: "60%", delay: "0.4s", size: "1.5px" },
  { left: "12%", top: "90%", delay: "1.5s", size: "2px" },
  { left: "48%", top: "38%", delay: "2.0s", size: "3px" },
  { left: "72%", top: "82%", delay: "0.6s", size: "1px" },
  { left: "22%", top: "12%", delay: "1.0s", size: "2px" },
  { left: "88%", top: "42%", delay: "2.3s", size: "2.5px" },
  { left: "38%", top: "58%", delay: "0.8s", size: "3px" },
  { left: "62%", top: "28%", delay: "1.2s", size: "1.5px" },
  { left: "18%", top: "52%", delay: "1.7s", size: "2px" },
  { left: "78%", top: "18%", delay: "2.6s", size: "2px" },
  { left: "28%", top: "32%", delay: "0.3s", size: "1.5px" },
  { left: "92%", top: "78%", delay: "1.1s", size: "3px" },
  { left: "42%", top: "72%", delay: "1.5s", size: "2.5px" },
  { left: "58%", top: "88%", delay: "2.2s", size: "1px" },
  { left: "8%", top: "78%", delay: "0.9s", size: "2px" },
  { left: "98%", top: "8%", delay: "1.4s", size: "2px" },
  { left: "52%", top: "92%", delay: "1.8s", size: "3px" },
  { left: "68%", top: "68%", delay: "0.5s", size: "1.5px" },
  { left: "2%", top: "58%", delay: "2.1s", size: "2px" },
  { left: "82%", top: "48%", delay: "1.0s", size: "2.5px" },
  { left: "16%", top: "28%", delay: "2.4s", size: "1px" },
  { left: "76%", top: "72%", delay: "0.7s", size: "3px" }
];

export default function HeroSection() {
  return (
    <section className="mm-hero">
      <div className="mm-stars" aria-hidden="true">
        {STARS.map((star, i) => (
          <span
            key={i}
            className="mm-star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>

      <div className="mm-hero-inner">
        <div className="mm-hero-text">
          <span className="mm-badge-label">✦ Traditional & KP Marriage Matching ✦</span>
          <h1 className="mm-hero-h1">Marriage Matching<br /><span className="mm-gold">Services</span></h1>
          <p className="mm-hero-sub">
            Get accurate marriage compatibility analysis through astrology, porutham matching, dosha analysis, and planetary compatibility.
          </p>
          <div className="mm-cta-row">
            <a href="#types" className="mm-btn-primary">✦ Start Matching</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mm-btn-wa">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
              WhatsApp Consultation
            </a>
          </div>
          <div className="mm-trust-badges">
            {highlights.map(h => (
              <span key={h} className="mm-trust-item">✅ {h}</span>
            ))}
          </div>
        </div>
        <div className="mm-hero-visual">
          <div className="mm-astro-orb">
            <div className="mm-orb-ring mm-orb-ring-1" />
            <div className="mm-orb-ring mm-orb-ring-2" />
            <div className="mm-orb-ring mm-orb-ring-3" />
            <div className="mm-orb-center">
              <span style={{ fontSize: "4rem" }}>💍</span>
              <span className="mm-orb-name">Gokul&apos;s<br />Marriage<br />Matching</span>
            </div>
          </div>
          <div className="mm-zodiac-strip">
            {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"].map(z => (
              <span key={z} className="mm-zodiac-sym">{z}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
