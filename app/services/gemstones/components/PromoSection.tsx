"use client";
import React from "react";

const WA_LINK = "https://wa.me/919444559071?text=Hello%20Gokul's%20Astrological%20Insights,%20I'm%20interested%20in%20a%20gemstone%20with%20the%20free%20wearing%20guide.";

const guidePoints = [
  { icon: "📄", text: "FREE Detailed Gemstone PDF Guide" },
  { icon: "🕉", text: "Proper Wearing Method" },
  { icon: "📅", text: "Best Day & Time To Wear" },
  { icon: "🙏", text: "Pooja & Energizing Process" },
  { icon: "📿", text: "Planetary Mantras & Chanting Guide" },
  { icon: "💧", text: "Gemstone Purification Process" },
  { icon: "✨", text: "Activation & Wearing Instructions" },
  { icon: "🔮", text: "Astrology-Based Guidance" },
  { icon: "💍", text: "Finger & Metal Recommendation" },
  { icon: "⚡", text: "How To Activate The Stone Energy" },
];

export default function PromoSection() {
  return (
    <section className="gs-promo-section">
      <div className="gs-container">
        <div className="gs-promo-card">
          <div className="gs-promo-badge">FREE WITH PURCHASE</div>
          <div className="gs-promo-content">
            <div className="gs-promo-header">
              <h2 className="gs-promo-title">FREE GEMSTONE WEARING GUIDE INCLUDED</h2>
              <p className="gs-promo-sub">
                Every gemstone purchase includes a complete astrology guidance PDF prepared by Gokul&apos;s Astrological Insights.
              </p>
            </div>
            
            <div className="gs-promo-grid">
              {guidePoints.map((point, i) => (
                <div key={i} className="gs-promo-item">
                  <span className="gs-promo-icon">{point.icon}</span>
                  <span className="gs-promo-text">{point.text}</span>
                </div>
              ))}
            </div>

            <div className="gs-promo-notes">
              <p className="gs-note-highlight">
                “Not just a gemstone — receive complete spiritual and astrology guidance for maximum positive results.”
              </p>
              <p className="gs-note-premium">
                “Each gemstone is recommended based on astrology principles for planetary strengthening, remedies, protection, growth, and positive energy.”
              </p>
            </div>

            <div className="gs-promo-btns">
              <a href="#collection" className="gs-btn-primary gs-btn-large">✦ Get Your Gemstone</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="gs-btn-wa gs-btn-large">
                WhatsApp Consultation
              </a>
            </div>
          </div>
          <div className="gs-promo-visual">
            <div className="gs-pdf-mockup">
              <div className="gs-pdf-cover">
                <span className="gs-pdf-title">Gemstone<br />Wearing<br />Guide</span>
                <span className="gs-pdf-author">Gokul&apos;s Astrological Insights</span>
              </div>
              <div className="gs-pdf-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
