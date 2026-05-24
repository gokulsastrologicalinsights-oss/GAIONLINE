"use client";
import React from "react";

const features = [
  { icon: "🕉", title: "Personalized Remedies", desc: "Every remedy is uniquely crafted based on your individual birth chart and current dasha periods." },
  { icon: "📜", title: "Traditional Approach", desc: "We combine time-tested Vedic astrology principles with authentic temple-based spiritual practices." },
  { icon: "🔥", title: "Online + Offline", desc: "Participate in poojas and homams from anywhere in the world or visit us directly for traditional rituals." },
  { icon: "🤝", title: "Professional Guidance", desc: "Direct consultation and support from Gokul Murugan throughout your spiritual remedy journey." },
  { icon: "🏆", title: "Trusted By Thousands", desc: "Join our global community of satisfied clients who have found peace and success through our services." },
  { icon: "✨", title: "Complete Support", desc: "From pooja arrangements to PDF mantra guidance, we provide everything you need for positive results." },
];

export default function WhyChooseUs() {
  return (
    <section className="sp-section sp-section-alt">
      <div className="sp-container">
        <div className="sp-section-header">
          <span className="sp-section-tag">✦ Why Choose Us ✦</span>
          <h2 className="sp-section-h2">The Path to <span className="sp-gold">Divine Solutions</span></h2>
        </div>
        <div className="sp-why-grid">
          {features.map((f) => (
            <div key={f.title} className="sp-why-card">
              <div className="sp-why-icon">{f.icon}</div>
              <h3 className="sp-why-title">{f.title}</h3>
              <p className="sp-why-desc">{f.desc}</p>
              <div className="sp-why-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
