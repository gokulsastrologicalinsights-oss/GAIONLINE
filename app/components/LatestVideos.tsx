"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

interface Video {
  title: string;
  duration: string;
  category: string;
  gradient: string;
  href: string;
}

const VIDEOS: Video[] = [
  {
    title: "எதிரிகள் யார்? | Edhirigal Yaar?",
    duration: "Playlist",
    category: "Astrology Series",
    gradient: "from-blue-600 via-indigo-900 to-slate-950",
    href: "https://www.youtube.com/playlist?list=PLW9HlEdXq1ZU3Umb4HuUWOrHxuz4sY1Ti",
  },
  {
    title: "பிறவியிலேயே கிடைத்த தனிச்சிறப்பு | Piraviyileye Kidaitha Thani Sirappu",
    duration: "Playlist",
    category: "Astrology Series",
    gradient: "from-amber-600 via-orange-900 to-slate-950",
    href: "https://www.youtube.com/playlist?list=PLW9HlEdXq1ZWo4QPM4w5dJQ8cOSbMiOhM",
  },
  {
    title: "கண் திருஷ்டி பரிகாரம் | Kandrishti Parigaram",
    duration: "Playlist",
    category: "Pariharams",
    gradient: "from-rose-600 via-pink-900 to-slate-950",
    href: "https://www.youtube.com/playlist?list=PLW9HlEdXq1ZXBqoHWsOSwp167gjA7dwGF",
  },
  {
    title: "அனைத்து ராசி & நட்சத்திர பலன்கள் | All Raasi Natchathiram",
    duration: "Playlist",
    category: "Astrology Series",
    gradient: "from-emerald-600 via-teal-900 to-slate-950",
    href: "https://www.youtube.com/playlist?list=PLW9HlEdXq1ZUalvElOqZ6mQpZ4tqF4tyF",
  },
];

export default function LatestVideos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, VIDEOS.length - visibleCards);
  const activeIndex = Math.min(currentIndex, maxIndex);

  useEffect(() => {
    if (maxIndex === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-20 bg-[#FAFAFC] flex justify-center px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
            </svg>
            <span>YouTube Videos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-dark font-extrabold mb-4">
            Latest Astrological Videos
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
          <p className="text-text-sub text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Watch informative videos on planetary transits, matching guidelines, and traditional remedies from our official channel.
          </p>
        </div>

        {/* Video Slider Container */}
        <div className="relative w-full px-0 sm:px-4 md:px-12">
          {/* Slider Viewport */}
          <div className="overflow-hidden w-full">
            <motion.div
              animate={{ x: `-${activeIndex * (100 / visibleCards)}%` }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
              className="flex"
              style={{
                width: `${(VIDEOS.length / visibleCards) * 100}%`,
              }}
            >
              {VIDEOS.map((video, index) => (
                <div
                  key={index}
                  className="px-4 flex-shrink-0"
                  style={{
                    width: `${100 / VIDEOS.length}%`,
                  }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-border-subtle flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(54,61,133,0.1)] hover:border-primary/20 transition-all duration-300 cursor-pointer h-full">
                    {/* Video Thumbnail */}
                    <a
                      href={video.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block aspect-[16/9] overflow-hidden cursor-pointer"
                    >
                      {/* Visual Backdrop */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-90 transition-transform duration-500 group-hover:scale-105`}></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none"></div>
                      <div className="absolute inset-0 bg-black/10"></div>

                      {/* Duration Badge */}
                      <span className="absolute bottom-3 right-3 bg-black/75 text-white font-mono text-xs px-2.5 py-0.5 rounded font-bold z-10">
                        {video.duration}
                      </span>

                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border border-white/20 z-10">
                        {video.category}
                      </span>

                      {/* Glow & Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-14 h-14 rounded-full bg-white text-red-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        </div>
                      </div>
                    </a>

                    {/* Title & Actions */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <h3 className="text-text-main font-serif font-bold text-lg leading-snug mb-5 group-hover:text-primary transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      
                      <a
                        href={video.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-600 hover:text-red-600 font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
                        </svg>
                        <span>Watch on YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          {maxIndex > 0 && (
            <>
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-12 h-12 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/20 transition-all duration-300 z-20 cursor-pointer focus:outline-none"
                aria-label="Previous videos"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-12 h-12 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/20 transition-all duration-300 z-20 cursor-pointer focus:outline-none"
                aria-label="Next videos"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots / Page Indicators */}
              <div className="flex justify-center gap-2.5 mt-10">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                      activeIndex === i
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
