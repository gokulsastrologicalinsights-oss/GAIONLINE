"use client";
import { useState } from "react";

const faqs = [
  { q: "How long is the consultation?", a: "Each online consultation session is approximately 30–45 minutes, covering all your key questions and providing detailed remedies." },
  { q: "Is online consultation available worldwide?", a: "Yes! We offer consultation globally via WhatsApp call or video. Clients from USA, UK, Canada, Australia, UAE, and more have consulted with us." },
  { q: "Can I consult in Tamil?", a: "Absolutely. We offer full consultation in both Tamil and English. You can choose your preferred language during the session." },
  { q: "Is birth time mandatory?", a: "Birth time is highly recommended for accurate KP astrology predictions. However, we can still provide guidance with approximate time or Prashna (query) chart." },
  { q: "How will the consultation happen?", a: "After payment confirmation, we will schedule your consultation via WhatsApp. The session happens over WhatsApp call or video call at the agreed time." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="oc-section">
      <div className="oc-container">
        <div className="oc-section-header">
          <span className="oc-section-tag">✦ Common Questions ✦</span>
          <h2 className="oc-section-h2">Frequently Asked <span className="oc-gold">Questions</span></h2>
        </div>
        <div className="oc-faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`oc-faq-item ${open === i ? "oc-faq-open" : ""}`}>
              <button className="oc-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="oc-faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="oc-faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
