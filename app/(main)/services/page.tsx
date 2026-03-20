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
        title="Tax & Accounting Services"
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
            title="Finance, Tax & Business Services"
            description="Professional tax consultant and accounting services designed to support individuals and organizations with accurate reporting, compliance, and financial clarity."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((card, i) => (
              <ServiceCard key={card.title} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose — compact strip */}
      <section className="py-12 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-gold-400">{item.title}</h3>
                    <p className="text-white/70 text-xs mt-0.5">{item.desc}</p>
                  </div>
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
              <h2 className="font-heading text-2xl font-bold text-dark">Who We Serve</h2>
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
