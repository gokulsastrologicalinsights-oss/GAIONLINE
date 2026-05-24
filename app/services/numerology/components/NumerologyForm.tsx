"use client";
import React, { useState } from "react";

interface NumerologyFormProps {
  selectedType: "Basic" | "Advanced" | "";
}

export default function NumerologyForm({ selectedType }: NumerologyFormProps) {
  const [form, setForm] = useState({
    name: "", dob: "", mobile: "", location: "", profession: "", question: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatDOB = (raw: string) => {
    if (!raw) return "";
    const [y, m, d] = raw.split("-");
    return `${d}/${m}/${y}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Gokul's Astrological Insights, I have submitted my details for ${selectedType || "Numerology"} Consultation.

🔢 Consultation Type: ${selectedType || "Not Selected"}
👤 Name: ${form.name}
📅 DOB: ${formatDOB(form.dob)}
📱 Mobile: ${form.mobile}
📌 Location: ${form.location}
💼 Profession: ${form.profession}
❓ Question: ${form.question}`;

    window.open(`https://wa.me/919444559071?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="form" className="nc-section">
      <div className="nc-container">
        <div className="nc-section-header">
          <span className="nc-section-tag">✦ Step 2 ✦</span>
          <h2 className="nc-section-h2">Fill Your <span className="nc-gold">Numerology Details</span></h2>
          <p className="nc-section-sub">Please provide accurate details for a precise numerical reading.</p>
        </div>
        <form onSubmit={handleSubmit} className="nc-form">
          <div className="nc-form-type-badge">
            Selected Plan: <span className="nc-gold">{selectedType || "Please select a plan above"}</span>
          </div>
          <div className="nc-form-grid">
            <div className="nc-form-group">
              <label className="nc-label">👤 Full Name *</label>
              <input required name="name" value={form.name} onChange={handleChange} className="nc-input" placeholder="Your full name" />
            </div>
            <div className="nc-form-group">
              <label className="nc-label">📅 Date of Birth *</label>
              <input required type="date" name="dob" value={form.dob} onChange={handleChange} className="nc-input nc-date" />
            </div>
            <div className="nc-form-group">
              <label className="nc-label">📱 Mobile Number *</label>
              <input required name="mobile" value={form.mobile} onChange={handleChange} className="nc-input" placeholder="Your WhatsApp number" />
            </div>
            <div className="nc-form-group">
              <label className="nc-label">📌 Current Location *</label>
              <input required name="location" value={form.location} onChange={handleChange} className="nc-input" placeholder="Your current city" />
            </div>
            <div className="nc-form-group">
              <label className="nc-label">💼 Profession *</label>
              <input required name="profession" value={form.profession} onChange={handleChange} className="nc-input" placeholder="Your profession" />
            </div>
          </div>
          <div className="nc-form-group nc-form-full">
            <label className="nc-label">❓ Your Main Question *</label>
            <textarea required name="question" value={form.question} onChange={handleChange} className="nc-input nc-textarea" rows={4} placeholder="What specific area would you like guidance on? (Career, Name Correction, Lucky Numbers, etc.)" />
          </div>
          <div className="nc-form-submit">
            <button type="submit" className="nc-btn-primary nc-btn-large">
              Submit &amp; Continue on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
