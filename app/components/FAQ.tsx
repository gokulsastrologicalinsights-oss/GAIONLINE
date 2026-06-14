"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { CONTACT_INFO } from "../constants";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How do I book a consultation?",
    answer: `You can easily book a consultation by clicking the "Book Consultation" button on our website, calling us directly, or sending a message on WhatsApp at ${CONTACT_INFO.phone}. We will check the available slots and coordinate a date and time that works best for you.`,
  },
  {
    question: "Is online consultation available?",
    answer: "Yes, we offer comprehensive online consultations worldwide. You can connect with Astrologer Gokul Murugan via Phone Calls, WhatsApp Voice/Video Calls, Zoom, or Google Meet from the comfort of your home.",
  },
  {
    question: "What details are required for horoscope analysis?",
    answer: "To generate and analyze your accurate Jathagam (Horoscope), you will need to provide your Date of Birth, Exact Time of Birth (including AM/PM), and Place of Birth (Town/City and District).",
  },
  {
    question: "Do you provide marriage matching services?",
    answer: "Yes, we specialize in Traditional Tamil Marriage Matching. We perform a detailed analysis of the 10 Poruthams, evaluate planetary strengths, check for crucial doshas (such as Sevvai/Chevvai Dosham, Rahu-Ketu/Naga Dosham), and analyze Dasa Sandhi compatibility to ensure a stable and happy married life.",
  },
  {
    question: "How can I contact you?",
    answer: `You can call or message us on WhatsApp at ${CONTACT_INFO.phone}, or email us at ${CONTACT_INFO.email}. For in-person consultations, you can visit our office located in ${CONTACT_INFO.address}. Prior appointment is highly recommended.`,
  },
];

function AccordionItem({ question, answer, isOpen, onClick }: FAQItem & { isOpen: boolean; onClick: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-border-subtle shadow-[0_10px_35px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-serif font-bold text-base md:text-lg text-primary hover:text-primary-light transition-colors cursor-pointer"
      >
        <span className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-primary-light shrink-0" />
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-text-sub shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-1 text-text-sub text-sm md:text-base leading-relaxed border-t border-slate-50 font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-white flex justify-center px-4 sm:px-6 lg:px-8 border-t border-b border-slate-100">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-dark font-extrabold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6 opacity-75">
            <div className="h-[1px] w-8 border-t border-primary"></div>
            <span className="text-primary text-sm">✦</span>
            <div className="h-[1px] w-8 border-t border-primary"></div>
          </div>
          <p className="text-text-sub text-base max-w-xl mx-auto leading-relaxed font-medium">
            Find quick answers to common queries regarding our consultation packages, matching processes, and required details.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
