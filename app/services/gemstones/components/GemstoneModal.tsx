"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, MapPin, User, MessageCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { SOCIAL_LINKS } from "../../../constants";
import { Gemstone } from "./GemstoneGrid";

interface GemstoneModalProps {
  gemstone: Gemstone | null;
  onClose: () => void;
}

const CARATS = [3, 4, 5, 6, 7, 8, 9, 10];

export default function GemstoneModal({ gemstone, onClose }: GemstoneModalProps) {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    dob: "",
    location: "",
  });
  const [carat, setCarat] = useState(5);
  const totalPrice = gemstone ? gemstone.pricePerCarat * carat : 0;

  // Handle body scroll locking
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!gemstone) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Gokul's Astrological Insights, I am interested in checking the compatibility of a gemstone for my horoscope.

💎 Gemstone: ${gemstone.name}
🪐 Planet: ${gemstone.planet}
⚖️ Weight: ${carat} Carat
💰 Est. Price: ₹${totalPrice.toLocaleString()}

👤 Name: ${form.name}
📅 Date of Birth: ${form.dob}
📱 WhatsApp: ${form.whatsapp}
📍 Location: ${form.location}

Please verify if this gemstone is suitable for my birth chart before purchase.`;

    window.open(`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div 
      className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-slate-200/80 shadow-2xl rounded-3xl w-full max-w-xl relative p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left animate-scaleIn"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute top-5 right-5 text-text-sub hover:text-primary transition-colors cursor-pointer focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-2xl font-serif font-extrabold text-primary mb-1">
            Configure Your {gemstone.name.split(" ")[0]}
          </h2>
          <p className="text-text-sub text-sm font-semibold">
            Planetary alignment details and suitability verification
          </p>
        </div>

        {/* Critical Compatibility Notice */}
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200/60 rounded-2xl flex gap-3 text-left">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-800 font-medium leading-relaxed">
            <strong className="text-amber-900 block mb-0.5">Birth Chart Suitability Check Required</strong>
            This gemstone represents the planet <strong>{gemstone.planet}</strong>. 
            Before dispatching, Astrologer Gokul Murugan will personally check your horoscope for free to ensure this stone brings positive results.
          </div>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Grid Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary" /> Full Name *
              </label>
              <input 
                required 
                type="text"
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-text-main text-sm font-medium focus:border-primary focus:bg-white outline-none transition-all" 
                placeholder="Your name" 
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-primary" /> WhatsApp Number *
              </label>
              <input 
                required 
                type="tel"
                name="whatsapp" 
                value={form.whatsapp} 
                onChange={handleChange} 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-text-main text-sm font-medium focus:border-primary focus:bg-white outline-none transition-all" 
                placeholder="WhatsApp number" 
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-primary" /> Date of Birth *
              </label>
              <input 
                required 
                type="date" 
                name="dob" 
                value={form.dob} 
                onChange={handleChange} 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-text-main text-sm font-medium focus:border-primary focus:bg-white outline-none transition-all color-scheme-light" 
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" /> Current Location *
              </label>
              <input 
                required 
                type="text"
                name="location" 
                value={form.location} 
                onChange={handleChange} 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-text-main text-sm font-medium focus:border-primary focus:bg-white outline-none transition-all" 
                placeholder="City/Town name" 
              />
            </div>
          </div>

          {/* Carat Selector */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold text-text-main uppercase tracking-wider">
              ⚖️ Select Carat Weight (Recommended size is 5 Ct+)
            </span>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {CARATS.map(c => (
                <button
                  key={c}
                  type="button"
                  className={`py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 cursor-pointer ${
                    carat === c 
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/20 scale-[1.05]" 
                      : "bg-slate-50 border-slate-200 text-text-main hover:bg-slate-100"
                  }`}
                  onClick={() => setCarat(c)}
                >
                  {c} Ct
                </button>
              ))}
            </div>
          </div>

          {/* Price Calculation Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex flex-col gap-2 font-medium">
            <div className="flex justify-between text-xs sm:text-sm text-text-sub">
              <span>{gemstone.name.split(" ")[0]} Rate</span>
              <span>₹{gemstone.pricePerCarat} / Carat</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-text-sub border-b border-slate-200/80 pb-2">
              <span>Selected Weight</span>
              <span>{carat} Carats</span>
            </div>
            <div className="flex justify-between items-center text-base sm:text-lg font-extrabold text-primary pt-1">
              <span>Estimated Value</span>
              <span className="text-amber-600 font-serif">₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          {/* Free Bonuses Indicator */}
          <div className="p-3.5 bg-green-50 border border-green-100 rounded-2xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <div className="text-[11px] sm:text-xs text-green-800 font-bold">
              <span>Included FREE:</span> Astrological Wearing & Activation Guide PDF + Astro Horoscope Check
            </div>
          </div>

          {/* Primary Action Button */}
          <button 
            type="submit" 
            className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-extrabold tracking-wide transition-all duration-300 shadow-lg shadow-green-500/25 hover:scale-[1.01] active:scale-98 text-center text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Verify Compatibility via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
