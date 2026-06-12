"use client";
import Link from "next/link";

import { SOCIAL_LINKS } from "../../../constants";
const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to book an online consultation.")}`;

const badges = [
  "Personal Horoscope Analysis",
  "KP Astrology Predictions",
  "Remedies & Pariharam",
  "Tamil & English Consultation",
  "Worldwide Online Consultation",
];

export default function HeroSection() {
  return (
    <section className="oc-hero">
      {/* Stars */}
      <div className="oc-stars" aria-hidden="true">
        {Array.from({length: 80}).map((_, i) => (
          <span key={i} className="oc-star" style={{
            left: `${Math.random()*100}%`,
            top: `${Math.random()*100}%`,
            animationDelay: `${Math.random()*4}s`,
            width: `${Math.random()*3+1}px`,
            height: `${Math.random()*3+1}px`,
          }} />
        ))}
      </div>

      <div className="oc-hero-inner">
        <div className="oc-hero-text">
          <span className="oc-badge-label">✦ Expert Vedic & KP Astrology ✦</span>
          <h1 className="oc-hero-h1">Online Astrology<br /><span className="oc-gold">Consultation</span></h1>
          <p className="oc-hero-sub">
            Get personalized astrology guidance through accurate horoscope analysis, KP astrology predictions, remedies, and life guidance.
          </p>
          <div className="oc-cta-row">
            <a href="#form" className="oc-btn-primary">✦ Book Consultation</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="oc-btn-wa">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
          <div className="oc-trust-badges">
            {badges.map(b => (
              <span key={b} className="oc-trust-item">✅ {b}</span>
            ))}
          </div>
        </div>
        <div className="oc-hero-visual">
          <div className="oc-astro-orb">
            <div className="oc-orb-ring oc-orb-ring-1" />
            <div className="oc-orb-ring oc-orb-ring-2" />
            <div className="oc-orb-ring oc-orb-ring-3" />
            <div className="oc-orb-center">
              <span style={{fontSize:"4rem"}}>🔮</span>
              <span className="oc-orb-name">Gokul&apos;s<br/>Astrological<br/>Insights</span>
            </div>
          </div>
          <div className="oc-zodiac-strip">
            {["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"].map(z=>(
              <span key={z} className="oc-zodiac-sym">{z}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
