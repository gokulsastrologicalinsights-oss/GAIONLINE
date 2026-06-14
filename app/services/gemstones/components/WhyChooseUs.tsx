"use client";

import React from "react";
import { Gem, Award, Sparkles, UserCheck, BookOpen, Truck } from "lucide-react";

const features = [
  {
    icon: <Gem className="w-5 h-5 text-primary" />,
    title: "Natural Gemstones",
    desc: "We supply only 100% genuine, unheated, and untreated gemstones to ensure maximum astrological potency.",
  },
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    title: "Certified Quality",
    desc: "Every gemstone is tested and certified by government-approved gemology laboratories, guaranteeing authenticity.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    title: "Astrologically Selected",
    desc: "Stones are recommended specifically based on your horoscope chart (Jathagam) to strengthen beneficial houses and planets.",
  },
  {
    icon: <UserCheck className="w-5 h-5 text-primary" />,
    title: "Personalized Guidance",
    desc: "Get direct consultation from expert Astrologer Gokul Murugan to receive custom compatibility checks and remedies.",
  },
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    title: "Wearing Instructions Included",
    desc: "Each stone comes with a detailed activation guide outlining auspicious times, purification steps, and planetary mantras.",
  },
  {
    icon: <Truck className="w-5 h-5 text-primary" />,
    title: "Nationwide Delivery",
    desc: "Insured, trackable, and safe shipping directly to your doorstep anywhere across India.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 bg-surface-light flex justify-center px-4 sm:px-6 lg:px-8 border-t border-b border-border-subtle">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest block mb-3">
            ✦ Authentic Quality ✦
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary font-bold mb-4">
            Why Choose Us?
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
          <p className="text-text-sub text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Buying a gemstone is a spiritual investment. We ensure you receive genuine quality alongside correct astrological guidance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-border-subtle hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(54,61,133,0.06)] hover:border-primary/10 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer"
            >
              {/* Icon container */}
              <div className="flex items-center justify-between w-full mb-5">
                <div className="w-11 h-11 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center shadow-xxs">
                  {f.icon}
                </div>
                <span className="text-green-500 text-xs font-extrabold uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded border border-green-100 select-none">
                  Verified
                </span>
              </div>

              {/* Text */}
              <h3 className="text-primary font-serif font-extrabold text-lg mb-2.5 group-hover:text-primary-light transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-text-sub text-xs sm:text-sm leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
