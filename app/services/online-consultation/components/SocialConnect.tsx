"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "../../../constants";

const socialPlatforms: {
  name: string;
  handle: string;
  url: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  bgHoverClass: string;
  borderHoverClass: string;
  shadowHoverClass: string;
  gradientClass: string;
}[] = [
  {
    name: "Instagram",
    handle: SOCIAL_LINKS.instagram_handle || "@gokuls_astrological_insights_",
    url: SOCIAL_LINKS.instagram,
    description: "Watch daily reels, planetary transit updates, and quick Vedic remedies.",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    colorClass: "group-hover:text-pink-600",
    bgHoverClass: "group-hover:bg-pink-50",
    borderHoverClass: "group-hover:border-pink-200",
    shadowHoverClass: "hover:shadow-[0_20px_40px_rgba(219,39,119,0.08)]",
    gradientClass: "from-purple-600 via-pink-600 to-orange-500",
  },
  {
    name: "Facebook",
    handle: SOCIAL_LINKS.facebook_display || "Gokul's Astrological Insights",
    url: SOCIAL_LINKS.facebook,
    description: "Join our growing community page for daily astrological articles and discussions.",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    colorClass: "group-hover:text-blue-600",
    bgHoverClass: "group-hover:bg-blue-50",
    borderHoverClass: "group-hover:border-blue-200",
    shadowHoverClass: "hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)]",
    gradientClass: "from-blue-600 to-blue-800",
  },
  {
    name: "YouTube",
    handle: "@GokulsAstrologicalInsights",
    url: SOCIAL_LINKS.youtube,
    description: "Subscribe for detailed video analyses, horoscope guides, and remedy rituals.",
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
      </svg>
    ),
    colorClass: "group-hover:text-red-600",
    bgHoverClass: "group-hover:bg-red-50",
    borderHoverClass: "group-hover:border-red-200",
    shadowHoverClass: "hover:shadow-[0_20px_40px_rgba(220,38,38,0.08)]",
    gradientClass: "from-red-600 to-red-700",
  },
];

export default function SocialConnect() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-surface-light to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-slate-100">
      {/* Visual Background Accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
            ✦ Stay Connected ✦
          </span>
          <h2 className="text-primary text-3xl sm:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            Connect With Gokul&apos;s Astrological Insights
          </h2>
          <p className="text-text-sub text-base sm:text-lg leading-relaxed">
            Follow us for astrology updates, remedies and spiritual guidance.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${platform.shadowHoverClass} ${platform.borderHoverClass} relative overflow-hidden cursor-pointer`}
              >
                {/* Brand color strip on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="flex items-start justify-between mb-6">
                  {/* Platform Brand Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 transition-all duration-300 ${platform.bgHoverClass} ${platform.colorClass}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Arrow Indicator */}
                  <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-slate-100 group-hover:text-slate-800 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-slate-900 font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>
                <p className="text-xs font-bold text-primary/75 mb-3">
                  {platform.handle}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {platform.description}
                </p>

                {/* Bottom link label */}
                <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">
                  <span>Visit Profile</span>
                  <span className="text-slate-300 group-hover:text-primary transition-colors">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
