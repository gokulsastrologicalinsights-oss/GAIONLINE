"use client";

import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Basic Consultation",
    price: "501",
    popular: false,
    features: [
      "Quick Guidance",
      "Phone Consultation",
      "Suitable for General Queries",
    ],
    buttonText: "Book Basic",
    borderColor: "border-slate-200",
    shadowColor: "shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)]",
    btnStyle: "border-2 border-slate-200 hover:border-primary/40 hover:bg-slate-50 text-text-main",
  },
  {
    name: "Detailed Consultation",
    price: "1001",
    popular: true,
    features: [
      "Marriage Guidance",
      "Career & Job Prospects",
      "Finance & Wealth Analysis",
      "Family & Domestic Peace",
      "Personalized Remedies",
    ],
    buttonText: "Book Detailed",
    borderColor: "border-primary/80 ring-2 ring-primary/5",
    shadowColor: "shadow-[0_15px_35px_rgba(54,61,133,0.08)] scale-100 md:scale-105",
    btnStyle: "bg-primary hover:bg-primary-light text-white shadow-md shadow-primary/20",
  },
  {
    name: "Premium Consultation",
    price: "1501",
    popular: false,
    features: [
      "Complete Horoscope Analysis",
      "Video Consultation",
      "Detailed Guidance",
      "Remedies Included",
      "Follow-up Support",
    ],
    buttonText: "Book Premium",
    borderColor: "border-slate-200",
    shadowColor: "shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)]",
    btnStyle: "border-2 border-slate-200 hover:border-primary/40 hover:bg-slate-50 text-text-main",
  },
];

export default function PricingSection() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-white via-surface-light to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,rgba(54,61,133,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
            ✦ Pricing Plans ✦
          </span>
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            Online Consultation Fees
          </h2>
          <p className="text-text-sub text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Choose the level of guidance that fits your needs. 100% confidential and verified consultation.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {pricingTiers.map((tier, i) => (
            <div
              key={i}
              className={`bg-white border rounded-3xl p-8 flex flex-col relative transition-all duration-300 ${tier.borderColor} ${tier.shadowColor}`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <span className="bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full absolute -top-3.5 left-1/2 -translate-x-1/2 shadow-md border border-white/20 select-none">
                  ★ Most Popular
                </span>
              )}

              {/* Card Header */}
              <div className="text-center mb-8">
                <h3 className="text-text-main font-bold text-lg mb-4">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-primary text-2xl font-bold">₹</span>
                  <span className="text-primary text-5xl font-black tracking-tight">{tier.price}</span>
                  <span className="text-text-sub text-sm ml-1">only</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/5 text-primary flex items-center justify-center shrink-0 border border-primary/10 shadow-3xs mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-text-main text-sm sm:text-base leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note / Instruction */}
              <p className="text-slate-400 text-xxs text-center leading-relaxed mb-5 select-none">
                * Select this plan in the form below to book.
              </p>

              {/* CTA Action Button */}
              <a
                href="#form"
                className={`w-full py-3.5 text-center font-extrabold rounded-xl text-sm sm:text-base tracking-wide transition-all duration-300 block hover:scale-[1.02] active:scale-98 cursor-pointer ${tier.btnStyle}`}
              >
                {tier.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
