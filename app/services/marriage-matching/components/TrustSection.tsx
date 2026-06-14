"use client";
import React, { useEffect, useState } from "react";
import { Users, UserCheck, ShieldCheck, Fingerprint, MessageSquare } from "lucide-react";

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ target, duration = 1500, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const totalMiliseconds = duration;
    const incrementTime = 15;
    const step = (end / totalMiliseconds) * incrementTime;
    
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

const trustItems = [
  {
    value: <AnimatedCounter target={1000} suffix="+" />,
    label: "Happy Consultations",
    desc: "Over a thousand successful horoscopes matched and consulted.",
    icon: <Users className="w-8 h-8 text-amber-400" />,
    color: "rgba(212, 160, 23, 0.12)",
    borderColor: "rgba(212, 160, 23, 0.25)",
  },
  {
    value: "100%",
    label: "Experienced Astrologer",
    desc: "Personal matching by expert astrologer Gokul Murugan.",
    icon: <UserCheck className="w-8 h-8 text-indigo-400" />,
    color: "rgba(129, 140, 248, 0.12)",
    borderColor: "rgba(129, 140, 248, 0.25)",
  },
  {
    value: "Confidential",
    label: "Private and Confidential",
    desc: "Your charts, birth details, and predictions are 100% secure.",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    color: "rgba(52, 211, 153, 0.12)",
    borderColor: "rgba(52, 211, 153, 0.25)",
  },
  {
    value: "Tailored",
    label: "Personalized Guidance",
    desc: "Individually computed predictions based on exact charts.",
    icon: <Fingerprint className="w-8 h-8 text-sky-400" />,
    color: "rgba(56, 189, 248, 0.12)",
    borderColor: "rgba(56, 189, 248, 0.25)",
  },
  {
    value: "24/7",
    label: "WhatsApp Support Available",
    desc: "Instant chat assistance for bookings and query updates.",
    icon: <MessageSquare className="w-8 h-8 text-rose-400" />,
    color: "rgba(244, 63, 94, 0.12)",
    borderColor: "rgba(244, 63, 94, 0.25)",
  },
];

export default function TrustSection() {
  return (
    <section className="mm-section mm-trust-section-alt">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Trust & Reliability ✦</span>
          <h2 className="mm-section-h2">Why Families <span className="mm-gold">Trust Us</span></h2>
          <p className="mm-section-sub">
            We maintain the highest standards of astrological accuracy and client confidentiality.
          </p>
        </div>

        <div className="mm-trust-grid-large">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="mm-trust-card-large"
              style={{
                "--card-glow": item.color,
                "--card-border": item.borderColor,
              } as React.CSSProperties}
            >
              <div className="mm-trust-icon-container">
                {item.icon}
              </div>
              <div className="mm-trust-value">{item.value}</div>
              <h3 className="mm-trust-label">{item.label}</h3>
              <p className="mm-trust-desc">{item.desc}</p>
              <div className="mm-trust-glow-bg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
