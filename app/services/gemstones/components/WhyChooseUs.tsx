"use client";
import React from "react";

const features = [
  { icon: "💎", title: "Natural Stones", desc: "We provide only 100% natural and untreated gemstones for best astrological results." },
  { icon: "🔮", title: "Astrology Recommended", desc: "Each stone is recommended based on deep analysis of your unique birth chart." },
  { icon: "🏆", title: "Premium Quality", desc: "Top-grade gemstones with excellent color, clarity, and brilliance." },
  { icon: "🤝", title: "Personalized Guidance", desc: "One-on-one professional support to help you wear the right stone at the right time." },
  { icon: "⭐", title: "Trusted By Thousands", desc: "Join thousands of satisfied clients who have transformed their lives with our gemstones." },
  { icon: "🛠️", title: "Astrology Support", desc: "Continuous professional support throughout your gemstone wearing journey." },
];

export default function WhyChooseUs() {
  return (
    <section className="gs-section gs-section-alt">
      <div className="gs-container">
        <div className="gs-section-header">
          <span className="gs-section-tag">✦ Why Choose Us ✦</span>
          <h2 className="gs-section-h2">Authentic <span className="gs-gold">Quality</span></h2>
          <p className="gs-section-sub">Experience the power of natural gemstones with professional astrological guidance.</p>
        </div>
        <div className="gs-why-grid">
          {features.map((f) => (
            <div key={f.title} className="gs-why-card">
              <div className="gs-why-icon">{f.icon}</div>
              <h3 className="gs-why-title">{f.title}</h3>
              <p className="gs-why-desc">{f.desc}</p>
              <div className="gs-why-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
