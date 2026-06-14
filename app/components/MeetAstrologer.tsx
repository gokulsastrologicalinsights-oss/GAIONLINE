"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Moon, Sun, Award, User } from "lucide-react";
import Image from "next/image";

export default function MeetAstrologer() {
  return (
    <section className="relative w-full py-24 bg-slate-900 overflow-hidden flex justify-center px-4 sm:px-6 lg:px-8">
      {/* Decorative Astrology Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {/* Abstract glowing orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[150px]" />
        
        {/* Subtle Icons */}
        <Star className="absolute top-20 left-[10%] w-8 h-8 text-white/30 animate-pulse" />
        <Moon className="absolute bottom-20 left-[15%] w-12 h-12 text-white/20" />
        <Sun className="absolute top-32 right-[15%] w-24 h-24 text-white/10 animate-[spin_60s_linear_infinite]" />
        <Star className="absolute bottom-32 right-[20%] w-6 h-6 text-white/40 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Image & Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 mx-auto md:mx-0"
        >
          {/* Circular Profile Image */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 to-slate-800 p-2 shadow-[0_0_50px_rgba(59,130,246,0.15)] border border-white/10 backdrop-blur-sm relative flex items-center justify-center overflow-hidden group">
            <div className="w-full h-full rounded-full bg-slate-800/80 flex items-center justify-center overflow-hidden relative">
              <Image 
                src="/images/Gokul-Main.png" 
                alt="Gokul Murugan" 
                fill
                sizes="(max-width: 768px) 16rem, 20rem"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white text-slate-900 font-bold px-6 py-3.5 rounded-full shadow-2xl border border-slate-100 flex items-center gap-2.5 transform hover:scale-105 transition-transform duration-300 z-20">
            <Award className="w-6 h-6 text-[#f59e0b]" />
            <span className="text-sm">Years of Experience</span>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-sm font-extrabold tracking-widest text-primary-light uppercase mb-3 drop-shadow-sm text-blue-400">
            Meet the Astrologer
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-2 tracking-tight drop-shadow-md">
            Gokul Murugan
          </h3>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-8">
            Founder & Astrologer
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-400 mb-8 mx-auto md:mx-0 rounded-full"></div>

          <p className="text-slate-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
            With years of study and practice in Vedic astrology, Gokul Murugan is committed to helping individuals understand their horoscope and navigate life&apos;s important milestones through accurate analysis and practical guidance.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
