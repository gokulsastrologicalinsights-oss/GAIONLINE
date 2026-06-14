"use client";

import React from "react";
import { Check, Sparkles, MessageSquare } from "lucide-react";
import { SOCIAL_LINKS } from "../../../constants";

const WA_RECOMMENDATION_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I would like to get my personalized gemstone recommendation based on my birth details.")}`;
const WA_CHAT_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to chat about Astrological Gemstones.")}`;

const benefits = [
  "Personalized horoscope analysis",
  "Genuine gemstones",
  "Wearing guide included",
  "Secure delivery across India",
];

export default function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-surface-light via-white to-surface-light flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background visual texture */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,rgba(54,61,133,0.06)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Premium Card Layout */}
        <div className="bg-white border border-slate-200/70 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(54,61,133,0.05)] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden transition-all duration-500">
          
          {/* Subtle decorative radial lights */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-amber-500/5 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left/Main Column: Copy and Conversion Actions */}
            <div className="lg:col-span-7 flex flex-col text-left">
              {/* Subheading Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 w-fit select-none">
                <Sparkles className="w-3.5 h-3.5 fill-current text-amber-500" />
                <span>Natural • Certified • Astrologically Recommended</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-primary text-4xl sm:text-5xl font-serif font-extrabold mb-6 tracking-tight leading-tight">
                Find Your Perfect Gemstone
              </h1>

              {/* Benefits checklist */}
              <div className="flex flex-col gap-3.5 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 border border-green-100/80 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-text-main font-bold text-sm sm:text-base tracking-wide">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Caution Alert Banner */}
              <div className="mb-8 p-4 bg-amber-50 border border-amber-200/50 rounded-2xl text-left flex items-start gap-3">
                <span className="text-lg leading-none mt-0.5">⚠️</span>
                <p className="text-xs sm:text-sm text-amber-800 font-semibold leading-relaxed">
                  <strong>Important Notice:</strong> Gemstones channel planetary vibrations. 
                  Wearing a stone incompatible with your Jathagam (horoscope) can cause negative planetary effects. 
                  We analyze your chart for free before finalizing any orders.
                </p>
              </div>

              {/* Highly Visible Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a
                  href={WA_RECOMMENDATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-8 py-4 bg-primary hover:bg-primary-light text-white font-extrabold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all duration-300 text-center text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>🔮</span> Get Expert Recommendation
                </a>

                <a
                  href={WA_CHAT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-8 py-4 bg-white hover:bg-slate-50 text-[#25D366] font-extrabold rounded-xl border-2 border-slate-200 shadow-xs hover:border-[#25D366]/40 hover:scale-[1.02] active:scale-98 transition-all duration-300 text-center text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-current shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Premium Graphic Orbs */}
            <div className="lg:col-span-5 flex justify-center items-center py-6 lg:py-0 select-none">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-primary/10 rounded-full blur-3xl animate-pulse" />
                
                {/* Orbital lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full border-2 border-dashed border-primary/10 animate-[spin_50s_linear_infinite]" />
                  <div className="absolute w-40 h-40 rounded-full border border-amber-500/15 animate-[spin_25s_linear_infinite_reverse]" />
                </div>

                {/* Floating gemstone representations */}
                <div className="absolute top-[5%] left-[5%] w-24 h-24 rounded-full bg-gradient-to-br from-red-500 via-rose-600 to-rose-950 shadow-lg flex items-center justify-center animate-[float_5s_ease-in-out_infinite] border-2 border-white/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)] rounded-full" />
                  <span className="text-white font-serif font-black text-xxs tracking-widest uppercase drop-shadow-md">Ruby</span>
                </div>

                <div className="absolute bottom-[10%] right-[0%] w-22 h-22 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-950 shadow-lg flex items-center justify-center animate-[float_6s_ease-in-out_infinite_1.5s] border-2 border-white/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)] rounded-full" />
                  <span className="text-white font-serif font-black text-xxs tracking-widest uppercase drop-shadow-md">Emerald</span>
                </div>

                <div className="absolute top-[45%] right-[10%] w-18 h-18 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-800 shadow-lg flex items-center justify-center animate-[float_4.5s_ease-in-out_infinite_3s] border-2 border-white/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)] rounded-full" />
                  <span className="text-white font-serif font-black text-xxs tracking-widest uppercase text-center leading-tight drop-shadow-md">Yellow<br />Sapph.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
