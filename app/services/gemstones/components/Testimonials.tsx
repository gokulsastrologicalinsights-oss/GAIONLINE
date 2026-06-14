"use client";

import React from "react";
import { Star, MapPin, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ramesh",
    location: "Chennai",
    gem: "Yellow Sapphire",
    text: "Received genuine gemstone and proper guidance.",
    initial: "R",
  },
  {
    name: "Sowmya",
    location: "Chennai",
    gem: "Emerald",
    text: "Very beautiful and natural stone. The horoscope analysis was extremely accurate.",
    initial: "S",
  },
  {
    name: "Karthik",
    location: "Madurai",
    gem: "Blue Sapphire",
    text: "The stone is of excellent quality. My career delays got resolved within months.",
    initial: "K",
  },
  {
    name: "Deepak",
    location: "Ahmedabad",
    gem: "Hessonite",
    text: "Certified natural gemstone delivered securely with clear wearing instructions.",
    initial: "D",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-white flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest block mb-3">
            ✦ Client Stories ✦
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(54,61,133,0.06)] hover:-translate-y-1 rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between h-full transition-all duration-300 group cursor-pointer"
            >
              <Quote className="absolute top-5 right-6 w-8 h-8 text-slate-100/80 group-hover:text-primary/5 transition-colors pointer-events-none" />

              <div>
                {/* 5 Star Rating */}
                <div className="flex text-amber-500 mb-4 gap-0.5 select-none">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current stroke-none" />
                  ))}
                </div>

                {/* Short Review Text */}
                <p className="text-text-main text-sm sm:text-base font-serif leading-relaxed italic mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              {/* Customer Avatar & Meta Details */}
              <div className="flex items-center gap-3.5 border-t border-slate-100 pt-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors text-primary font-bold flex items-center justify-center text-sm shrink-0 select-none">
                  {r.initial}
                </div>
                <div className="text-left">
                  <h4 className="text-primary font-serif font-extrabold text-sm sm:text-base leading-tight">
                    {r.name}
                  </h4>
                  <div className="flex flex-col text-[10px] text-text-sub font-bold uppercase tracking-wider mt-0.5">
                    <span className="flex items-center gap-0.5 font-sans tracking-normal font-extrabold text-amber-600">
                      {r.gem}
                    </span>
                    <span className="flex items-center gap-0.5 mt-0.5 font-medium lowercase first-letter:uppercase tracking-normal">
                      <MapPin className="w-3 h-3 text-primary-light" /> {r.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
