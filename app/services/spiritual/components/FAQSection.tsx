"use client";
import React, { useState } from "react";

const faqs = [
  { q: "How are remedies selected?", a: "Remedies are selected after a deep analysis of your birth chart, looking for doshas, planetary positions, and the root cause of your life problems." },
  { q: "Are poojas done online?", a: "Yes, we offer live streaming and recorded sessions for those who cannot attend in person. We perform the sankalpam using your specific birth details." },
  { q: "Can remedies be done without birth time?", a: "While birth time is ideal for precise analysis, we can still provide general spiritual guidance and poojas based on your birth date and Raasi." },
  { q: "How long do remedies take to show results?", a: "Spiritual results vary, but most clients begin to feel a positive shift in energy and circumstances within 21 to 48 days of completing the remedies." },
  { q: "Is consultation available worldwide?", a: "Yes, we provide spiritual guidance and online pooja services to clients globally via WhatsApp and Video call." },
  { q: "Will PDF guidance be provided?", a: "Absolutely. All our remedy plans and mantra packages include a detailed PDF guide with instructions on how to perform the pariharams." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="sp-section sp-section-alt">
      <div className="sp-container">
        <div className="sp-section-header">
          <span className="sp-section-tag">✦ Spiritual FAQs ✦</span>
          <h2 className="sp-section-h2">Frequently Asked <span className="sp-gold">Questions</span></h2>
        </div>
        <div className="sp-faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`sp-faq-item ${open === i ? "sp-faq-open" : ""}`}>
              <button className="sp-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="sp-faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="sp-faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
