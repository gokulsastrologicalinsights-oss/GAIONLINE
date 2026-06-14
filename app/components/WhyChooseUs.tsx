"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Lock, Sparkles, ShieldCheck, Globe, Headset } from "lucide-react";

interface PointItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const POINTS: PointItem[] = [
  {
    title: "Authentic Vedic Astrology Principles",
    description: "Deeply rooted in ancient traditional wisdom and accurate celestial calculations.",
    icon: <Star className="w-5 h-5 text-primary" />,
  },
  {
    title: "Personalized and Confidential Consultations",
    description: "Your details and readings are kept completely private and tailored strictly to you.",
    icon: <Lock className="w-5 h-5 text-primary" />,
  },
  {
    title: "Practical and Easy-to-Follow Remedies",
    description: "Simple, realistic, and effective pariharams to overcome your daily life hurdles.",
    icon: <Sparkles className="w-5 h-5 text-primary" />,
  },
  {
    title: "Ethical and Transparent Guidance",
    description: "Honest and straightforward predictions without any fear-mongering or false promises.",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
  },
  {
    title: "Online Services Available Worldwide",
    description: "Access reliable astrological consultations from anywhere across the globe.",
    icon: <Globe className="w-5 h-5 text-primary" />,
  },
  {
    title: "Customer-Focused Support",
    description: "Dedicated support to ensure all your queries and concerns are promptly addressed.",
    icon: <Headset className="w-5 h-5 text-primary" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 bg-surface-light flex justify-center px-4 sm:px-6 lg:px-8 border-t border-b border-border-subtle">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary font-bold mb-4">
            Why Choose Gokul&apos;s Astrological Insights?
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
          <p className="text-text-sub text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We offer professional, transparent, and accurate Vedic astrology guidance designed to lead you towards success, peace, and clarity.
          </p>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POINTS.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-border-subtle hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(54,61,133,0.1)] hover:border-primary/10 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer"
            >
              {/* Checkmark and Icon container */}
              <div className="flex items-center justify-between w-full mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                  {point.icon}
                </div>
                <span className="text-[#22c55e] text-lg font-bold">✔</span>
              </div>

              {/* Text */}
              <h3 className="text-primary font-serif font-bold text-lg mb-2 group-hover:text-primary-light transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-text-sub text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
