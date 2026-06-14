"use client";

import { FormEvent, useState } from "react";
import { CONTACT_INFO } from "../constants";

const DROPDOWN_SERVICES = [
  "Jathagam Analysis",
  "Marriage Matching",
  "Name Selection",
  "Career Guidance",
  "Finance Guidance",
  "Business Astrology",
  "Vastu Consultation",
  "Parigaram",
  "Other"
];

interface QuickService {
  icon: string;
  name: string;
  dropdownVal: string;
  template: string;
}

const QUICK_SERVICES: QuickService[] = [
  { icon: "🔮", name: "Jathagam Analysis", dropdownVal: "Jathagam Analysis", template: "I want a detailed Jathagam (horoscope) analysis for my future predictions." },
  { icon: "💍", name: "Marriage Matching", dropdownVal: "Marriage Matching", template: "I would like to check marriage compatibility (Porutham) for matching horoscopes." },
  { icon: "👶", name: "Name Selection", dropdownVal: "Name Selection", template: "I need expert assistance in selecting a lucky name based on numerology." },
  { icon: "🏠", name: "Vastu Consultation", dropdownVal: "Vastu Consultation", template: "I want to get Vastu guidance for my home/office." },
  { icon: "🧿", name: "Dhosha Parigaram", dropdownVal: "Parigaram", template: "I am looking for guidance on Dhosha Parigaram and spiritual remedies." },
  { icon: "💼", name: "Career Guidance", dropdownVal: "Career Guidance", template: "I would like guidance on my career prospects and job opportunities." },
  { icon: "💰", name: "Finance & Business Astrology", dropdownVal: "Business Astrology", template: "I would like to get insights about my business and financial prospects." },
  { icon: "📅", name: "Muhurtham Selection", dropdownVal: "Other", template: "I would like help in selecting an auspicious Muhurtham date and time." }
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [pob, setPob] = useState("");
  const [service, setService] = useState("Jathagam Analysis");
  const [message, setMessage] = useState("");
  const [selectedQuickCard, setSelectedQuickCard] = useState<number | null>(null);

  const handleQuickSelect = (index: number, item: QuickService) => {
    setSelectedQuickCard(index);
    setService(item.dropdownVal);
    setMessage(item.template);
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    if (!name.trim() || !mobile.trim()) {
      alert("Please fill in your Name and Mobile Number.");
      return;
    }

    const lines = [
      "🔮 *Gokul's Astrological Insights - Consultation Request*",
      "",
      `👤 *Name:* ${name.trim()}`,
      `📱 *Mobile:* ${mobile.trim()}`,
      dob && `📅 *Date of Birth:* ${dob}`,
      tob && `⏰ *Time of Birth:* ${tob}`,
      pob && `📍 *Place of Birth:* ${pob}`,
      `✨ *Service Required:* ${service}`,
      "",
      message.trim() && `💬 *Message:* \n${message.trim()}`
    ].filter(Boolean);

    const text = lines.join("\n");
    const url = `https://wa.me/${CONTACT_INFO.whatsapp_num}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full min-h-0 flex-col gap-6 rounded-2xl border border-border-subtle bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] md:p-8 hover:shadow-[0_20px_50px_rgba(54,61,133,0.05)] transition-shadow duration-300"
    >
      <div>
        <h3 className="font-serif text-2xl font-bold text-text-main md:text-3xl tracking-tight">
          Book Your Consultation
        </h3>
        <p className="text-sm leading-relaxed text-text-sub mt-2">
          Fill in the details below and we will connect with you through WhatsApp.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Name and Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-primary">
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-text-main placeholder:text-text-sub/50 focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/10 transition-all text-sm font-medium"
              placeholder="e.g. Ramesh Kumar"
            />
          </div>
          <div>
            <label htmlFor="contact-mobile" className="mb-1.5 block text-sm font-semibold text-primary">
              Mobile Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-mobile"
              type="tel"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-text-main placeholder:text-text-sub/50 focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/10 transition-all text-sm font-medium"
              placeholder="e.g. 9444559071"
            />
          </div>
        </div>

        {/* Birth Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="contact-dob" className="mb-1.5 block text-sm font-semibold text-primary">
              Date of Birth
            </label>
            <input
              id="contact-dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-text-main focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/10 transition-all text-sm font-medium"
            />
          </div>
          <div>
            <label htmlFor="contact-tob" className="mb-1.5 block text-sm font-semibold text-primary">
              Birth Time <span className="text-text-sub/60 text-xs font-normal">(optional)</span>
            </label>
            <input
              id="contact-tob"
              type="time"
              value={tob}
              onChange={(e) => setTob(e.target.value)}
              className="w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-text-main focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/10 transition-all text-sm font-medium"
            />
          </div>
          <div>
            <label htmlFor="contact-pob" className="mb-1.5 block text-sm font-semibold text-primary">
              Place of Birth
            </label>
            <input
              id="contact-pob"
              type="text"
              value={pob}
              onChange={(e) => setPob(e.target.value)}
              className="w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-text-main placeholder:text-text-sub/50 focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/10 transition-all text-sm font-medium"
              placeholder="e.g. Chennai"
            />
          </div>
        </div>

        {/* Service Required Dropdown */}
        <div>
          <label htmlFor="contact-service" className="mb-1.5 block text-sm font-semibold text-primary">
            Service Required
          </label>
          <select
            id="contact-service"
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setSelectedQuickCard(null); // Clear selected quick card if dropdown is changed manually
            }}
            className="w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-text-main focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/10 transition-all text-sm font-medium appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23363d85' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
          >
            {DROPDOWN_SERVICES.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Service Quick Select Cards */}
        <div>
          <p className="mb-2 block text-sm font-semibold text-primary">
            Service Quick Select
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {QUICK_SERVICES.map((item, idx) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleQuickSelect(idx, item)}
                className={`p-3 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
                  selectedQuickCard === idx
                    ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                    : "border-border-subtle bg-surface-light text-text-sub hover:border-primary-light/40 hover:bg-white"
                }`}
              >
                <span className="text-xl leading-none">{item.icon}</span>
                <span className="text-xs font-bold leading-tight">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-primary">
            Message
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[100px] w-full resize-y rounded-xl border border-border-subtle bg-white px-4 py-3 text-text-main placeholder:text-text-sub/50 focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light/10 transition-all text-sm font-medium"
            placeholder="Describe your query or preferred consultation details..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full shrink-0 flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-4 font-bold text-white shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all hover:bg-[#20bd5a] hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-base uppercase tracking-wider mt-2"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Chat with Astrologer Gokul
      </button>
    </form>
  );
}
