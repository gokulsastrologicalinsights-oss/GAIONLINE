import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Mumbai, India",
      text: "Gokul's Astrological Insights provided incredibly accurate predictions about my career transition. His guidance gave me the confidence to make the right choice at the right time. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Desai",
      location: "Pune, India",
      text: "I consulted him for Kundali matching before my marriage. His deep knowledge and detailed explanation of the doshas and remedies brought peace to both our families. Truly a master of his craft.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, India",
      text: "I was facing severe health and financial issues. The remedies suggested by him were simple yet incredibly effective. Over the past few months, I have seen a remarkable positive shift in my life.",
      rating: 5,
    },
    {
      name: "Sneha Kapoor",
      location: "Delhi, India",
      text: "The insight I received regarding my child's future was profoundly detailed and comforting. His approach is incredibly supportive, offering practical solutions and spiritual wisdom.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, India",
      text: "His astrological readings are spot-on. I visited him during a very tough phase in my business, and within months of following his remedies, things turned around miraculously.",
      rating: 5,
    },
    {
      name: "Anjali Rao",
      location: "Bangalore, India",
      text: "I was continually stressed about my relationship. Astrologer Gokul Murugan's guidance was a beacon of hope. His calm demeanor and profound analysis helped us navigate our issues harmoniously.",
      rating: 5,
    },
    {
      name: "Rohit Verma",
      location: "Surat, India",
      text: "His mastery over Jyotish is exceptional. From career to health matters, his predictions have consistently proven to be incredibly accurate for me and my entire family.",
      rating: 5,
    },
  ];

  // We duplicate the list so the marquee loops seamlessly
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-surface-light w-full py-20 flex flex-col items-center overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center mb-12 px-4 sm:px-6 lg:px-8">
        <h3 className="text-primary font-bold text-lg md:text-xl tracking-wide mb-2 uppercase text-center">
          Client Testimonials
        </h3>
        <h2 className="text-text-main text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 text-center">
          What Our Clients Say
        </h2>
        
        {/* Decorative separator */}
        <div className="flex items-center justify-center space-x-4 opacity-80 w-full">
          <div className="h-[1px] w-12 md:w-16 border-t border-dashed border-border-subtle"></div>
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <div className="h-[1px] w-12 md:w-16 border-t border-dashed border-border-subtle"></div>
        </div>
      </div>

      <div className="w-full overflow-hidden relative">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
          {duplicatedTestimonials.map((testimonial, index) => (
              <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-between border border-border-subtle hover:-translate-y-2 transition-transform duration-300 group w-[300px] md:w-[350px] lg:w-[400px] flex-shrink-0 mx-4 whitespace-normal"
            >
              <div>
                <div className="flex text-[#fbbf24] mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-sub italic text-base leading-relaxed mb-8 relative z-10">
                  <span className="text-4xl text-border-subtle absolute -top-4 -left-2 opacity-50 z-[-1]">"</span>
                  {testimonial.text}
                  <span className="text-4xl text-border-subtle absolute -bottom-4 right-0 opacity-50 z-[-1]">"</span>
                </p>
              </div>
              
              <div className="flex items-center mt-auto border-t border-border-subtle pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mr-4 border border-border-subtle group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-primary font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-text-sub text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
