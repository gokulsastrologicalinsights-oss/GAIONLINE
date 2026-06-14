"use client";
import React from "react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../../../constants";

const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I'm interested in Marriage Matching services.")}`;
const CALL_LINK = `tel:${CONTACT_INFO.phone_tel}`;

export default function FinalCTA() {
  return (
    <section className="mm-final-cta">
      <div className="mm-cta-glow" />
      <div className="mm-container mm-cta-inner">
        <span className="mm-section-tag">✦ Take Action ✦</span>
        <h2 className="mm-cta-h2">Ready to Find Your Ideal Life Partner?</h2>
        <p className="mm-cta-sub">
          Get accurate horoscope compatibility analysis and personalized guidance to build a happy and successful married life.
        </p>
        <div className="mm-cta-btns">
          <a href="#types" className="mm-btn-primary mm-btn-large">
            Book Marriage Matching
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mm-btn-wa mm-btn-large">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="mr-1.5 inline-block shrink-0 align-middle">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            WhatsApp Us
          </a>
          <a href={CALL_LINK} className="mm-btn-outline mm-btn-large">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="mr-1.5 inline-block shrink-0 align-middle">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
