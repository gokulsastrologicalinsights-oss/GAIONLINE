"use client";

import { Check } from "lucide-react";

const deliverables = [
  {
    title: "Personalized Horoscope Analysis",
    desc: "Complete calculation of your Rasi, Navamsa, and planetary placements based on birth details.",
  },
  {
    title: "Answers to Your Questions",
    desc: "Direct, practical, and clear answers to the specific queries you submit in your booking form.",
  },
  {
    title: "Planetary Period Insights",
    desc: "Analysis of your current Mahadasha, Antardasha, and transit alignments affecting your timeline.",
  },
  {
    title: "Practical Remedies",
    desc: "Simple, easy-to-follow remedies (pariharams), mantras, and gemstones to alleviate chart challenges.",
  },
  {
    title: "Future Guidance",
    desc: "A personalized roadmap of positive opportunities and caution periods for the coming years.",
  },
  {
    title: "Confidential Consultation",
    desc: "A completely private discussion. Your personal birth data and concerns are 100% secure.",
  },
];

export default function WhatYouReceive() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-white to-surface-light flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-slate-100">
      {/* Background radial accent */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,rgba(54,61,133,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
            ✦ Your Deliverables ✦
          </span>
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            What You Will Receive
          </h2>
          <p className="text-text-sub text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Every consultation package includes a comprehensive, verified set of astrological outcomes.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((d, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_30px_rgba(54,61,133,0.04)] hover:border-primary/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex gap-4 text-left group"
            >
              {/* Premium Circular Green Check Badge */}
              <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 shadow-3xs group-hover:scale-110 transition-transform duration-300 mt-0.5">
                <Check className="w-4.5 h-4.5 text-emerald-600 stroke-[3.5]" />
              </div>

              {/* Text content */}
              <div className="flex flex-col">
                <h3 className="text-text-main font-bold text-base tracking-wide mb-1.5">
                  {d.title}
                </h3>
                <p className="text-text-sub text-xs sm:text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
