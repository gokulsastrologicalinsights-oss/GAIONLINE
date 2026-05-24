"use client";
import React from "react";

const ladder = [
  {
    level: "ENTRY LEVEL",
    price: "₹99 – ₹299",
    items: ["Mini Reports", "Biodata PDFs", "Horoscope Snapshots"],
    color: "#3b82f6"
  },
  {
    level: "MID LEVEL",
    price: "₹999 – ₹2999",
    items: ["Detailed Reports", "Compatibility Analysis", "Dosha Reports", "Voice Consultation"],
    color: "#8b5cf6"
  },
  {
    level: "PREMIUM LEVEL",
    price: "₹2999+",
    items: ["Long-Term Guidance", "Business Astrology", "Personalized Support", "Premium Remedies"],
    color: "#d4a017"
  }
];

export default function ValueLadder() {
  return (
    <section className="rp-section rp-section-alt">
      <div className="rp-container">
        <div className="rp-section-header">
          <span className="rp-tag">✦ Product Roadmap ✦</span>
          <h2 className="rp-h2">Astrology <span className="rp-gold">Value Ladder</span></h2>
        </div>
        <div className="rp-ladder">
          {ladder.map((l, i) => (
            <div key={l.level} className="rp-ladder-step" style={{"--accent": l.color} as any}>
              <div className="rp-ladder-header">
                <div className="rp-ladder-num">0{i+1}</div>
                <h3 className="rp-ladder-title">{l.level}</h3>
                <div className="rp-ladder-price">{l.price}</div>
              </div>
              <ul className="rp-ladder-list">
                {l.items.map(item => <li key={item}>{item}</li>)}
              </ul>
              {i < ladder.length - 1 && <div className="rp-ladder-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
