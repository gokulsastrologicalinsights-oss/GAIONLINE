"use client";
import React from "react";

const features = [
  { icon: "🔢", title: "Accurate Analysis", desc: "Precise numerology readings based on your date of birth and full name." },
  { icon: "✨", title: "Personalized Guidance", desc: "Insights tailored specifically to your unique life path and destiny numbers." },
  { icon: "📝", title: "Name Correction", desc: "Expert suggestions for name spellings to align with your positive vibrations." },
  { icon: "📄", title: "Professional Reports", desc: "Receive high-quality PDF reports detailing all your important numbers." },
  { icon: "🔮", title: "Spiritual + Modern", desc: "A perfect blend of ancient numerology wisdom and modern practical advice." },
  { icon: "⭐", title: "Trusted By Thousands", desc: "Highly recommended by clients for effective results and accurate predictions." },
];

export default function WhyChooseUs() {
  return (
    <section className="nc-section nc-section-alt">
      <div className="nc-container">
        <div className="nc-section-header">
          <span className="nc-section-tag">✦ Why Choose Us ✦</span>
          <h2 className="nc-section-h2">Unlock Your <span className="nc-gold">Numerical Potential</span></h2>
          <p className="nc-section-sub">Expert numerology services designed to bring balance and success to your life.</p>
        </div>
        <div className="nc-why-grid">
          {features.map((f) => (
            <div key={f.title} className="nc-why-card">
              <div className="nc-why-icon">{f.icon}</div>
              <h3 className="nc-why-title">{f.title}</h3>
              <p className="nc-why-desc">{f.desc}</p>
              <div className="nc-why-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
