import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS, CONTACT_INFO } from "../constants";

const LOGO_SRC = "/images/logo/GAI-Logo-v2.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: About */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-800 bg-white p-0.5">
                <Image
                  src={LOGO_SRC}
                  alt="Gokul's Astrological Insights"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </Link>
              <div>
                <p className="text-white font-serif font-bold text-lg leading-tight">
                  Gokul&apos;s Astrological Insights
                </p>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Trusted Astrology Guidance
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering individuals with ancient Vedic wisdom to navigate life&apos;s career, marriage, and personal challenges with absolute clarity.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-serif font-bold text-base tracking-wider mb-6 pb-2 border-b border-slate-800 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  <span>&bull;</span> Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  <span>&bull;</span> About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  <span>&bull;</span> Services
                </Link>
              </li>
              <li>
                <Link href="/services/online-consultation" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  <span>&bull;</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-serif font-bold text-base tracking-wider mb-6 pb-2 border-b border-slate-800 inline-block">
              Services
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  <span>&bull;</span> Jathagam Analysis
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  <span>&bull;</span> Marriage Matching
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  <span>&bull;</span> Numerology
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  <span>&bull;</span> Vastu Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-serif font-bold text-base tracking-wider mb-6 pb-2 border-b border-slate-800 inline-block">
              Contact Information
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">📞</span>
                <a href={`tel:${CONTACT_INFO.phone_tel}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">📧</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">🔮</span>
                <span>Astrosage ID: <span className="text-white font-semibold">{CONTACT_INFO.astrosage_id}</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5">📍</span>
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-slate-500 text-sm">
            © {year} Gokul&apos;s Astrological Insights. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#1877F2] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#E4405F] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
