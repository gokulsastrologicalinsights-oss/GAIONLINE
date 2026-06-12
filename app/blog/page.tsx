import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "astrology-guide",
    title: "Understanding Your Jathagam: A Beginner's Guide",
    excerpt: "Learn the foundational principles of Vedic Astrology, houses, and planetary aspects to decode your birth chart.",
    date: "June 12, 2026",
    readTime: "5 min read",
    category: "Horoscope Guidance",
  },
  {
    slug: "marriage-matching-secrets",
    title: "Porutham Secrets: How Marriage Compatibility Works",
    excerpt: "Discover the 10 key compatibility matches (Porutham) in Vedic Astrology and why they matter for a long, happy life.",
    date: "June 08, 2026",
    readTime: "7 min read",
    category: "Marriage",
  },
  {
    slug: "lucky-numbers-numerology",
    title: "How to Calculate Your Life Path and Lucky Numbers",
    excerpt: "A simple, step-by-step numerology tutorial to decode the hidden vibrations of your birth date and name.",
    date: "June 01, 2026",
    readTime: "4 min read",
    category: "Numerology",
  }
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-2">✦ Gokul's Astrological Insights ✦</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Astrology Journal &amp; Articles</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Deep dive into Vedic astrology, compatibility secrets, name numerology, and remedies compiled by expert astrologer Gokul Murugan.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group h-full">
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-full uppercase tracking-wider">{post.category}</span>
                  <span className="text-slate-400 text-xs font-semibold">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-serif font-bold text-slate-900 group-hover:text-primary transition-colors mb-3.5 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50 shrink-0">
                  <span className="text-slate-400 text-xs font-medium">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-primary font-bold text-sm inline-flex items-center gap-1 group/btn hover:underline">
                    Read Article 
                    <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
