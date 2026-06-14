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
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-surface-light to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_left,rgba(54,61,133,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-bold text-xs sm:text-sm uppercase tracking-wider text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 mb-4 select-none">
            ✦ Step 2 ✦
          </span>
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-4xl font-serif font-extrabold mb-4 tracking-tight leading-tight">
            Make Payment
          </h2>
          <p className="text-text-sub text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Pay the fee for your chosen tier using any UPI app and send the screenshot on WhatsApp.
          </p>
        </div>

        <div className="bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle decoration glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-emerald-500/5 via-primary/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Fee Display */}
          <div className="text-center mb-8 border-b border-slate-100 pb-6">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">
              Consultation Fees
            </span>
            <span className="text-slate-800 font-extrabold text-sm sm:text-base block">
              Basic: <span className="text-primary font-black">₹501</span> | Detailed: <span className="text-primary font-black">₹1001</span> | Premium: <span className="text-primary font-black">₹1501</span>
            </span>
          </div>

          {/* Payment Methods Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {paymentMethods.map(pm => {
              const isSelected = selected === pm.id;
              return (
                <button
                  key={pm.id}
                  onClick={() => setSelected(pm.id)}
                  className={`flex items-center gap-2.5 justify-center py-3.5 px-4 rounded-xl border transition-all duration-300 font-bold text-xs sm:text-sm cursor-pointer select-none ${
                    isSelected 
                      ? "border-primary bg-primary/5 text-primary shadow-2xs font-extrabold" 
                      : "border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <span className="text-lg leading-none">{pm.icon}</span>
                  <span>{pm.label}</span>
                </button>
              );
            })}
          </div>

          {/* UPI Box */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-center justify-between gap-3 mb-6 select-none">
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">UPI ID</span>
              <span className="text-slate-800 font-extrabold text-sm sm:text-base mt-0.5">{current.upi}</span>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(current.upi)}
              className="px-3.5 py-1.5 bg-primary/5 border border-primary/20 hover:bg-primary/10 text-primary rounded-lg text-xs font-extrabold transition-all cursor-pointer focus:outline-none"
            >
              📋 Copy
            </button>
          </div>

          {/* Upload Screenshot Area */}
          <div className="border-2 border-dashed border-slate-200 hover:border-primary/40 rounded-2xl p-6 text-center cursor-pointer transition-colors duration-300 mb-6 group relative">
            <label className="flex flex-col items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 transition-colors" htmlFor="payment-screenshot">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📤</span>
              <span className="font-bold text-xs sm:text-sm text-slate-700">{fileName || "Upload Payment Screenshot"}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Click to select image file</span>
            </label>
            <input
              id="payment-screenshot"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => setFileName(e.target.files?.[0]?.name || "")}
            />
          </div>

          {/* WhatsApp Button */}
          <a
            href={`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent("Hello Gokul's Astrological Insights, I have completed the payment for my online consultation. Please find my payment screenshot attached.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold rounded-xl shadow-lg shadow-[#25D366]/15 hover:shadow-xl hover:scale-[1.01] active:scale-99 transition-all duration-300 flex items-center justify-center gap-2.5 text-base sm:text-lg cursor-pointer"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.548 4.107 1.51 5.836L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979.997-3.645-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
            <span>Send Screenshot on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
