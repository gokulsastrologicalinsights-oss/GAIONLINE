"use client";

import { useEffect, useRef } from "react";
import { useInView, animate, motion } from "framer-motion";
import { Users, Heart, Award } from "lucide-react";

interface StatItemProps {
  to: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

function StatCard({ to, suffix = "", label, icon }: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      const controls = animate(0, to, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.floor(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [inView, to]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-2xl p-6 md:p-8 border border-border-subtle shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(54,61,133,0.1)] hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
    >
      <div className="w-14 h-14 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-serif font-extrabold text-primary mb-2 flex items-center justify-center group-hover:text-primary transition-colors duration-300">
        <span ref={ref}>0</span>
        <span className="text-primary-light font-sans">{suffix}</span>
      </div>
      <p className="text-text-sub text-sm md:text-base font-semibold tracking-wide uppercase mt-1">
        {label}
      </p>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="w-full py-16 bg-surface-light border-b border-border-subtle flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <StatCard
            to={5000}
            suffix="+"
            label="Consultations"
            icon={<Users className="w-6 h-6" />}
          />
          <StatCard
            to={1000}
            suffix="+"
            label="Marriage Matchings"
            icon={<Heart className="w-6 h-6" />}
          />
          <StatCard
            to={10}
            suffix="+"
            label="Years Experience"
            icon={<Award className="w-6 h-6" />}
          />
          <StatCard
            to={24}
            suffix="×7"
            label="Online Support"
            icon={
              <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
