"use client";

const testimonials = [
  { name: "Priya S.", location: "Chennai", rating: 5, text: "Gokul sir's predictions about my career change were 100% accurate. The remedies he suggested also worked wonderfully. Highly recommend!", initial: "P" },
  { name: "Rajan M.", location: "Dubai", rating: 5, text: "I consulted for marriage matching and the analysis was very detailed and genuine. Very professional and knowledgeable astrologer.", initial: "R" },
  { name: "Divya K.", location: "Bangalore", rating: 5, text: "Amazing consultation experience. He explained everything patiently in Tamil and the gemstone suggestion has brought positive changes.", initial: "D" },
  { name: "Suresh T.", location: "USA", rating: 5, text: "Online consultation was seamless via WhatsApp. Very accurate predictions about my financial situation and clear guidance on next steps.", initial: "S" },
  { name: "Meena R.", location: "Singapore", rating: 5, text: "The Dasha analysis was spot on. Gokul sir has a deep understanding of KP astrology. Very satisfied with the consultation.", initial: "M" },
  { name: "Karthik V.", location: "Coimbatore", rating: 5, text: "Best astrologer I have consulted. Very honest, no fake promises, genuine remedies. Will definitely consult again.", initial: "K" },
];

export default function Testimonials() {
  return (
    <section className="oc-section oc-section-alt">
      <div className="oc-container">
        <div className="oc-section-header">
          <span className="oc-section-tag">✦ Client Stories ✦</span>
          <h2 className="oc-section-h2">What Clients <span className="oc-gold">Say</span></h2>
          <p className="oc-section-sub">Real experiences from clients across India and worldwide.</p>
        </div>
        <div className="oc-testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="oc-testi-card">
              <div className="oc-testi-header">
                <div className="oc-testi-avatar">{t.initial}</div>
                <div>
                  <div className="oc-testi-name">{t.name}</div>
                  <div className="oc-testi-location">📍 {t.location}</div>
                </div>
                <div className="oc-testi-wa">
                  <svg width="18" height="18" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
                </div>
              </div>
              <div className="oc-testi-stars">{"★".repeat(t.rating)}</div>
              <p className="oc-testi-text">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <div className="oc-video-placeholder">
          <div className="oc-video-inner">
            <div className="oc-play-btn">▶</div>
            <p className="oc-video-label">Video Testimonials Coming Soon</p>
            <p className="oc-video-sub">Real client video reviews will be featured here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
