"use client";

import { FormEvent, useState } from "react";
import { CONTACT_INFO } from "../constants";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      name.trim() && `Name: ${name.trim()}`,
      message.trim() && `Message: ${message.trim()}`,
    ].filter(Boolean);
    const text = lines.length ? lines.join("\n") : "Hello, I would like to book a consultation.";
    const url = `https://wa.me/${CONTACT_INFO.whatsapp_num}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full min-h-0 flex-col gap-5 rounded-lg border border-border-subtle bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] md:p-8"
    >
      <h3 className="font-serif text-xl font-semibold text-text-main md:text-2xl">
        Quick Message
      </h3>
      <p className="text-sm leading-relaxed text-text-sub">
        Share your name and query — we&apos;ll connect with you on WhatsApp for direct consultation.
      </p>
      <div className="flex min-h-0 flex-1 flex-col gap-5">
        <div className="shrink-0">
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-primary">
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-border-subtle bg-white px-3 py-2.5 text-text-main placeholder:text-text-sub/70 focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light"
            placeholder="e.g. Ramesh Kumar"
          />
        </div>
        <div className="flex min-h-0 flex-1 flex-col">
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-primary">
            How can we help?
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[100px] flex-1 resize-y rounded-md border border-border-subtle bg-white px-3 py-2.5 text-text-main placeholder:text-text-sub/70 focus:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light"
            placeholder="Jathagam analysis, Marriage Matching, Name Selection, Career guidance, or preferred time to talk…"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full shrink-0 rounded-md bg-[#25D366] px-8 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#20bd5a] md:w-auto lg:mt-auto"
      >
        Continue on WhatsApp
      </button>
    </form>
  );
}
