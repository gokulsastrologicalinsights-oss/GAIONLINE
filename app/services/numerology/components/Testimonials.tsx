"use client";
import React from "react";

const reviews = [
  { name: "Rahul Sharma", location: "Delhi", text: "The name correction suggested by Gokul Sir worked wonders for my business. Very professional and accurate!", initial: "RS" },
  { name: "Priya Menon", location: "Kochi", text: "I was skeptical about numerology, but the life path analysis was spot on. Highly recommended!", initial: "PM" },
  { name: "Vikram Singh", location: "Mumbai", text: "The advanced consultation gave me so much clarity on my career path. The PDF report is excellent.", initial: "VS" },
];

export default function Testimonials() {
  return (
    <section className="nc-section">
      <div className="nc-container">
        <div className="nc-section-header">
          <span className="nc-section-tag">✦ Client Feedback ✦</span>
          <h2 className="nc-section-h2">What Our <span className="nc-gold">Clients Say</span></h2>
        </div>
        <div className="nc-testi-grid">
          {reviews.map((r, i) => (
            <div key={i} className="nc-testi-card">
              <div className="nc-testi-header">
                <div className="nc-testi-avatar">{r.initial}</div>
                <div>
                  <div className="nc-testi-name">{r.name}</div>
                  <div className="nc-testi-location">📍 {r.location}</div>
                </div>
              </div>
              <div className="nc-testi-stars">★★★★★</div>
              <p className="nc-testi-text">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
