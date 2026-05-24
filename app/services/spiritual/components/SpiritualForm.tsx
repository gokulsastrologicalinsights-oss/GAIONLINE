"use client";
import React, { useState } from "react";

const services = [
  "Horoscope Remedy Analysis", "Career Growth Package", "Marriage Delay Package", "Business Growth Package",
  "Black Magic Remedies", "Family Harmony Remedies", "Health Remedies", "Foreign Opportunity Remedies"
];

interface SpiritualFormProps {
  selectedPackage: string;
}

export default function SpiritualForm({ selectedPackage }: SpiritualFormProps) {
  const [form, setForm] = useState({
    name: "", whatsapp: "", dob: "", tob: "", pob: "", location: "", service: selectedPackage || "", problem: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Gokul's Astrological Insights, I'm interested in your Spiritual Services.

🕉 Service: ${form.service || "Not Selected"}
👤 Name: ${form.name}
📅 DOB: ${form.dob}
⏰ TOB: ${form.tob}
📍 POB: ${form.pob}
📌 Location: ${form.location}
📱 WhatsApp: ${form.whatsapp}
❓ Problem: ${form.problem}`;

    window.open(`https://wa.me/919444559071?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="form" className="sp-section">
      <div className="sp-container">
        <div className="sp-section-header">
          <span className="sp-section-tag">✦ Final Step ✦</span>
          <h2 className="sp-section-h2">Submit Your <span className="sp-gold">Horoscope Details</span></h2>
        </div>
        <form onSubmit={handleSubmit} className="sp-form">
          <div className="sp-form-grid">
            <div className="sp-form-group">
              <label className="sp-label">👤 Full Name *</label>
              <input required name="name" value={form.name} onChange={handleChange} className="sp-input" placeholder="Your name" />
            </div>
            <div className="sp-form-group">
              <label className="sp-label">📱 WhatsApp Number *</label>
              <input required name="whatsapp" value={form.whatsapp} onChange={handleChange} className="sp-input" placeholder="WhatsApp number" />
            </div>
            <div className="sp-form-group">
              <label className="sp-label">📅 Date of Birth *</label>
              <input required type="date" name="dob" value={form.dob} onChange={handleChange} className="sp-input sp-date" />
            </div>
            <div className="sp-form-group">
              <label className="sp-label">⏰ Time of Birth *</label>
              <input required type="time" name="tob" value={form.tob} onChange={handleChange} className="sp-input sp-date" />
            </div>
            <div className="sp-form-group">
              <label className="sp-label">📍 Place of Birth *</label>
              <input required name="pob" value={form.pob} onChange={handleChange} className="sp-input" placeholder="Birth city" />
            </div>
            <div className="sp-form-group">
              <label className="sp-label">📌 Current Location *</label>
              <input required name="location" value={form.location} onChange={handleChange} className="sp-input" placeholder="Current city" />
            </div>
            <div className="sp-form-group sp-form-full">
              <label className="sp-label">✨ Select Service *</label>
              <select required name="service" value={form.service} onChange={handleChange} className="sp-input sp-select">
                <option value="">-- Choose a Service --</option>
                {services.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="sp-form-group sp-form-full">
              <label className="sp-label">❓ Describe Your Problem *</label>
              <textarea required name="problem" value={form.problem} onChange={handleChange} className="sp-input sp-textarea" rows={4} placeholder="Please describe the main area of concern in your life..." />
            </div>
          </div>
          <div className="sp-form-submit">
            <button type="submit" className="sp-btn-primary sp-btn-large">Submit &amp; Continue on WhatsApp</button>
          </div>
        </form>
      </div>
    </section>
  );
}
