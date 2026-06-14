"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SOCIAL_LINKS } from "../../../constants";

const WA_HELP_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I am browsing your gemstones page and need help choosing the right gemstone.")}`;

export default function FloatingWA() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup bubble after 2.5 seconds of load time
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[999] flex flex-col items-start select-none">
      
      {/* Delayed Chat Popup Bubble */}
      {showPopup && (
        <div className="relative mb-3 bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl p-4 w-60 sm:w-64 animate-fadeIn text-left">
          
          {/* Close button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowPopup(false);
            }}
            className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer focus:outline-none"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Text Content */}
          <h4 className="text-primary font-serif font-extrabold text-xs sm:text-sm mb-1 pr-4">
            Need Help Choosing a Gemstone?
          </h4>
          <p className="text-[#20ba5a] text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping shrink-0" />
            <span>Chat with us on WhatsApp</span>
          </p>
        </div>
      )}

      {/* WhatsApp Action Button */}
      <a
        href={WA_HELP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:scale-108 active:scale-95 transition-all duration-300 ring-4 ring-white/20 cursor-pointer"
        aria-label="Ask help choosing a gemstone on WhatsApp"
        onClick={() => setShowPopup(false)} // Close popup on click
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
      
    </div>
  );
}
