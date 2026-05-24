"use client";
import React from "react";

const reviews = [
  { name: "Anand & Kavitha", location: "Chennai", text: "The advanced matching report was so detailed. It helped us understand our strengths as a couple. Highly professional!", initial: "AK" },
  { name: "Suresh Kumar", location: "Coimbatore", text: "Gokul Sir's guidance on the Dosha analysis gave us huge clarity. Very accurate and traditional approach.", initial: "SK" },
  { name: "Meera Reddy", location: "Bangalore", text: "Fast response and very helpful. The WhatsApp consultation was excellent. Best place for marriage matching.", initial: "MR" },
];

export default function Testimonials() {
  return (
    <section className="mm-section">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Success Stories ✦</span>
          <h2 className="mm-section-h2">What Our <span className="mm-gold">Clients Say</span></h2>
        </div>
        <div className="mm-testi-grid">
          {reviews.map((r, i) => (
            <div key={i} className="mm-testi-card">
              <div className="mm-testi-header">
                <div className="mm-testi-avatar">{r.initial}</div>
                <div>
                  <div className="mm-testi-name">{r.name}</div>
                  <div className="mm-testi-location">📍 {r.location}</div>
                </div>
              </div>
              <div className="mm-testi-stars">★★★★★</div>
              <p className="mm-testi-text">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
