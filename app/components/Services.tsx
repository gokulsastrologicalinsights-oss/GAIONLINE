import React from "react";

export default function Services() {
  const services = [
    {
      title: "Horoscope Analysis",
      emoji: "🔮",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} strokeDasharray="3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      description: "Detailed Jathagam predictions covering your career, health, wealth, family, and planetary influences.",
    },
    {
      title: "Marriage Matching",
      emoji: "💍",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="8" cy="12" r="5" stroke="currentColor" strokeWidth={1.5} />
          <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth={1.5} />
          <path d="M12 8.5c.5-1.5 2-1.5 2.5 0M10 12h4" stroke="currentColor" strokeWidth={1.5} />
          <path d="M12 6.5l.5-.5M12 5.5l1-1" stroke="currentColor" strokeWidth={1.5} />
        </svg>
      ),
      description: "Deep compatibility analysis (Porutham) and evaluation of doshas to ensure a happy, lasting marital union.",
    },
    {
      title: "Vastu Consultation",
      emoji: "🏠",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          <circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth={1.5} />
        </svg>
      ),
      description: "Align your home or office space with positive energies, bringing health, wealth, and peace into your environment.",
    },
    {
      title: "Name Numerology",
      emoji: "🔢",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={1.5} />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" stroke="currentColor" strokeWidth={1.5} />
          <circle cx="6" cy="6" r="1.5" fill="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <circle cx="18" cy="18" r="1.5" fill="currentColor" />
        </svg>
      ),
      description: "Find a powerful, lucky name for your business or yourself designed in alignment with planetary frequencies.",
    },
    {
      title: "Muhurtham Selection",
      emoji: "📅",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={1.5} />
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth={1.5} />
          <circle cx="12" cy="15" r="3" stroke="currentColor" strokeWidth={1.5} />
          <path d="M12 13.5V15h1.5" stroke="currentColor" strokeWidth={1.5} />
        </svg>
      ),
      description: "Choose auspicious dates and times for marriages, housewarmings, businesses, and starting new ventures.",
    },
    {
      title: "Baby Name Selection",
      emoji: "👶",
      icon: (
        <svg className="w-8 h-8 text-primary group-hover:text-primary-light transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth={1.5} />
          <path d="M12 13v7M10 20h4" stroke="currentColor" strokeWidth={1.5} />
          <circle cx="12" cy="20" r="1.5" fill="currentColor" />
          <path d="M9.5 8a2.5 2.5 0 015 0" stroke="currentColor" strokeWidth={1.5} />
        </svg>
      ),
      description: "Bless your newborn with a meaningful name that aligns with their birth star, moon sign, and birth time.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white w-full flex flex-col items-center py-0"
    >
      {/* Top Banner Section */}
      <div className="w-full bg-primary text-center pt-20 pb-40 px-4 flex flex-col items-center justify-start">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
          Our Astrological Services
        </h2>
        {/* Decorative separator */}
        <div className="flex items-center justify-center space-x-4 mb-6 opacity-80">
          <div className="h-[1px] w-12 md:w-16 border-t border-dashed border-white"></div>
          <span className="text-white text-xl">✦</span>
          <div className="h-[1px] w-12 md:w-16 border-t border-dashed border-white"></div>
        </div>
        <div className="max-w-3xl text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
          <p>
            Gokul&apos;s Astrological Insights offers deep, personalized services based on authentic Vedic astrology principles. Let us guide you to clear obstacles and make empowered choices.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-28 mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-border-subtle p-8 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(54,61,133,0.1)] hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300 ring-4 ring-primary-light/5">
                {service.icon}
              </div>
              <h3 className="text-primary font-serif font-bold text-xl mb-3 flex items-center gap-2">
                <span>{service.emoji}</span> {service.title}
              </h3>
              <p className="text-text-sub text-sm leading-relaxed max-w-xs">
                {service.description}
              </p>
              
              <a 
                href="/services/online-consultation" 
                className="mt-6 text-primary font-bold text-xs sm:text-sm tracking-wide uppercase hover:text-primary-light flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300"
              >
                Book Now &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>

      <p className="text-text-main text-base md:text-lg font-semibold text-center mb-16 max-w-md px-4 leading-relaxed">
        Get accurate insights and trusted solutions to lead a better and successful life.
      </p>
    </section>
  );
}
