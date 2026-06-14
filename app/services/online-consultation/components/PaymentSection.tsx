"use client";
import { useState } from "react";
import { SOCIAL_LINKS } from "../../../constants";

const paymentMethods = [
  { id: "gpay", label: "Google Pay", icon: "🟢", upi: "gokulmurugan@okaxis" },
  { id: "phonepe", label: "PhonePe", icon: "🟣", upi: "gokulmurugan@ybl" },
  { id: "paytm", label: "Paytm", icon: "🔵", upi: "gokulmurugan@paytm" },
  { id: "upi", label: "Any UPI App", icon: "💳", upi: "gokulmurugan@upi" },
];

export default function PaymentSection() {
  const [selected, setSelected] = useState("gpay");
  const [fileName, setFileName] = useState("");

  const current = paymentMethods.find(p => p.id === selected)!;

  return (
    <section className="oc-section">
      <div className="oc-container">
        <div className="oc-section-header">
          <span className="oc-section-tag">✦ Step 2 ✦</span>
          <h2 className="oc-section-h2">Make <span className="oc-gold">Payment</span></h2>
          <p className="oc-section-sub">Pay the fee for your chosen tier (Basic: ₹501 | Detailed: ₹1001 | Premium: ₹1501) using any UPI app and send the screenshot on WhatsApp.</p>
        </div>
        <div className="oc-payment-wrapper">
          <div className="oc-payment-card">
            <div className="oc-payment-glow" />
            <div className="oc-payment-amount">
              <span className="oc-pay-label">Consultation Fees</span>
              <span className="oc-pay-price text-2xl sm:text-3xl block mt-1">Basic: ₹501 | Detailed: ₹1001 | Premium: ₹1501</span>
            </div>
            <div className="oc-payment-methods">
              {paymentMethods.map(pm => (
                <button
                  key={pm.id}
                  onClick={() => setSelected(pm.id)}
                  className={`oc-pay-method ${selected === pm.id ? "oc-pay-active" : ""}`}
                >
                  <span>{pm.icon}</span>
                  <span>{pm.label}</span>
                </button>
              ))}
            </div>
            <div className="oc-upi-display">
              <span className="oc-upi-label">UPI ID</span>
              <span className="oc-upi-id">{current.upi}</span>
              <button
                onClick={() => navigator.clipboard.writeText(current.upi)}
                className="oc-copy-btn"
              >
                📋 Copy
              </button>
            </div>
            <div className="oc-upload-area">
              <label className="oc-upload-label" htmlFor="payment-screenshot">
                <span>📤</span>
                <span>{fileName || "Upload Payment Screenshot"}</span>
                <span className="oc-upload-hint">Click to select file</span>
              </label>
              <input
                id="payment-screenshot"
                type="file"
                accept="image/*"
                className="oc-file-input"
                onChange={e => setFileName(e.target.files?.[0]?.name || "")}
              />
            </div>
            <a
              href={`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I have completed the payment for my online consultation. Please find my payment screenshot attached.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="oc-btn-wa oc-btn-full"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
              Send Screenshot on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
