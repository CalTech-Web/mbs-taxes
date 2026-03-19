"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  index?: number;
  veteran?: string;
}

export default function TeamCard({
  name,
  title,
  description,
  index = 0,
  veteran,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="card-luxury card-navy rounded-2xl p-8 border border-navy-100/20 ring-1 ring-navy-100/10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-full bg-navy-500 flex items-center justify-center text-white font-heading font-bold text-xl">
          {name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold text-dark">{name}</h3>
          <p className="text-sm text-navy-500 font-medium">{title}</p>
        </div>
      </div>
      {veteran && (
        <div className="flex items-center gap-2 mb-4 px-3 py-1.5 bg-navy-50 rounded-lg w-fit">
          <Shield className="w-4 h-4 text-navy-500" />
          <span className="text-xs font-semibold text-navy-600">{veteran}</span>
        </div>
      )}
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
