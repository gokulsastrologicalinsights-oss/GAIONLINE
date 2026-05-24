"use client";
import React from "react";

const reports = [
  {
    title: "Single Page Horoscope Snapshot",
    price: "99",
    tag: "Best Starter Report",
    include: ["Name", "DOB / TOB / POB", "Rasi", "Nakshatra", "Lagna", "Basic Horoscope Summary"],
    bestFor: "Quick horoscope overview and astrology identity details.",
  },
  {
    title: "Marriage Biodata PDF with Rasi Kattam",
    price: "299",
    tag: "Most Popular In Tamil Community",
    include: [
      "Bride / Groom Name", "Photo", "DOB / TOB", "Height", "Education", "Profession",
      "Salary", "Gothram", "Rasi", "Nakshatra", "Laknam", "Rasi Kattam", "Navamsa Kattam",
      "Family Details", "Contact Details"
    ],
    bestFor: "Marriage proposals, matrimony profiles, astrology-based biodata sharing.",
  }
];

interface EntryLevelReportsProps {
  onSelect: (report: string) => void;
}

export default function EntryLevelReports({ onSelect }: EntryLevelReportsProps) {
  return (
    <section id="reports" className="rp-section">
      <div className="rp-container">
        <div className="rp-section-header">
          <span className="rp-tag">✦ Starter Reports ✦</span>
          <h2 className="rp-h2">Essential <span className="rp-gold">Astrology PDFs</span></h2>
        </div>
        <div className="rp-reports-grid">
          {reports.map((r) => (
            <div key={r.title} className="rp-report-card rp-starter">
              <div className="rp-card-badge">{r.tag}</div>
              <div className="rp-card-header">
                <h3 className="rp-card-title">{r.title}</h3>
                <div className="rp-card-price">₹{r.price}</div>
              </div>
              <ul className="rp-card-list">
                {r.include.map(item => (
                  <li key={item}><span className="rp-dot">✦</span> {item}</li>
                ))}
              </ul>
              <p className="rp-card-best"><strong>Best For:</strong> {r.bestFor}</p>
              <button onClick={() => onSelect(r.title)} className="rp-btn-outline rp-btn-full">
                {r.title.includes("Biodata") ? "Create Biodata" : "Get Report"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
