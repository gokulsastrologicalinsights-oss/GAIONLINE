import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gokul's Astrological Insights | Astrology, Jathagam & Vastu",
  description:
    "Trusted astrology consultations: Jathagam analysis, Marriage Matching (Porutham), Name Selection, and Vastu. Call / WhatsApp +91 9444 55 9071.",
  icons: {
    icon: [{ url: "/images/logo/GAI-Logo.png", type: "image/png" }],
    apple: "/images/logo/GAI-Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
