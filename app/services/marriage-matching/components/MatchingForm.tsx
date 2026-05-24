"use client";
import React, { useState } from "react";

const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
const MINUTES = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));

interface MatchingFormProps {
  selectedType: "Basic" | "Advanced" | "";
}

export default function MatchingForm({ selectedType }: MatchingFormProps) {
  const [form, setForm] = useState({
    brideName: "", brideDob: "", bridePob: "",
    groomName: "", groomDob: "", groomPob: "",
    location: "", whatsapp: "", questions: "",
  });

  const [brideHour, setBrideHour] = useState("");
  const [brideMinute, setBrideMinute] = useState("");
  const [brideAmpm, setBrideAmpm] = useState("AM");

  const [groomHour, setGroomHour] = useState("");
  const [groomMinute, setGroomMinute] = useState("");
  const [groomAmpm, setGroomAmpm] = useState("AM");

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
    const brideTob = brideHour && brideMinute ? `${brideHour}:${brideMinute} ${brideAmpm}` : "Not provided";
    const groomTob = groomHour && groomMinute ? `${groomHour}:${groomMinute} ${groomAmpm}` : "Not provided";

    const msg = `Hello Gokul's Astrological Insights, I have submitted details for ${selectedType || "Marriage"} Matching.

💍 Matching Type: ${selectedType || "Not Selected"}

👰 BRIDE DETAILS
Name: ${form.brideName}
DOB: ${formatDOB(form.brideDob)}
TOB: ${brideTob}
POB: ${form.bridePob}

🤵 GROOM DETAILS
Name: ${form.groomName}
DOB: ${formatDOB(form.groomDob)}
TOB: ${groomTob}
POB: ${form.groomPob}

📌 Current Location: ${form.location}
📱 WhatsApp: ${form.whatsapp}
💬 Questions: ${form.questions}`;

    window.open(`https://wa.me/919444559071?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="form" className="mm-section">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Step 2 ✦</span>
          <h2 className="mm-section-h2">Fill Bride &amp; Groom <span className="mm-gold">Details</span></h2>
          <p className="mm-section-sub">Please provide accurate birth details for both for precise compatibility analysis.</p>
        </div>
        <form onSubmit={handleSubmit} className="mm-form">
          <div className="mm-form-type-badge">
            Selected Plan: <span className="mm-gold">{selectedType || "Please select a plan above"}</span>
          </div>

          <div className="mm-form-grid">
            {/* Bride Section */}
            <div className="mm-form-column">
              <h3 className="mm-column-title">👰 Bride Details</h3>
              <div className="mm-form-group">
                <label className="mm-label">Full Name *</label>
                <input required name="brideName" value={form.brideName} onChange={handleChange} className="mm-input" placeholder="Bride's full name" />
              </div>
              <div className="mm-form-group">
                <label className="mm-label">Date of Birth *</label>
                <input required type="date" name="brideDob" value={form.brideDob} onChange={handleChange} className="mm-input mm-date" />
              </div>
              <div className="mm-form-group">
                <label className="mm-label">Time of Birth *</label>
                <div className="mm-time-row">
                  <select required value={brideHour} onChange={e => setBrideHour(e.target.value)} className="mm-input mm-select mm-time-select">
                    <option value="">HH</option>
                    {HOURS.map(h => <option key={h} value={h}>{h}</option>)}
                  </select>
                  <span className="mm-time-colon">:</span>
                  <select required value={brideMinute} onChange={e => setBrideMinute(e.target.value)} className="mm-input mm-select mm-time-select">
                    <option value="">MM</option>
                    {MINUTES.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <select value={brideAmpm} onChange={e => setBrideAmpm(e.target.value)} className="mm-input mm-select mm-ampm-select">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
              <div className="mm-form-group">
                <label className="mm-label">Place of Birth *</label>
                <input required name="bridePob" value={form.bridePob} onChange={handleChange} className="mm-input" placeholder="City, State, Country" />
              </div>
            </div>

            {/* Groom Section */}
            <div className="mm-form-column">
              <h3 className="mm-column-title">🤵 Groom Details</h3>
              <div className="mm-form-group">
                <label className="mm-label">Full Name *</label>
                <input required name="groomName" value={form.groomName} onChange={handleChange} className="mm-input" placeholder="Groom's full name" />
              </div>
              <div className="mm-form-group">
                <label className="mm-label">Date of Birth *</label>
                <input required type="date" name="groomDob" value={form.groomDob} onChange={handleChange} className="mm-input mm-date" />
              </div>
              <div className="mm-form-group">
                <label className="mm-label">Time of Birth *</label>
                <div className="mm-time-row">
                  <select required value={groomHour} onChange={e => setGroomHour(e.target.value)} className="mm-input mm-select mm-time-select">
                    <option value="">HH</option>
                    {HOURS.map(h => <option key={h} value={h}>{h}</option>)}
                  </select>
                  <span className="mm-time-colon">:</span>
                  <select required value={groomMinute} onChange={e => setGroomMinute(e.target.value)} className="mm-input mm-select mm-time-select">
                    <option value="">MM</option>
                    {MINUTES.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <select value={groomAmpm} onChange={e => setGroomAmpm(e.target.value)} className="mm-input mm-select mm-ampm-select">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
              <div className="mm-form-group">
                <label className="mm-label">Place of Birth *</label>
                <input required name="groomPob" value={form.groomPob} onChange={handleChange} className="mm-input" placeholder="City, State, Country" />
              </div>
            </div>
          </div>

          <div className="mm-form-divider" />

          <div className="mm-form-grid mm-form-meta">
            <div className="mm-form-group">
              <label className="mm-label">📌 Current Location *</label>
              <input required name="location" value={form.location} onChange={handleChange} className="mm-input" placeholder="Your current city" />
            </div>
            <div className="mm-form-group">
              <label className="mm-label">📱 WhatsApp Number *</label>
              <input required name="whatsapp" value={form.whatsapp} onChange={handleChange} className="mm-input" placeholder="Your WhatsApp number" />
            </div>
          </div>

          <div className="mm-form-group mm-form-full">
            <label className="mm-label">💬 Additional Questions</label>
            <textarea name="questions" value={form.questions} onChange={handleChange} className="mm-input mm-textarea" rows={3} placeholder="Any specific concerns or details you'd like to share?" />
          </div>

          <div className="mm-form-submit">
            <button type="submit" className="mm-btn-primary mm-btn-large">
              Submit &amp; Continue on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
