"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SOCIAL_LINKS } from "../constants";

const LOGO_SRC = "/images/logo/GAI-Logo-v2.png";

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

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <Link
            href="/"
            className="flex gap-3 items-center justify-center flex-shrink-0 cursor-pointer"
          >
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 mb-1 overflow-hidden rounded-full">
              <Image
                src={LOGO_SRC}
                alt="Gokul's Astrological Insights"
                fill
                className="object-contain"
                priority
                sizes="56px"
              />
            </div>
            <span className="text-primary font-bold text-[10px] sm:text-xs md:text-sm tracking-wide text-center leading-tight max-w-[9rem] md:max-w-none">
              Gokul&apos;s Astrological Insights
            </span>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-primary font-medium flex flex-col items-center group">
              <span>Home</span>
            </Link>
            <Link href="#about" className="text-text-main font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            
            {/* Our Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="flex items-center text-text-main font-medium hover:text-primary transition-colors py-8"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Our services</span>
                <svg className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden z-50">
                  <div className="py-2">
                    {SERVICES_SUB_MENU.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-text-main hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/services/online-consultation" className="text-text-main font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            
            {/* Language Selector */}
            <div className="flex items-center text-text-main cursor-pointer hover:text-primary transition-colors text-sm font-medium ml-4">
              <span>English</span>
              <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Right Button & Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 mr-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-main/80 hover:text-[#E4405F] transition-colors p-1"
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
                className="text-text-main/80 hover:text-[#1877F2] transition-colors p-1"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
            <button className="px-5 py-2 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition-colors">
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-primary hover:text-primary-light focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-primary bg-primary/5"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-text-main hover:text-primary hover:bg-primary/5 transition-colors"
            >
              About Us
            </Link>
            
            {/* Mobile Services Accordion */}
            <div>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-text-main hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <span>Our services</span>
                <svg className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMobileServicesOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  {SERVICES_SUB_MENU.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-text-main hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/services/online-consultation" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-text-main hover:text-primary hover:bg-primary/5 transition-colors"
            >
              Contact
            </Link>
            
            {/* Language Selector */}
            <div className="flex items-center px-3 py-2 rounded-md text-base font-medium text-text-main hover:text-primary hover:bg-primary/5 transition-colors cursor-pointer">
              <span>English</span>
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="mt-4 px-3">
              <button 
                className="w-full flex justify-center py-2 px-4 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition-colors"
              >
                Enquire Now
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="mt-6 flex justify-center items-center gap-6 px-3 pt-4 border-t border-gray-100">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-text-main hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all"
                aria-label="Follow Us on Instagram"
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
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-text-main hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-all"
                aria-label="Like Our Facebook Page"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-text-main hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all"
                aria-label="Book Consultation on WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
