"use client";

const services = [
  { icon: "🗺️", title: "Birth Chart Analysis", desc: "Complete Rasi & Navamsa chart reading with planetary positions and their effects on your life." },
  { icon: "💑", title: "Marriage & Relationship", desc: "Compatibility analysis, marriage timing predictions, and relationship guidance." },
  { icon: "💼", title: "Career & Finance", desc: "Identify the best career path, business timing, and wealth-building opportunities through astrology." },
  { icon: "🧘", title: "Health & Mental Peace", desc: "Planetary influences on health and guidance for mental peace and spiritual growth." },
  { icon: "⏳", title: "Dasha & Transit Analysis", desc: "Detailed Mahadasha, Antardasha analysis and current planetary transit effects." },
  { icon: "🌿", title: "Personalized Remedies", desc: "Effective pariharam, mantra, pooja, and gemstone suggestions tailored to your chart." },
  { icon: "💎", title: "Gemstone Suggestions", desc: "Scientifically matched gemstone recommendations based on your birth chart and KP analysis." },
  { icon: "⭐", title: "KP Astrology Timing", desc: "Precise event timing using Krishnamurti Paddhati for accurate life predictions." },
];

export default function WhatYouGet() {
  return (
    <section className="oc-section">
      <div className="oc-container">
        <div className="oc-section-header">
          <span className="oc-section-tag">✦ Our Specialities ✦</span>
          <h2 className="oc-section-h2">What You Will <span className="oc-gold">Get</span></h2>
          <p className="oc-section-sub">Each consultation is uniquely tailored to your birth chart for maximum accuracy and life guidance.</p>
        </div>
        <div className="oc-cards-grid">
          {services.map((s) => (
            <div key={s.title} className="oc-service-card">
              <div className="oc-card-icon">{s.icon}</div>
              <h3 className="oc-card-title">{s.title}</h3>
              <p className="oc-card-desc">{s.desc}</p>
              <div className="oc-card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
