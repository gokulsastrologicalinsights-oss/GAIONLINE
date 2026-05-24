"use client";

const features = [
  { icon: "⭐", title: "Accurate KP Astrology", desc: "Predictions based on precise Krishnamurti Paddhati system for event timing accuracy." },
  { icon: "🎯", title: "Personalized Solutions", desc: "Every reading is unique to your chart — no generic or copy-paste predictions." },
  { icon: "🌿", title: "Genuine Remedies", desc: "Practical and effective pariharams, mantras, and gemstone suggestions." },
  { icon: "🏆", title: "Trusted By Thousands", desc: "Hundreds of satisfied clients across India and worldwide trust our guidance." },
  { icon: "🔮", title: "Modern + Traditional", desc: "Blending ancient Vedic wisdom with modern KP techniques for accurate readings." },
  { icon: "💼", title: "Professional Experience", desc: "Years of professional consultation experience with deep astrological expertise." },
];

export default function WhyChooseUs() {
  return (
    <section className="oc-section oc-section-alt">
      <div className="oc-container">
        <div className="oc-section-header">
          <span className="oc-section-tag">✦ Our Promise ✦</span>
          <h2 className="oc-section-h2">Why Choose <span className="oc-gold">Us</span></h2>
          <p className="oc-section-sub">Experience the difference of professional, accurate, and caring astrological guidance.</p>
        </div>
        <div className="oc-why-grid">
          {features.map(f => (
            <div key={f.title} className="oc-why-card">
              <div className="oc-why-icon">{f.icon}</div>
              <h3 className="oc-why-title">{f.title}</h3>
              <p className="oc-why-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
