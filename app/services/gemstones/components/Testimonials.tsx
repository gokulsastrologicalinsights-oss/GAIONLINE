"use client";
import React from "react";

const reviews = [
  { name: "Karthik Raja", location: "Madurai", text: "The Blue Sapphire I got from Gokul Sir really stabilized my career. The quality is amazing, and the results were visible in a few months.", initial: "KR" },
  { name: "Sowmya Iyer", location: "Chennai", text: "I was confused about which stone to wear. The consultation was very detailed, and the Emerald I purchased is beautiful and natural.", initial: "SI" },
  { name: "Deepak Patel", location: "Ahmedabad", text: "Trusted quality gemstones. I have purchased Hessonite and Cat's Eye, both are high quality and provided with proper certification guidance.", initial: "DP" },
];

export default function Testimonials() {
  return (
    <section className="gs-section">
      <div className="gs-container">
        <div className="gs-section-header">
          <span className="gs-section-tag">✦ Client Stories ✦</span>
          <h2 className="gs-section-h2">What Our <span className="gs-gold">Clients Say</span></h2>
        </div>
        <div className="gs-testi-grid">
          {reviews.map((r, i) => (
            <div key={i} className="gs-testi-card">
              <div className="gs-testi-header">
                <div className="gs-testi-avatar">{r.initial}</div>
                <div>
                  <div className="gs-testi-name">{r.name}</div>
                  <div className="gs-testi-location">📍 {r.location}</div>
                </div>
              </div>
              <div className="gs-testi-stars">★★★★★</div>
              <p className="gs-testi-text">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
