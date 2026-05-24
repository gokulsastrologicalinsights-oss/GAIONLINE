"use client";
import React from "react";

const steps = [
  { num: "01", icon: "💎", title: "Select Matching Type", desc: "Choose between Basic or Advanced matching plans." },
  { num: "02", icon: "📝", title: "Fill Details", desc: "Submit Bride & Groom birth names, dates, times, and places." },
  { num: "03", icon: "🚀", title: "Submit Details", desc: "Confirm your details and proceed to the next step." },
  { num: "04", icon: "💬", title: "WhatsApp Consultation", desc: "Gokul Sir will connect with you via WhatsApp for analysis." },
];

export default function ProcessTimeline() {
  return (
    <section className="mm-section mm-section-alt">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Easy Steps ✦</span>
          <h2 className="mm-section-h2">Consultation <span className="mm-gold">Process</span></h2>
          <p className="mm-section-sub">Simple 4-step process to find your perfect matching compatibility.</p>
        </div>
        <div className="mm-timeline">
          {steps.map((step, i) => (
            <div key={step.num} className="mm-timeline-step">
              <div className="mm-step-num">{step.num}</div>
              <div className="mm-step-icon">{step.icon}</div>
              <h3 className="mm-step-title">{step.title}</h3>
              <p className="mm-step-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="mm-step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
