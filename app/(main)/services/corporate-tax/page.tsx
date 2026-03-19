import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Corporate Tax and Accounting Services",
  description:
    "MBS TAXES provides corporate tax and accounting services for LLC, S Corp, and C Corp entities including tax return preparation, compliance, financial statements, and QuickBooks accounting.",
};

const services = [
  "Corporate tax return preparation",
  "Federal and state tax filing",
  "Tax compliance and reporting",
  "Financial statement preparation",
  "Profit and loss reporting",
  "Balance sheet preparation",
  "QuickBooks accounting",
];

const entityTypes = [
  "Limited Liability Companies (LLC)",
  "S Corporations (S Corp)",
  "C Corporations (C Corp)",
];

const whyChoose = [
  { title: "Veteran Owned & Operated", desc: "Built on discipline, integrity, and accountability" },
  { title: "Multi-Entity Expertise", desc: "Experienced with LLC, S Corp, and C Corp structures" },
  { title: "Compliance Focused", desc: "Ensuring your business meets all tax obligations" },
  { title: "Financial Clarity", desc: "Accurate reporting for informed business decisions" },
];

const whoBenefits = [
  "LLC owners",
  "S Corp shareholders",
  "C Corp executives",
  "Growing companies",
  "Multi-entity businesses",
  "Established corporations",
];

export default function CorporateTaxPage() {
  return (
    <>
      <Hero
        title="Corporate Tax and Accounting Services"
        subtitle="Expert Solutions for Business Entities"
        description="MBS TAXES delivers corporate tax and accounting services for LLC, S Corp, and C Corp entities to maintain compliance and support long-term growth."
        bgImage="/images/pexels-n-voitkevich-6863250.jpg"
        primaryCta={{ label: "Schedule a FREE Consultation", href: "/contact" }}
        secondaryCta={{ label: "Call Now: (310) 256-2412", href: "tel:3102562412" }}
        compact
      />

      {/* Main Content */}
      <section className="py-24 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionTitle
                subtitle="Corporate Tax Solutions"
                title="Tax & Accounting for Business Entities"
                align="left"
              />
              <p className="text-muted leading-relaxed text-lg">
                Running a business comes with complex tax obligations. At MBS TAXES, we provide corporate tax and accounting services tailored to the specific needs of LLCs, S Corporations, and C Corporations. Our team helps ensure your entity stays compliant while optimizing your tax position.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                From corporate tax return preparation to detailed financial statement reporting, we handle the complexities so you can focus on growing your business.
              </p>
              <div className="mt-6">
                <h3 className="font-heading text-lg font-semibold text-dark mb-3">Entity Types We Serve</h3>
                <ul className="space-y-2">
                  {entityTypes.map((type) => (
                    <li key={type} className="flex items-center gap-3 text-base text-muted">
                      <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/pexels-n-voitkevich-6863250.jpg"
                    alt="Corporate tax and accounting services"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold-400/90 backdrop-blur-sm text-white rounded-xl p-5 shadow-xl ring-1 ring-gold-300/30">
                  <p className="text-3xl font-heading font-bold">30+</p>
                  <p className="text-sm font-medium">Years of Experience</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="orb orb-navy orb-animate w-64 h-64 -top-20 -right-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="What We Provide"
            title="Corporate Tax & Accounting Services Include"
            description="Our corporate services cover every aspect of tax and accounting for business entities."
          />
          <div className="max-w-2xl mx-auto mt-8">
            <ScrollReveal>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-base text-muted">
                    <span className="w-2 h-2 rounded-full bg-navy-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose MBS TAXES */}
      <section className="py-24 bg-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-400/[0.02] to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Why MBS Taxes"
            title="Why Choose MBS TAXES"
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

      {/* Who Benefits */}
      <section className="py-24 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="Who Benefits"
            title="Who Benefits from Corporate Tax Services"
            description="Our corporate tax and accounting services are built for business entities that need dependable compliance and reporting."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {whoBenefits.map((type, i) => (
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
