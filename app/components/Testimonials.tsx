import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      location: "Chennai",
      text: "Very accurate predictions and excellent guidance.",
      rating: 5,
    },
    {
      location: "Coimbatore",
      text: "Professional consultation and valuable advice.",
      rating: 5,
    },
    {
      location: "Bangalore",
      text: "Helpful guidance for marriage and career decisions.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-surface-light w-full py-20 flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-3">
            Client Testimonials
          </h3>
          <h2 className="text-text-main text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight">
            What Our Clients Say
          </h2>
          {/* Separator */}
          <div className="flex items-center justify-center space-x-3 mt-4 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-[#fbbf24] text-lg">★</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-border-subtle hover:border-primary/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-[#fbbf24] mb-5 gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-text-main text-base md:text-lg font-medium italic leading-relaxed mb-6 font-serif relative z-10">
                  <span className="text-4xl text-primary/10 absolute -top-4 -left-2 select-none">&ldquo;</span>
                  {testimonial.text}
                  <span className="text-4xl text-primary/10 absolute -bottom-8 right-2 select-none">&rdquo;</span>
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center border-t border-border-subtle pt-5 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/5 text-primary font-bold text-sm flex items-center justify-center mr-3 border border-primary/10">
                  {testimonial.location.charAt(0)}
                </div>
                <div>
                  <h4 className="text-primary font-serif font-bold text-sm">Verified Client</h4>
                  <p className="text-text-sub text-xs font-semibold">— {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
