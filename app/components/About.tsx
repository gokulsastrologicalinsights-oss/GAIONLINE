import Image from "next/image";
import { SOCIAL_LINKS } from "../constants";

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

          {/* Social CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start w-full">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20ba5a] hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm md:text-base cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book Consultation on WhatsApp
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 border-2 border-[#E4405F]/20 text-[#E4405F] font-bold rounded-lg hover:bg-[#E4405F]/5 transition-all transform hover:-translate-y-0.5 text-sm md:text-base cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Follow Us on Instagram
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 border-2 border-[#1877F2]/20 text-[#1877F2] font-bold rounded-lg hover:bg-[#1877F2]/5 transition-all transform hover:-translate-y-0.5 text-sm md:text-base cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              Like Our Facebook Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
