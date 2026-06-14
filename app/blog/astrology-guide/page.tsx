import React from "react";
import Link from "next/link";
import BlogCTA from "../../components/BlogCTA";

export const metadata = {
  title: "Understanding Your Jathagam: A Beginner's Guide | Gokul's Astrological Insights",
  description: "Learn how to read and interpret your Vedic astrology birth chart (Jathagam), houses, planets, and sign placements. Guided by Astrologer Gokul.",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-3xl shadow-sm p-6 sm:p-10 md:p-12">
        {/* Back Link */}
        <Link href="/blog" className="text-primary hover:underline font-bold text-sm inline-flex items-center gap-1 mb-8">
          ← Back to Articles
        </Link>

        {/* Article Meta */}
        <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="text-primary">Horoscope Guidance</span>
          <span>•</span>
          <span>June 12, 2026</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
          {"Understanding Your Jathagam: A Beginner's Guide"}
        </h1>

        {/* Article Image Placeholder */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-10 bg-slate-100 flex items-center justify-center border border-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/5 flex flex-col items-center justify-center text-center p-4">
             <span className="text-primary text-4xl mb-2">✨</span>
             <span className="text-slate-800 font-serif font-bold text-lg">Decoding the Cosmic Blueprint</span>
             <span className="text-slate-400 text-xs mt-1">Vedic Birth Chart Analysis</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-slate-600 text-base sm:text-lg leading-relaxed space-y-6">
          <p>
            Vedic Astrology, or <em>Jyotish</em>, is an ancient science that translates planetary alignments at the precise second of your birth into a lifetime roadmap. This roadmap is captured in your <strong>Jathagam (Birth Chart)</strong>. 
          </p>
          <p>
            For beginners, looking at a birth chart can feel like looking at a foreign language. However, once you break it down into its three core building blocks—the Planets, the Signs, and the Houses—you can begin to read the cosmic code that governs your life path.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">1. The Ascendant (Lagna)</h2>
          <p>
            Your Lagna, or Ascendant, represents the zodiac sign that was rising on the eastern horizon at your exact moment of birth. It is the starting point of your chart, representing your physical self, persona, health, and how you project yourself to the world. Everything in your chart is calculated relative to this point.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">2. The 12 Houses (Bhavas)</h2>
          <p>
            The birth chart is divided into 12 segments called houses (Bhavas). Each house represents a specific area of your life:
          </p>
          <ul className="list-disc pl-6 space-y-2.5">
            <li><strong>1st House:</strong> Physical appearance, character, overall health, and Lagna.</li>
            <li><strong>2nd House:</strong> Family wealth, speech, speech habits, and early childhood.</li>
            <li><strong>7th House:</strong> Partnership, marriage compatibility, and business contracts.</li>
            <li><strong>10th House:</strong> Career, public reputation, accomplishments, and profession.</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">3. Planets (Grahas)</h2>
          <p>
            Planets are the actors in the drama of your life, representing different facets of your consciousness. For example, the Sun represents your soul and ego, the Moon governs your mind and emotions, while Mars drives your ambition and energy. Where these planets sit in your houses dictates the ease or challenges you will face in those specific areas of life.
          </p>
        </div>

        {/* Reusable Blog CTA Button at the end of the article */}
        <BlogCTA />
      </div>
    </main>
  );
}
