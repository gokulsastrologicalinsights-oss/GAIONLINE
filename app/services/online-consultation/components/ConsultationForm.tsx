"use client";
import { useState } from "react";
import { SOCIAL_LINKS } from "../../../constants";

// Generate hours 1–12
const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
// Generate minutes 00–59
const MINUTES = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "", dob: "", pob: "", location: "", marital: "", question: "",
  });
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState("AM");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatDOB = (raw: string) => {
    // raw is YYYY-MM-DD from date input, convert to DD/MM/YYYY
    if (!raw) return "";
    const [y, m, d] = raw.split("-");
    return `${d}/${m}/${y}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tob = hour && minute ? `${hour}:${minute} ${ampm}` : "Not provided";
    const msg = `Hello Gokul's Astrological Insights, I have submitted my details for the ₹1001 online consultation.

👤 Name: ${form.name}
📅 DOB: ${formatDOB(form.dob)}
⏰ Time of Birth: ${tob}
📍 Place of Birth: ${form.pob}
📌 Current Location: ${form.location}
💍 Marital Status: ${form.marital}
❓ Question: ${form.question}`;
    window.open(`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="form" className="oc-section oc-section-alt">
      <div className="oc-container">
        <div className="oc-section-header">
          <span className="oc-section-tag">✦ Step 1 ✦</span>
          <h2 className="oc-section-h2">Fill Your <span className="oc-gold">Birth Details</span></h2>
          <p className="oc-section-sub">Please provide accurate birth details for precise astrological analysis.</p>
        </div>
        <form onSubmit={handleSubmit} className="oc-form">
          <div className="oc-form-grid">
            {/* Full Name */}
            <div className="oc-form-group">
              <label className="oc-label">👤 Full Name *</label>
              <input required name="name" value={form.name} onChange={handleChange} className="oc-input" placeholder="Enter your full name" />
            </div>

            {/* Date of Birth — calendar picker */}
            <div className="oc-form-group">
              <label className="oc-label">📅 Date of Birth *</label>
              <input
                required
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="oc-input oc-date"
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            {/* Time of Birth — dropdowns */}
            <div className="oc-form-group">
              <label className="oc-label">⏰ Time of Birth *</label>
              <div className="oc-time-row">
                <select
                  required
                  value={hour}
                  onChange={e => setHour(e.target.value)}
                  className="oc-input oc-select oc-time-select"
                >
                  <option value="">HH</option>
                  {HOURS.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
                <span className="oc-time-colon">:</span>
                <select
                  required
                  value={minute}
                  onChange={e => setMinute(e.target.value)}
                  className="oc-input oc-select oc-time-select"
                >
                  <option value="">MM</option>
                  {MINUTES.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <select
                  value={ampm}
                  onChange={e => setAmpm(e.target.value)}
                  className="oc-input oc-select oc-ampm-select"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            {/* Place of Birth */}
            <div className="oc-form-group">
              <label className="oc-label">📍 Place of Birth *</label>
              <input required name="pob" value={form.pob} onChange={handleChange} className="oc-input" placeholder="City, State, Country" />
            </div>

            {/* Current Location */}
            <div className="oc-form-group">
              <label className="oc-label">📌 Current Location *</label>
              <input required name="location" value={form.location} onChange={handleChange} className="oc-input" placeholder="Current city/country" />
            </div>

            {/* Marital Status */}
            <div className="oc-form-group">
              <label className="oc-label">💍 Marital Status *</label>
              <select required name="marital" value={form.marital} onChange={handleChange} className="oc-input oc-select">
                <option value="">Select status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
          </div>

          {/* Question */}
          <div className="oc-form-group oc-form-full">
            <label className="oc-label">❓ Your Question *</label>
            <textarea required name="question" value={form.question} onChange={handleChange} className="oc-input oc-textarea" rows={4} placeholder="What specific area would you like guidance on? (Career, Marriage, Health, Finance, etc.)" />
          </div>

          <div className="oc-form-submit">
            <button type="submit" className="oc-btn-primary oc-btn-large">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
              Submit &amp; Continue on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
