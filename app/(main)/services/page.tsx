"use client";

import { Calculator, BookOpen, Building2, Briefcase, FileText, Monitor, Shield, Clock, Award, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";

const services = [
  {
    icon: Calculator,
    title: "Tax Consultant",
    description:
      "Expert guidance on tax planning, preparation, and compliance to reduce liabilities and avoid costly errors.",
    href: "/services/tax-consultant",
    accent: "navy" as const,
  },
  {
    icon: BookOpen,
    title: "Financial Accounting",
    description:
      "Accurate bookkeeping, reporting, and financial statement preparation to understand your financial position.",
    href: "/services/financial-accounting",
    accent: "gold" as const,
  },
  {
    icon: Building2,
    title: "Corporate Tax & Accounting",
    description:
      "Tax and accounting services for LLC, S Corp, and C Corp entities to maintain compliance and support growth.",
    href: "/services/corporate-tax",
    accent: "blue" as const,
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Strategic guidance to strengthen operations, improve financial organization, and support long-term growth.",
    href: "/services/business-consulting",
    accent: "teal" as const,
  },
  {
    icon: FileText,
    title: "Year End Tax Filing",
    description:
      "Accurate year-end filing to ensure returns are prepared correctly and submitted on time.",
    href: "/services/year-end-tax-filing",
    accent: "rose" as const,
  },
  {
    icon: Monitor,
    title: "QuickBooks Tax Filing",
    description:
      "QuickBooks setup, cleanup, and tax filing support to maintain accurate financial records.",
    href: "/services/quickbooks",
    accent: "emerald" as const,
  },
];

const whyChoose = [
  { icon: Shield, title: "Veteran Owned", desc: "Discipline, integrity, and accountability" },
  { icon: Clock, title: "Decades of Experience", desc: "Supporting individuals and corporations" },
  { icon: Award, title: "Year Round Support", desc: "Not just during filing season" },
  { icon: MapPin, title: "Local Expertise", desc: "Serving Lawndale, Long Beach, and Palm Springs" },
];

const whoWeServe = [
  "Individuals & Families",
  "Small Business Owners",
  "Growing Companies",
  "Self-Employed Professionals",
  "Startups & Entrepreneurs",
  "Established Businesses",
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title={<>Tax & <span className="word-highlight">Accounting</span> Services</>}
        subtitle="Professional Solutions for Every Need"
        description="MBS TAXES provides comprehensive tax consultant and accounting services in Los Angeles for individuals, business owners, and established companies."
        bgImage="/images/pexels-n-voitkevich-6863245.jpg"
        primaryCta={{ label: "FREE Consultation", href: "/contact" }}
        secondaryCta={{ label: "(310) 256-2412", href: "tel:3102562412" }}
        compact
      />

      {/* Services Grid */}
      <section className="py-20 bg-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="What We Offer"
            title={<>Finance, Tax & Business <span className="word-highlight">Services</span></>}
            description="Professional tax consultant and accounting services designed to support individuals and organizations with accurate reporting, compliance, and financial clarity."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((card, i) => (
              <ServiceCard key={card.title} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 via-transparent to-gold-400/[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="group relative rounded-2xl p-6 bg-white/[0.06] backdrop-blur-sm border border-white/10 hover:bg-white/[0.12] hover:border-gold-400/30 transition-all duration-300 h-full">
                  <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl bg-gradient-to-r from-gold-400 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-lg bg-gold-400/15 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve — inline pills */}
      <section className="py-16 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <ScrollReveal className="shrink-0">
              <h2 className="font-heading text-2xl font-bold text-dark">Who We <span className="word-highlight">Serve</span></h2>
              <p className="mt-1 text-sm text-muted">Trusted by individuals & businesses</p>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2.5">
              {whoWeServe.map((type, i) => (
                <ScrollReveal key={type} delay={i * 0.05}>
                  <span className="inline-block px-5 py-2.5 rounded-full bg-white border border-navy-200/40 text-sm font-semibold text-navy-700 shadow-sm hover:bg-navy-500 hover:text-white hover:border-navy-500 transition-all duration-300">
                    {type}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
