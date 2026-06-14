"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Heart, Monitor, Hash, Gem, Sparkles } from "lucide-react";

interface ServiceItem {
  title: string;
  emoji: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Online Consultation",
    emoji: "💻",
    description: "Personalized horoscope guidance and predictions.",
    href: "/services/online-consultation",
    icon: <Monitor className="w-6 h-6 text-primary" />,
  },
  {
    title: "Marriage Matching",
    emoji: "💑",
    description: "Traditional horoscope compatibility analysis.",
    href: "/services/marriage-matching",
    icon: <Heart className="w-6 h-6 text-primary" />,
  },
  {
    title: "Numerology",
    emoji: "🔢",
    description: "Life path and personality analysis through numbers.",
    href: "/services/numerology",
    icon: <Hash className="w-6 h-6 text-primary" />,
  },
  {
    title: "Gemstone Recommendation",
    emoji: "💎",
    description: "Suitable gemstone suggestions based on birth charts.",
    href: "/services/gemstones",
    icon: <Gem className="w-6 h-6 text-primary" />,
  },
  {
    title: "Remedies & Pariharams",
    emoji: "🕉",
    description: "Simple and practical remedies for life challenges.",
    href: "/services/spiritual",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
  {
    title: "Detailed Horoscope Reading",
    emoji: "🔮",
    description: "Comprehensive analysis of various life aspects.",
    href: "/services/reports",
    icon: <Eye className="w-6 h-6 text-primary" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white w-full py-24 flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-dark font-extrabold mb-4">
            Our Astrological Services
          </h2>
          {/* Decorative separator */}
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
          <p className="text-text-sub text-base sm:text-lg leading-relaxed font-medium">
            Gokul&apos;s Astrological Insights offers deep, personalized services based on authentic Vedic astrology principles. Let us guide you to clear obstacles and make empowered choices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-border-subtle shadow-[0_10px_35px_rgba(0,0,0,0.06)] p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(54,61,133,0.1)] hover:border-primary/20 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300 ring-4 ring-primary-light/5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-primary font-serif font-bold text-xl mb-3 flex items-center gap-2">
                <span>{service.emoji}</span> {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-sub text-sm leading-relaxed max-w-xs mb-6">
                {service.description}
              </p>

              {/* Learn More Button */}
              <a
                href={service.href}
                className="mt-auto inline-flex items-center gap-1.5 text-primary hover:text-primary-light font-bold text-sm tracking-wide group-hover:translate-x-1 transition-all duration-300"
              >
                <span>Learn More</span>
                <span>&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-text-main text-base md:text-lg font-semibold text-center max-w-md px-4 leading-relaxed bg-primary/5 py-4 rounded-xl border border-primary/5">
          Get accurate insights and trusted solutions to lead a better and successful life.
        </p>
      </div>
    </section>
  );
}
