"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "Is marriage matching necessary before marriage?",
    a: "Yes. Marriage matching (Horoscope Compatibility) analyzes the alignment of stars, dasha sequences, and planetary balances of both partners to ensure a harmonious union, helping to anticipate and navigate relationship, health, or financial challenges.",
  },
  {
    q: "Can Doshas be remedied?",
    a: "Absolutely. Most planetary doshas, including Manglik Dosha, Rahu-Ketu dosha, and Kalathra dosha, can be effectively balanced through personalized remedies such as specific prayers, charity, fasts, gemstone recommendations, or minor pariharams.",
  },
  {
    q: "Is this service suitable for love marriages?",
    a: "Yes, it is highly beneficial. For love marriages, matching helps couples understand each other’s planetary temperaments, identify potential future communication or financial bottlenecks, and receive guidance to proactively strengthen their marital bond.",
  },
  {
    q: "What details are required for analysis?",
    a: "We require the Date of Birth, exact Time of Birth, and Place of Birth for both the bride and the groom to calculate accurate astrological charts (Jathagam).",
  },
  {
    q: "Will I receive a detailed report?",
    a: "Yes. Our matching plans include a free PDF report detailing your Raasi and Lagna alignments, standard 11 Poruthams with compatibility scores, and analysis of planetary doshas.",
  },
  {
    q: "How long does the consultation take?",
    a: "Once you submit your birth details, the matching analysis is prepared and delivered within 24 to 48 hours. The following 1-on-1 consultation session via call or WhatsApp typically lasts 30 to 45 minutes.",
  },
  {
    q: "Can this service help with delayed marriages?",
    a: "Yes. We analyze the 7th house, Venus/Jupiter planetary strength, and current dasha sequences in your chart to diagnose any astrological blockages and recommend suitable remedies to speed up the marriage process.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mm-section mm-section-alt">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ FAQ ✦</span>
          <h2 className="mm-section-h2">Frequently Asked <span className="mm-gold">Questions</span></h2>
        </div>
        <div className="mm-faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`mm-faq-item ${open === i ? "mm-faq-open" : ""}`}>
              <button className="mm-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="mm-faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              <div className="mm-faq-wrapper">
                <div className="mm-faq-a">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
