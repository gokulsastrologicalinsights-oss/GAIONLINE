"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../constants";

const LOGO_SRC = "/images/logo/GAI-Logo-v5.png";

const SERVICES_SUB_MENU = [
  { name: "Online Consultation", href: "/services/online-consultation" },
  { name: "Marriage Matching", href: "/services/marriage-matching" },
  { name: "Numerology", href: "/services/numerology" },
  { name: "Gemstones", href: "/services/gemstones" },
  { name: "Spiritual Services", href: "/services/spiritual" },
  { name: "Astrology Reports", href: "/services/reports" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex gap-3 items-center justify-center flex-shrink-0 cursor-pointer group"
          >
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
              <Image
                src={LOGO_SRC}
                alt="Gokul's Astrological Insights"
                fill
                className="object-cover scale-[1.15]"
                priority
                sizes="56px"
              />
            </div>
            <span className="text-primary font-serif font-extrabold text-xs sm:text-sm md:text-base tracking-wide text-left leading-tight max-w-[10rem] md:max-w-none group-hover:text-primary-light transition-colors duration-300">
              Gokul&apos;s Astrological Insights
            </span>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-primary font-bold text-sm tracking-wide hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-text-main/80 font-bold text-sm tracking-wide hover:text-primary transition-colors duration-300"
            >
              About Us
            </Link>

            {/* Our Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center text-text-main/80 font-bold text-sm tracking-wide hover:text-primary transition-colors duration-300 py-4 cursor-pointer"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-0 w-60 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    {SERVICES_SUB_MENU.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-5 py-3 text-sm font-semibold text-text-main hover:bg-primary/5 hover:text-primary transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-text-main/80 font-bold text-sm tracking-wide hover:text-primary transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Right Button & Social Links */}
          <div className="hidden md:flex items-center gap-4">
            {/* Phone link */}
            <a
              href={`tel:${CONTACT_INFO.phone_tel}`}
              className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300 font-extrabold text-sm border-r border-slate-200 pr-4 mr-1"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-main/60 hover:text-primary hover:scale-110 transition-all p-1"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-main/60 hover:text-primary hover:scale-110 transition-all p-1"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-main/60 hover:text-primary hover:scale-110 transition-all p-1"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>

            <Link href="/services/online-consultation">
              <button className="px-6 py-2.5 bg-primary text-white font-extrabold text-sm rounded-lg hover:bg-primary-light shadow-md shadow-primary/10 hover:shadow-lg transition-all duration-300 cursor-pointer">
                Enquire Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-primary hover:text-primary-light focus:outline-none p-1 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-8 space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-bold text-primary bg-primary/5 hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-bold text-text-main hover:text-primary hover:bg-primary/5 transition-colors duration-300"
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center px-4 py-2.5 rounded-lg text-base font-bold text-text-main hover:text-primary hover:bg-primary/5 transition-colors duration-300"
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-6 space-y-1 mt-1 border-l-2 border-slate-100 ml-4">
                  {SERVICES_SUB_MENU.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-text-main hover:text-primary hover:bg-primary/5 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-bold text-text-main hover:text-primary hover:bg-primary/5 transition-colors duration-300"
            >
              Contact
            </Link>

            {/* Phone Info for Mobile */}
            <div className="px-4 py-3 border-t border-slate-100 mt-4">
              <a
                href={`tel:${CONTACT_INFO.phone_tel}`}
                className="flex items-center gap-2.5 text-primary font-extrabold text-base hover:text-primary-light transition-colors duration-300"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>

            {/* Enquire Button */}
            <div className="pt-2 px-4">
              <Link href="/services/online-consultation" onClick={() => setIsOpen(false)}>
                <button className="w-full py-3 bg-primary text-white font-extrabold rounded-lg shadow-md hover:bg-primary-light transition-colors duration-300">
                  Enquire Now
                </button>
              </Link>
            </div>

            {/* Social Icons Row */}
            <div className="pt-6 flex justify-center items-center gap-6 border-t border-slate-100 mt-6">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 text-text-main/70 hover:text-primary hover:bg-slate-100 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 text-text-main/70 hover:text-primary hover:bg-slate-100 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 text-text-main/70 hover:text-primary hover:bg-slate-100 transition-all"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
