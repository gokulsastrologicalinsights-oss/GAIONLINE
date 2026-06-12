import React from "react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Accurate Predictions",
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      description: "Calculated with high mathematical accuracy using traditional Vedic texts and astrological guidelines.",
    },
    {
      title: "Personalized Guidance",
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      description: "Tailored predictions and remedies specifically designed for your unique birth details, not copy-paste advice.",
    },
    {
      title: "Online & Offline",
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: "Comfort of online consults via phone calls, zoom, or WhatsApp, and direct in-person visits to our office.",
    },
    {
      title: "Tamil & English Support",
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 0A18.015 18.015 0 0110 14.582M10 14.582c-1.874.566-3.878.83-5.83.816M14 19c.827-1.24 2.54-3.5 3-5m0 0c.811 1.337 2.62 4.032 3 5M16 11h2.5" />
        </svg>
      ),
      description: "Consultations are comfortably available in both Tamil and English to suit your language preference.",
    },
  ];

  return (
    <section className="w-full py-20 bg-surface-light flex justify-center px-4 sm:px-6 lg:px-8 border-t border-b border-border-subtle">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary font-bold mb-4">
            Why Choose Us
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
          <p className="text-text-sub text-base max-w-2xl mx-auto leading-relaxed font-medium">
            We offer professional, transparent, and accurate Vedic astrology guidance designed to lead you towards success, peace, and clarity.
          </p>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-border-subtle hover:-translate-y-1 hover:shadow-lg hover:border-primary/10 transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              {/* Checkmark and Icon container */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                  {point.icon}
                </div>
                <span className="text-[#22c55e] text-lg font-bold">✔</span>
              </div>
              <h3 className="text-primary font-serif font-bold text-lg mb-2">
                {point.title}
              </h3>
              <p className="text-text-sub text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
