"use client";

import React from "react";
import { ClipboardList, Search, Gem, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ClipboardList className="w-6 h-6 text-primary" />,
    title: "Share Your Birth Details",
    desc: "Provide your name, date, time, and location of birth. This allows us to map your precise planetary alignments.",
  },
  {
    number: "02",
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "Horoscope Analysis by Expert",
    desc: "Astrologer Gokul Murugan personally evaluates your Jathagam (birth chart) to find beneficial planetary influences.",
  },
  {
    number: "03",
    icon: <Gem className="w-6 h-6 text-primary" />,
    title: "Receive Your Recommendation",
    desc: "Get suggested the exact gemstone, carat weight, wearing finger, and energizing mantras suited for you.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-16 bg-slate-50/50 border-b border-slate-100 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest block mb-3">
            ✦ Simple 3-Step Process ✦
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-primary font-bold mb-4">
            How It Works
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
          <p className="text-text-sub text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            We follow a scientific, chart-driven approach to ensure your gemstone remedy matches your birth details perfectly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div key={index} className="relative flex flex-col items-center md:items-start text-center md:text-left bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] rounded-2xl p-6 sm:p-8 hover:shadow-[0_15px_30px_rgba(54,61,133,0.03)] hover:-translate-y-0.5 transition-all duration-300">
                {/* Number indicator */}
                <span className="absolute top-4 right-6 text-slate-100 font-sans font-black text-4xl select-none">
                  {step.number}
                </span>

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 border border-primary/10 shadow-xxs">
                  {step.icon}
                </div>

                {/* Heading */}
                <h3 className="text-primary font-serif font-extrabold text-lg sm:text-xl mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-sub text-xs sm:text-sm font-medium leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow connector for Desktop */}
                {!isLast && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 text-slate-300">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
