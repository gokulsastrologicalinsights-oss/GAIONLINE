"use client";
import React, { useState } from "react";

const faqs = [
  { q: "Which gemstone is suitable for me?", a: "The most suitable gemstone depends on your unique birth chart, planetary positions, and the areas of life you wish to strengthen. We recommend a consultation before wearing any stone." },
  { q: "Can I wear gemstones without consultation?", a: "While possible, it is not recommended. Incorrectly wearing a gemstone can sometimes lead to adverse planetary effects. Professional guidance ensures you wear the right stone for your benefit." },
  { q: "Are the gemstones natural?", a: "Yes, we exclusively provide 100% natural and untreated astrological gemstones. Each stone is carefully vetted for quality and planetary energy." },
  { q: "How many carats should I wear?", a: "The required weight (carats) depends on your body weight, age, and the strength of the planet in your horoscope. Typically, 1 carat per 12kg of body weight is a general guideline, but precise calculation is better." },
  { q: "Is online consultation available?", a: "Yes, we provide online astrological consultations worldwide via WhatsApp and Video call to help you select the perfect gemstone." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="gs-section gs-section-alt">
      <div className="gs-container">
        <div className="gs-section-header">
          <span className="gs-section-tag">✦ FAQs ✦</span>
          <h2 className="gs-section-h2">Common <span className="gs-gold">Questions</span></h2>
        </div>
        <div className="gs-faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`gs-faq-item ${open === i ? "gs-faq-open" : ""}`}>
              <button className="gs-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="gs-faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="gs-faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
