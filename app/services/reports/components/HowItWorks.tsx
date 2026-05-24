"use client";
import React from "react";

const steps = [
  { num: "01", title: "Select Service", desc: "Choose the report or consultation that fits your needs." },
  { num: "02", title: "Fill Details", desc: "Provide your birth details for accurate report generation." },
  { num: "03", title: "Submit Request", desc: "Confirm your information and submit for processing." },
  { num: "04", title: "WhatsApp Confirmation", desc: "Our team will verify details and confirm the order." },
  { num: "05", title: "Delivery", desc: "Receive your professional PDF report or voice audio via WhatsApp." },
];

export default function HowItWorks() {
  return (
    <section className="rp-section">
      <div className="rp-container">
        <div className="rp-section-header">
          <span className="rp-tag">✦ Process ✦</span>
          <h2 className="rp-h2">How It <span className="rp-gold">Works</span></h2>
        </div>
        <div className="rp-steps">
          {steps.map((step, i) => (
            <div key={step.num} className="rp-step-item">
              <div className="rp-step-circle">
                <span className="rp-step-n">{step.num}</span>
                {i < steps.length - 1 && <div className="rp-step-line" />}
              </div>
              <div className="rp-step-text">
                <h3 className="rp-step-title">{step.title}</h3>
                <p className="rp-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
