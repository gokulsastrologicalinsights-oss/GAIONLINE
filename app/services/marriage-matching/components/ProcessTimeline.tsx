"use client";
import React from "react";
import { UserPlus, Orbit, FileCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <UserPlus className="w-6 h-6 text-amber-400" />,
    title: "Submit Birth Details",
    desc: "Provide date of birth, time of birth, and place of birth of both bride and groom.",
  },
  {
    num: "02",
    icon: <Orbit className="w-6 h-6 text-indigo-400" />,
    title: "Detailed Horoscope Analysis",
    desc: "Analyze 10 Porutham, Doshas, Dasha compatibility, planetary strength, and overall marriage prospects.",
  },
  {
    num: "03",
    icon: <FileCheck className="w-6 h-6 text-emerald-400" />,
    title: "Receive Guidance",
    desc: "Get a detailed compatibility report, consultation, and remedies if required.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="mm-section mm-how-works">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Simple 3-Step Process ✦</span>
          <h2 className="mm-section-h2">How It <span className="mm-gold">Works</span></h2>
          <p className="mm-section-sub">Get accurate compatibility insights in three simple steps.</p>
        </div>
        
        <div className="mm-how-grid">
          {steps.map((step, i) => (
            <div key={step.num} className="mm-how-card">
              <div className="mm-how-icon-wrap">
                {step.icon}
                <span className="mm-how-number">{step.num}</span>
              </div>
              <h3 className="mm-how-title">{step.title}</h3>
              <p className="mm-how-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="mm-how-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
