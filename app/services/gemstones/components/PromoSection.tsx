"use client";

import React from "react";
import { CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "../../../constants";

const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I'm interested in buying a gemstone and receiving the free astrology wearing guide.")}`;

const guidePoints = [
  "FREE Detailed Gemstone Guide PDF",
  "Planetary Beej Mantras & Chanting Rules",
  "Pooja & Energizing Steps Before Wearing",
  "Best Auspicious Day & Time To Wear",
  "Finger & Metal Recommendations",
  "Gemstone Purification & Charging Methods",
];

export default function PromoSection() {
  return (
    <section className="w-full py-16 bg-slate-50 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Decorative radial lighting */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-500/10 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Badge */}
          <div className="absolute top-6 right-6 bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-md tracking-wider shadow-sm select-none">
            🎁 FREE WITH PURCHASE
          </div>

          {/* Left Column: Details */}
          <div className="flex-1 text-left relative z-10">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-3">
              ✦ Exclusive Astrological Bonus ✦
            </span>
            <h2 className="text-white text-3xl sm:text-4xl font-serif font-extrabold mb-4 leading-tight">
              Complete Gemstone Wearing <br />
              <span className="text-amber-400">Guide & Activation PDF</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              {"Each gemstone bought from Gokul Murugan includes a personalized activation and ritual guide. Learn the exact Vedic methods to unlock the stone's positive energies."}
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {guidePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-xs sm:text-sm font-semibold">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote block */}
            <div className="border-l-2 border-amber-400 pl-4 py-1.5 mb-8">
              <p className="text-amber-400 text-xs sm:text-sm font-bold italic leading-relaxed">
                {'"We don\'t just sell stones. We provide complete spiritual and astrological guidance to help you experience maximum positive results."'}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#collection"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/10 transition-all duration-300 text-xs sm:text-sm tracking-wide flex items-center gap-1.5 cursor-pointer"
              >
                <span>Order Certified Stone</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-extrabold rounded-xl transition-all duration-300 text-xs sm:text-sm tracking-wide flex items-center gap-2 cursor-pointer"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D PDF Mockup */}
          <div className="w-56 sm:w-64 shrink-0 flex justify-center items-center relative z-10">
            <div className="relative w-48 h-64 bg-slate-800 rounded-lg shadow-2xl border-l-[12px] border-slate-950 flex flex-col justify-between p-6 transition-all duration-300 hover:scale-[1.03] select-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-lg pointer-events-none" />
              
              <div className="flex items-center gap-2">
                <FileText className="w-7 h-7 text-amber-400" />
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest leading-none">
                  Vedic<br />Rituals
                </span>
              </div>

              <div className="my-6">
                <h3 className="text-white font-serif font-black text-lg leading-tight">
                  Gemstone<br />Activation<br />
                  <span className="text-amber-400 text-sm font-sans font-bold">Wearing Guide</span>
                </h3>
              </div>

              <div className="border-t border-slate-700 pt-3">
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">
                  Gokul Murugan
                </span>
                <span className="text-[8px] text-slate-500 font-semibold uppercase tracking-widest block mt-0.5">
                  Astrological Insights
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
