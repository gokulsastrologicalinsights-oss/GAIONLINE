import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-between overflow-hidden bg-surface-light">
      {/* Background Texture Overlay (Optional, using a subtle gradient base for now) */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-surface-light to-border-subtle pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 flex flex-col lg:flex-row items-center justify-between w-full flex-grow pl-10 pr-10">
        
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left mb-16 lg:mb-0">
          <p className="text-primary text-xl md:text-2xl font-medium mb-2">
            Welcome to the Official Website of
          </p>
          <h1 className="text-primary text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
            Gokul&apos;s Astrological Insights
          </h1>

          <p className="text-text-main text-lg md:text-xl max-w-md font-serif mb-6 mx-auto lg:mx-0 leading-relaxed">
            Your trusted guide in Astrology,
            <br className="hidden sm:block" /> Jathagam Analysis, Name Selection &amp; Vastu Consultation
          </p>

          <p className="text-primary text-xl md:text-2xl font-semibold mb-2">
            📞 Call / WhatsApp: +91 9444 55 9071
          </p>
          <p className="text-text-sub text-base md:text-lg font-medium">
            🔮 Accurate Predictions | Personal Guidance | Trusted Service
          </p>
        </div>

        {/* Right Content - Images */}
        <div className=" relative flex justify-center items-center w-full lg:w-1/2">
          {/* Main Arched Image */}
          <div className="relative w-72 h-[450px] md:w-80 md:h-[500px] lg:w-[400px] lg:h-[550px] aspect-[3/4] rounded-t-[250px] rounded-b-[250px] border-[6px] border-border-subtle shadow-2xl overflow-hidden bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center ring-4 ring-offset-4 ring-offset-surface-light ring-border-subtle/40">
            <Image 
              src="/images/Gokul-image-vertical.jpeg"
              alt="Astrologer Gokul Murugan" 
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Overlapping Astrology Wheel */}
          <div className="absolute -bottom-8 -right-4 md:right-10 lg:-right-4 w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-primary bg-surface z-20 shadow-xl overflow-hidden flex items-center justify-center ring-4 ring-primary-light/20">
             {/* Using Gokul-Image-2.jpeg as a placeholder for the wheel since we don't have the explicit wheel image. */}
            <Image 
              src="/images/Gokul-Image-2.jpeg"
              alt="Astrology Wheel" 
              fill
              className="object-cover"
            />
          </div>
          
          {/* Decorative faint background border behind main image */}
        </div>

      </div>

      {/* Bottom Marquee */}
      <div className="relative z-20 w-full bg-primary text-white py-3 overflow-hidden border-t-4 border-primary-light">
        <div className="marquee-content animate-marquee">
          {/* We duplicate the text multiple times to ensure continuous seamless scrolling */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex whitespace-nowrap items-center min-w-full justify-around font-medium md:text-lg">
              <span className="mx-4 text-white/70 text-xl">✽</span>
              <span className="mx-4 tracking-wide">Expert in Astrological Solutions and Life Guidance</span>
              <span className="mx-4 text-white/70 text-xl">✽</span>
              <span className="mx-4 tracking-wide">Decode your problems, revive your life</span>
              <span className="mx-4 text-white/70 text-xl">✽</span>
              <span className="mx-4 tracking-wide">Gokul&apos;s Astrological Insights — Accurate Predictions &amp; Trusted Guidance</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
