"use client";

import ContactForm from "./ContactForm";
import { SOCIAL_LINKS, CONTACT_INFO } from "../constants";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  const mapUrl = "https://maps.google.com/?q=Thiruverkadu,+Chennai,+Tamil+Nadu,+India";

  return (
    <section
      id="contact"
      className="w-full py-20 bg-linear-to-b from-white to-surface-light px-4 sm:px-6 lg:px-8 border-t border-border-subtle"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION 1: HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="text-text-main text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold mb-6">
            Contact Gokul&apos;s Astrological Insights
          </h2>
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:items-stretch">
          {/* SECTION 2: CONTACT INFORMATION CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Official Name & Contact Methods */}
            <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
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
            <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">
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
            <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
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

          {/* Column 3: Contact Form */}
          <div className="lg:col-span-7 flex flex-col">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
