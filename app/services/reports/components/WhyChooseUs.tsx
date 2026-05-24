"use client";
import React from "react";

const features = [
  { icon: "🎯", title: "Accurate Analysis", desc: "Every report is based on precise planetary calculations and traditional Vedic principles." },
  { icon: "✨", title: "KP Astrology Support", desc: "We utilize Krishnamurti Padhathi (KP) systems for high-accuracy timing and results." },
  { icon: "📄", title: "Personalized Reports", desc: "No generic templates. Every PDF is prepared uniquely for your specific birth details." },
  { icon: "🌍", title: "Tamil & English Support", desc: "Reports and consultations are available in both Tamil and English for your comfort." },
  { icon: "🎨", title: "Professional PDF Design", desc: "Our reports are not just accurate but also beautifully designed for easy reading." },
  { icon: "🤝", title: "Trusted By Thousands", desc: "Join our global community of clients who rely on our professional astrology insights." },
];

export default function WhyChooseUs() {
  return (
    <section className="rp-section">
      <div className="rp-container">
        <div className="rp-section-header">
          <span className="rp-tag">✦ Our Quality ✦</span>
          <h2 className="rp-h2">Why Trust <span className="rp-gold">Our Reports</span></h2>
        </div>
        <div className="rp-why-grid">
          {features.map((f) => (
            <div key={f.title} className="rp-why-card">
              <div className="rp-why-icon">{f.icon}</div>
              <h3 className="rp-why-title">{f.title}</h3>
              <p className="rp-why-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
