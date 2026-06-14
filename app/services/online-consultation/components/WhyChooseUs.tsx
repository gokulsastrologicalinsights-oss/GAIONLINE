"use client";

import Image from "next/image";

const features = [
  {
    icon: "🔮",
    title: "Astrologer: Gokul Murugan",
    desc: "Expert Vedic & KP Astrologer providing precise Jathagam analysis.",
    color: "bg-indigo-50/50 border-indigo-100/50 text-indigo-600",
  },
  {
    icon: "⭐",
    title: "Personalized Consultation",
    desc: "Tailored 1-on-1 sessions addressing your specific life questions and timeline.",
    color: "bg-amber-50/50 border-amber-100/50 text-amber-600",
  },
  {
    icon: "📌",
    title: "Astrosage ID: 11195",
    desc: "Verified expert badge on the world's leading online astrology platform.",
    color: "bg-violet-50/50 border-violet-100/50 text-violet-600",
  },
  {
    icon: "🌍",
    title: "Global Client Base",
    desc: "Guiding clients across India and globally (USA, UK, Canada, UAE, Singapore).",
    color: "bg-blue-50/50 border-blue-100/50 text-blue-600",
  },
  {
    icon: "🔒",
    title: "Confidential Guidance",
    desc: "Your personal details, chart data, and discussions are kept 100% private.",
    color: "bg-emerald-50/50 border-emerald-100/50 text-emerald-600",
  },
  {
    icon: "📞",
    title: "Direct WhatsApp Support",
    desc: "Direct communication on WhatsApp for scheduling and quick support.",
    color: "bg-rose-50/50 border-rose-100/50 text-rose-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-white via-surface-light to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background styling elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_right,rgba(54,61,133,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
            ✦ Trusted Guidance ✦
          </span>
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            Why Choose Gokul&apos;s Astrological Insights?
          </h2>
          <p className="text-text-sub text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Experience the difference of verified, professional, and personalized astrological analysis.
          </p>
        </div>

        {/* Two-Column Grid: Image & Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Astrologer Portrait */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border-[6px] border-white bg-slate-50 ring-1 ring-slate-200/50 group select-none">
              <Image
                src="/images/Gokul-image-vertical.jpeg"
                alt="Astrologer Gokul Murugan"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                sizes="(max-w-768px) 100vw, 30vw"
                priority
              />
              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Responsive Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(54,61,133,0.04)] hover:border-primary/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col items-start text-left group"
                >
                  {/* Glowing custom icon container */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 border shadow-xs transition-transform duration-300 group-hover:scale-110 shrink-0 ${f.color}`}>
                    {f.icon}
                  </div>
                  
                  {/* Card text details */}
                  <h3 className="text-text-main font-bold text-sm sm:text-base tracking-wide mb-2">
                    {f.title}
                  </h3>
                  <p className="text-text-sub text-xs sm:text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
