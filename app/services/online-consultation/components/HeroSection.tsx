"use client";

import { SOCIAL_LINKS } from "../../../constants";

const WA_LINK = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I want to book an online consultation.")}`;

// Benefit items with their descriptions and premium SVG icon renderers
const benefits = [
  {
    title: "Call or Video Consultation",
    desc: "Available via phone call or video call based on your preference.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    title: "Tamil & English Consultation",
    desc: "Speak comfortably in your choice of language (Tamil or English).",
    icon: (
      <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c-.313 1.565-.953 3.051-1.879 4.387M11.24 9.172c-.629-1.258-1.222-2.614-1.74-4M16.5 16h4" />
      </svg>
    ),
    color: "bg-violet-50 border-violet-100",
  },
  {
    title: "Personalized Predictions",
    desc: "Custom analysis based strictly on your birth time, date, and place.",
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.253.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.77-.557-.37-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.519-4.674z" />
      </svg>
    ),
    color: "bg-amber-50 border-amber-100",
  },
  {
    title: "Confidential Service",
    desc: "Your personal details and astrological charts are kept 100% private.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    title: "Practical Remedies",
    desc: "Effective, easy-to-follow remedies to overcome life obstacles.",
    icon: (
      <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "bg-rose-50 border-rose-100",
  },
];

const zodiacSymbols = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

export default function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-gradient-to-b from-surface-light via-white to-surface-light flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background visual textures */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,rgba(54,61,133,0.06)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Premium Card Layout with generous white space */}
        <div className="bg-white border border-slate-200/70 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(54,61,133,0.04)] rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden transition-all duration-500">
          
          {/* Subtle background radial glows inside card */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-amber-500/5 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-[250px] h-[250px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 flex flex-col text-left">
              {/* Decorative Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 w-fit select-none">
                <span className="text-amber-500">✦</span>
                <span>Personalized Online Astrology Consultation</span>
                <span className="text-amber-500">✦</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
                Personalized Online Astrology Consultation
              </h1>

              {/* Subheading */}
              <p className="text-text-sub text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                Guidance for Marriage, Career, Finance, Family, Property, Child Birth and Remedies.
              </p>

              {/* Benefits Checklist with Custom Icons */}
              <div className="flex flex-col gap-4 mb-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3.5 group">
                    {/* Glowing benefit icon container */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-xs transition-transform duration-300 group-hover:scale-110 ${b.color}`}>
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="text-text-main font-bold text-sm sm:text-base tracking-wide flex items-center gap-1.5">
                        <span className="text-emerald-500 font-extrabold text-sm sm:text-base">✔</span>
                        {b.title}
                      </h3>
                      <p className="text-text-sub text-xs sm:text-sm mt-0.5 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                {/* Primary CTA: Book Consultation */}
                <a
                  href="#form"
                  className="flex-1 sm:flex-none px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-extrabold rounded-xl shadow-md shadow-primary/20 hover:shadow-lg hover:scale-[1.01] active:scale-99 transition-all duration-300 text-center text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>🔮</span> Book Consultation
                </a>

                {/* Secondary CTA: WhatsApp Now */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-8 py-3.5 bg-white hover:bg-slate-50 text-[#25D366] font-extrabold rounded-xl border-2 border-slate-200 shadow-xs hover:border-[#25D366]/40 hover:scale-[1.01] active:scale-99 transition-all duration-300 text-center text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Premium Animated Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center py-6 lg:py-0 select-none">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                {/* Background glow orb */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-primary/10 rounded-full blur-3xl animate-pulse" />
                
                {/* Orbital lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[100%] h-[100%] rounded-full border-2 border-dashed border-primary/10 animate-[spin_60s_linear_infinite]" />
                  <div className="absolute w-[80%] h-[80%] rounded-full border border-amber-500/15 animate-[spin_35s_linear_infinite_reverse]" />
                  <div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
                </div>

                {/* Rotating Zodiac Symbols */}
                <div className="absolute inset-0 animate-[spin_100s_linear_infinite]">
                  {zodiacSymbols.map((symbol, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const radius = 40; // percentage
                    const x = 50 + radius * Math.cos(angle);
                    const y = 50 + radius * Math.sin(angle);
                    return (
                      <span
                        key={i}
                        className="absolute text-slate-400/75 text-sm sm:text-base font-medium select-none hover:text-primary hover:font-bold transition-all duration-200"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {symbol}
                      </span>
                    );
                  })}
                </div>

                {/* Center Glowing Crystal Ball */}
                <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-white via-primary/5 to-primary/25 border-2 border-primary/15 shadow-xl flex flex-col items-center justify-center backdrop-blur-xs transition-transform duration-500 hover:scale-105 group cursor-pointer">
                  {/* Subtle orb shine */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.7),transparent_75%)] rounded-full pointer-events-none" />
                  
                  {/* Glowing core */}
                  <div className="absolute w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-amber-500/10 to-primary/20 blur-sm animate-pulse pointer-events-none" />
                  
                  <span className="text-4xl sm:text-5xl drop-shadow-md select-none animate-[bounce_4s_ease-in-out_infinite]">🔮</span>
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-primary tracking-widest text-center leading-tight uppercase mt-2.5 drop-shadow-sm">
                    Gokul&apos;s<br />Insights
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
