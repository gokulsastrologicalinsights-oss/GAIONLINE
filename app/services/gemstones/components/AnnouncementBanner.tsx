"use client";

import React from "react";

export default function AnnouncementBanner() {
  const marqueeText = "✨ FREE Astrology Gemstone Wearing Guide PDF Included With Every Purchase • Wearing Instructions • Pooja Methods • Mantras • Purification Process • Best Day & Time To Wear ✨";

  return (
    <div className="w-full bg-slate-950 text-amber-400 py-2.5 text-xs font-bold uppercase tracking-wider overflow-hidden border-b border-slate-900 sticky top-[72px] sm:top-[88px] z-40 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="pr-12">
          {marqueeText}
        </span>
        <span className="pr-12">
          {marqueeText}
        </span>
        <span className="pr-12">
          {marqueeText}
        </span>
        <span className="pr-12">
          {marqueeText}
        </span>
      </div>
    </div>
  );
}
