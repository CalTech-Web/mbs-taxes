"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Clock, ShieldCheck } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="py-24 bg-navy-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <pattern id="ctaPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#ctaPattern)" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400"
        >
          Speak directly with a trusted tax consultant
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          <span className="word-highlight">FREE</span> Consultation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Get expert guidance from MBS TAXES with a free consultation. Our tax consultant and accounting services in Los Angeles are designed to help you stay compliant, organized, and confident in your financial decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10"
        >
          {[
            { icon: MessageSquare, title: "Personalized Guidance", desc: "Speak directly with an experienced tax consultant" },
            { icon: ShieldCheck, title: "Clear Financial Insight", desc: "Understand your tax and accounting position" },
            { icon: Clock, title: "Year Round Support", desc: "Reliable help beyond tax season" },
            { icon: Phone, title: "No Obligation", desc: "Get answers with no pressure" },
          ].map((item) => (
            <div key={item.title} className="text-center group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-gold-400 icon-glitch" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
              <p className="text-xs text-white/70">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="btn-shine px-8 py-3.5 bg-gold-400 text-white font-semibold rounded-full hover:bg-gold-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Schedule Free Consultation
          </Link>
          <a
            href="tel:3102562412"
            className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
          >
            Call Now: (310) 256 - 2412
          </a>
        </motion.div>
      </div>
    </section>
  );
}
