"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOGO_SRC = "/images/logo/GAI-Logo.png";

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

            <Link href="#contact" className="text-text-main font-medium hover:text-primary transition-colors">
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

          {/* Right Button */}
          <div className="hidden md:flex items-center">
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
              href="#contact" 
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
          </div>
        </div>
      )}
    </nav>
  );
}
