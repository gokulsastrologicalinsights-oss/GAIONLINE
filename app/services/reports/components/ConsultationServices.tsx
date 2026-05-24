"use client";
import React from "react";

const services = [
  {
    title: "Voice Note Astrology Consultation",
    price: "1499",
    include: ["Personalized Voice Analysis", "Horoscope Guidance", "Remedies & Suggestions", "WhatsApp Audio Delivery", "Detailed Astrology Explanation"],
  },
  {
    title: "Long-Term Astrology Guidance (1 Year)",
    price: "2999",
    tag: "Premium Support",
    include: ["Year-Round Astrology Guidance", "WhatsApp Support", "Important Date Alerts", "Dasha Monitoring", "Remedy Suggestions", "Monthly Guidance"],
  },
  {
    title: "Business & Partner Compatibility",
    price: "2999",
    include: ["Business Partner Compatibility", "Financial Stability Analysis", "Trust & Partnership Analysis", "Success Potential", "Growth Period Analysis", "Business Name Guidance", "Planetary Strength Review"],
  }
];

interface ConsultationServicesProps {
  onSelect: (service: string) => void;
}

export default function ConsultationServices({ onSelect }: ConsultationServicesProps) {
  return (
    <section className="rp-section">
      <div className="rp-container">
        <div className="rp-section-header">
          <span className="rp-tag">✦ Personalized Support ✦</span>
          <h2 className="rp-h2">Consultation <span className="rp-gold">Services</span></h2>
        </div>
        <div className="rp-reports-grid">
          {services.map((s) => (
            <div key={s.title} className="rp-report-card rp-consult">
              {s.tag && <div className="rp-card-badge">{s.tag}</div>}
              <div className="rp-card-header">
                <h3 className="rp-card-title">{s.title}</h3>
                <div className="rp-card-price">₹{s.price}</div>
              </div>
              <ul className="rp-card-list">
                {s.include.map(item => (
                  <li key={item}><span className="rp-dot">✦</span> {item}</li>
                ))}
              </ul>
              <button onClick={() => onSelect(s.title)} className="rp-btn-outline rp-btn-full">
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
