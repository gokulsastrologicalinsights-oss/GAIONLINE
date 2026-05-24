"use client";
import React from "react";

interface ConsultationTypesProps {
  onSelect: (type: "Basic" | "Advanced") => void;
}

export default function ConsultationTypes({ onSelect }: ConsultationTypesProps) {
  return (
    <section id="types" className="nc-section">
      <div className="nc-container">
        <div className="nc-section-header">
          <span className="nc-section-tag">✦ Select Consultation Type ✦</span>
          <h2 className="nc-section-h2">Choose Your <span className="nc-gold">Plan</span></h2>
          <p className="nc-section-sub">Select the analysis depth that best fits your personal or professional needs.</p>
        </div>
        <div className="nc-types-grid">
          {/* Basic Numerology */}
          <div className="nc-type-card">
            <div className="nc-type-header">
              <h3 className="nc-type-title">Basic Numerology Reading</h3>
              <div className="nc-type-price">
                <span className="nc-currency">₹</span>
                <span className="nc-amount">501</span>
              </div>
              <div className="nc-type-include">📄 FREE PDF Report</div>
            </div>
            <ul className="nc-type-list">
              <li><span className="nc-dot">✦</span> Life Path Number</li>
              <li><span className="nc-dot">✦</span> Destiny Number</li>
              <li><span className="nc-dot">✦</span> Personality Number</li>
              <li><span className="nc-dot">✦</span> Lucky Numbers</li>
              <li><span className="nc-dot">✦</span> Basic Guidance</li>
            </ul>
            <button 
              onClick={() => onSelect("Basic")}
              className="nc-btn-outline nc-btn-full"
            >
              Choose Basic
            </button>
          </div>

          {/* Advanced Numerology */}
          <div className="nc-type-card nc-type-featured">
            <div className="nc-featured-badge">Most Recommended</div>
            <div className="nc-type-header">
              <h3 className="nc-type-title">Advanced Numerology Consultation</h3>
              <div className="nc-type-price">
                <span className="nc-currency">₹</span>
                <span className="nc-amount">1001</span>
              </div>
              <div className="nc-type-include">📄 Detailed FREE PDF Report</div>
            </div>
            <ul className="nc-type-list">
              <li><span className="nc-dot">✦</span> Complete Numerology Analysis</li>
              <li><span className="nc-dot">✦</span> Name Correction Suggestions</li>
              <li><span className="nc-dot">✦</span> Mobile Number Analysis</li>
              <li><span className="nc-dot">✦</span> Career & Business Guidance</li>
              <li><span className="nc-dot">✦</span> Relationship Compatibility</li>
              <li><span className="nc-dot">✦</span> Lucky Dates & Colors</li>
              <li><span className="nc-dot">✦</span> Financial Growth Numbers</li>
              <li><span className="nc-dot">✦</span> Personalized Remedies</li>
            </ul>
            <div className="nc-type-note">
              “Advanced analysis provides deeper clarity, remedies, and accurate life guidance.”
            </div>
            <button 
              onClick={() => onSelect("Advanced")}
              className="nc-btn-primary nc-btn-full"
            >
              Choose Advanced
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
