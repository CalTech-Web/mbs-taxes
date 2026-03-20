"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";
import { highlightText } from "@/lib/highlightText";

interface HeroProps {
  title: string;
  highlights?: string[];
  subtitle?: string;
  description?: string;
  bgImage: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
}

export default function Hero({
  title,
  highlights,
  subtitle,
  description,
  bgImage,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative ${compact ? "pt-40 pb-24" : "pt-48 pb-32 md:pt-56 md:pb-40"} overflow-hidden`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-900/65" />

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <pattern id="heroPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#heroPattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-gold-400"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto"
        >
          {highlights && highlights.length > 0 ? highlightText(title, highlights, "light") : title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="btn-shine px-8 py-3.5 bg-gold-400 text-white font-semibold rounded-full hover:bg-gold-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>

      <WaveDivider toColor="white" className="absolute -bottom-px left-0 right-0" />
    </section>
  );
}
