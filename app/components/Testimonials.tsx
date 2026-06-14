"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Thushitha Sureshkumar Sureshkumar",
    location: "Google Review",
    text: "I recently had a horoscope reading done by Mr Gollum, the astrologer, and I wanted to share my exceptional experience. His reading was both precise and accurate, addressing all of my questions with great detail. I was thoroughly satisfied with his service and appreciated his insights. If you're considering a horoscope reading, I highly recommend Mr Gokul for a professional and insightful experience.",
    rating: 5,
    avatar: "/images/client-thusitha.png",
  },
  {
    name: "Bala Raman",
    location: "Google Review",
    text: "I had an online astrology session today, and it was truly amazing! The predictions were very accurate, and the guidance felt personal and clear. Highly recommend this astrologer for genuine insights.",
    rating: 5,
    avatar: "/images/client-balaraman.png",
  },
  {
    name: "S.Bhuvaneswari",
    location: "Google Review",
    text: "He is giving a clear cut view of the question what we raise. He will what we expect will happen or not. Worth for the dhakshinai",
    rating: 5,
    avatar: "/images/client-bhuvaneshwari.png",
  },
  {
    name: "james p",
    location: "Google Review",
    text: "All information provided was similar and was happened in my life... People can trust and check your prediction..",
    rating: 5,
    avatar: "/images/client-james.png",
  },
  {
    name: "Dharshini Sundar",
    location: "Google Review",
    text: "Such great astrological insights and predictions, Truly impressive and accurate✨",
    rating: 5,
    avatar: "/images/client-dharshini.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const current = TESTIMONIALS[index];

  return (
    <section className="bg-white w-full py-24 flex flex-col items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-current text-primary" />
            <span>Client Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-dark font-extrabold mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-3xl min-h-[320px] bg-white rounded-2xl p-8 md:p-12 border border-border-subtle shadow-[0_10px_35px_rgba(0,0,0,0.06)] flex flex-col justify-between">
          <Quote className="absolute top-6 left-8 w-14 h-14 text-slate-100 fill-current -z-0 pointer-events-none" />

          {/* Testimonial Content */}
          <div className="relative z-10 flex-grow flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col items-center text-center"
              >
                {/* Stars */}
                <div className="flex text-amber-500 mb-6 gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current stroke-none" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-text-main text-lg md:text-xl font-medium font-serif leading-relaxed mb-8 italic max-w-2xl">
                  &ldquo;{current.text}&rdquo;
                </p>

                {/* Client Profile */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-inner">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-primary font-serif font-extrabold text-base leading-tight">
                      {current.name}
                    </h4>
                    <p className="text-text-sub text-xs font-semibold uppercase tracking-wider mt-0.5">
                      Verified Client &bull; {current.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-10 relative z-20">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === index ? "bg-primary w-6" : "bg-slate-200 w-2.5"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-200 text-text-sub hover:bg-primary/5 hover:text-primary hover:border-primary-light/30 active:scale-90 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-200 text-text-sub hover:bg-primary/5 hover:text-primary hover:border-primary-light/30 active:scale-90 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
