"use client";
import React, { useState } from "react";

const faqs = [
  { q: "How will reports be delivered?", a: "All digital reports are delivered as high-quality PDF files directly to your registered WhatsApp number." },
  { q: "How long will delivery take?", a: "Mini reports and biodatas are usually delivered within 24 hours. Premium detailed reports may take 2-3 business days." },
  { q: "Are reports available in Tamil?", a: "Yes, we provide reports in both Tamil and English. You can specify your language preference when we contact you on WhatsApp." },
  { q: "Is consultation included?", a: "Standard reports include the PDF only. However, our Voice Consultation and Long-Term Guidance services include personalized audio explanations." },
  { q: "Can reports be customized?", a: "Absolutely! If you have a specific life area you want us to focus on, please mention it in the 'Your Question' field of the form." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="rp-section">
      <div className="rp-container">
        <div className="rp-section-header">
          <span className="rp-tag">✦ Knowledge ✦</span>
          <h2 className="rp-h2">Store <span className="rp-gold">FAQs</span></h2>
        </div>
        <div className="rp-faq-list">
          {faqs.map((f, i) => (
            <div key={i} className="rp-faq-item">
              <button className="rp-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="rp-faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
