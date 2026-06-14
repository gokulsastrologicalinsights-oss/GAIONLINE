import type { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";

export const metadata: Metadata = {
  title: "Contact | Gokul's Astrological Insights",
  description: "Contact Gokul's Astrological Insights for Jathagam Analysis, Marriage Matching, Name Selection, Career Guidance and online astrology consultations through WhatsApp.",
};

export default function ContactPage() {
  return <ContactClientPage />;
}
