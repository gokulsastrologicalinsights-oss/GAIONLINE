"use client";
import React, { useState } from "react";

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
    name: "Ruby",
    planet: "Sun",
    pricePerCarat: 2199,
    benefits: ["Confidence", "Leadership", "Fame", "Government Success", "Authority"],
    whoCanWear: "People with weak Sun in horoscope, leadership professions, politicians, government employees, and those seeking confidence, authority, fame, and recognition.",
    raasi: ["Leo (Simha)", "Aries (Mesha)", "Sagittarius (Dhanusu)"],
    lagna: ["Leo Lagna", "Aries Lagna", "Scorpio Lagna", "Sagittarius Lagna"],
    color: "#e11d48",
  },
  {
    id: "pearl",
    name: "Pearl",
    planet: "Moon",
    pricePerCarat: 1999,
    benefits: ["Mental Peace", "Emotional Stability", "Better Sleep", "Calm Mind", "Emotional Healing"],
    whoCanWear: "People with emotional stress, anxiety, mental disturbance, sleep issues, weak Moon, emotional instability, and those seeking peace and calmness.",
    raasi: ["Cancer (Kadagam)", "Pisces (Meenam)"],
    lagna: ["Cancer Lagna", "Pisces Lagna", "Scorpio Lagna"],
    color: "#f8fafc",
  },
  {
    id: "red-coral",
    name: "Red Coral",
    planet: "Mars",
    pricePerCarat: 2199,
    benefits: ["Courage", "Energy", "Property Success", "Protection", "Confidence"],
    whoCanWear: "Police, military, athletes, entrepreneurs, land/property professionals, and those needing courage, energy, protection, and confidence.",
    raasi: ["Aries (Mesha)", "Scorpio (Viruchigam)"],
    lagna: ["Aries Lagna", "Scorpio Lagna", "Cancer Lagna", "Leo Lagna"],
    color: "#ef4444",
  },
  {
    id: "emerald",
    name: "Emerald",
    planet: "Mercury",
    pricePerCarat: 2199,
    benefits: ["Intelligence", "Communication", "Business Growth", "Memory Power", "Financial Growth"],
    whoCanWear: "Students, traders, astrologers, speakers, accountants, media professionals, business owners, and people seeking intelligence, communication skills, and business growth.",
    raasi: ["Gemini (Mithuna)", "Virgo (Kanni)"],
    lagna: ["Gemini Lagna", "Virgo Lagna", "Taurus Lagna", "Libra Lagna"],
    color: "#10b981",
  },
  {
    id: "yellow-sapphire",
    name: "Yellow Sapphire",
    planet: "Jupiter",
    pricePerCarat: 1799,
    benefits: ["Wealth", "Marriage", "Wisdom", "Spiritual Growth", "Fortune"],
    whoCanWear: "Teachers, spiritual seekers, finance professionals, marriage seekers, and those seeking wisdom, prosperity, wealth, and spiritual growth.",
    raasi: ["Sagittarius (Dhanusu)", "Pisces (Meenam)"],
    lagna: ["Sagittarius Lagna", "Pisces Lagna", "Cancer Lagna", "Aries Lagna"],
    color: "#eab308",
  },
  {
    id: "blue-sapphire",
    name: "Blue Sapphire",
    planet: "Saturn",
    pricePerCarat: 1799,
    benefits: ["Career Growth", "Stability", "Discipline", "Protection", "Financial Stability"],
    whoCanWear: "People facing career delays, financial struggles, Saturn afflictions, instability, and those seeking discipline, stability, and career growth.",
    raasi: ["Capricorn (Makaram)", "Aquarius (Kumbam)"],
    lagna: ["Capricorn Lagna", "Aquarius Lagna", "Taurus Lagna", "Libra Lagna"],
    color: "#2563eb",
  },
  {
    id: "hessonite",
    name: "Hessonite Garnet",
    planet: "Rahu",
    pricePerCarat: 1799,
    benefits: ["Foreign Opportunities", "Protection", "Confidence", "Success", "Clarity"],
    whoCanWear: "People affected by Rahu dosha, confusion, fear, instability, foreign settlement issues, addictions, and unexpected obstacles.",
    raasi: ["Aquarius (Kumbam)", "Gemini (Mithuna)"],
    lagna: ["Taurus Lagna", "Gemini Lagna", "Virgo Lagna", "Aquarius Lagna"],
    color: "#b45309",
  },
  {
    id: "cats-eye",
    name: "Cat's Eye",
    planet: "Ketu",
    pricePerCarat: 1799,
    benefits: ["Spiritual Protection", "Intuition", "Sudden Obstacles Protection", "Stability", "Focus"],
    whoCanWear: "Spiritual seekers, meditators, people facing sudden obstacles, Ketu afflictions, confusion, and those seeking intuition and spiritual protection.",
    raasi: ["Scorpio (Viruchigam)", "Pisces (Meenam)"],
    lagna: ["Scorpio Lagna", "Pisces Lagna", "Sagittarius Lagna"],
    color: "#71717a",
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

  return (
    <section id="collection" className="gs-section">
      <div className="gs-container">
        <div className="gs-section-header">
          <span className="gs-section-tag">✦ Luxury Collection ✦</span>
          <h2 className="gs-section-h2">Explore Our <span className="gs-gold">Gemstones</span></h2>
          <p className="gs-section-sub">Carefully selected natural gemstones to balance planetary energies.</p>
        </div>
        <div className="gs-grid">
          {gemstones.map((gem) => (
            <div key={gem.id} className={`gs-card ${expanded === gem.id ? "expanded" : ""}`}>
              <div className="gs-card-visual">
                <div className="gs-gem-glow" style={{ backgroundColor: gem.color }} />
                <div className="gs-gem-icon" style={{ borderColor: gem.color }}>
                  <div className="gs-gem-placeholder" style={{ background: `radial-gradient(circle, ${gem.color}, transparent)` }} />
                </div>
                <div className="gs-planet-badge">FOR {gem.planet.toUpperCase()}</div>
              </div>
              <div className="gs-card-body">
                <div className="gs-card-main-info">
                  <h3 className="gs-gem-name">{gem.name}</h3>
                  <div className="gs-gem-price">₹{gem.pricePerCarat} <span className="gs-unit">/ Carat</span></div>
                </div>

                <div className="gs-gem-benefits">
                  {gem.benefits.map(b => (
                    <span key={b} className="gs-benefit-tag">{b}</span>
                  ))}
                </div>

                <div className="gs-expandable-content">
                  <div className="gs-info-section">
                    <h4 className="gs-info-title">👤 Who Can Wear</h4>
                    <p className="gs-info-text">{gem.whoCanWear}</p>
                  </div>

                  <div className="gs-astro-grid">
                    <div className="gs-astro-col">
                      <h4 className="gs-info-title">🌙 Suitable Raasi</h4>
                      <div className="gs-astro-list">
                        {gem.raasi.map(r => (
                          <div key={r} className="gs-astro-item">
                            <span className="gs-astro-icon">{getIcon(r)}</span>
                            <span className="gs-astro-label">{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="gs-astro-col">
                      <h4 className="gs-info-title">⬆️ Suitable Lagna</h4>
                      <div className="gs-astro-list">
                        {gem.lagna.map(l => (
                          <div key={l} className="gs-astro-item">
                            <span className="gs-astro-icon">{getIcon(l)}</span>
                            <span className="gs-astro-label">{l}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  className="gs-btn-expand" 
                  onClick={() => toggleExpand(gem.id)}
                >
                  {expanded === gem.id ? "Show Less" : "Who Can Wear?"}
                </button>

                <button 
                  onClick={() => onSelect(gem)}
                  className="gs-btn-select gs-btn-full"
                >
                  Select {gem.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
