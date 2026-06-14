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
            
            {/* Modern Contact Card */}
            <div className="rounded-[2rem] bg-gradient-to-br from-[#1a1b3c] via-primary to-primary-light p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between h-full group border border-white/10">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-blue-200/80 font-bold text-sm tracking-widest uppercase mb-2">
                  Contact Us
                </h3>
                <h2 className="text-white font-serif font-extrabold text-3xl md:text-4xl mb-10 drop-shadow-md">
                  Gokul&apos;s Astrological Insights
                </h2>

                <div className="space-y-8">
                  {/* Location */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <p className="text-blue-200/70 text-xs font-bold uppercase tracking-widest mb-1.5">Location</p>
                      <p className="text-white font-semibold text-lg">Thiruverkadu, Tamil Nadu, India</p>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-green-300" />
                    </div>
                    <div>
                      <p className="text-blue-200/70 text-xs font-bold uppercase tracking-widest mb-1.5">Phone / WhatsApp</p>
                      <a href={`tel:${CONTACT_INFO.phone_tel}`} className="text-white font-semibold text-lg hover:text-green-300 transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-blue-200" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-blue-200/70 text-xs font-bold uppercase tracking-widest mb-1.5">Email</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-semibold text-base md:text-lg hover:text-blue-200 transition-colors break-all">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Hours & Social Media */}
              <div className="relative z-10 mt-12 pt-6 border-t border-white/10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                     <Clock className="w-5 h-5 text-white/60" />
                     <span className="text-white/80 font-medium text-sm tracking-wide">Mon-Sat: 9 AM - 8 PM | Sun: By Appointment</span>
                  </div>

                  {/* Social Media Section */}
                  <div>
                    <p className="text-blue-200/70 text-xs font-bold uppercase tracking-widest mb-3">Connect With Us</p>
                    <div className="flex items-center gap-3">
                      {/* Facebook */}
                      <a
                        href={SOCIAL_LINKS.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 group shadow-inner"
                        title="Facebook"
                      >
                        <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      
                      {/* Instagram */}
                      <a
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300 group shadow-inner"
                        title="Instagram"
                      >
                        <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>

                      {/* YouTube */}
                      <a
                        href={SOCIAL_LINKS.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 group shadow-inner"
                        title="YouTube"
                      >
                        <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
                        </svg>
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={SOCIAL_LINKS.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 group shadow-inner"
                        title="WhatsApp"
                      >
                        <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </a>
                    </div>
                  </div>
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
