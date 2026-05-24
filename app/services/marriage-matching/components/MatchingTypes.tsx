"use client";
import React from "react";

interface MatchingTypesProps {
  onSelect: (type: "Basic" | "Advanced") => void;
}

export default function MatchingTypes({ onSelect }: MatchingTypesProps) {
  return (
    <section id="types" className="mm-section">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Select Matching Type ✦</span>
          <h2 className="mm-section-h2">Choose Your <span className="mm-gold">Plan</span></h2>
          <p className="mm-section-sub">Select the level of analysis you need for the perfect matching results.</p>
        </div>
        <div className="mm-types-grid">
          {/* Basic Matching */}
          <div className="mm-type-card">
            <div className="mm-type-header">
              <h3 className="mm-type-title">Basic Matching</h3>
              <div className="mm-type-price">
                <span className="mm-currency">₹</span>
                <span className="mm-amount">601</span>
              </div>
              <div className="mm-type-include">📄 FREE PDF Report</div>
            </div>
            <ul className="mm-type-list">
              <li><span className="mm-dot">✦</span> Raasi</li>
              <li><span className="mm-dot">✦</span> Lagna</li>
              <li><span className="mm-dot">✦</span> 11 Poruthams</li>
            </ul>
            <button 
              onClick={() => onSelect("Basic")}
              className="mm-btn-outline mm-btn-full"
            >
              Choose Basic
            </button>
          </div>

          {/* Advanced Matching */}
          <div className="mm-type-card mm-type-featured">
            <div className="mm-featured-badge">Most Recommended</div>
            <div className="mm-type-header">
              <h3 className="mm-type-title">Advanced Matching</h3>
              <div className="mm-type-price">
                <span className="mm-currency">₹</span>
                <span className="mm-amount">1201</span>
              </div>
              <div className="mm-type-include">📄 Detailed FREE PDF Report</div>
            </div>
            <ul className="mm-type-list">
              <li><span className="mm-dot">✦</span> Raasi & Lagna Analysis</li>
              <li><span className="mm-dot">✦</span> 11 Poruthams with Score</li>
              <li><span className="mm-dot">✦</span> Dosha Balance Check</li>
              <li><span className="mm-dot">✦</span> Ashtakoota Score (Out of 36)</li>
              <li><span className="mm-dot">✦</span> Dosha Analysis</li>
              <li><span className="mm-dot">✦</span> Dasa Bhukti Sequence</li>
              <li><span className="mm-dot">✦</span> Planet Compatibility</li>
              <li><span className="mm-dot">✦</span> Harmful Planetary Combinations</li>
            </ul>
            <div className="mm-type-note">
              “Advanced gives deeper clarity & accuracy.”
            </div>
            <button 
              onClick={() => onSelect("Advanced")}
              className="mm-btn-primary mm-btn-full"
            >
              Choose Advanced
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
