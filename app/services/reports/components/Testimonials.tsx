"use client";
import React from "react";

const reviews = [
  { name: "Karthik Raja", text: "The Yearly Prediction report was spot on! It helped me prepare for my career change at the right time.", initial: "KR" },
  { name: "Meera Devi", text: "I ordered the Marriage Biodata PDF. It's so professional and beautifully designed compared to standard ones.", initial: "MD" },
  { name: "Arjun V.", text: "The Gemstone report was very detailed. The wearing instructions and mantras were exactly what I needed.", initial: "AV" },
];

export default function Testimonials() {
  return (
    <section className="rp-section rp-section-alt">
      <div className="rp-container">
        <div className="rp-section-header">
          <span className="rp-tag">✦ Client Stories ✦</span>
          <h2 className="rp-h2">What Our <span className="rp-gold">Clients Say</span></h2>
        </div>
        <div className="rp-testi-grid">
          {reviews.map((r, i) => (
            <div key={i} className="rp-testi-card">
              <div className="rp-testi-avatar">{r.initial}</div>
              <p className="rp-testi-text">&ldquo;{r.text}&rdquo;</p>
              <div className="rp-testi-name">-{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
