"use client";

const steps = [
  { num: "01", icon: "📋", title: "Fill Birth Details", desc: "Submit your full name, date, time, and place of birth accurately." },
  { num: "02", icon: "💬", title: "WhatsApp Connect", desc: "You'll be redirected to WhatsApp where Gokul Sir will guide you on payment." },
  { num: "03", icon: "💳", title: "Complete Payment", desc: "Pay ₹1001 via UPI, GPay, PhonePe, or Paytm as instructed on WhatsApp." },
  { num: "04", icon: "🔮", title: "Consultation Session", desc: "Your personalized astrology session happens via WhatsApp call/video." },
];

export default function ProcessTimeline() {
  return (
    <section className="oc-section">
      <div className="oc-container">
        <div className="oc-section-header">
          <span className="oc-section-tag">✦ Simple Process ✦</span>
          <h2 className="oc-section-h2">How It <span className="oc-gold">Works</span></h2>
          <p className="oc-section-sub">4 simple steps to your personalized astrology consultation</p>
        </div>
        <div className="oc-timeline">
          {steps.map((step, i) => (
            <div key={step.num} className="oc-timeline-step">
              <div className="oc-step-num">{step.num}</div>
              <div className="oc-step-icon">{step.icon}</div>
              <h3 className="oc-step-title">{step.title}</h3>
              <p className="oc-step-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="oc-step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
