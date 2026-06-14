"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { 
  Phone, Mail, MapPin, Clock, 
  Star, HelpCircle, ChevronDown, ChevronLeft, ChevronRight, 
  ExternalLink
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import { SOCIAL_LINKS, CONTACT_INFO } from "../constants";

// ==========================================
// FAQ Interface & Data
// ==========================================
interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Is online consultation available?",
    answer: "Yes, we offer comprehensive online consultations worldwide. You can connect with Astrologer Gokul Murugan via Phone Calls, WhatsApp Voice/Video Calls, Zoom, or Google Meet from the comfort of your home."
  },
  {
    question: "Which languages are supported?",
    answer: "We support consultations in both Tamil and English to serve clients from different regions and backgrounds."
  },
  {
    question: "How long does a consultation take?",
    answer: "A typical consultation lasts between 30 to 45 minutes, giving you ample time to ask questions and get detailed, clear explanations."
  },
  {
    question: "What details are required?",
    answer: "For an accurate analysis of your birth chart (Jathagam), you need to provide your Date of Birth, Exact Time of Birth (including AM/PM), and Place of Birth."
  },
  {
    question: "Can I consult from outside India?",
    answer: "Absolutely. We routinely consult for clients in the US, UK, Canada, UAE, Singapore, Malaysia, and Australia. Payments can be easily processed online."
  }
];

// ==========================================
// Testimonial Interface & Data
// ==========================================
interface Testimonial {
  text: string;
  location: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: "Accurate marriage matching and predictions.",
    location: "Chennai",
    rating: 5
  },
  {
    text: "Helpful guidance regarding career and finance.",
    location: "Coimbatore",
    rating: 5
  },
  {
    text: "Professional and easy to communicate.",
    location: "Madurai",
    rating: 5
  }
];

