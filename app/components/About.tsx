import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-surface-light flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side - Image with Frame */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          {/* Left Arrow */}
          <button className="absolute left-[-2rem] md:left-[-3rem] z-10 text-text-sub hover:text-primary transition-colors p-2 hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Golden Frame Image Container */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-sm p-2 bg-primary bg-gradient-to-br from-primary-light via-primary to-primary shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <div className="relative w-full h-full border-4 border-white overflow-hidden shadow-inner">
              <Image 
                src="/images/Gokul-image-1.jpeg" // Using Gokul-image-1 as a placeholder for the award image
                alt="Astrologer Gokul Murugan"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button className="absolute right-[-2rem] md:right-[-3rem] z-10 text-text-sub hover:text-primary transition-colors p-2 hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h3 className="text-primary font-bold text-lg md:text-xl tracking-wide mb-2">
            Gokul&apos;s Astrological Insights
          </h3>
          <h2 className="text-text-main text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
            Your Trusted Guide to Astrology and Life Solutions
          </h2>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 w-full mb-6">
            <div className="h-[1px] bg-border-subtle w-12 md:w-16"></div>
            <div className="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="h-[1px] bg-border-subtle w-12 md:w-16"></div>
          </div>

          <div className="text-text-sub text-base md:text-lg space-y-4 max-w-2xl leading-relaxed">
            <p>
              With a deep understanding of astrology and planetary influences, Astrologer Gokul Murugan has been helping people find clarity and direction in life through traditional astrological knowledge. His passion for astrology started at a young age, and over the years he has guided many individuals with accurate horoscope analysis, name selection, and life guidance.
            </p>
            <p>
              His sincere approach and dedication to helping people have made Gokul&apos;s Astrological Insights a trusted name for those seeking solutions related to career, marriage, finances, and personal growth. Many clients rely on his guidance to understand their life path and make better decisions.
            </p>
            <p>
              He believes astrology is a powerful tool to understand ourselves, our destiny, and the right path forward with confidence and positivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
