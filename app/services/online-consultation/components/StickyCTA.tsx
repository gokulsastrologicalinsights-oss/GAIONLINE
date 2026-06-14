"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar, X } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../../../constants";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isInFormView, setIsInFormView] = useState(false);

  useEffect(() => {
    // Show sticky CTA only after scrolling down 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially

    // Setup observer to hide CTA when the booking form itself is in viewport
    const formEl = document.getElementById("form");
    let observer: IntersectionObserver | null = null;
    
    if (formEl) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsInFormView(entry.isIntersecting);
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
      observer.observe(formEl);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formEl = document.getElementById("form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const waLink = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I would like to book an online consultation.")}`;

  // If the user hasn't scrolled far enough, or the booking form is in view, don't show the floating bar
  const shouldShowCTA = isVisible && !isInFormView;

  return (
    <AnimatePresence>
      {shouldShowCTA && (
        <>
          {!isCollapsed ? (
            /* Main Sticky Bottom Bar */
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="fixed bottom-0 left-0 right-0 z-[999] px-0 sm:px-4 md:px-6 pb-0 sm:pb-4 md:pb-6 pointer-events-none"
            >
              <div className="mx-auto max-w-5xl w-full pointer-events-auto">
                <div className="relative bg-[#0f122c]/95 sm:bg-[#13183d]/90 backdrop-blur-lg border-t sm:border border-[#d4a017]/30 text-white sm:rounded-2xl shadow-[0_20px_50px_rgba(54,61,133,0.3)] px-4 py-3 sm:px-6 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
                  
                  {/* Close / Collapse Button */}
                  <button
                    onClick={() => setIsCollapsed(true)}
                    className="absolute -top-3 -right-3 hidden sm:flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white transition-all shadow-md cursor-pointer focus:outline-none"
                    aria-label="Collapse CTA Bar"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Close Button for Mobile (Top Right of Bar) */}
                  <button
                    onClick={() => setIsCollapsed(true)}
                    className="absolute top-2.5 right-2.5 flex sm:hidden text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                    aria-label="Collapse CTA Bar"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Left Section: Phone Callout */}
                  <div className="flex items-center gap-3 w-full md:w-auto pr-6 md:pr-0 border-b border-white/5 pb-2 md:pb-0 md:border-b-0">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Phone className="w-5 h-5 fill-current animate-pulse" />
                    </div>
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Call Expert Astrologer
                      </span>
                      <a
                        href={`tel:${CONTACT_INFO.phone_tel}`}
                        className="text-base sm:text-lg font-extrabold text-[#d4a017] hover:text-amber-400 transition-colors"
                      >
                        +91 9444559071
                      </a>
                    </div>
                  </div>

                  {/* Right Section: Action Buttons */}
                  <div className="flex items-center gap-2.5 w-full md:w-auto">
                    {/* WhatsApp Button */}
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-[#25d366]/30 hover:border-[#25d366]/50 bg-[#25d366]/10 hover:bg-[#25d366]/25 text-[#25d366] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 group cursor-pointer"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-current group-hover:scale-110 transition-transform duration-300" />
                      <span>WhatsApp Now</span>
                    </a>

                    {/* Book Button */}
                    <a
                      href="#form"
                      onClick={handleBookClick}
                      className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/10 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] group cursor-pointer"
                    >
                      <Calendar className="w-4.5 h-4.5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Book Consultation</span>
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          ) : (
            /* Collapsed Small Floating Button (Resting in corner) */
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="fixed bottom-6 right-6 z-[999]"
            >
              <button
                onClick={() => setIsCollapsed(false)}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-indigo-700 border border-[#d4a017]/40 text-white shadow-[0_8px_30px_rgba(54,61,133,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer relative group focus:outline-none"
                aria-label="Expand Booking Bar"
              >
                {/* Notification pulse badge */}
                <span className="absolute -top-0.5 -right-0.5 inline-flex h-3.5 w-3.5 rounded-full bg-[#25d366] border-2 border-[#13183d] opacity-100 animate-ping"></span>
                <span className="absolute -top-0.5 -right-0.5 inline-flex h-3.5 w-3.5 rounded-full bg-[#25d366] border-2 border-[#13183d] opacity-100"></span>
                
                <Calendar className="w-6 h-6 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />

                {/* Tooltip */}
                <div className="absolute right-16 bg-slate-900 border border-slate-700 text-white text-xs font-bold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                  Book Consultation
                </div>
              </button>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
