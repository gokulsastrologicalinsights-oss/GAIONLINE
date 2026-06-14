import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { SOCIAL_LINKS, CONTACT_INFO } from "./constants";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gokul's Astrological Insights | Astrology, Jathagam & Vastu",
  description:
    "Trusted astrology consultations: Jathagam analysis, Marriage Matching (Porutham), Name Selection, and Vastu. Call / WhatsApp +91 9444 55 9071.",
  icons: {
    icon: [{ url: "/images/logo/GAI-Logo-v3.jpg", type: "image/jpeg" }],
    apple: "/images/logo/GAI-Logo-v3.jpg",
  },
  openGraph: {
    title: "Gokul's Astrological Insights | Astrology, Jathagam & Vastu",
    description: "Trusted astrology consultations: Jathagam analysis, Marriage Matching (Porutham), Name Selection, and Vastu. Call / WhatsApp +91 9444 55 9071.",
    url: "https://gokulsastrologicalinsights.com",
    siteName: "Gokul's Astrological Insights",
    images: [
      {
        url: "/images/logo/GAI-Logo-v3.jpg",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Gokul's Astrological Insights",
    "image": "https://gokulsastrologicalinsights.com/images/logo/GAI-Logo-v3.jpg",
    "@id": "https://gokulsastrologicalinsights.com/#professional-service",
    "url": "https://gokulsastrologicalinsights.com",
    "telephone": CONTACT_INFO.phone_tel,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "sameAs": [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.facebook
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${playfair.variable} antialiased font-sans bg-white text-text-main`}>
        <Navbar />
        {children}
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
