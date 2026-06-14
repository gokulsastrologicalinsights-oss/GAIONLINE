"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, ChevronDown, ChevronUp, UserCheck } from "lucide-react";
import { SOCIAL_LINKS } from "../../../constants";

export interface Gemstone {
  id: string;
  name: string;
  planet: string;
  pricePerCarat: number;
  benefits: string[];
  whoCanWear: string;
  raasi: string[];
  lagna: string[];
  color: string;
  image?: string;
}

const gemstones: Gemstone[] = [
  {
    id: "ruby",
    name: "Ruby (Manickam)",
    planet: "Sun",
    pricePerCarat: 2199,
    benefits: ["Confidence", "Leadership", "Authority", "Fame & Respect"],
    whoCanWear: "Recommended for individuals with a weak or afflicted Sun in their birth chart, politicians, administrators, business leaders, and those seeking recognition and confidence.",
    raasi: ["Leo (Simha)", "Aries (Mesha)", "Sagittarius (Dhanusu)"],
    lagna: ["Leo Lagna", "Aries Lagna", "Scorpio Lagna", "Sagittarius Lagna"],
    color: "#e11d48",
  },
  {
    id: "pearl",
    name: "Pearl (Muthu)",
    planet: "Moon",
    pricePerCarat: 1799,
    benefits: ["Mental Peace", "Emotional Balance", "Better Focus", "Stress Relief"],
    whoCanWear: "Ideal for people experiencing severe emotional stress, anxiety, mood swings, or sleep issues. Helpful for strengthening the Moon's gentle energies.",
    raasi: ["Cancer (Kadagam)", "Pisces (Meenam)"],
    lagna: ["Cancer Lagna", "Pisces Lagna", "Scorpio Lagna"],
    color: "#cbd5e1",
  },
  {
    id: "red-coral",
    name: "Red Coral (Pavalam)",
    planet: "Mars",
    pricePerCarat: 2199,
    benefits: ["Courage & Vigor", "Debt Relief", "Property Growth", "Protection"],
    whoCanWear: "Excellent for athletes, entrepreneurs, real estate professionals, and individuals facing delays in marriage or needing courage to overcome obstacles.",
    raasi: ["Aries (Mesha)", "Scorpio (Viruchigam)"],
    lagna: ["Aries Lagna", "Scorpio Lagna", "Cancer Lagna", "Leo Lagna"],
    color: "#ef4444",
  },
  {
    id: "emerald",
    name: "Emerald (Maragatham)",
    planet: "Mercury",
    pricePerCarat: 2199,
    benefits: ["Intelligence", "Business Success", "Clear Speech", "Memory Power"],
    whoCanWear: "Highly recommended for students, speakers, writers, accountants, business owners, and software professionals seeking intellectual and financial growth.",
    raasi: ["Gemini (Mithuna)", "Virgo (Kanni)"],
    lagna: ["Gemini Lagna", "Virgo Lagna", "Taurus Lagna", "Libra Lagna"],
    color: "#10b981",
  },
  {
    id: "yellow-sapphire",
    name: "Yellow Sapphire (Pushparagam)",
    planet: "Jupiter",
    pricePerCarat: 1799,
    benefits: ["Wealth & Fortune", "Happy Marriage", "Wisdom & Education", "Spirituality"],
    whoCanWear: "A highly auspicious stone for teachers, scholars, financial experts, spiritual seekers, and anyone looking to attract wealth, luck, and marriage bliss.",
    raasi: ["Sagittarius (Dhanusu)", "Pisces (Meenam)"],
    lagna: ["Sagittarius Lagna", "Pisces Lagna", "Cancer Lagna", "Aries Lagna"],
    color: "#eab308",
  },
  {
    id: "blue-sapphire",
    name: "Blue Sapphire (Neelam)",
    planet: "Saturn",
    pricePerCarat: 2199,
    benefits: ["Career Stability", "Protection", "Discipline", "Sudden Fortune"],
    whoCanWear: "For individuals facing Saturn afflictions (Sade Sati, Ashtama Sani) or career delays. Must be worn only after precise astrological verification.",
    raasi: ["Capricorn (Makaram)", "Aquarius (Kumbam)"],
    lagna: ["Capricorn Lagna", "Aquarius Lagna", "Taurus Lagna", "Libra Lagna"],
    color: "#2563eb",
  },
  {
    id: "hessonite",
    name: "Hessonite (Gomedhakam)",
    planet: "Rahu",
    pricePerCarat: 1799,
    benefits: ["Foreign Success", "Clear Vision", "Rahu Dosha Relief", "Wealth"],
    whoCanWear: "Helpful for those working in tech, media, politics, or seeking overseas relocation. Provides relief from sudden confusion and Rahu's malefic transit effects.",
    raasi: ["Aquarius (Kumbam)", "Gemini (Mithuna)"],
    lagna: ["Taurus Lagna", "Gemini Lagna", "Virgo Lagna", "Aquarius Lagna"],
    color: "#b45309",
  },
  {
    id: "cats-eye",
    name: "Cat's Eye (Vaiduriyam)",
    planet: "Ketu",
    pricePerCarat: 1799,
    benefits: ["Intuition & Focus", "Spiritual Growth", "Enemy Protection", "Moksha"],
    whoCanWear: "Excellent for spiritual seekers, researchers, and individuals seeking protection from hidden enemies, negative energy, and unexpected losses.",
    raasi: ["Scorpio (Viruchigam)", "Pisces (Meenam)"],
    lagna: ["Scorpio Lagna", "Pisces Lagna", "Sagittarius Lagna"],
    color: "#6b7280",
  },
];

