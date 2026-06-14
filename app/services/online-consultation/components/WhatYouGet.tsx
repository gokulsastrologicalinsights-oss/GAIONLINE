"use client";

const helpAreas = [
  {
    icon: "💍",
    title: "Marriage and Compatibility",
    desc: "Compatibility analysis (Jathaga Porutham), marriage timing, and relationship guidance.",
    color: "bg-rose-50 border-rose-100 text-rose-600",
  },
  {
    icon: "💼",
    title: "Career and Job Growth",
    desc: "Career path analysis, job transition/promotion timing, and growth guidance.",
    color: "bg-indigo-50 border-indigo-100 text-indigo-600",
  },
  {
    icon: "💰",
    title: "Finance and Wealth",
    desc: "Wealth creation insights, debt clearance options, and financial stability timing.",
    color: "bg-emerald-50 border-emerald-100 text-emerald-600",
  },
  {
    icon: "🏠",
    title: "Property and House Purchase",
    desc: "Best planetary periods for buying a house, land, or acquiring new vehicles.",
    color: "bg-amber-50 border-amber-100 text-amber-600",
  },
  {
    icon: "👶",
    title: "Child Birth and Family Life",
    desc: "Astrological analysis for child birth timing, family expansion, and peace.",
    color: "bg-sky-50 border-sky-100 text-sky-600",
  },
  {
    icon: "📈",
    title: "Business Growth",
    desc: "New business launch timing, partner compatibility, and niche selection.",
    color: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    icon: "🪔",
    title: "Doshas and Remedies",
    desc: "Identification of major chart doshas and simple, practical Vedic remedies.",
    color: "bg-orange-50 border-orange-100 text-orange-600",
  },
  {
    icon: "⭐",
    title: "General Life Guidance",
    desc: "Detailed overview of planetary periods (Dasha) and decision clarity.",
    color: "bg-violet-50 border-violet-100 text-violet-600",
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-surface-light via-white to-surface-light flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background design accents */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,rgba(54,61,133,0.04)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
            ✦ Guided Solutions ✦
          </span>
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            Areas We Can Help You With
          </h2>
          <p className="text-text-sub text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Astrological insights translated into practical, real-world solutions for your life questions.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpAreas.map((area, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(54,61,133,0.05)] hover:border-primary/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left group relative overflow-hidden"
            >
              {/* Subtle background card glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 border shadow-xs transition-transform duration-300 group-hover:scale-110 shrink-0 ${area.color}`}>
                {area.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-text-main font-bold text-base tracking-wide mb-2">
                {area.title}
              </h3>
              <p className="text-text-sub text-xs sm:text-sm leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
