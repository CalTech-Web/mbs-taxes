"use client";

import { Calculator, BookOpen, Building2, Briefcase, FileText, Monitor } from "lucide-react";
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
  { title: "Veteran Owned & Operated", desc: "Built on discipline, integrity, and accountability" },
  { title: "Decades of Experience", desc: "Supporting individuals, small businesses, and corporations" },
  { title: "Year Round Tax Support", desc: "Not just during filing season" },
  { title: "Local Expertise", desc: "Serving Lawndale, Long Beach, and Palm Springs" },
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
        primaryCta={{ label: "Schedule a FREE Consultation", href: "/contact" }}
        secondaryCta={{ label: "Call Now: (310) 256-2412", href: "tel:3102562412" }}
        compact
      />

      {/* Services Grid */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="orb orb-gold orb-animate w-72 h-72 -top-20 -right-20" />
        <div className="orb orb-navy orb-animate w-56 h-56 -bottom-16 -left-16" style={{ animationDelay: "5s" }} />
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

      {/* Why Choose Us */}
      <section className="py-24 bg-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-400/[0.02] to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Why MBS Taxes"
            title="Why Choose Us"
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                  <h3 className="font-heading text-lg font-semibold text-gold-400 mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="Who We Serve"
            title="Trusted by Individuals & Businesses"
            description="Headquartered in Lawndale, California, we proudly serve businesses and individuals across Los Angeles County, the United States, and internationally."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {whoWeServe.map((type, i) => (
              <ScrollReveal key={type} delay={i * 0.08}>
                <div className="card-luxury card-navy rounded-xl p-5 text-center border border-navy-100/20">
                  <p className="font-heading text-sm font-semibold text-dark">{type}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
