"use client";

import React from "react";
import { Sparkles, MessageCircle, Check } from "lucide-react";
import { SOCIAL_LINKS } from "../../../constants";

const WA_RECOMMENDATION_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I would like to get my personalized gemstone recommendation based on my birth details.")}`;
const WA_CHAT_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to chat about Astrological Gemstones.")}`;

const trustBadges = [
  "Natural Stones",
  "Certified Quality",
  "Expert Guidance",
  "Wearing Instructions Included",
];

export default function FinalCTA() {
  return (
    <section className="w-full py-16 bg-white flex justify-center px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-5xl mx-auto w-full">
        {/* Luxury CTA Container */}
        <div className="relative bg-gradient-to-br from-primary to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-center flex flex-col items-center justify-center">
          {/* Radial light glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Premium Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6 relative z-10">
            <Sparkles className="w-3.5 h-3.5 fill-current text-amber-400" />
            <span>Consult Before Wearing</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-extrabold mb-5 leading-tight max-w-3xl relative z-10">
            Not Sure Which Gemstone <br className="hidden sm:inline" />
            Is Right For You?
          </h2>

          {/* Subheading */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl relative z-10 font-medium">
            Get a personalized recommendation based on your horoscope.
          </p>

          {/* Highly Visible Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md relative z-10 mb-8">
            <a
              href={WA_RECOMMENDATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-4 bg-primary hover:bg-primary-light text-white font-extrabold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-98 transition-all duration-300 text-center text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer border border-white/15"
            >
              <span>🔮</span> Get My Gemstone Recommendation
            </a>

            <a
              href={WA_CHAT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold rounded-xl shadow-lg shadow-green-500/20 hover:scale-[1.02] active:scale-98 transition-all duration-300 text-center text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust Badges List below buttons */}
          <div className="border-t border-white/10 pt-8 w-full relative z-10">
            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  <div className="w-4.5 h-4.5 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-400/20">
                    <Check className="w-3 h-3 stroke-[3.5]" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm tracking-wide">
                    {badge}
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
