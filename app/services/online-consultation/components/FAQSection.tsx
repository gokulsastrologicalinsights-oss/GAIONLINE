"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is online consultation effective?",
    a: "Yes. With accurate birth details, the horoscope analysis, predictions, and remedies are identical to in-person sessions and highly precise.",
  },
  {
    q: "Which languages are available?",
    a: "We consult in Tamil and English. You can comfortably choose your preferred language during your audio or video session.",
  },
  {
    q: "Can I consult from abroad?",
    a: "Yes. We consult globally (including USA, UK, Canada, UAE, Singapore) via WhatsApp audio or video calls.",
  },
  {
    q: "Will remedies be provided?",
    a: "Yes. Practical remedies, mantras, and gemstone suggestions are tailored strictly to your birth chart.",
  },
  {
    q: "How long is the consultation?",
    a: "Sessions last 30 to 45 minutes, providing ample time to discuss your questions, chart, and remedies.",
  },
  {
    q: "Is my information confidential?",
    a: "Yes. Your personal details, birth chart details, and all discussions are kept 100% private and confidential.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-white via-surface-light to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-slate-100">
      {/* Background design accents */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_bottom_right,rgba(54,61,133,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
            ✦ Common Queries ✦
          </span>
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-text-sub text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Find quick answers to common questions about our online astrology consultation process.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.005)] hover:border-primary/20 rounded-2xl p-4 sm:p-5 transition-all duration-300 select-none"
              >
                {/* Question Trigger Button */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center text-left text-text-main font-bold text-sm sm:text-base cursor-pointer focus:outline-hidden"
                >
                  <span className="pr-4 leading-snug">{faq.q}</span>
                  {/* Plus icon rotates 45 deg to look like x/minus */}
                  <span
                    className={`text-primary text-xl font-medium shrink-0 transition-transform duration-300 w-6 h-6 flex items-center justify-center rounded-full bg-primary/5 border border-primary/10 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer container with smooth height animation */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3.5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-text-sub text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3.5 pr-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
