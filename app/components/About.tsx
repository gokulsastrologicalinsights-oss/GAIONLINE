"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS } from "../constants";
import { Award, Compass, Heart, ShieldCheck, Sparkles, UserCheck, Briefcase, DollarSign, Activity, BookOpen, Users, Home } from "lucide-react";

const CAROUSEL_IMAGES = [
  {
    src: "/images/Gokul-image-1.jpeg",
    alt: "Astrologer Gokul Murugan receiving recognition",
    caption: "Trusted Astrological Guide"
  },
  {
    src: "/images/Gokul-Image-2.jpeg",
    alt: "Astrologer Gokul Murugan in consultation",
    caption: "Personalized Chart Analysis"
  },
  {
    src: "/images/Gokul-image-vertical.jpeg",
    alt: "Astrologer Gokul Murugan portrait",
    caption: "Vedic Astrology Expert"
  }
];

const TABS = [
  {
    id: "journey",
    label: "Biography & Journey",
    icon: <UserCheck className="w-4 h-4" />,
    title: "Bridging Vedic Tradition and Modern Solutions",
    content: (
      <div className="space-y-4 text-text-sub text-sm sm:text-base leading-relaxed">
        <p>
          <strong>Astrologer Gokul Murugan</strong> is a highly respected Vedic astrologer based in <strong>Thiruverkadu, Chennai</strong>. With over a decade of dedicated practice, Gokul has guided thousands of individuals across India and globally toward clarity, success, and peace of mind.
        </p>
        <p>
          His journey into the celestial arts began with a deep curiosity about planetary energies and their profound influence on human behavior and destiny. Over the years, he has mastered traditional Tamil <strong>Jathagam analysis</strong>, planetary transit cycles, and Prasannam techniques, establishing <em>Gokul&apos;s Astrological Insights (GAI)</em> as a beacon of trust.
        </p>
        <p>
          As a verified professional on Astrosage (ID: 11195), Gokul maintains the highest standards of accuracy, ethical practices, and confidentiality.
        </p>
      </div>
    )
  },
  {
    id: "philosophy",
    label: "Our Unique Approach",
    icon: <Compass className="w-4 h-4" />,
    title: "Empowerment Over Fatalism",
    content: (
      <div className="space-y-4 text-text-sub text-sm sm:text-base leading-relaxed">
        <p>
          We believe that astrology is not about passive fatalism, but about conscious empowerment. Your horoscope is a roadmap of energies, and you hold the steering wheel. Our approach is characterized by:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] text-lg font-bold shrink-0">✔</span>
            <span><strong>Logical Interpretations:</strong> Predictions backed by precise planetary degree calculations, avoiding superstition.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] text-lg font-bold shrink-0">✔</span>
            <span><strong>Practical Remedies:</strong> Simple lifestyle adjustments, meditation, charity, and suitable gemstones.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] text-lg font-bold shrink-0">✔</span>
            <span><strong>Strength-Focused:</strong> Highlighting your innate talents and favorable periods (Dasa-Bukthi) for action.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] text-lg font-bold shrink-0">✔</span>
            <span><strong>Timing of Events:</strong> Clear analysis of auspicious timings (Muhurtham) for marriage, career, or business.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: "promise",
    label: "Our Promise & Ethics",
    icon: <ShieldCheck className="w-4 h-4" />,
    title: "Honest, Transparent, and Private",
    content: (
      <div className="space-y-4 text-text-sub text-sm sm:text-base leading-relaxed">
        <p>
          At Gokul&apos;s Astrological Insights, client trust and integrity are the cornerstones of our consultations. We commit to:
        </p>
        <div className="space-y-3 mt-2">
          <div className="p-3 bg-primary/5 rounded-xl border border-primary/10">
            <h4 className="text-primary font-bold text-sm sm:text-base mb-1">Absolute Confidentiality</h4>
            <p className="text-xs sm:text-sm">Your birth details, personal discussions, and consultation notes are kept 100% private and never shared.</p>
          </div>
          <div className="p-3 bg-primary/5 rounded-xl border border-primary/10">
            <h4 className="text-primary font-bold text-sm sm:text-base mb-1">Honest Guidance</h4>
            <p className="text-xs sm:text-sm">We do not sugarcoat charts, nor do we create unnecessary fear. You get a transparent, realistic assessment of what the stars indicate.</p>
          </div>
          <div className="p-3 bg-primary/5 rounded-xl border border-primary/10">
            <h4 className="text-primary font-bold text-sm sm:text-base mb-1">Actionable Directions</h4>
            <p className="text-xs sm:text-sm">Our goal is to leave you with a positive outlook and clear directions so you can navigate life&apos;s challenges with confidence.</p>
          </div>
        </div>
      </div>
    )
  }
];

