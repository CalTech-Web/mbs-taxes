"use client";

import { Calculator, BookOpen, Building2, Briefcase, FileText, Monitor, Shield, Clock, Award, MapPin, Users, UserRound, Building, Rocket, BriefcaseBusiness, LandPlot } from "lucide-react";
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
  { label: "Individuals & Families", icon: Users, desc: "Personal tax returns, estate planning, and financial guidance" },
  { label: "Small Business Owners", icon: BriefcaseBusiness, desc: "Bookkeeping, payroll, and tax compliance for small businesses" },
  { label: "Growing Companies", icon: Rocket, desc: "Scalable accounting solutions for expanding organizations" },
  { label: "Self-Employed Professionals", icon: UserRound, desc: "Schedule C filing, deductions, and quarterly estimates" },
  { label: "Startups & Entrepreneurs", icon: Building, desc: "Entity formation, tax strategy, and financial setup" },
  { label: "Established Businesses", icon: LandPlot, desc: "Corporate accounting, audits, and multi-state compliance" },
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

      {/* Who We Serve */}
      <section className="py-20 bg-gradient-to-b from-white via-navy-50/30 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="Who We Serve"
            title={<>Trusted by Individuals & <span className="word-highlight">Businesses</span></>}
            description="We provide tax and accounting services to individuals, families, and businesses of all sizes across Los Angeles and beyond."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whoWeServe.map((type, i) => {
              const Icon = type.icon;
              return (
                <ScrollReveal key={type.label} delay={i * 0.08}>
                  <div className="group relative bg-white rounded-2xl p-7 h-full border border-navy-100/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-gold-400 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-navy-500/10 flex items-center justify-center group-hover:bg-gold-400 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-navy-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-bold text-dark">{type.label}</h3>
                        <p className="mt-1 text-sm text-muted leading-relaxed">{type.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
