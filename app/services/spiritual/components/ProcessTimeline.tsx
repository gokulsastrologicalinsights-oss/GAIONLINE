"use client";
import React from "react";

const steps = [
  { num: "01", title: "Select Service", desc: "Choose the spiritual remedy or package that fits your needs." },
  { num: "02", title: "Fill Details", desc: "Provide your birth details for accurate remedy analysis." },
  { num: "03", title: "Submit Request", desc: "Confirm your information and submit for professional review." },
  { num: "04", title: "WhatsApp Confirmation", desc: "Gokul Sir will connect with you to discuss the plan." },
  { num: "05", title: "Remedy Guidance", desc: "Receive detailed instructions for your pooja or homam." },
];

export default function ProcessTimeline() {
  return (
    <section className="sp-section sp-section-alt">
      <div className="sp-container">
        <div className="sp-section-header">
          <span className="sp-section-tag">✦ Easy Process ✦</span>
          <h2 className="sp-section-h2">Spiritual <span className="sp-gold">Journey</span></h2>
        </div>
        <div className="sp-timeline">
          {steps.map((step, i) => (
            <div key={step.num} className="sp-timeline-step">
              <div className="sp-step-num">{step.num}</div>
              <h3 className="sp-step-title">{step.title}</h3>
              <p className="sp-step-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="sp-step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