// ==========================================
// Stat Interface & Component
// ==========================================
interface StatProps {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

function StatCard({ to, prefix = "", suffix = "", label, sublabel }: StatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      const controls = animate(0, to, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.floor(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [inView, to]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-2xl p-6 border border-border-subtle shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(54,61,133,0.08)] hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center group"
    >
      <div className="text-3xl md:text-4xl font-serif font-extrabold text-primary mb-2 flex items-center justify-center">
        <span>{prefix}</span>
        <span ref={ref}>0</span>
        <span className="text-primary-light font-sans">{suffix}</span>
      </div>
      <p className="text-text-main text-sm font-bold tracking-wide uppercase">
        {label}
      </p>
      <p className="text-text-sub text-xs font-semibold mt-1">
        {sublabel}
      </p>
    </motion.div>
  );
}

// ==========================================
// FAQ Accordion Item Component
// ==========================================
function FAQAccordionItem({ question, answer, isOpen, onClick }: FAQItem & { isOpen: boolean; onClick: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-border-subtle shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-serif font-bold text-base md:text-lg text-primary hover:text-primary-light transition-colors cursor-pointer"
      >
        <span className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-primary-light shrink-0" />
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-text-sub shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-1 text-text-sub text-sm md:text-base leading-relaxed border-t border-slate-50 font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ==========================================
// Main Client Page Component
// ==========================================
export default function ContactClientPage() {
  const mapUrl = "https://maps.google.com/?q=Thiruverkadu,+Chennai,+Tamil+Nadu,+India";
  const [faqIndex, setFaqIndex] = useState<number | null>(0);
  const [testiIndex, setTestiIndex] = useState(0);
  const [testiDirection, setTestiDirection] = useState(0);

  const toggleFaq = (index: number) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  const nextTestimonial = () => {
    setTestiDirection(1);
    setTestiIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setTestiDirection(-1);
    setTestiIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  // Inject JSON-LD Schema
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gokulsastrologicalinsights.com/#local-business",
        "name": "Gokul's Astrological Insights",
        "image": "https://gokulsastrologicalinsights.com/images/logo/GAI-Logo-v2.png",
        "telephone": CONTACT_INFO.phone_tel,
        "email": CONTACT_INFO.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "url": "https://gokulsastrologicalinsights.com/contact"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://gokulsastrologicalinsights.com/#professional-service",
        "name": "Gokul's Astrological Insights",
        "image": "https://gokulsastrologicalinsights.com/images/logo/GAI-Logo-v2.png",
        "telephone": CONTACT_INFO.phone_tel,
        "email": CONTACT_INFO.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "url": "https://gokulsastrologicalinsights.com/contact"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-16">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* SECTION 1: HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="text-primary font-bold text-sm tracking-widest uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h1 className="text-text-main text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold mb-6">
            Contact Gokul&apos;s Astrological Insights
          </h1>
          <div className="flex items-center justify-center space-x-4 opacity-80 mb-6">
            <div className="h-px w-12 md:w-16 border-t border-dashed border-border-subtle" />
            <span className="text-primary text-sm">✦</span>
            <div className="h-px w-12 md:w-16 border-t border-dashed border-border-subtle" />
          </div>
          <p className="max-w-3xl mx-auto text-text-sub text-base md:text-lg leading-relaxed font-medium">
            Connect with us for trusted astrology consultations, Jathagam analysis, Marriage Matching, Name Selection, Muhurtham, Career Guidance and personalized solutions.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 font-bold text-sm px-4 py-2 rounded-full border border-green-100 shadow-xs mt-6 animate-pulse">
            <span>⚡ Usually replies within 15 minutes on WhatsApp.</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3 & 4 & 5 & 6: CONTACT CARDS & FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:items-stretch">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Official Name & Contact Methods */}
            <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
              <h3 className="text-primary font-serif font-extrabold text-lg uppercase tracking-wide mb-1">
                Gokul&apos;s Astrological Insights
              </h3>
              <p className="text-text-sub text-xs font-semibold mb-6">
                Reach us directly through our official channels.
              </p>
              
              <div className="flex flex-col gap-4">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.phone_tel}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl border border-border-subtle hover:border-primary-light hover:shadow-xs transition-all group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-text-sub text-[10px] font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-text-main text-sm md:text-base font-bold">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl border border-border-subtle hover:border-primary-light hover:shadow-xs transition-all group"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-text-sub text-[10px] font-bold uppercase tracking-wider">Email</p>
                    <p className="text-text-main text-xs md:text-sm font-bold break-all">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                {/* Social Icons Row */}
                <div className="grid grid-cols-4 gap-3 mt-2">
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-border-subtle hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group"
                    title="WhatsApp"
                  >
                    <svg className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-[10px] font-bold mt-1 text-slate-500">WhatsApp</span>
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-border-subtle hover:border-[#E4405F] hover:bg-[#E4405F]/5 transition-all group"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5 text-[#E4405F] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="text-[10px] font-bold mt-1 text-slate-500">Instagram</span>
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-border-subtle hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all group"
                    title="Facebook"
                  >
                    <svg className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="text-[10px] font-bold mt-1 text-slate-500">Facebook</span>
                  </a>
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-border-subtle hover:border-[#FF0000] hover:bg-[#FF0000]/5 transition-all group"
                    title="YouTube"
                  >
                    <svg className="w-5 h-5 text-[#FF0000] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
                    </svg>
                    <span className="text-[10px] font-bold mt-1 text-slate-500">YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Location Card */}
            <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-primary font-serif font-extrabold text-lg uppercase tracking-wide">
                    Location
                  </h3>
                </div>
                <p className="text-text-main font-bold text-base leading-relaxed">
                  📍 Thiruverkadu, Chennai
                </p>
                <p className="text-text-sub text-sm font-semibold mt-1">
                  Tamil Nadu, India
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-border-subtle hover:border-primary-light hover:bg-slate-50 text-xs font-bold text-primary transition-all text-center cursor-pointer"
                >
                  View Map
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary-light text-xs font-bold transition-all text-center shadow-md shadow-primary/10 hover:shadow-lg cursor-pointer"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Card 3: Consultation hours */}
            <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-primary font-serif font-extrabold text-lg uppercase tracking-wide">
                  Consultation Hours
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-1 border-b border-dashed border-slate-100">
                  <span className="text-text-sub text-sm font-bold">Monday – Saturday</span>
                  <span className="text-text-main text-sm font-extrabold">9 AM – 8 PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-text-sub text-sm font-bold">Sunday</span>
                  <span className="text-primary-light text-sm font-extrabold">By Appointment</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 flex flex-col">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* SECTION 7: TRUST STATISTICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 border-t border-border-subtle pt-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-primary font-bold">
            Trusted Astrology Consultations
          </h2>
          <p className="text-text-sub text-sm font-medium mt-2">
            Why thousands of clients choose Gokul&apos;s Astrological Insights.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <StatCard to={10000} suffix="+" label="Consultations" sublabel="Happy clients worldwide" />
          <StatCard to={99} suffix="%" label="Accurate Predictions" sublabel="Highly precise readings" />
          <StatCard to={2} suffix=" Langs" label="Tamil & English Support" sublabel="Bilingual consultations" />
          <StatCard to={100} suffix="%" label="Online Available" sublabel="Connect from anywhere" />
          <StatCard to={15} suffix=" Min" label="Fast Reply" sublabel="Super responsive support" />
          <StatCard to={10} suffix="+" label="Years Guidance" sublabel="Experienced astrologer" />
        </div>
      </section>

      {/* SECTION 8: CLIENT TESTIMONIALS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 flex flex-col items-center">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-primary/5 px-3.5 py-1 rounded-full border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-current text-primary" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-primary font-bold">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center space-x-3 mt-3 opacity-60">
            <div className="h-[1px] w-6 border-t border-primary"></div>
            <span className="text-primary text-[10px]">✦</span>
            <div className="h-[1px] w-6 border-t border-primary"></div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full bg-white rounded-3xl p-8 md:p-12 border border-border-subtle shadow-[0_12px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-hidden min-h-[260px]">
          <div className="relative z-10 flex-grow flex items-center justify-center">
            <AnimatePresence initial={false} custom={testiDirection} mode="wait">
              <motion.div
                key={testiIndex}
                custom={testiDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full flex flex-col items-center text-center"
              >
                {/* Stars */}
                <div className="flex text-amber-500 mb-5 gap-1">
                  {Array.from({ length: TESTIMONIALS[testiIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current stroke-none" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-text-main text-lg md:text-xl font-medium font-serif leading-relaxed italic mb-6 max-w-2xl">
                  &ldquo;{TESTIMONIALS[testiIndex].text}&rdquo;
                </p>

                {/* Source */}
                <p className="text-primary font-serif font-extrabold text-sm md:text-base">
                  — Client from {TESTIMONIALS[testiIndex].location}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 relative z-20">
            {/* Dots */}
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setTestiDirection(i > testiIndex ? 1 : -1);
                    setTestiIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === testiIndex ? "bg-primary w-5" : "bg-slate-200 w-2"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 rounded-xl border border-slate-200 text-text-sub hover:bg-primary/5 hover:text-primary active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-9 h-9 rounded-xl border border-slate-200 text-text-sub hover:bg-primary/5 hover:text-primary active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-text-sub text-sm font-medium mt-2">
            Got questions? We have answers.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <FAQAccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={faqIndex === idx}
              onClick={() => toggleFaq(idx)}
            />
          ))}
        </div>
      </section>

      {/* SECTION 10: LOCATION MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 border-t border-border-subtle pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-2">
              OUR OFFICE
            </span>
            <h2 className="text-3xl font-serif text-text-main font-bold mb-4">
              Find Us
            </h2>
            <p className="text-text-sub font-semibold text-base mb-2">
              📍 Thiruverkadu, Chennai, Tamil Nadu
            </p>
            <p className="text-text-sub text-sm leading-relaxed mb-6 font-medium">
              For in-person consultations, visit our office at Thiruverkadu. We recommend scheduling an appointment in advance.
            </p>

            <div className="flex gap-4">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl border border-border-subtle hover:border-primary hover:bg-slate-50 text-sm font-bold text-primary transition-all cursor-pointer"
              >
                View on Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-primary text-white hover:bg-primary-light text-sm font-bold transition-all shadow-md shadow-primary/10 hover:shadow-lg cursor-pointer"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-[350px] w-full rounded-2xl overflow-hidden border border-border-subtle shadow-md bg-white">
            <iframe
              title="Google Map Location of Thiruverkadu Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2570081290374!2d80.1130635!3d13.0828552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52623d3dbdbdbd%3A0x8c7e1ef0eb8473a2!2sThiruverkadu%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 md:p-14 text-white text-center shadow-xl shadow-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold mb-4">
              Need Immediate Guidance?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg mb-8 font-medium">
              Connect directly with Astrologer Gokul for personalized astrology consultations.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-6 justify-center w-full max-w-lg mx-auto">
              <a
                href={`tel:${CONTACT_INFO.phone_tel}`}
                className="flex items-center gap-2.5 text-2xl md:text-3xl font-extrabold font-serif hover:text-amber-200 transition-colors"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7 shrink-0 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 w-full sm:w-auto">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-extrabold rounded-xl shadow-lg shadow-green-500/20 hover:bg-[#20ba5a] hover:scale-102 active:scale-98 transition-all text-base cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone_tel}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary hover:bg-slate-50 font-extrabold rounded-xl shadow-lg shadow-white/5 hover:scale-102 active:scale-98 transition-all text-base border border-slate-200 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
