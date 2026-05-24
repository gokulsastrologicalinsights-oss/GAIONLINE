"use client";
import React from "react";

const additional = [
  {
    title: "Black Magic / Evil Eye Remedies",
    include: ["Energy Cleansing", "Protection Remedies", "Spiritual Guidance", "Mantra Protection"],
    icon: "👁️"
  },
  {
    title: "Health & Mental Peace Remedies",
    include: ["Moon Remedies", "Meditation Guidance", "Spiritual Healing", "Peace & Stability Remedies"],
    icon: "🧘"
  },
  {
    title: "Foreign Opportunity Remedies",
    include: ["Rahu Remedies", "Travel & Settlement Guidance", "Career Abroad Remedies", "Prosperity Poojas"],
    icon: "✈️"
  },
  {
    title: "Family Harmony Remedies",
    include: ["Family Peace Poojas", "Relationship Healing", "Spiritual Harmony Guidance", "Positive Energy Remedies"],
    icon: "🏠"
  },
  {
    title: "Child Birth Remedies",
    include: ["Santan Gopal Remedies", "Fertility Spiritual Guidance", "Temple Remedies", "Horoscope-Based Support"],
    icon: "👶"
  }
];

export default function AdditionalServices() {
  return (
    <section className="sp-section sp-section-alt">
      <div className="sp-container">
        <div className="sp-section-header">
          <span className="sp-section-tag">✦ Additional Services ✦</span>
          <h2 className="sp-section-h2">Specific Spiritual <span className="sp-gold">Solutions</span></h2>
        </div>
        <div className="sp-additional-grid">
          {additional.map((s) => (
            <div key={s.title} className="sp-add-card">
              <div className="sp-add-icon">{s.icon}</div>
              <h3 className="sp-add-title">{s.title}</h3>
              <ul className="sp-add-list">
                {s.include.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="sp-add-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
