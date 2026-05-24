"use client";
import React from "react";

const reviews = [
  { name: "Suresh Kumar", location: "Coimbatore", text: "The Career Growth Homam performed by Gokul Sir was a turning point for my business. I highly recommend his spiritual remedies.", initial: "SK" },
  { name: "Anitha Raj", location: "Bangalore", text: "The marriage delay pooja gave me a lot of mental peace and clarity. Everything happened exactly as predicted after the parihaarams.", initial: "AR" },
  { name: "Vijay Raghavan", location: "London", text: "Participated in the online Lakshmi Kubera homam. The process was very professional and the results have been truly divine.", initial: "VR" },
];

export default function Testimonials() {
  return (
    <section className="sp-section">
      <div className="sp-container">
        <div className="sp-section-header">
          <span className="sp-section-tag">✦ Divine Experiences ✦</span>
          <h2 className="sp-section-h2">Client <span className="sp-gold">Testimonials</span></h2>
        </div>
        <div className="sp-testi-grid">
          {reviews.map((r, i) => (
            <div key={i} className="sp-testi-card">
              <div className="sp-testi-header">
                <div className="sp-testi-avatar">{r.initial}</div>
                <div>
                  <div className="sp-testi-name">{r.name}</div>
                  <div className="sp-testi-location">📍 {r.location}</div>
                </div>
              </div>
              <div className="sp-testi-stars">★★★★★</div>
              <p className="sp-testi-text">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
