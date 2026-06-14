"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../constants";

const HERO_IMAGES = [
  "/images/Gokul-image-vertical.jpeg",
  "/images/Gokul-Image-2.jpeg",
  "/images/Gokul-image-1.jpeg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const trustHighlights = [
    "Accurate Horoscope Analysis",
    "Marriage Matching",
    "Career & Business Guidance",
    "Property & Vehicle Predictions",
    "Pariharam Solutions",
    "Online Consultation Available",
  ];

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-surface-light via-white to-surface-light border-b border-slate-100 py-12 lg:py-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,rgba(54,61,133,0.12)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side: Professional Image Slider */}
        <div className="w-full lg:w-[48%] flex justify-center items-center max-w-md lg:max-w-[460px] xl:max-w-[500px] flex-shrink-0">
          <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] border-[6px] border-white bg-slate-50 ring-1 ring-slate-100 group">
            {HERO_IMAGES.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Astrologer Gokul Murugan - Slide ${index + 1}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  priority={index === 0}
                  sizes="(max-w-768px) 100vw, 45vw"
                />
              </div>
            ))}
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-20 pointer-events-none"></div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-black/30 backdrop-blur-xs px-2.5 py-1.5 rounded-full">
              {HERO_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Copywriting & Conversions */}
        <div className="w-full lg:w-[48%] flex flex-col justify-center text-center lg:text-left flex-grow">
          {/* Small Heading */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 mx-auto lg:mx-0 w-fit">
            <Sparkles className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>Gokul&apos;s Astrological Insights</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            Accurate Tamil Astrology for Marriage, Career &amp; Life Guidance
          </h1>

          {/* Subheading */}
          <h2 className="text-text-sub text-base sm:text-lg lg:text-xl font-medium mb-8 leading-relaxed max-w-2xl">
            Personalized Horoscope Analysis &bull; Marriage Matching &bull; Career Guidance &bull; Pariharam Solutions
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
            {/* Book Consultation */}
            <a
              href="/services/online-consultation"
              className="flex-1 sm:flex-none px-8 py-4 bg-primary text-white font-extrabold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-light hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all duration-300 text-center text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>🔮</span> Book Consultation
            </a>

            {/* WhatsApp Now */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-8 py-4 bg-[#25D366] text-white font-extrabold rounded-xl shadow-lg shadow-green-500/20 hover:bg-[#20ba5a] hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all duration-300 text-center text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Now</span>
            </a>

            {/* Call Now */}
            <a
              href={`tel:${CONTACT_INFO.phone_tel}`}
              className="flex-1 sm:flex-none px-8 py-4 border-2 border-primary/20 text-primary hover:text-white font-extrabold rounded-xl hover:bg-primary hover:border-primary active:scale-98 transition-all duration-300 text-center text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>📞</span> Call Now
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="border-t border-slate-100 pt-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3.5 gap-x-6">
              {trustHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2.5 justify-center lg:justify-start">
                  <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 border border-green-100">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-text-main font-bold text-sm tracking-wide">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
