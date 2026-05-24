"use client";
import React, { useState } from "react";

const faqs = [
  { q: "What is included in Basic Matching?", a: "Basic Matching includes analysis of Raasi, Lagna, and the standard 11 Poruthams, along with a free PDF report." },
  { q: "What extra features are available in Advanced Matching?", a: "Advanced matching adds Dosha balance check, Ashtakoota score, Dasa Bhukti sequence, planetary compatibility, and analysis of harmful planetary combinations." },
  { q: "How accurate is the analysis?", a: "Our analysis is highly accurate as it combines traditional Vedic principles with precise KP astrology calculations." },
  { q: "Is consultation available worldwide?", a: "Yes, we provide online marriage matching services to clients across the globe via WhatsApp." },
  { q: "Can matching be done without exact birth time?", a: "While exact time is best for KP analysis, we can provide general matching based on Raasi and Nakshatra if birth time is unavailable." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mm-section mm-section-alt">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ FAQs ✦</span>
          <h2 className="mm-section-h2">Frequently Asked <span className="mm-gold">Questions</span></h2>
        </div>
        <div className="mm-faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`mm-faq-item ${open === i ? "mm-faq-open" : ""}`}>
              <button className="mm-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="mm-faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="mm-faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
