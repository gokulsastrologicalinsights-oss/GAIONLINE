"use client";
import React, { useState } from "react";
import { SOCIAL_LINKS } from "../../../constants";

const reportList = [
  "Single Page Horoscope Snapshot", "Marriage Biodata PDF", "Gemstone Recommendation PDF",
  "Dosha Analysis Report", "Personalized Yearly Predictions", "Voice Note Consultation",
  "Long-Term Guidance (1 Year)", "Business & Partner Compatibility"
];

interface ReportFormProps {
  initialReport?: string;
}

export default function ReportForm({ initialReport }: ReportFormProps) {
  const [form, setForm] = useState({
    name: "", whatsapp: "", dob: "", tob: "", pob: "", location: "", service: initialReport || "", question: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Gokul's Astrological Insights, I'm interested in an Astrology Report.

📜 Report: ${form.service || "Not Selected"}
👤 Name: ${form.name}
📅 DOB: ${form.dob}
⏰ TOB: ${form.tob}
📍 POB: ${form.pob}
📌 Location: ${form.location}
📱 WhatsApp: ${form.whatsapp}
❓ Question: ${form.question}`;

    window.open(`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="form" className="rp-section rp-section-alt">
      <div className="rp-container">
        <div className="rp-section-header">
          <span className="rp-tag">✦ Final Step ✦</span>
          <h2 className="rp-h2">Submit Your <span className="rp-gold">Horoscope Details</span></h2>
        </div>
        <form onSubmit={handleSubmit} className="rp-form">
          <div className="rp-form-grid">
            <div className="rp-form-group">
              <label>👤 Full Name *</label>
              <input required name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
            </div>
            <div className="rp-form-group">
              <label>📱 WhatsApp Number *</label>
              <input required name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp number" />
            </div>
            <div className="rp-form-group">
              <label>📅 Date of Birth *</label>
              <input required type="date" name="dob" value={form.dob} onChange={handleChange} />
            </div>
            <div className="rp-form-group">
              <label>⏰ Time of Birth *</label>
              <input required type="time" name="tob" value={form.tob} onChange={handleChange} />
            </div>
            <div className="rp-form-group">
              <label>📍 Place of Birth *</label>
              <input required name="pob" value={form.pob} onChange={handleChange} placeholder="Birth city" />
            </div>
            <div className="rp-form-group">
              <label>📌 Current Location *</label>
              <input required name="location" value={form.location} onChange={handleChange} placeholder="Current city" />
            </div>
            <div className="rp-form-group rp-full">
              <label>📜 Select Report / Service *</label>
              <select required name="service" value={form.service} onChange={handleChange}>
                <option value="">-- Choose a Service --</option>
                {reportList.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div className="rp-form-group rp-full">
              <label>❓ Your Question *</label>
              <textarea required name="question" value={form.question} onChange={handleChange} rows={4} placeholder="Type your main question here..." />
            </div>
          </div>
          <button type="submit" className="rp-btn-primary rp-btn-large rp-btn-full">Submit &amp; Request via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
