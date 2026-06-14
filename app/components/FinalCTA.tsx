import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b3c] via-primary to-primary-light z-0"></div>
      
      {/* Decorative Overlays */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/noise.png')] mix-blend-overlay z-0 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
          Ready to Get Guidance for Your Life Journey?
        </h2>
        
        {/* Separator */}
        <div className="w-20 h-1.5 bg-gradient-to-r from-[#93c5fd] to-white mx-auto rounded-full mb-8 opacity-90 shadow-[0_0_15px_rgba(147,197,253,0.5)]"></div>

        {/* Text */}
        <p className="text-lg md:text-2xl text-blue-50 font-medium leading-relaxed mb-12 max-w-2xl mx-auto drop-shadow-sm font-serif">
          Discover insights and solutions through authentic Vedic astrology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/services/online-consultation">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary-dark font-extrabold text-base md:text-lg rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-3 border border-white">
              <span>Book Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          
          <Link href="/contact">
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-extrabold text-base md:text-lg rounded-xl shadow-inner border-2 border-white/30 hover:border-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
              <PhoneCall className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
