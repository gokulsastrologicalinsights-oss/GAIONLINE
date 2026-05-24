"use client";

const includes = [
  "One-to-One Consultation",
  "Personalized Guidance",
  "Remedies & Solutions",
  "WhatsApp / Call Consultation",
];

export default function PricingSection() {
  return (
    <section className="oc-section oc-section-alt">
      <div className="oc-container">
        <div className="oc-section-header">
          <span className="oc-section-tag">✦ Transparent Pricing ✦</span>
          <h2 className="oc-section-h2">Online Consultation <span className="oc-gold">Fee</span></h2>
        </div>
        <div className="oc-pricing-wrapper">
          <div className="oc-pricing-card">
            <div className="oc-pricing-glow" />
            <div className="oc-pricing-top">
              <span className="oc-pricing-label">Complete Astrology Consultation</span>
              <div className="oc-pricing-amount">
                <span className="oc-price-currency">₹</span>
                <span className="oc-price-value">1001</span>
                <span className="oc-price-only">Only</span>
              </div>
            </div>
            <ul className="oc-pricing-list">
              {includes.map((item) => (
                <li key={item} className="oc-pricing-item">
                  <span className="oc-check">✦</span> {item}
                </li>
              ))}
            </ul>
            <div className="oc-pricing-note">
              📌 Fill your birth details below and we will contact you on WhatsApp with payment & consultation details.
            </div>
            <a href="#form" className="oc-btn-primary oc-btn-full">✦ Book My Consultation Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
