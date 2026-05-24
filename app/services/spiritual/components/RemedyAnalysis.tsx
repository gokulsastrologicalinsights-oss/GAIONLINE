"use client";
import React from "react";

const analysisPoints = [
  "Dosha Analysis", "Planetary Weakness Analysis", "Suggested Pooja & Homam", "Gemstone Recommendation",
  "Mantra Guidance", "Fasting Guidance", "Temple Remedy Suggestions", "Personalized Spiritual Plan"
];

export default function RemedyAnalysis() {
  return (
    <section className="sp-section sp-section-alt">
      <div className="sp-container">
        <div className="sp-remedy-card">
          <div className="sp-remedy-badge">Personalized Service</div>
          <div className="sp-remedy-content">
            <h2 className="sp-remedy-h2">Horoscope-Based <span className="sp-gold">Remedy Recommendation</span></h2>
            <p className="sp-remedy-sub">
              Get personalized spiritual remedies based on your horoscope, doshas, planetary afflictions, and dasha periods.
            </p>
            <div className="sp-remedy-grid">
              {analysisPoints.map(p => (
                <div key={p} className="sp-remedy-item">
                  <span className="sp-remedy-dot">✦</span> {p}
                </div>
              ))}
            </div>
            <div className="sp-remedy-footer">
              <div className="sp-remedy-price">
                <span className="sp-label">Price Range:</span>
                <span className="sp-amount">₹1,500 – ₹5,000</span>
              </div>
              <a href="#form" className="sp-btn-primary">✦ Get Personalized Remedy Plan</a>
            </div>
          </div>
          <div className="sp-remedy-visual">
            <div className="sp-horoscope-circle">
              <div className="sp-circle-glow" />
              <div className="sp-zodiac-signs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
