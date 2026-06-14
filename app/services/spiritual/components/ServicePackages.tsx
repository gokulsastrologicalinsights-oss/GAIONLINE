"use client";
import React from "react";

const packages = [
  {
    title: "Career Growth Package",
    price: "7,999",
    include: ["Ganapathy Homam", "Lakshmi Kubera Pooja", "Mercury Remedies", "Career Growth Guidance", "21-Day Mantra PDF", "Prosperity Guidance", "Personalized Astrology Remedy"],
    bestFor: "Career blocks, job delays, business struggles, financial instability.",
    color: "#d4a017"
  },
  {
    title: "Marriage Delay Remedy Package",
    price: "5,999",
    include: ["Rahu Ketu Pooja", "Marriage Delay Remedies", "Temple Visit Instructions", "Personalized Timing Guidance", "Parihara Recommendations", "Horoscope-Based Spiritual Guidance"],
    bestFor: "Marriage delays, relationship obstacles, dosha-related marriage problems.",
    color: "#ef4444"
  },
  {
    title: "Business Growth Package",
    price: "12,999",
    include: ["Lakshmi Kubera Homam", "Sudarshana Homam", "Prosperity Yantra", "Business Astrology Guidance", "Gemstone Consultation", "Wealth Energy Remedies"],
    bestFor: "Business growth, financial expansion, prosperity, and removing obstacles.",
    color: "#10b981"
  }
];

interface ServicePackagesProps {
  onSelect: (pkg: string) => void;
}

export default function ServicePackages({ onSelect }: ServicePackagesProps) {
  return (
    <section id="services" className="sp-section">
      <div className="sp-container">
        <div className="sp-section-header">
          <span className="sp-section-tag">✦ Spiritual Packages ✦</span>
          <h2 className="sp-section-h2">Divine Remedy <span className="sp-gold">Plans</span></h2>
          <p className="sp-section-sub">Powerful spiritual packages designed to remove obstacles and bring prosperity.</p>
        </div>
        <div className="sp-packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.title} className="sp-pkg-card" style={{"--accent": pkg.color} as React.CSSProperties}>
              <div className="sp-pkg-header">
                <h3 className="sp-pkg-title">{pkg.title}</h3>
                <div className="sp-pkg-price">₹{pkg.price}</div>
              </div>
              <ul className="sp-pkg-list">
                {pkg.include.map(item => (
                  <li key={item}><span className="sp-pkg-dot">✦</span> {item}</li>
                ))}
              </ul>
              <div className="sp-pkg-best">
                <strong>Best For:</strong> {pkg.bestFor}
              </div>
              <button onClick={() => onSelect(pkg.title)} className="sp-btn-outline sp-btn-full">Choose Package</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
