"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, BookOpen, Building2, Briefcase, FileText, Monitor } from "lucide-react";
import StatisticsCounter from "@/components/StatisticsCounter";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import Hero from "@/components/Hero";
import { highlightText } from "@/lib/highlightText";

const services = [
  {
    icon: Calculator,
    title: "Tax Consultant",
    highlights: ["Consultant"],
    description: "Expert guidance on tax planning, preparation, and compliance to reduce liabilities and avoid costly errors.",
    href: "/services/tax-consultant",
    accent: "navy" as const,
  },
  {
    icon: BookOpen,
    title: "Financial Accounting",
    highlights: ["Accounting"],
    description: "Accurate bookkeeping, reporting, and financial statement preparation to understand your financial position.",
    href: "/services/financial-accounting",
    accent: "gold" as const,
  },
  {
    icon: Building2,
    title: "Corporate Tax & Accounting",
    highlights: ["Corporate"],
    description: "Tax and accounting services for LLC, S Corp, and C Corp entities to maintain compliance and support growth.",
    href: "/services/corporate-tax",
    accent: "blue" as const,
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    highlights: ["Consulting"],
    description: "Strategic guidance to strengthen operations, improve financial organization, and support long-term growth.",
    href: "/services/business-consulting",
    accent: "teal" as const,
  },
  {
    icon: FileText,
    title: "Year End Tax Filing",
    highlights: ["Filing"],
    description: "Accurate year-end filing to ensure returns are prepared correctly and submitted on time.",
    href: "/services/year-end-tax-filing",
    accent: "rose" as const,
  },
  {
    icon: Monitor,
    title: "QuickBooks Tax Filing",
    highlights: ["QuickBooks"],
    description: "QuickBooks setup, cleanup, and tax filing support to maintain accurate financial records.",
    href: "/services/quickbooks",
    accent: "emerald" as const,
  },
];

const whyChoose = [
  { title: "Veteran Owned & Operated", highlight: "Veteran", desc: "Built on discipline, integrity, and accountability" },
  { title: "Decades of Experience", highlight: "Experience", desc: "Supporting individuals, small businesses, and corporations" },
  { title: "Year Round Tax Support", highlight: "Support", desc: "Not just during filing season" },
  { title: "Local Expertise", highlight: "Expertise", desc: "Serving Lawndale, Long Beach, and Palm Springs" },
];

const clientTypes = [
  "Individuals & Families",
  "Small Business Owners",
  "Growing Companies",
  "Businesses & Startups",
  "Self-Employed Professionals",
  "Established Businesses",
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Tax Consultant and Accounting Services in Los Angeles"
        highlights={["Consultant", "Services"]}
        subtitle="Trusted support for financial clarity"
        description="MBS TAXES provides dependable tax consultant and accounting services in Los Angeles for individuals, business owners, and established companies. We focus on accuracy, compliance, and long-term financial clarity."
        bgImage="/images/pexels-yankrukov-7693717.jpg"
        primaryCta={{ label: "Schedule a FREE Consultation", href: "/contact" }}
        secondaryCta={{ label: "Call Now: (310) 256-2412", href: "tel:3102562412" }}
      />

      <StatisticsCounter />

      {/* Services */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="orb orb-gold orb-animate w-72 h-72 -top-20 -right-20" />
        <div className="orb orb-navy orb-animate w-56 h-56 -bottom-16 -left-16" style={{ animationDelay: "5s" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="What We Offer"
            title="Finance, Tax & Business Services"
            highlights={["Finance", "Services"]}
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
      <section className="py-24 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400">
                Veteran Leadership You Can Trust
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark leading-tight">
                {highlightText("Over 30 Years of Experience", ["Years", "Experience"])}
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
      <section className="py-24 bg-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-400/[0.02] to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Why MBS Taxes"
            title="Why Choose Us"
            highlights={["Choose"]}
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all h-full">
                  <h3 className="font-heading text-lg font-semibold text-gold-400 mb-2">{highlightText(item.title, [item.highlight], "light")}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3} className="mt-10 text-center">
            <Link
              href="/why-choose-us"
              className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 bg-gold-400 text-white font-semibold rounded-full hover:bg-gold-300 transition-all shadow-lg"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="Who We Serve"
            title="Trusted by Individuals & Businesses"
            highlights={["Trusted", "Businesses"]}
            description="Headquartered in Lawndale, California, we proudly serve businesses and individuals across Los Angeles County, the United States, and internationally."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {clientTypes.map((type, i) => (
              <ScrollReveal key={type} delay={i * 0.08}>
                <div className="card-luxury card-navy rounded-xl p-5 text-center h-full border border-navy-100/20">
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
