"use client";
import { useState } from "react";
import { SOCIAL_LINKS } from "../../../constants";

// Generate hours 1–12
const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
// Generate minutes 00–59
const MINUTES = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "", dob: "", pob: "", location: "", marital: "", question: "", tier: "Detailed",
  });
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState("AM");

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
    const tob = hour && minute ? `${hour}:${minute} ${ampm}` : "Not provided";
    const price = form.tier === "Basic" ? "₹501" : form.tier === "Premium" ? "₹1501" : "₹1001";
    
    const msg = `Hello Gokul's Astrological Insights, I have submitted my details for the ${form.tier} Consultation (${price}).

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
    <section id="form" className="relative w-full py-16 md:py-24 bg-gradient-to-b from-white to-surface-light flex items-center justify-center px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,rgba(54,61,133,0.04)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
            ✦ Step 1 ✦
          </span>
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            Fill Your Birth Details
          </h2>
          <p className="text-text-sub text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Please provide accurate birth details for precise astrological analysis.
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">👤 Full Name *</label>
              <input 
                required 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-800 text-sm sm:text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder-slate-400" 
                placeholder="Enter your full name" 
              />
            </div>

            {/* Date of Birth — calendar picker */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">📅 Date of Birth *</label>
              <input
                required
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-800 text-sm sm:text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 cursor-pointer"
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            {/* Time of Birth — dropdowns */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">⏰ Time of Birth *</label>
              <div className="flex items-center gap-2">
                <select
                  required
                  value={hour}
                  onChange={e => setHour(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-3 text-slate-800 text-sm sm:text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 cursor-pointer"
                >
                  <option value="">HH</option>
                  {HOURS.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
                <span className="text-primary font-bold text-lg leading-none">:</span>
                <select
                  required
                  value={minute}
                  onChange={e => setMinute(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-3 text-slate-800 text-sm sm:text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 cursor-pointer"
                >
                  <option value="">MM</option>
                  {MINUTES.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <select
                  value={ampm}
                  onChange={e => setAmpm(e.target.value)}
                  className="w-20 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-3 text-slate-800 text-sm sm:text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 cursor-pointer"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            {/* Place of Birth */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">📍 Place of Birth *</label>
              <input 
                required 
                name="pob" 
                value={form.pob} 
                onChange={handleChange} 
                className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-800 text-sm sm:text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder-slate-400" 
                placeholder="City, State, Country" 
              />
            </div>

            {/* Current Location */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">📌 Current Location *</label>
              <input 
                required 
                name="location" 
                value={form.location} 
                onChange={handleChange} 
                className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-800 text-sm sm:text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder-slate-400" 
                placeholder="Current city/country" 
              />
            </div>

            {/* Marital Status */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">💍 Marital Status *</label>
              <select 
                required 
                name="marital" 
                value={form.marital} 
                onChange={handleChange} 
                className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-800 text-sm sm:text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 cursor-pointer"
              >
                <option value="">Select status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>

            {/* Consultation Type */}
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">🔮 Consultation Type *</label>
              <select 
                required 
                name="tier" 
                value={form.tier} 
                onChange={handleChange} 
                className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-800 text-sm sm:text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 cursor-pointer"
              >
                <option value="Detailed">Detailed Consultation (₹1001)</option>
                <option value="Basic">Basic Consultation (₹501)</option>
                <option value="Premium">Premium Consultation (₹1501)</option>
              </select>
            </div>
          </div>

          {/* Question */}
          <div className="flex flex-col gap-2 mb-8">
            <label className="text-slate-700 font-bold text-xs sm:text-sm tracking-wide">❓ Your Question *</label>
            <textarea 
              required 
              name="question" 
              value={form.question} 
              onChange={handleChange} 
              className="bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-slate-800 text-sm sm:text-base outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder-slate-400 resize-vertical min-h-[120px]" 
              rows={4} 
              placeholder="What specific area would you like guidance on? (Career, Marriage, Health, Finance, etc.)" 
            />
          </div>

          <div className="flex justify-center">
            <button 
              type="submit" 
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-light text-white font-extrabold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-99 transition-all duration-300 flex items-center justify-center gap-2.5 text-base sm:text-lg cursor-pointer"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
              <span>Submit &amp; Continue on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
