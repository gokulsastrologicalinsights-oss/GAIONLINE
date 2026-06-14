import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../constants";

const LOGO_SRC = "/images/logo/GAI-Logo-v2.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-900 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: About */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center gap-3">
              <Link href="/" className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-800 bg-white p-0.5 shadow-inner">
                <Image
                  src={LOGO_SRC}
                  alt="Gokul's Astrological Insights"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </Link>
              <div>
                <h3 className="text-white font-serif font-extrabold text-lg leading-tight">
                  Gokul&apos;s Astrological Insights
                </h3>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                  Trusted Astrology Guidance
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering individuals with ancient Vedic wisdom to navigate life&apos;s career, marriage, and personal challenges with absolute clarity.
            </p>
            <p className="text-slate-400 text-sm font-semibold">
              Astrologer: <span className="text-white font-bold font-serif">Gokul Murugan</span>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-6">
            <h3 className="text-white font-serif font-extrabold text-base tracking-wider mb-6 pb-2 border-b border-slate-800 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-semibold">
                  <span>&bull;</span> Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-semibold">
                  <span>&bull;</span> About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-semibold">
                  <span>&bull;</span> Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-semibold">
                  <span>&bull;</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-serif font-extrabold text-base tracking-wider mb-6 pb-2 border-b border-slate-800 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/services/reports" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-semibold">
                  <span>&bull;</span> Horoscope Reading
                </Link>
              </li>
              <li>
                <Link href="/services/marriage-matching" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-semibold">
                  <span>&bull;</span> Marriage Matching
                </Link>
              </li>
              <li>
                <Link href="/services/online-consultation" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-semibold">
                  <span>&bull;</span> Career Guidance
                </Link>
              </li>
              <li>
                <Link href="/services/spiritual" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-semibold">
                  <span>&bull;</span> Pariharam Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-serif font-extrabold text-base tracking-wider mb-6 pb-2 border-b border-slate-800 inline-block">
              Contact Information
            </h3>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_INFO.phone_tel}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 text-primary-light shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-4.5 h-4.5 text-primary-light shrink-0 mt-0.5" />
                <span>Astrosage ID: <span className="text-white font-bold">{CONTACT_INFO.astrosage_id}</span></span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-primary-light shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-slate-500 text-sm font-semibold">
            © {year} Gokul&apos;s Astrological Insights. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@gokulsastrologicalinsights"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
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
    </footer>
  );
}
