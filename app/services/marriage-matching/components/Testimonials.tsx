"use client";
import React, { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ramesh & Priya",
    location: "Chennai",
    initial: "RP",
    text: "The compatibility analysis provided great clarity and confidence for our family before proceeding with marriage.",
  },
  {
    name: "Suresh & Kavitha",
    location: "Coimbatore",
    initial: "SK",
    text: "Very detailed explanation and useful remedies. Highly recommended.",
  },
  {
    name: "Meera & Rajesh",
    location: "Bangalore",
    initial: "MR",
    text: "The consultation was professional and easy to understand. Excellent guidance.",
  },
  {
    name: "Anand & Deepika",
    location: "Hyderabad",
    initial: "AD",
    text: "The horoscope matching helped us make an informed decision. Thank you for the valuable insights.",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0].getBoundingClientRect().width;
      const gap = 24; // 1.5rem
      containerRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
      setActiveDot(index);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0].getBoundingClientRect().width;
      const gap = 24;
      const scrollPosition = containerRef.current.scrollLeft;
      const index = Math.round(scrollPosition / (cardWidth + gap));
      setActiveDot(index);
    }
  };

  const scrollNext = () => {
    const nextIndex = activeDot === reviews.length - 1 ? 0 : activeDot + 1;
    scrollToIndex(nextIndex);
  };

  const scrollPrev = () => {
    const prevIndex = activeDot === 0 ? reviews.length - 1 : activeDot - 1;
    scrollToIndex(prevIndex);
  };

  // Add auto-play rotation
  useEffect(() => {
    const timer = setInterval(() => {
      scrollNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeDot]);

  return (
    <section className="mm-section mm-testi-section">
      <div className="mm-container">
        <div className="mm-section-header">
          <span className="mm-section-tag">✦ Success Stories ✦</span>
          <h2 className="mm-section-h2">What Our <span className="mm-gold">Clients Say</span></h2>
          <p className="mm-section-sub">
            Real stories of families and couples who found clarity through our marriage matching.
          </p>
        </div>

        <div className="mm-carousel-wrapper">
          {/* Carousel Arrows */}
          <button onClick={scrollPrev} className="mm-carousel-arrow mm-arrow-left" aria-label="Previous testimonial">
            <ChevronLeft className="w-5 h-5 text-amber-400" />
          </button>
          
          <button onClick={scrollNext} className="mm-carousel-arrow mm-arrow-right" aria-label="Next testimonial">
            <ChevronRight className="w-5 h-5 text-amber-400" />
          </button>

          {/* Carousel Scroll Container */}
          <div 
            ref={containerRef} 
            onScroll={handleScroll}
            className="mm-carousel-container"
          >
            {reviews.map((r, i) => (
              <div key={i} className="mm-carousel-card">
                <Quote className="mm-testi-quote-icon" />
                <div className="mm-testi-stars-row">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="mm-carousel-text">&ldquo;{r.text}&rdquo;</p>
                <div className="mm-carousel-user">
                  <div className="mm-carousel-avatar">{r.initial}</div>
                  <div className="mm-carousel-info">
                    <h4 className="mm-carousel-name">{r.name}</h4>
                    <span className="mm-carousel-location">📍 {r.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots Indicator */}
          <div className="mm-carousel-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`mm-carousel-dot ${activeDot === i ? "active" : ""}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
