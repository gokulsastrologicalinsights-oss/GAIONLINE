"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp, MessageSquare, Sparkles } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../constants";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop & Tablet Floating Buttons (Right Bottom Corner) */}
      <div className="fixed bottom-6 right-6 z-[9999] hidden sm:flex flex-col gap-3 items-end">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-slate-100 hover:bg-slate-50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Call Floating Button */}
        <a
          href={`tel:${CONTACT_INFO.phone_tel}`}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-[0_4px_20px_rgba(54,61,133,0.3)] hover:bg-primary-light hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Call Astrologer Gokul"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-300 group ring-4 ring-white/20 cursor-pointer"
          aria-label="Chat with Astrologer Gokul on WhatsApp"
        >
          <div className="relative flex items-center justify-center shrink-0">
            <span className="absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75 animate-ping -top-0.5 -right-0.5"></span>
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[8px] uppercase font-bold tracking-wider opacity-90">WhatsApp Now</span>
            <span className="text-xs sm:text-sm font-extrabold">{SOCIAL_LINKS.whatsapp_chat_text}</span>
          </div>
        </a>
      </div>

      {/* Mobile-Only Floating Action (WhatsApp Button sits higher to avoid overlapping sticky bar) */}
      <div className="fixed bottom-20 right-4 z-[9999] flex sm:hidden flex-col gap-2 items-end">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary shadow-[0_4px_15px_rgba(0,0,0,0.15)] border border-slate-100 active:scale-90 transition-all duration-300"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile Sticky Bottom Bar (Visible on mobile only, md:hidden) */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-2 flex items-center justify-between gap-2">
        {/* Call Now */}
        <a
          href={`tel:${CONTACT_INFO.phone_tel}`}
          className="flex-1 py-3 px-1.5 flex flex-col items-center justify-center gap-0.5 rounded-lg border border-primary/20 text-primary font-bold text-xs bg-primary/5 hover:bg-primary/10 transition-colors"
        >
          <Phone className="w-4 h-4 fill-current text-primary" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-1.5 flex flex-col items-center justify-center gap-0.5 rounded-lg border border-[#25D366]/20 text-[#20ba5a] font-bold text-xs bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#20ba5a]" />
          <span>WhatsApp</span>
        </a>

        {/* Book Consultation */}
        <a
          href="/services/online-consultation"
          className="flex-[1.5] py-3 px-2 flex items-center justify-center gap-1.5 rounded-lg bg-primary text-white font-extrabold text-xs shadow-md shadow-primary/20 hover:bg-primary-light transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5 fill-current text-amber-300 animate-pulse" />
          <span>Book Consultation</span>
        </a>
      </div>
    </>
  );
}
