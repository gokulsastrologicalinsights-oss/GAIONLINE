"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    location: "Chennai",
    initial: "P",
    text: "Very clear explanation and practical remedies.",
  },
  {
    name: "Rajan M.",
    location: "Dubai",
    initial: "R",
    text: "Excellent guidance regarding marriage and career.",
  },
  {
    name: "Divya K.",
    location: "Bangalore",
    initial: "D",
    text: "Professional and confidential consultation experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-surface-light via-white to-surface-light flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-slate-100">
      {/* Background visual accent */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,rgba(54,61,133,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
            ✦ Client Stories ✦
          </span>
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-text-sub text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Real feedback from individuals who received life-changing predictions and pariharams.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(54,61,133,0.05)] hover:border-primary/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-left group"
            >
              {/* Star Rating & Quote */}
              <div>
                <div className="flex gap-0.5 text-amber-500 mb-4 select-none">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-text-main text-base sm:text-lg italic leading-relaxed mb-6 font-medium">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Info Row */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4 mt-auto">
                {/* Initial Avatar */}
                <div className="w-10 h-10 rounded-full bg-primary/5 text-primary border border-primary/10 flex items-center justify-center font-serif font-bold text-sm select-none">
                  {t.initial}
                </div>
                
                {/* Name & Location */}
                <div className="flex flex-col">
                  <span className="text-text-main font-bold text-sm">
                    {t.name}
                  </span>
                  <span className="text-text-sub text-[11px] flex items-center gap-0.5 mt-0.5">
                    📍 {t.location}
                  </span>
                </div>

                {/* Confirm Indicator (WhatsApp confirmed) */}
                <div className="ml-auto text-emerald-500/70 group-hover:text-emerald-500 group-hover:scale-105 transition-all duration-300" title="Verified WhatsApp Consultation">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.48 2 2 6.48 2 12c0 1.78.47 3.5 1.35 5L2 22l5.12-1.33c1.45.82 3.1 1.33 4.88 1.33 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.65 0-3.2-.44-4.54-1.21l-.32-.19-3 1 .98-2.93-.21-.34A7.94 7.94 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
