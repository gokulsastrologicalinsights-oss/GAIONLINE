"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Which gemstone is suitable for me?",
    a: "Gemstones should be selected based on horoscope analysis and individual requirements.",
  },
  {
    q: "Are the gemstones natural?",
    a: "Yes. We provide natural and premium-quality gemstones.",
  },
  {
    q: "Will I receive wearing instructions?",
    a: "Yes. Guidance for wearing the gemstone is provided.",
  },
  {
    q: "Can I consult before purchasing?",
    a: "Yes. Personalized consultation is available before purchase.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-surface-light flex justify-center px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
      <div className="max-w-3xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest block mb-3">
            ✦ FAQs ✦
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.01)]"
              >
                <button
                  className="w-full flex justify-between items-center text-left py-5 px-6 font-serif font-extrabold text-sm sm:text-base text-primary hover:text-primary-light focus:outline-none transition-colors cursor-pointer"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4.5 h-4.5 text-primary shrink-0" />
                    {f.q}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-text-sub text-xs sm:text-sm leading-relaxed font-medium border-t border-slate-100/60 pt-4 animate-fadeIn">
                    {f.a}
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
