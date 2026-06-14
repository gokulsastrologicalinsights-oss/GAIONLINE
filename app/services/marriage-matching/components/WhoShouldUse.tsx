"use client";
import React from "react";
import { Users, Heart, Sparkles, Search, Compass, Hourglass } from "lucide-react";

const audiences = [
  {
    title: "Arranged Marriage Families",
    icon: <Users className="w-7 h-7 text-amber-400" />,
    color: "rgba(212, 160, 23, 0.12)",
    borderColor: "rgba(212, 160, 23, 0.25)",
  },
  {
    title: "Love Marriage Couples",
    icon: <Heart className="w-7 h-7 text-pink-400 fill-pink-400/5" />,
    color: "rgba(244, 114, 182, 0.12)",
    borderColor: "rgba(244, 114, 182, 0.25)",
  },
  {
    title: "Second Marriage Compatibility",
    icon: <Sparkles className="w-7 h-7 text-emerald-400" />,
    color: "rgba(52, 211, 153, 0.12)",
    borderColor: "rgba(52, 211, 153, 0.25)",
  },
  {
    title: "Parents Searching for Bride or Groom",
    icon: <Search className="w-7 h-7 text-sky-400" />,
    color: "rgba(56, 189, 248, 0.12)",
    borderColor: "rgba(56, 189, 248, 0.25)",
  },
  {
    title: "Couples Seeking Compatibility Guidance",
    icon: <Compass className="w-7 h-7 text-indigo-400" />,
    color: "rgba(129, 140, 248, 0.12)",
    borderColor: "rgba(129, 140, 248, 0.25)",
  },
  {
    title: "People Experiencing Marriage Delays",
    icon: <Hourglass className="w-7 h-7 text-rose-400" />,
    color: "rgba(244, 63, 94, 0.12)",
    borderColor: "rgba(244, 63, 94, 0.25)",
  },
];

export default function WhoShouldUse() {
  return (
    <section className="mm-section mm-section-who">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Targeting ✦</span>
          <h2 className="mm-section-h2">Who Should Use <span className="mm-gold">This Service?</span></h2>
          <p className="mm-section-sub">
            Marriage matching is beneficial for anyone seeking clarity and confidence before taking one of life's most important decisions.
          </p>
        </div>

        <div className="mm-who-grid">
          {audiences.map((aud, i) => (
            <div
              key={i}
              className="mm-who-card"
              style={{
                "--card-glow": aud.color,
                "--card-border": aud.borderColor,
              } as React.CSSProperties}
            >
              <div className="mm-who-icon-wrap">
                {aud.icon}
              </div>
              <h3 className="mm-who-title">{aud.title}</h3>
              <div className="mm-who-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
