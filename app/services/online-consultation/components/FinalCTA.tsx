"use client";

import { Check, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-b from-white to-surface-light border-t border-slate-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Faint ambient glow inside section */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(54,61,133,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Subtle decorative tag */}
        <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
          ✦ Quality Astrology Guidance ✦
        </span>

        {/* Heading */}
        <h2 className="text-primary text-3xl sm:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
          Limited Daily Appointments
        </h2>

        {/* Description */}
        <p className="text-text-sub text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
          To ensure personalized attention and quality guidance, only a limited number of consultations are accepted each day.
        </p>

        {/* Benefit Checklist */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 text-left justify-center w-full max-w-lg mx-auto border-t border-b border-slate-200/50 py-5 select-none">
          {[
            "Advance Booking Recommended",
            "Personalized Attention",
            "Flexible Appointment Scheduling",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 shadow-3xs">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="text-text-main font-bold text-xs sm:text-sm tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Schedule Button */}
        <a
          href="#form"
          className="px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-extrabold rounded-xl shadow-md shadow-primary/20 hover:shadow-lg hover:scale-[1.01] active:scale-99 transition-all duration-300 text-center text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
        >
          <Calendar className="w-4.5 h-4.5 stroke-[2.5]" />
          <span>Schedule Your Consultation</span>
        </a>
      </div>
    </section>
  );
}
