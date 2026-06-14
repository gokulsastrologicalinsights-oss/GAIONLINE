"use client";
import React from "react";
import { ShieldAlert, Sparkles, Heart, Users, Home, Compass } from "lucide-react";

const cards = [
  {
    icon: <ShieldAlert className="w-8 h-8 text-rose-400" />,
    title: "Avoid Future Misunderstandings",
    desc: "Understand compatibility before marriage and build a strong foundation.",
    color: "rgba(244, 63, 94, 0.12)",
    borderColor: "rgba(244, 63, 94, 0.25)",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-amber-400" />,
    title: "Identify Doshas and Planetary Influences",
    desc: "Detect potential challenges and receive suitable remedies.",
    color: "rgba(251, 191, 36, 0.12)",
    borderColor: "rgba(251, 191, 36, 0.25)",
  },
  {
    icon: <Heart className="w-8 h-8 text-pink-400 fill-pink-400/5" />,
    title: "Strengthen Marital Harmony",
    desc: "Promote love, understanding, and long-term happiness.",
    color: "rgba(244, 114, 182, 0.12)",
    borderColor: "rgba(244, 114, 182, 0.25)",
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-400" />,
    title: "Support for Love and Arranged Marriages",
    desc: "Useful for both traditional and love marriages.",
    color: "rgba(52, 211, 153, 0.12)",
    borderColor: "rgba(52, 211, 153, 0.25)",
  },
  {
    icon: <Home className="w-8 h-8 text-sky-400" />,
    title: "Improve Family Stability",
    desc: "Gain insights into finances, children, and family life.",
    color: "rgba(56, 189, 248, 0.12)",
    borderColor: "rgba(56, 189, 248, 0.25)",
  },
  {
    icon: <Compass className="w-8 h-8 text-indigo-400" />,
    title: "Personalized Astrological Guidance",
    desc: "Receive expert advice based on both horoscopes.",
    color: "rgba(129, 140, 248, 0.12)",
    borderColor: "rgba(129, 140, 248, 0.25)",
  },
];

export default function WhyMatchingMatters() {
  return (
    <section className="mm-section mm-section-matters">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Why Marriage Matching Matters ✦</span>
          <h2 className="mm-section-h2">
            Make Informed Decisions for a <span className="mm-gold">Happy Married Life</span>
          </h2>
          <p className="mm-section-sub">
            Astrological compatibility checks are not about finding the perfect person, but about understanding the unique energies you both bring to the marriage.
          </p>
        </div>

        <div className="mm-matters-grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className="mm-matters-card"
              style={{
                "--card-glow": card.color,
                "--card-border": card.borderColor,
              } as React.CSSProperties}
            >
              <div className="mm-matters-icon-container">
                {card.icon}
              </div>
              <h3 className="mm-matters-card-title">{card.title}</h3>
              <p className="mm-matters-card-desc">{card.desc}</p>
              <div className="mm-matters-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
