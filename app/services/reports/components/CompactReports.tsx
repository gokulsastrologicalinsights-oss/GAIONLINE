"use client";
import React, { useState } from "react";

const categories = [
  { id: "starter", name: "Starter" },
  { id: "premium", name: "Premium" },
  { id: "consultation", name: "Consultation" }
];

const allReports = [
  {
    category: "starter",
    title: "Horoscope Snapshot",
    price: "99",
    desc: "Basic summary including Rasi, Nakshatra, and Lagna details.",
    tag: "Best Starter"
  },
  {
    category: "starter",
    title: "Marriage Biodata",
    price: "299",
    desc: "Complete biodata with Rasi & Navamsa Kattam for matrimony.",
    tag: "Most Popular"
  },
  {
    category: "premium",
    title: "Gemstone Recommendation",
    price: "1199",
    desc: "Detailed analysis of suitable stones, metals, and wearing rules.",
    bonus: "FREE Guide"
  },
  {
    category: "premium",
    title: "Dosha Analysis",
    price: "999",
    desc: "Coverage of Manglik, Rahu/Ketu, and Pitra Dosha with remedies."
  },
  {
    category: "premium",
    title: "Yearly Predictions",
    price: "2499",
    desc: "Annual guidance on career, health, and finance with transit analysis.",
    tag: "Premium"
  },
  {
    category: "consultation",
    title: "Voice Note Consultation",
    price: "1499",
    desc: "Personalized audio analysis and remedies sent via WhatsApp."
  },
  {
    category: "consultation",
    title: "1-Year Guidance",
    price: "2999",
    desc: "Continuous support with important date alerts and dasha monitoring.",
    tag: "Top Support"
  },
  {
    category: "consultation",
    title: "Business Compatibility",
    price: "2999",
    desc: "Partner trust, financial stability, and success potential analysis."
  }
];

interface CompactReportsProps {
  onSelect: (report: string) => void;
}

export default function CompactReports({ onSelect }: CompactReportsProps) {
  const [activeTab, setActiveTab] = useState("starter");

  const filteredReports = allReports.filter(r => r.category === activeTab);

  return (
    <section id="marketplace" className="rp-marketplace-section">
      <div className="rp-container">
        <div className="rp-section-header">
          <span className="rp-tag">✦ Choose Your Guidance ✦</span>
          <h2 className="rp-h2">Report <span className="rp-gold">Marketplace</span></h2>
          <p className="rp-section-sub">Quick access to all our professional astrology reports and services.</p>
        </div>

        <div className="rp-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`rp-tab-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="rp-compact-grid">
          {filteredReports.map((r) => (
            <div key={r.title} className={`rp-compact-card ${r.category}`}>
              {r.tag && <span className="rp-compact-badge">{r.tag}</span>}
              <div className="rp-compact-header">
                <h3 className="rp-compact-title">{r.title}</h3>
                <div className="rp-compact-price">₹{r.price}</div>
              </div>
              <p className="rp-compact-desc">{r.desc}</p>
              {r.bonus && (
                <div className="rp-compact-bonus">
                  <span>🎁 {r.bonus}</span>
                </div>
              )}
              <button 
                onClick={() => onSelect(r.title)} 
                className="rp-compact-btn"
              >
                {r.category === "consultation" ? "Book Now" : "Get Report"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
