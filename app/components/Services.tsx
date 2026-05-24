import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Jathagam (Horoscope)\nAnalysis",
      image: "/images/service_horoscope.png",
      alt: "Jathagam Analysis",
    },
    {
      title: "Raasi & Natchathiram\nPredictions",
      image: "/images/service_raasi.png",
      alt: "Raasi & Natchathiram Predictions",
    },
    {
      title: "Marriage Matching\n(Porutham)",
      image: "/images/service_marriage.png",
      alt: "Marriage Matching",
    },
    {
      title: "Name Selection\n(Baby / Business)",
      image: "/images/service_naming.png",
      alt: "Name Selection",
    },
    {
      title: "Career & Financial\nGuidance",
      image: "/images/service_career.png",
      alt: "Career Guidance",
    },
    {
      title: "Love & Relationship\nSolutions",
      image: "/images/service_relationship.png",
      alt: "Love & Relationship Solutions",
    },
    {
      title: "Dhosha Analysis\n& Remedies",
      image: "/images/service_dhosha.png",
      alt: "Dhosha Analysis",
    },
    {
      title: "Personal Consultation\n(Online & Direct)",
      image: "/images/service_consultation.png",
      alt: "Personal Consultation",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white w-full flex flex-col items-center">
      {/* Top Banner Section */}
      <div className="w-full bg-primary text-center pt-16 pb-36 px-4 flex flex-col items-center justify-start">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
          Our Services
        </h2>
        {/* Decorative separator */}
        <div className="flex items-center justify-center space-x-4 mb-6 opacity-80">
          <div className="h-[1px] w-12 md:w-16 border-t border-dashed border-white"></div>
          {/* Using a binoculars-like SVG matching the small icon */}
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
          <div className="h-[1px] w-12 md:w-16 border-t border-dashed border-white"></div>
        </div>
        <div className="max-w-4xl text-white/90 text-sm md:text-base lg:text-lg leading-relaxed space-y-5">
          <p>
            Gokul&apos;s Astrological Insights offers a wide range of astrology
            services designed to help you make the right decisions and overcome
            life&apos;s challenges with clarity and confidence. Each service is
            based on authentic Vedic astrology principles and personalized
            guidance.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-28 mb-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex items-center justify-center p-6 md:p-8 min-h-[120px]">
                <h3 className="text-primary font-bold text-center text-lg md:text-xl whitespace-pre-line leading-relaxed">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-text-main text-base md:text-lg font-medium text-center mb-10">
        Get accurate insights and trusted solutions to lead a better and
        successful life through astrology.
      </p>
    </section>
  );
}
