"use client";
import React from "react";

const steps = [
  { num: "01", icon: "🔢", title: "Select Consultation", desc: "Choose between Basic or Advanced numerology plans." },
  { num: "02", icon: "📝", title: "Fill Your Details", desc: "Submit your birth name, date of birth, and mobile number." },
  { num: "03", icon: "🚀", title: "Submit Details", desc: "Confirm your information and proceed to consultation." },
  { num: "04", icon: "💬", title: "WhatsApp Consultation", desc: "Gokul Sir will connect with you via WhatsApp for your reading." },
];

export default function ProcessTimeline() {
  return (
    <section className="nc-section nc-section-alt">
      <div className="nc-container">
        <div className="nc-section-header">
          <span className="nc-section-tag">✦ Easy Steps ✦</span>
          <h2 className="nc-section-h2">Consultation <span className="nc-gold">Process</span></h2>
          <p className="nc-section-sub">A simple path to discovering your numerical destiny.</p>
        </div>
        <div className="nc-timeline">
          {steps.map((step, i) => (
            <div key={step.num} className="nc-timeline-step">
              <div className="nc-step-num">{step.num}</div>
              <div className="nc-step-icon">{step.icon}</div>
              <h3 className="nc-step-title">{step.title}</h3>
              <p className="nc-step-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="nc-step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
