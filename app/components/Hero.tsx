import Image from "next/image";
import { SOCIAL_LINKS, CONTACT_INFO } from "../constants";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-between overflow-hidden bg-surface-light border-b border-border-subtle">
      {/* Background radial gradient overlay */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-surface-light to-border-subtle pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-16 lg:pb-16 flex flex-col lg:flex-row items-center justify-between w-full flex-grow gap-12">
        
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left mb-6 lg:mb-0 flex flex-col justify-center flex-1">
          <h1 className="text-primary text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            Gokul&apos;s Astrological Insights
          </h1>
          <h2 className="text-text-main text-xl sm:text-2xl font-medium mb-6 font-serif leading-relaxed text-slate-800">
            Trusted Astrology Guidance for Life, Career &amp; Marriage
          </h2>
          
          <p className="text-text-sub text-base sm:text-lg mb-8 leading-relaxed font-semibold tracking-wide">
            Accurate Predictions • Jathagam Analysis • Marriage Matching • Vastu Consultation
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs sm:text-sm font-bold border border-primary/10 shadow-sm hover:bg-primary/10 transition-colors duration-300">
              <span className="text-[#fbbf24] text-sm">★</span> Accurate Predictions
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs sm:text-sm font-bold border border-primary/10 shadow-sm hover:bg-primary/10 transition-colors duration-300">
              <span className="text-[#fbbf24] text-sm">★</span> Personal Guidance
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs sm:text-sm font-bold border border-primary/10 shadow-sm hover:bg-primary/10 transition-colors duration-300">
              <span className="text-[#fbbf24] text-sm">★</span> Trusted Service
            </span>
          </div>

          {/* Call details */}
          <div className="mb-8">
            <a
              href={`tel:${CONTACT_INFO.phone_tel}`}
              className="inline-flex items-center gap-2.5 text-primary text-xl sm:text-2xl font-extrabold hover:text-primary-light transition-colors duration-300"
            >
              <span className="text-2xl">📞</span> Call / WhatsApp: <span className="underline decoration-dotted decoration-primary/40">{CONTACT_INFO.phone}</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/services/online-consultation"
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-light hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-center text-base tracking-wide"
            >
              Book Consultation
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 active:bg-primary/10 transition-all duration-300 transform hover:-translate-y-0.5 text-center text-base tracking-wide"
            >
              WhatsApp Now
            </a>
          </div>
        </div>

        {/* Right Content - Image with Badge */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2 flex-1">
          {/* Main Arched Image */}
          <div className="relative w-72 h-[420px] md:w-80 md:h-[480px] lg:w-[380px] lg:h-[500px] aspect-[3/4] rounded-t-[200px] rounded-b-[200px] border-[8px] border-white shadow-2xl overflow-hidden bg-slate-100 z-10 flex items-center justify-center ring-1 ring-black/5">
            <Image 
              src="/images/Gokul-image-vertical.jpeg"
              alt="Astrologer Gokul Murugan" 
              fill
              className="object-cover"
              priority
              sizes="(max-w-768px) 320px, 380px"
            />
          </div>
          
          {/* Floating circular badge */}
          <div className="absolute bottom-6 right-2 md:right-8 lg:right-4 z-20 bg-white/95 backdrop-blur-sm rounded-full w-28 h-28 sm:w-32 sm:h-32 flex flex-col justify-center items-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-primary/10 p-3 transform hover:scale-105 transition-transform duration-300">
            <span className="text-[#fbbf24] text-xl sm:text-2xl mb-0.5">🏆</span>
            <span className="text-primary font-extrabold text-xl sm:text-2xl leading-none">1000+</span>
            <span className="text-text-sub font-bold text-[8px] sm:text-[9px] text-center uppercase tracking-wider mt-1.5 leading-tight">Happy Clients</span>
          </div>
        </div>

      </div>

      {/* Bottom Marquee */}
      <div className="relative z-20 w-full bg-primary text-white py-3.5 overflow-hidden border-t-4 border-primary-light">
        <div className="marquee-content animate-marquee">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex whitespace-nowrap items-center min-w-full justify-around font-medium md:text-lg">
              <span className="mx-4 text-white/70 text-xl">✽</span>
              <span className="mx-4 tracking-wide">Expert in Astrological Solutions and Life Guidance</span>
              <span className="mx-4 text-white/70 text-xl">✽</span>
              <span className="mx-4 tracking-wide">Decode your problems, revive your life</span>
              <span className="mx-4 text-white/70 text-xl">✽</span>
              <span className="mx-4 tracking-wide">Gokul&apos;s Astrological Insights — Accurate Predictions &amp; Trusted Guidance</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
