"use client";
import React from "react";

const features = [
  { icon: "🎯", title: "Accurate Compatibility", desc: "Precise matching based on both Traditional Porutham and KP Astrology systems." },
  { icon: "🔮", title: "Traditional + KP", desc: "We combine ancient wisdom with modern KP techniques for deeper compatibility insights." },
  { icon: "📄", title: "Detailed PDF Reports", desc: "Receive a comprehensive matching report covering all aspects of compatibility." },
  { icon: "💎", title: "Personalized Guidance", desc: "Beyond just scores, we provide clear guidance on the relationship's future." },
  { icon: "🤝", title: "Professional Consultation", desc: "One-on-one professional support to answer your specific marriage concerns." },
  { icon: "⭐", title: "Trusted By Thousands", desc: "A trusted name in marriage matching with a track record of successful unions." },
];

export default function WhyChooseUs() {
  return (
    <section className="mm-section mm-section-alt">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Why Choose Us ✦</span>
          <h2 className="mm-section-h2">Find Better <span className="mm-gold">Compatibility</span></h2>
          <p className="mm-section-sub">Expert marriage matching services designed for long-term marital bliss.</p>
        </div>
        <div className="mm-why-grid">
          {features.map((f) => (
            <div key={f.title} className="mm-why-card">
              <div className="mm-why-icon">{f.icon}</div>
              <h3 className="mm-why-title">{f.title}</h3>
              <p className="mm-why-desc">{f.desc}</p>
              <div className="mm-why-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
