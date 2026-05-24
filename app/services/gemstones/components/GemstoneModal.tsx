"use client";
import React, { useState, useEffect } from "react";
import { Gemstone } from "./GemstoneGrid";

interface GemstoneModalProps {
  gemstone: Gemstone | null;
  onClose: () => void;
}

const CARATS = [3, 4, 5, 6, 7, 8, 9, 10];

export default function GemstoneModal({ gemstone, onClose }: GemstoneModalProps) {
  const [form, setForm] = useState({
    name: "", whatsapp: "", dob: "", location: "",
  });
  const [carat, setCarat] = useState(5);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (gemstone) {
      setTotalPrice(gemstone.pricePerCarat * carat);
    }
  }, [gemstone, carat]);

  if (!gemstone) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Gokul's Astrological Insights, I am interested in purchasing a gemstone.

💎 Gemstone: ${gemstone.name}
🪐 Planet: ${gemstone.planet}
⚖️ Carat: ${carat} Carat
💰 Total Price: ₹${totalPrice}

👤 Name: ${form.name}
📅 DOB: ${form.dob}
📱 WhatsApp: ${form.whatsapp}
📌 Location: ${form.location}`;

    window.open(`https://wa.me/919444559071?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="gs-modal-overlay" onClick={onClose}>
      <div className="gs-modal" onClick={e => e.stopPropagation()}>
        <button className="gs-modal-close" onClick={onClose}>×</button>
        <div className="gs-modal-header">
          <h2 className="gs-modal-h2">Select Your <span className="gs-gold">Gemstone Details</span></h2>
          <p className="gs-modal-sub">Configure your {gemstone.name} selection below.</p>
        </div>

        <form onSubmit={handleSubmit} className="gs-modal-form">
          <div className="gs-modal-grid">
            <div className="gs-form-group">
              <label className="gs-label">👤 Full Name *</label>
              <input required name="name" value={form.name} onChange={handleChange} className="gs-input" placeholder="Your name" />
            </div>
            <div className="gs-form-group">
              <label className="gs-label">📱 WhatsApp Number *</label>
              <input required name="whatsapp" value={form.whatsapp} onChange={handleChange} className="gs-input" placeholder="WhatsApp number" />
            </div>
            <div className="gs-form-group">
              <label className="gs-label">📅 Date of Birth *</label>
              <input required type="date" name="dob" value={form.dob} onChange={handleChange} className="gs-input gs-date" />
            </div>
            <div className="gs-form-group">
              <label className="gs-label">📌 Current Location *</label>
              <input required name="location" value={form.location} onChange={handleChange} className="gs-input" placeholder="Your city" />
            </div>
          </div>

          <div className="gs-carat-selector">
            <label className="gs-label">⚖️ Select Carat Size *</label>
            <div className="gs-carat-grid">
              {CARATS.map(c => (
                <button
                  key={c}
                  type="button"
                  className={`gs-carat-btn ${carat === c ? "active" : ""}`}
                  onClick={() => setCarat(c)}
                >
                  {c} Ct
                </button>
              ))}
            </div>
          </div>

          <div className="gs-price-calc">
            <div className="gs-calc-row">
              <span>{gemstone.name} Price</span>
              <span>₹{gemstone.pricePerCarat} / Ct</span>
            </div>
            <div className="gs-calc-row">
              <span>Weight</span>
              <span>{carat} Carats</span>
            </div>
            <div className="gs-total-row">
              <span>Total Price</span>
              <span className="gs-gold">₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <div className="gs-promo-modal-box">
            <div className="gs-promo-modal-header">
              <span className="gs-promo-gift">🎁</span>
              <span><strong>FREE:</strong> Gemstone Wearing Guide PDF Included</span>
            </div>
            <p className="gs-promo-modal-text">Includes Mantras, Pooja Method, and Best Time to wear.</p>
          </div>

          <div className="gs-guidance-box">
            <p>Need astrology guidance before choosing?</p>
            <div className="gs-modal-btns">
              <a href="https://wa.me/919444559071?text=I%20need%20astrology%20guidance%20for%20choosing%20a%20gemstone." target="_blank" className="gs-btn-outline gs-btn-full">Yes, Need Consultation</a>
              <button type="submit" className="gs-btn-primary gs-btn-full">Continue Purchase</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
