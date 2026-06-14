"use client";
import React from "react";
import { Check } from "lucide-react";

const features = [
  {
    title: "Compatibility Score",
    desc: "Get a clear numerical matching score based on classical Vedic and modern KP systems.",
  },
  {
    title: "Detailed Porutham Report",
    desc: "A comprehensive analysis of all 10/11 key Poruthams detailing their impact on your life.",
  },
  {
    title: "Dosha Analysis",
    desc: "Complete check for Manglik Dosha, Rahu-Ketu Dosha, and other planetary imbalances.",
  },
  {
    title: "Marriage Strength Prediction",
    desc: "Understand long-term compatibility, financial growth, and family harmony predictions.",
  },
  {
    title: "Personalized Remedies",
    desc: "Receive practical remedies (Pariharams) and gemstone recommendations for a peaceful life.",
  },
  {
    title: "One-to-One Consultation",
    desc: "Discuss predictions directly with expert astrologer Gokul Murugan via Call or WhatsApp.",
  },
];

export default function WhatYouReceive() {
  return (
    <section className="mm-section mm-receive-section">
      <div className="mm-receive-glow" aria-hidden="true" />

      <div className="mm-container relative z-10">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Deliverables ✦</span>
          <h2 className="mm-section-h2">What You&apos;ll <span className="mm-gold">Receive</span></h2>
          <p className="mm-section-sub">
            Comprehensive insights to help you make confident marriage decisions.
          </p>
        </div>

        <div className="mm-receive-grid">
          {features.map((feature, i) => (
            <div key={i} className="mm-receive-card">
              <div className="mm-receive-icon-wrap">
                <Check className="w-5 h-5 text-emerald-400 stroke-[3]" />
              </div>
              <h3 className="mm-receive-title">{feature.title}</h3>
              <p className="mm-receive-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