const MISSION_ITEMS = [
  { name: "Marriage & Relationships", icon: <Heart className="w-6 h-6" /> },
  { name: "Career & Business", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Finance & Prosperity", icon: <DollarSign className="w-6 h-6" /> },
  { name: "Health & Well-being", icon: <Activity className="w-6 h-6" /> },
  { name: "Property & Vehicles", icon: <Home className="w-6 h-6" /> },
  { name: "Education & Children", icon: <BookOpen className="w-6 h-6" /> },
  { name: "Family Matters", icon: <Users className="w-6 h-6" /> },
  { name: "Spiritual Growth & Remedies", icon: <Sparkles className="w-6 h-6" /> }
];

export default function About() {
  const [activeTab, setActiveTab] = useState("journey");
  const [imgIndex, setImgIndex] = useState(0);

  const handleNextImg = () => {
    setImgIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const handlePrevImg = () => {
    setImgIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  const activeTabContent = TABS.find((t) => t.id === activeTab);

  return (
    <section id="about" className="w-full py-24 bg-white flex justify-center px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col">
        
        {/* Welcome Intro Card */}
        <div className="w-full bg-white rounded-2xl border border-border-subtle p-8 sm:p-10 shadow-[0_12px_40px_rgba(54,61,133,0.04)] mb-16 relative overflow-hidden group">
          {/* Subtle Decorative Golden Gradient Bar at Top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-[#d4af37] to-primary-light"></div>
          
          <h2 className="text-primary font-serif font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-6 leading-tight">
            Welcome to Gokul&apos;s Astrological Insights
          </h2>
          <div className="text-text-sub text-base sm:text-lg leading-relaxed space-y-4 max-w-5xl">
            <p>
              Welcome to Gokul&apos;s Astrological Insights (GAI), a trusted platform dedicated to providing authentic Vedic astrology guidance. We believe astrology should empower people with clarity and confidence rather than fear or superstition.
            </p>
            <p>
              Founded by Astrologer Gokul Murugan, GAI combines traditional astrological principles with a modern and accessible approach, helping individuals make informed decisions in various aspects of life.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        
          {/* Left Side - Image Carousel with Golden Frame */}
          <div className="relative w-full lg:w-[45%] flex flex-col items-center">
            
            <div className="relative w-full max-w-[450px] aspect-[4/5] sm:aspect-[3/4] rounded-2xl p-2.5 bg-gradient-to-br from-[#d4af37] via-primary to-primary-light shadow-[0_20px_50px_rgba(54,61,133,0.15)] group">
              
              {/* Carousel Navigation Buttons */}
              <button 
                onClick={handlePrevImg}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 text-primary shadow-md hover:bg-primary hover:text-white transition-all flex items-center justify-center cursor-pointer opacity-80 group-hover:opacity-100 active:scale-90"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button 
                onClick={handleNextImg}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 text-primary shadow-md hover:bg-primary hover:text-white transition-all flex items-center justify-center cursor-pointer opacity-80 group-hover:opacity-100 active:scale-90"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Inner Border Frame */}
              <div className="relative w-full h-full rounded-xl border-4 border-white overflow-hidden bg-slate-900 shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src={CAROUSEL_IMAGES[imgIndex].src}
                      alt={CAROUSEL_IMAGES[imgIndex].alt}
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 450px"
                      priority
                    />
                    {/* Subtle Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Floating Caption */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl text-center">
                      <span className="text-white text-xs font-bold tracking-widest uppercase">
                        {CAROUSEL_IMAGES[imgIndex].caption}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex gap-2 mt-5">
              {CAROUSEL_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setImgIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === imgIndex ? "bg-primary w-6" : "bg-slate-300 w-2.5"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Key Badges Under Image */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[450px] mt-8">
              <div className="flex items-center gap-3 p-3.5 bg-white border border-border-subtle rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.02)]">
                <div className="h-9 w-9 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-text-sub font-extrabold uppercase tracking-wide">Experience</p>
                  <p className="text-sm text-text-main font-extrabold font-serif">10+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-white border border-border-subtle rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.02)]">
                <div className="h-9 w-9 rounded-full bg-[#e4405f]/5 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-[#e4405f]" />
                </div>
                <div>
                  <p className="text-[10px] text-text-sub font-extrabold uppercase tracking-wide">Client Rating</p>
                  <p className="text-sm text-text-main font-extrabold font-serif">5.0 Star</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 fill-current text-primary" />
              <span>Verified Vedic Astrologer</span>
            </div>

            <h2 className="text-text-main text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold mb-6 leading-tight text-left">
              Your Trusted Guide to Astrology & Life Solutions
            </h2>

            <div className="w-full h-[1px] bg-border-subtle mb-6"></div>

            {/* Interactive Tabs Header */}
            <div className="flex border-b border-border-subtle w-full mb-6 overflow-x-auto scrollbar-none gap-2 sm:gap-4">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 font-semibold text-sm whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "border-primary text-primary font-bold"
                      : "border-transparent text-text-sub hover:text-primary"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Interactive Tabs Content */}
            <div className="min-h-[280px] w-full bg-white rounded-2xl border border-border-subtle p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {activeTabContent && (
                    <>
                      <h3 className="text-primary font-serif font-extrabold text-lg sm:text-xl mb-4 text-left">
                        {activeTabContent.title}
                      </h3>
                      {activeTabContent.content}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Social CTA Buttons */}
            <div className="flex flex-wrap gap-4 w-full justify-start">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20ba5a] hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat with Astrologer
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 border-2 border-[#E4405F]/20 text-[#E4405F] font-bold rounded-xl hover:bg-[#E4405F]/5 transition-all transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Our Vision Card */}
        <div className="w-full mt-24">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1b3c] via-primary to-primary-light shadow-[0_20px_50px_rgba(54,61,133,0.3)] p-1">
            <div className="relative h-full w-full bg-[#1a1b3c]/95 backdrop-blur-sm rounded-[22px] p-8 md:p-12 text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 border border-white/20 shadow-inner">
                  <Sparkles className="w-8 h-8 text-[#93c5fd]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-white mb-6 drop-shadow-md tracking-wide">
                  Our Vision
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-primary-light mx-auto rounded-full mb-8 opacity-80"></div>
                <p className="text-xl md:text-2xl text-blue-50 font-medium leading-relaxed max-w-3xl mx-auto font-serif italic tracking-wide">
                  &quot;To become a trusted destination where people can confidently seek astrological guidance and receive insights that empower them to make better life decisions.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="w-full mt-24 border-t border-border-subtle/80 pt-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-primary font-serif font-extrabold text-3xl sm:text-4xl mb-4">
              Our Mission
            </h2>
            {/* Separator */}
            <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
              <div className="h-[1px] w-8 border-t border-primary"></div>
              <span className="text-primary text-sm">✦</span>
              <div className="h-[1px] w-8 border-t border-primary"></div>
            </div>
            <p className="text-text-sub text-base sm:text-lg leading-relaxed font-medium">
              To provide genuine, ethical, and practical astrological guidance that helps individuals gain clarity and confidence in important areas of life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {MISSION_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-border-subtle shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(54,61,133,0.08)] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-text-main font-serif font-bold text-sm sm:text-base group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
