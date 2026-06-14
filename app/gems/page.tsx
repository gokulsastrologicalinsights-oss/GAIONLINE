
export default function GemsPage() {
  const gemstones = [
    { name: "Ruby (Manickam)", planet: "Sun", description: "Enhances leadership, power, and vitality." },
    { name: "Pearl (Muthu)", planet: "Moon", description: "Promotes emotional balance and peace of mind." },
    { name: "Red Coral (Pavalam)", planet: "Mars", description: "Boosts courage, energy, and physical strength." },
    { name: "Emerald (Maragatham)", planet: "Mercury", description: "Improves communication, wisdom, and business success." },
    { name: "Yellow Sapphire (Pushparagam)", planet: "Jupiter", description: "Attracts wealth, wisdom, and overall prosperity." },
    { name: "Diamond (Vairam)", planet: "Venus", description: "Enhances luxury, artistic talents, and relationships." },
    { name: "Blue Sapphire (Neelam)", planet: "Saturn", description: "Provides protection and disciplined growth." },
    { name: "Hessonite (Gomedhakam)", planet: "Rahu", description: "Offers clarity and relief from mental stress." },
    { name: "Cat's Eye (Vaiduriyam)", planet: "Ketu", description: "Brings spiritual growth and protection from enemies." },
  ];

  return (
    <main className="min-h-screen bg-surface-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Astrological Gemstones</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed font-serif">
            Harness the power of planetary energies with authentic gemstones tailored to your horoscope.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Why Wear Gemstones?</h2>
            <p className="text-text-main text-lg leading-relaxed">
              In Vedic Astrology, gemstones are more than just jewelry. They are cosmic tools that interact with the planetary vibrations surrounding us. Wearing the right gemstone can balance weak planets and strengthen beneficial ones in your Jathagam (Horoscope).
            </p>
            <ul className="space-y-4">
              {[
                "Neutralize malefic planetary effects",
                "Enhance luck and career opportunities",
                "Improve physical and mental health",
                "Bring harmony to family and relationships"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-main">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-border-subtle">
             {/* Placeholder image for gemstones */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-surface flex items-center justify-center">
               <span className="text-primary font-serif italic text-xl">Authentic Astrological Gems</span>
            </div>
          </div>
        </div>

        {/* Gemstone Grid */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-16">The Navaratnas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gemstones.map((gem, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border-subtle group">
              <div className="h-1 w-12 bg-primary mb-6 group-hover:w-full transition-all duration-500"></div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">{gem.name}</h3>
              <p className="text-sm font-semibold text-text-sub uppercase tracking-wider mb-4">Planet: {gem.planet}</p>
              <p className="text-text-main leading-relaxed">{gem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-surface border-t border-border-subtle text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Which Gemstone is Right for You?</h2>
          <p className="text-text-main mb-8">
            Wearing the wrong gemstone can sometimes have adverse effects. Get a personalized gemstone recommendation based on your birth details.
          </p>
          <a 
            href="/services/online-consultation" 
            className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-lg"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
