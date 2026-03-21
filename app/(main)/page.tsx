"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, BookOpen, Building2, Briefcase, FileText, Monitor, MapPin, Users, UserRound, Building, Rocket, BriefcaseBusiness, LandPlot } from "lucide-react";
import StatisticsCounter from "@/components/StatisticsCounter";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import Hero from "@/components/Hero";

const services = [
  {
    icon: Calculator,
    title: "Tax Consultant",
    description: "Expert guidance on tax planning, preparation, and compliance to reduce liabilities and avoid costly errors.",
    href: "/services/tax-consultant",
    accent: "navy" as const,
  },
  {
    icon: BookOpen,
    title: "Financial Accounting",
    description: "Accurate bookkeeping, reporting, and financial statement preparation to understand your financial position.",
    href: "/services/financial-accounting",
    accent: "gold" as const,
  },
  {
    icon: Building2,
    title: "Corporate Tax & Accounting",
    description: "Tax and accounting services for LLC, S Corp, and C Corp entities to maintain compliance and support growth.",
    href: "/services/corporate-tax",
    accent: "blue" as const,
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic guidance to strengthen operations, improve financial organization, and support long-term growth.",
    href: "/services/business-consulting",
    accent: "teal" as const,
  },
  {
    icon: FileText,
    title: "Year End Tax Filing",
    description: "Accurate year-end filing to ensure returns are prepared correctly and submitted on time.",
    href: "/services/year-end-tax-filing",
    accent: "rose" as const,
  },
  {
    icon: Monitor,
    title: "QuickBooks Tax Filing",
    description: "QuickBooks setup, cleanup, and tax filing support to maintain accurate financial records.",
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

const clientTypes = [
  { label: "Individuals & Families", icon: Users, desc: "Personal tax returns, estate planning, and financial guidance" },
  { label: "Small Business Owners", icon: BriefcaseBusiness, desc: "Bookkeeping, payroll, and tax compliance for small businesses" },
  { label: "Growing Companies", icon: Rocket, desc: "Scalable accounting solutions for expanding organizations" },
  { label: "Businesses & Startups", icon: Building, desc: "Entity formation, tax strategy, and financial setup" },
  { label: "Self-Employed Professionals", icon: UserRound, desc: "Schedule C filing, deductions, and quarterly estimates" },
  { label: "Established Businesses", icon: LandPlot, desc: "Corporate accounting, audits, and multi-state compliance" },
];

const serviceAreas = [
  "Lawndale",
  "Long Beach",
  "Palm Springs",
  "San Gabriel",
  "Los Angeles",
  "Torrance",
  "Hawthorne",
  "Inglewood",
  "Gardena",
  "Redondo Beach",
  "Manhattan Beach",
  "El Segundo",
  "Hermosa Beach",
  "Carson",
  "Compton",
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Tax Consultant and Accounting Services in Los Angeles"
        subtitle="Trusted support for financial clarity"
        description="MBS TAXES provides dependable tax consultant and accounting services in Los Angeles for individuals, business owners, and established companies. We focus on accuracy, compliance, and long-term financial clarity."
        bgImage="/images/pexels-yankrukov-7693717.jpg"
        primaryCta={{ label: "FREE Consultation", href: "/contact" }}
        secondaryCta={{ label: "(310) 256-2412", href: "tel:3102562412" }}
        videoId="5bqtnevwpg"
      />

      <StatisticsCounter />

      {/* Services */}
      <section className="py-20 bg-light relative overflow-hidden">
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

      {/* About / Welcome */}
      <section className="py-20 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400">
                Veteran Leadership You Can Trust
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark leading-tight">
                Over 30 Years of Experience
              </h2>
              <p className="mt-5 text-muted leading-relaxed text-lg">
                MBS TAXES is led by Dan Mossberg, a proud U.S. Marine Corps veteran and founder of this family-owned business. With over 30 years of experience preparing personal and business tax returns, Dan brings extensive expertise in corporate accounting, cost accounting, and general accounting management.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Supporting the firm is Robert Mossberg, a U.S. Army veteran with specialized knowledge in real estate tax reporting, and Jian Li, a California Registered Tax Preparer who oversees daily operations with a focus on efficiency, compliance, and client data protection.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="btn-shine px-7 py-3 bg-navy-500 text-white font-semibold rounded-full hover:bg-navy-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-3 border-2 border-navy-500 text-navy-600 font-semibold rounded-full hover:bg-navy-50 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/pexels-silverkblack-23496869.jpg"
                    alt="MBS Taxes professional team"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold-400/90 backdrop-blur-sm text-white rounded-xl p-5 shadow-xl ring-1 ring-gold-300/30">
                  <p className="text-3xl font-heading font-bold">30+</p>
                  <p className="text-sm font-medium">Years of Service</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 via-transparent to-gold-400/[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="group relative rounded-2xl p-6 bg-white/[0.06] backdrop-blur-sm border border-white/10 hover:bg-white/[0.12] hover:border-gold-400/30 transition-all duration-300 h-full">
                  <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl bg-gradient-to-r from-gold-400 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-lg bg-gold-400/15 flex items-center justify-center mb-4">
                    <span className="text-gold-400 text-lg font-heading font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3} className="mt-8 text-center">
            <Link
              href="/why-choose-us"
              className="btn-shine inline-flex items-center gap-2 px-7 py-3 bg-gold-400 text-white font-semibold rounded-full hover:bg-gold-300 transition-all shadow-lg text-sm"
            >
              Why Choose Us <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gradient-to-b from-white via-navy-50/30 to-white relative overflow-hidden">
        <div className="orb orb-gold orb-animate w-64 h-64 -top-16 -left-16 opacity-30" />
        <div className="orb orb-navy orb-animate w-48 h-48 -bottom-12 -right-12 opacity-20" style={{ animationDelay: "4s" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="Who We Serve"
            title="Trusted by Individuals & Businesses"
            description="Headquartered in Lawndale, California, we proudly serve businesses and individuals across Los Angeles County, the United States, and internationally."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {clientTypes.map((type, i) => {
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

          {/* Service Areas */}
          <div className="mt-20 text-center">
            <ScrollReveal>
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400">
                Service Areas
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-3">
                Areas We Serve
              </h3>
              <p className="text-muted max-w-2xl mx-auto mb-10">
                With offices in Lawndale, Long Beach, Palm Springs, and San Gabriel, we serve clients throughout the greater Los Angeles area and beyond.
              </p>
            </ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {serviceAreas.map((area, i) => (
                <ScrollReveal key={area} delay={i * 0.04}>
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-navy-200/40 rounded-full text-sm font-semibold text-navy-700 shadow-sm hover:bg-navy-500 hover:text-white hover:border-navy-500 hover:shadow-md transition-all duration-300 cursor-default">
                    <span className="relative flex h-4 w-4 shrink-0">
                      <span className="absolute inset-0 rounded-full bg-gold-400/40 animate-ping" />
                      <MapPin className="relative h-4 w-4 text-gold-500" />
                    </span>
                    {area}
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
