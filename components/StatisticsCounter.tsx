"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Clock, Users, Building } from "lucide-react";

const stats = [
  { value: 30, label: "Years of Experience", suffix: "+", icon: Clock, format: "number" },
  { value: 5, label: "Office Locations", icon: Building, format: "number" },
  { value: 16, label: "5-Star Reviews", icon: Users, format: "number" },
  { value: 100, label: "Veteran Owned", suffix: "%", icon: Shield, format: "number" },
];

function AnimatedNumber({ target, format, suffix }: { target: number; format: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display =
    format === "comma" ? count.toLocaleString() : count.toString();

  return (
    <span ref={ref}>
      {display}
      {suffix || ""}
    </span>
  );
}

export default function StatisticsCounter() {
  return (
    <section className="relative z-10 bg-light py-[50px]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-navy-600 via-navy-500 to-navy-600 rounded-2xl shadow-2xl grid grid-cols-2 lg:grid-cols-4 overflow-hidden ring-1 ring-white/10 relative"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold-400/5 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`p-8 text-center text-white stat-glass transition-all duration-300 hover:scale-[1.02] ${
                  i < stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <div className="relative w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gold-400/10 blur-md" />
                  <Icon className="relative w-8 h-8 text-gold-400 icon-pulse" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold">
                  <AnimatedNumber
                    target={stat.value}
                    format={stat.format}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-1 text-sm text-white/80 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
