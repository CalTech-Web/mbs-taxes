"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type CardAccent = "navy" | "gold" | "blue" | "rose" | "teal" | "emerald";

const accentIconColors: Record<CardAccent, string> = {
  navy: "text-navy-500",
  gold: "text-red-600",
  blue: "text-blue-500",
  rose: "text-rose-500",
  teal: "text-teal-500",
  emerald: "text-emerald-500",
};

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index?: number;
  accent?: CardAccent;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  index = 0,
  accent = "navy",
}: ServiceCardProps) {
  const iconColor = accentIconColors[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={href} className="group block h-full" aria-label={`Learn more about ${title}`}>
        <div className={`card-luxury card-${accent} rounded-2xl p-8 h-full border border-navy-100/20 ring-1 ring-navy-100/10`}>
          <div
            className="w-16 h-16 rounded-2xl icon-luxury icon-float flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300"
            aria-hidden="true"
          >
            <Icon className={`w-8 h-8 ${iconColor} icon-glitch`} />
          </div>
          <h3 className="font-heading text-xl font-semibold text-dark mb-2 group-hover:text-navy-500 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 group-hover:text-gold-600 transition-colors duration-300">
            Learn more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
