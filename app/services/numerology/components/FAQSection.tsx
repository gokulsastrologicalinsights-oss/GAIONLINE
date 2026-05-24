"use client";
import React, { useState } from "react";

const faqs = [
  { q: "What is numerology?", a: "Numerology is the study of the mystical relationship between numbers and physical objects or living things. It helps uncover patterns in your life based on your name and birth date." },
  { q: "How accurate is numerology analysis?", a: "Our analysis is based on time-tested principles of Pythagorean and Chaldean systems, providing highly accurate insights into your personality and destiny." },
  { q: "What is included in the PDF report?", a: "The report includes your Life Path, Destiny, and Soul numbers, lucky numbers, dates, colors, and specific remedies based on your plan." },
  { q: "Can numerology improve career and finance?", a: "Yes, by aligning your activities with your lucky numbers and dates, and correcting name vibrations, you can significantly enhance your professional growth." },
  { q: "Is online consultation available worldwide?", a: "Absolutely. We provide consultation services globally via WhatsApp and email." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="nc-section nc-section-alt">
      <div className="nc-container">
        <div className="nc-section-header">
          <span className="nc-section-tag">✦ FAQs ✦</span>
          <h2 className="nc-section-h2">Frequently Asked <span className="nc-gold">Questions</span></h2>
        </div>
        <div className="nc-faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`nc-faq-item ${open === i ? "nc-faq-open" : ""}`}>
              <button className="nc-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="nc-faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="nc-faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
