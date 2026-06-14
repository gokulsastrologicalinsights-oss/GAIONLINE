"use client";
import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../../../constants";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetEl = document.getElementById("types");
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const waLink = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I would like to book a Marriage Matching service.")}`;
  const callLink = `tel:${CONTACT_INFO.phone_tel}`;

  return (
    <div className={`mm-sticky-mobile-bar ${isVisible ? "visible" : ""}`}>
      <div className="mm-sticky-bar-inner">
        {/* Call Button */}
        <a href={callLink} className="mm-sticky-btn mm-sticky-btn-call">
          <Phone className="w-5 h-5 fill-current" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="mm-sticky-btn mm-sticky-btn-wa">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Book Now Button */}
        <a href="#types" onClick={handleBookClick} className="mm-sticky-btn mm-sticky-btn-book">
          <Calendar className="w-5 h-5" />
          <span>Book Now</span>
        </a>
      </div>
    </div>
  );
}
