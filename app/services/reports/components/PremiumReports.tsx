"use client";
import React from "react";

const premiumReports = [
  {
    title: "Gemstone Recommendation PDF",
    price: "1199",
    include: ["Recommended Gemstone", "Why The Stone Is Suggested", "Recommended Weight", "Metal Recommendation", "Finger Recommendation", "Wearing Date & Time", "Mantra Guidance", "Precautions & Rules", "Planetary Strengthening Guidance"],
    bonus: "FREE Wearing & Purification Guide PDF",
  },
  {
    title: "Dosha Analysis Report",
    price: "999",
    include: ["Manglik Dosha", "Rahu/Ketu Dosha", "Kalasarpa Dosha", "Pitra Dosha", "Dosha Severity Analysis", "Horoscope-Based Remedies", "Temple Remedy Suggestions", "Pariharam Guidance"],
  },
  {
    title: "Personalized Yearly Predictions",
    price: "2499",
    tag: "Premium Annual Guidance",
    include: ["Career Predictions", "Marriage & Relationship", "Financial Growth", "Health Overview", "Dasha & Transit Analysis", "Monthly Prediction Highlights", "Lucky Periods", "Important Warning Periods", "Remedies & Guidance"],
  }
];

interface PremiumReportsProps {
  onSelect: (report: string) => void;
}

export default function PremiumReports({ onSelect }: PremiumReportsProps) {
  return (
    <section className="rp-section rp-section-alt">
      <div className="rp-container">
        <div className="rp-section-header">
          <span className="rp-tag">✦ Advanced Analysis ✦</span>
          <h2 className="rp-h2">Premium <span className="rp-gold">Astrology Reports</span></h2>
        </div>
        <div className="rp-reports-grid">
          {premiumReports.map((r) => (
            <div key={r.title} className="rp-report-card rp-premium">
              {r.tag && <div className="rp-card-badge">{r.tag}</div>}
              <div className="rp-card-header">
                <h3 className="rp-card-title">{r.title}</h3>
                <div className="rp-card-price">₹{r.price}</div>
              </div>
              <ul className="rp-card-list">
                {r.include.map(item => (
                  <li key={item}><span className="rp-dot">✦</span> {item}</li>
                ))}
              </ul>
              {r.bonus && (
                <div className="rp-bonus-box">
                  <span className="rp-bonus-gift">🎁</span>
                  <span><strong>Bonus:</strong> {r.bonus}</span>
                </div>
              )}
              <button onClick={() => onSelect(r.title)} className="rp-btn-primary rp-btn-full">
                Get {r.title.split(" ").slice(0, 2).join(" ")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
