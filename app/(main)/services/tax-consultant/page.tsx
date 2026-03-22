import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Shield, Clock, Award, Users, UserRound, BriefcaseBusiness, Rocket, Building, LandPlot } from "lucide-react";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import OfficeLocations from "@/components/OfficeLocations";

export const metadata: Metadata = {
  title: "Tax Consultant Services in Los Angeles",
  description:
    "MBS TAXES provides expert tax consultant services in Los Angeles including tax preparation, planning, compliance, and IRS notice response support for individuals and businesses.",
};

const services = [
  "Individual and business tax return preparation",
  "Federal and state tax filing",
  "Year end tax filing",
  "Tax deduction and credit identification",
  "Tax compliance",
  "IRS notice response support",
  "Tax planning and advisory",
];

const whyChoose = [
  { icon: Shield, title: "Veteran Owned", desc: "Discipline, integrity, and accountability" },
  { icon: Clock, title: "30+ Years Experience", desc: "Decades of tax preparation expertise" },
  { icon: Award, title: "Year Round Support", desc: "Available beyond filing season" },
  { icon: Users, title: "Personalized Service", desc: "Tailored to your unique situation" },
];

const whoBenefits = [
  { label: "Individuals & Families", icon: Users, desc: "Personal tax returns, deductions, and year-round guidance" },
  { label: "Self-Employed Professionals", icon: UserRound, desc: "Schedule C filing, quarterly estimates, and deductions" },
  { label: "Small Business Owners", icon: BriefcaseBusiness, desc: "Bookkeeping, payroll, and tax compliance support" },
  { label: "Growing Companies", icon: Rocket, desc: "Scalable tax solutions as your business expands" },
  { label: "Startups & Entrepreneurs", icon: Building, desc: "Entity formation, tax strategy, and financial setup" },
  { label: "Established Businesses", icon: LandPlot, desc: "Corporate accounting, audits, and multi-state compliance" },
];

export default function TaxConsultantPage() {
  return (
    <>
      <Hero
        title={<>Tax <span className="word-highlight">Consultant</span> Services in Los Angeles</>}
        subtitle="Expert Tax Guidance You Can Trust"
        description="MBS TAXES provides dependable tax consultant services to help individuals and businesses navigate tax preparation, planning, and compliance with confidence."
        bgImage="/images/pexels-photo-6950015.jpg"
        primaryCta={{ label: "FREE Consultation", href: "/contact" }}
        secondaryCta={{ label: "(310) 256-2412", href: "tel:3102562412" }}
        compact
      />

      {/* Intro — asymmetric 2-col with inline heading */}
      <section className="py-28 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <ScrollReveal direction="left" className="lg:col-span-3">
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400">
                Our Tax Consultant Services
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark leading-tight">
                Comprehensive Tax <span className="word-highlight">Solutions</span>
              </h2>
              <p className="mt-5 text-muted leading-relaxed text-lg">
                At MBS TAXES, our tax consultant services are designed to provide individuals and businesses with accurate, compliant, and strategically sound tax preparation and planning. Whether you need help filing your annual return or want to develop a long-term tax strategy, our experienced team is here to help.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                With over 30 years of experience, we understand the complexities of federal and state tax regulations and work to identify every deduction and credit available to you.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-navy-500/5 border border-navy-100/30 p-4">
                  <p className="text-2xl font-heading font-bold text-navy-600">30+</p>
                  <p className="text-xs text-muted font-medium">Years of Experience</p>
                </div>
                <div className="rounded-xl bg-gold-400/5 border border-gold-300/30 p-4">
                  <p className="text-2xl font-heading font-bold text-gold-500">5</p>
                  <p className="text-xs text-muted font-medium">Office Locations</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/pexels-photo-7691691.jpg"
                    alt="Tax consultant reviewing documents with client"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services — icon card grid */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-x-12 gap-y-8 items-start">
            <ScrollReveal className="lg:sticky lg:top-8">
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400">
                What We Provide
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark leading-tight">
                Tax Consultant Services <span className="word-highlight">Include</span>
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Our team delivers a full range of tax consultant services to help you stay compliant and make informed financial decisions.
              </p>
            </ScrollReveal>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {services.map((s, i) => (
                <ScrollReveal key={s} delay={i * 0.05}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-navy-100/20 shadow-sm hover:shadow-md transition-shadow h-full">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-dark">{s}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 via-transparent to-gold-400/[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="group relative rounded-2xl p-6 bg-white/[0.06] backdrop-blur-sm border border-white/10 hover:bg-white/[0.12] hover:border-gold-400/30 transition-all duration-300 h-full">
                  <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl bg-gradient-to-r from-gold-400 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 rounded-lg bg-gold-400/15 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-gold-400 icon-glitch" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-gradient-to-b from-white via-navy-50/30 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400">Who Benefits</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark">Our Services Are Designed <span className="word-highlight">For</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whoBenefits.map((type, i) => {
              const Icon = type.icon;
              return (
                <ScrollReveal key={type.label} delay={i * 0.08}>
                  <div className="group relative bg-white rounded-2xl p-7 h-full border border-navy-100/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-gold-400 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-navy-500/10 flex items-center justify-center group-hover:bg-gold-400 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-navy-600 group-hover:text-white transition-colors duration-300 icon-glitch" />
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

      <OfficeLocations />

      <ConsultationCTA />
    </>
  );
}
