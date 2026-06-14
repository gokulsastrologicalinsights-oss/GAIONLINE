import About from "../components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Gokul's Astrological Insights",
  description: "Learn about Gokul's Astrological Insights (GAI), founded by Astrologer Gokul Murugan. Authentic Vedic astrology guidance, Jathagam, Marriage Matching, and Vastu solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-10">
      <About />
    </main>
  );
}