interface GemstoneGridProps {
  onSelect: (gem: Gemstone) => void;
}

const zodiacMap: Record<string, string> = {
  "Aries": "♈", "Taurus": "♉", "Gemini": "♊", "Cancer": "♋",
  "Leo": "♌", "Virgo": "♍", "Libra": "♎", "Scorpio": "♏",
  "Sagittarius": "♐", "Capricorn": "♑", "Aquarius": "♒", "Pisces": "♓"
};

const getIcon = (text: string) => {
  for (const sign in zodiacMap) {
    if (text.includes(sign)) return zodiacMap[sign];
  }
  return "✨";
};

export default function GemstoneGrid({ onSelect }: GemstoneGridProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const renderGemIcon = (id: string) => {
    switch (id) {
      case "ruby":
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_8px_16px_rgba(225,29,72,0.25)] select-none">
            <defs>
              <linearGradient id="rubyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#be123c" />
                <stop offset="100%" stopColor="#4c0519" />
              </linearGradient>
            </defs>
            <ellipse cx="50" cy="50" rx="42" ry="32" fill="url(#rubyGrad)" stroke="#fda4af" strokeWidth="0.5" />
            <ellipse cx="50" cy="50" rx="28" ry="20" fill="none" stroke="#fda4af" strokeWidth="0.5" opacity="0.6" />
            <path d="M 8 50 L 22 50" stroke="#fda4af" strokeWidth="0.5" opacity="0.6" />
            <path d="M 92 50 L 78 50" stroke="#fda4af" strokeWidth="0.5" opacity="0.6" />
            <path d="M 50 18 L 50 30" stroke="#fda4af" strokeWidth="0.5" opacity="0.6" />
            <path d="M 50 82 L 50 70" stroke="#fda4af" strokeWidth="0.5" opacity="0.6" />
            <path d="M 20 28 L 30 38" stroke="#fda4af" strokeWidth="0.5" opacity="0.6" />
            <path d="M 80 28 L 70 38" stroke="#fda4af" strokeWidth="0.5" opacity="0.6" />
            <path d="M 20 72 L 30 62" stroke="#fda4af" strokeWidth="0.5" opacity="0.6" />
            <path d="M 80 72 L 70 62" stroke="#fda4af" strokeWidth="0.5" opacity="0.6" />
          </svg>
        );
      case "pearl":
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_8px_16px_rgba(203,213,225,0.3)] select-none">
            <defs>
              <radialGradient id="pearlGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#f8fafc" />
                <stop offset="70%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="38" fill="url(#pearlGrad)" stroke="#f1f5f9" strokeWidth="0.75" />
            <ellipse cx="38" cy="38" rx="8" ry="5" fill="#ffffff" opacity="0.5" transform="rotate(-30 38 38)" />
          </svg>
        );
      case "red-coral":
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_8px_16px_rgba(239,68,68,0.25)] select-none">
            <defs>
              <radialGradient id="coralGrad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ff6b6b" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>
            </defs>
            <ellipse cx="50" cy="50" rx="40" ry="30" fill="url(#coralGrad)" stroke="#fca5a5" strokeWidth="0.5" />
            <ellipse cx="38" cy="38" rx="10" ry="4" fill="#ffffff" opacity="0.3" transform="rotate(-15 38 38)" />
          </svg>
        );
      case "emerald":
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_8px_16px_rgba(16,185,129,0.25)] select-none">
            <defs>
              <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#064e3b" />
              </linearGradient>
            </defs>
            <polygon points="25,18 75,18 88,31 88,69 75,82 25,82 12,69 12,31" fill="url(#emeraldGrad)" stroke="#a7f3d0" strokeWidth="0.5" />
            <polygon points="30,24 70,24 81,35 81,65 70,76 30,76 19,65 19,35" fill="none" stroke="#a7f3d0" strokeWidth="0.5" opacity="0.6" />
            <polygon points="35,30 65,30 74,39 74,61 65,70 35,70 26,61 26,39" fill="none" stroke="#a7f3d0" strokeWidth="0.5" opacity="0.4" />
            <line x1="25" y1="18" x2="35" y2="30" stroke="#a7f3d0" strokeWidth="0.5" opacity="0.6" />
            <line x1="75" y1="18" x2="65" y2="30" stroke="#a7f3d0" strokeWidth="0.5" opacity="0.6" />
            <line x1="88" y1="31" x2="74" y2="39" stroke="#a7f3d0" strokeWidth="0.5" opacity="0.6" />
            <line x1="88" y1="69" x2="74" y2="61" stroke="#a7f3d0" strokeWidth="0.5" opacity="0.6" />
            <line x1="75" y1="82" x2="65" y2="70" stroke="#a7f3d0" strokeWidth="0.5" opacity="0.6" />
            <line x1="25" y1="82" x2="35" y2="70" stroke="#a7f3d0" strokeWidth="0.5" opacity="0.6" />
            <line x1="12" y1="69" x2="26" y2="61" stroke="#a7f3d0" strokeWidth="0.5" opacity="0.6" />
            <line x1="12" y1="31" x2="26" y2="39" stroke="#a7f3d0" strokeWidth="0.5" opacity="0.6" />
          </svg>
        );
      case "yellow-sapphire":
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_8px_16px_rgba(234,179,8,0.25)] select-none">
            <defs>
              <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="50%" stopColor="#ca8a04" />
                <stop offset="100%" stopColor="#713f12" />
              </linearGradient>
            </defs>
            <ellipse cx="50" cy="50" rx="40" ry="32" fill="url(#yellowGrad)" stroke="#fef08a" strokeWidth="0.5" />
            <ellipse cx="50" cy="50" rx="26" ry="20" fill="none" stroke="#fef08a" strokeWidth="0.5" opacity="0.6" />
            <ellipse cx="50" cy="50" rx="16" ry="12" fill="none" stroke="#fef08a" strokeWidth="0.5" opacity="0.4" />
            <path d="M 50 18 L 50 38" stroke="#fef08a" strokeWidth="0.5" opacity="0.5" />
            <path d="M 50 82 L 50 62" stroke="#fef08a" strokeWidth="0.5" opacity="0.5" />
            <path d="M 10 50 L 34 50" stroke="#fef08a" strokeWidth="0.5" opacity="0.5" />
            <path d="M 90 50 L 66 50" stroke="#fef08a" strokeWidth="0.5" opacity="0.5" />
            <path d="M 22 28 L 38 38" stroke="#fef08a" strokeWidth="0.5" opacity="0.5" />
            <path d="M 78 28 L 62 38" stroke="#fef08a" strokeWidth="0.5" opacity="0.5" />
            <path d="M 22 72 L 38 62" stroke="#fef08a" strokeWidth="0.5" opacity="0.5" />
            <path d="M 78 72 L 62 62" stroke="#fef08a" strokeWidth="0.5" opacity="0.5" />
          </svg>
        );
      case "diamond":
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_8px_16px_rgba(186,230,253,0.35)] select-none">
            <defs>
              <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0f9ff" />
                <stop offset="40%" stopColor="#bae6fd" />
                <stop offset="70%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="38" fill="url(#diamondGrad)" stroke="#e0f2fe" strokeWidth="0.5" />
            <polygon points="50,22 68,31 68,50 50,68 32,50 32,31" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.8" />
            <circle cx="50" cy="50" r="16" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.6" />
            <line x1="50" y1="12" x2="50" y2="34" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
            <line x1="50" y1="88" x2="50" y2="66" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
            <line x1="12" y1="50" x2="34" y2="50" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
            <line x1="88" y1="50" x2="66" y2="50" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
            <line x1="23" y1="23" x2="38" y2="38" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
            <line x1="77" y1="23" x2="62" y2="38" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
            <line x1="23" y1="77" x2="38" y2="62" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
            <line x1="77" y1="77" x2="62" y2="62" stroke="#ffffff" strokeWidth="0.5" opacity="0.7" />
          </svg>
        );
      case "blue-sapphire":
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_8px_16px_rgba(37,99,235,0.25)] select-none">
            <defs>
              <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            <rect x="15" y="15" width="70" height="70" rx="20" ry="20" fill="url(#blueGrad)" stroke="#bfdbfe" strokeWidth="0.5" />
            <rect x="28" y="28" width="44" height="44" rx="10" ry="10" fill="none" stroke="#bfdbfe" strokeWidth="0.5" opacity="0.6" />
            <line x1="15" y1="35" x2="28" y2="38" stroke="#bfdbfe" strokeWidth="0.5" opacity="0.5" />
            <line x1="15" y1="65" x2="28" y2="62" stroke="#bfdbfe" strokeWidth="0.5" opacity="0.5" />
            <line x1="85" y1="35" x2="72" y2="38" stroke="#bfdbfe" strokeWidth="0.5" opacity="0.5" />
            <line x1="85" y1="65" x2="72" y2="62" stroke="#bfdbfe" strokeWidth="0.5" opacity="0.5" />
            <line x1="35" y1="15" x2="38" y2="28" stroke="#bfdbfe" strokeWidth="0.5" opacity="0.5" />
            <line x1="65" y1="15" x2="62" y2="28" stroke="#bfdbfe" strokeWidth="0.5" opacity="0.5" />
            <line x1="35" y1="85" x2="38" y2="72" stroke="#bfdbfe" strokeWidth="0.5" opacity="0.5" />
            <line x1="65" y1="85" x2="62" y2="72" stroke="#bfdbfe" strokeWidth="0.5" opacity="0.5" />
          </svg>
        );
      case "hessonite":
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_8px_16px_rgba(180,83,9,0.25)] select-none">
            <defs>
              <linearGradient id="hessoniteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#451a03" />
              </linearGradient>
            </defs>
            <rect x="18" y="18" width="64" height="64" rx="16" ry="16" fill="url(#hessoniteGrad)" stroke="#ffedd5" strokeWidth="0.5" />
            <rect x="30" y="30" width="40" height="40" rx="8" ry="8" fill="none" stroke="#ffedd5" strokeWidth="0.5" opacity="0.6" />
            <line x1="18" y1="18" x2="30" y2="30" stroke="#ffedd5" strokeWidth="0.5" opacity="0.5" />
            <line x1="82" y1="18" x2="70" y2="30" stroke="#ffedd5" strokeWidth="0.5" opacity="0.5" />
            <line x1="18" y1="82" x2="30" y2="70" stroke="#ffedd5" strokeWidth="0.5" opacity="0.5" />
            <line x1="82" y1="82" x2="70" y2="70" stroke="#ffedd5" strokeWidth="0.5" opacity="0.5" />
            <line x1="50" y1="18" x2="50" y2="30" stroke="#ffedd5" strokeWidth="0.5" opacity="0.5" />
            <line x1="50" y1="82" x2="50" y2="70" stroke="#ffedd5" strokeWidth="0.5" opacity="0.5" />
            <line x1="18" y1="50" x2="30" y2="50" stroke="#ffedd5" strokeWidth="0.5" opacity="0.5" />
            <line x1="82" y1="50" x2="70" y2="50" stroke="#ffedd5" strokeWidth="0.5" opacity="0.5" />
          </svg>
        );
      case "cats-eye":
        return (
          <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_8px_16px_rgba(107,114,128,0.25)] select-none">
            <defs>
              <radialGradient id="catsEyeGrad" cx="45%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="60%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#1f2937" />
              </radialGradient>
            </defs>
            <ellipse cx="50" cy="50" rx="36" ry="36" fill="url(#catsEyeGrad)" stroke="#e5e7eb" strokeWidth="0.5" />
            <ellipse cx="50" cy="50" rx="3.5" ry="33" fill="#ffffff" opacity="0.7" transform="rotate(12 50 50)" filter="drop-shadow(0 0 4px #ffffff)" />
            <ellipse cx="38" cy="38" rx="6" ry="3" fill="#ffffff" opacity="0.25" transform="rotate(-30 38 38)" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="collection" className="w-full py-20 bg-white flex justify-center px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4 select-none">
            <Sparkles className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>The Navaratnas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary font-bold mb-4">
            Find Your Astrological Gemstone
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
          <p className="text-text-sub text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Natural, unheated, certified gemstones corresponding to the nine planets of Vedic astrology. Get a professional birth-chart suitability check before purchasing.
          </p>
        </div>

        {/* Modern Gemstone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gemstones.map((gem) => {
            const isExpanded = expanded === gem.id;
            return (
              <div 
                key={gem.id} 
                className="bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(54,61,133,0.06)] hover:-translate-y-1.5 rounded-3xl transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden"
              >
                {/* Visual Area with high-quality SVG illustration */}
                <div className="relative h-48 flex items-center justify-center bg-slate-50/70 border-b border-slate-100 overflow-hidden">
                  
                  {/* Radial colored glow background */}
                  <div 
                    className="absolute w-24 h-24 rounded-full opacity-15 blur-2xl group-hover:scale-130 transition-transform duration-500"
                    style={{ backgroundColor: gem.color }}
                  />

                  {/* Gemstone Vector SVG Illustration */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:scale-108">
                    {renderGemIcon(gem.id)}
                  </div>

                  {/* Planet & Natural Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider border border-white/10 shadow-sm">
                      🪐 {gem.planet}
                    </span>

                    <span className="bg-green-50 text-green-700 border border-green-200/80 text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider flex items-center gap-1 shadow-xxs select-none">
                      <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" /> Certified
                    </span>
                  </div>
                </div>

                {/* Card Details (Equal Height Body Container) */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between gap-5">
                  <div className="flex flex-col gap-3">
                    {/* Gemstone Name and Price */}
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="text-primary font-serif font-extrabold text-xl group-hover:text-primary-light transition-colors">
                        {gem.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] text-text-sub font-bold uppercase tracking-wider block leading-none mb-1">Starting at</span>
                        <span className="text-primary font-extrabold text-base">₹{gem.pricePerCarat.toLocaleString()}</span>
                        <span className="text-[9px] text-text-sub font-semibold"> / Carat</span>
                      </div>
                    </div>

                    {/* Short Benefits Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {gem.benefits.map((b) => (
                        <span 
                          key={b} 
                          className="bg-primary/5 text-primary text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md border border-primary/10"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <hr className="border-slate-100 my-1" />

                    {/* Astrological Suitability Detail Accordion */}
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => toggleExpand(gem.id)}
                        className="flex items-center gap-1 text-xs text-text-sub hover:text-primary font-bold transition-colors w-fit focus:outline-none"
                      >
                        <span>Astrological Compatibility</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {isExpanded && (
                        <div className="text-left text-xs bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-3.5 animate-fadeIn">
                          {/* Who Can Wear */}
                          <div>
                            <h4 className="text-primary font-bold text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                              <UserCheck className="w-3.5 h-3.5 text-amber-600" /> Suitability Info
                            </h4>
                            <p className="text-text-sub text-xxs sm:text-xs leading-relaxed font-medium">
                              {gem.whoCanWear}
                            </p>
                          </div>

                          {/* Raasi & Lagna */}
                          <div className="grid grid-cols-2 gap-3 border-t border-slate-200/50 pt-3">
                            <div>
                              <h4 className="text-primary font-bold text-[10px] uppercase tracking-wider mb-1">
                                🌙 Suitable Raasi
                              </h4>
                              <div className="flex flex-col gap-1">
                                {gem.raasi.map(r => (
                                  <span key={r} className="text-text-sub text-[10px] sm:text-xs font-medium flex items-center gap-1">
                                    <span className="text-amber-600">{getIcon(r)}</span> {r}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-primary font-bold text-[10px] uppercase tracking-wider mb-1">
                                ⬆️ Suitable Lagna
                              </h4>
                              <div className="flex flex-col gap-1">
                                {gem.lagna.slice(0, 4).map(l => (
                                  <span key={l} className="text-text-sub text-[10px] sm:text-xs font-medium flex items-center gap-1">
                                    <span className="text-amber-600">{getIcon(l)}</span> {l}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <button
                      onClick={() => onSelect(gem)}
                      className="w-full py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-bold tracking-wide transition-all duration-300 text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      Order Certified Stone
                    </button>
                    
                    <a
                      href={`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(`Hello Gokul's Astrological Insights, I would like to consult before buying a ${gem.name} for my horoscope chart.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 border-2 border-primary/20 hover:border-primary/40 text-primary hover:bg-primary/5 rounded-xl font-bold transition-all duration-300 text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer text-center"
                    >
                      Consult Before Buying
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certified Quality Banner */}
        <div className="mt-16 p-6 bg-slate-50 border border-slate-200/60 rounded-2xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-xxs">
          <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 border border-green-100">
            <ShieldCheck className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <h4 className="text-primary font-serif font-extrabold text-base mb-1">100% Certified Natural Gemstones</h4>
            <p className="text-text-sub text-xs sm:text-sm font-medium leading-relaxed">
              We exclusively recommend 100% natural, untreated gemstones. 
              Each stone is dispatched with an authentic gemology laboratory testing certificate to assure purity and remedy success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
