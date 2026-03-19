import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Year End Tax Filing Services in Los Angeles",
  description:
    "MBS TAXES provides year end tax filing services in Los Angeles including individual and business tax return filing, tax document review, compliance, and federal and state filing.",
};

const services = [
  "Individual and business tax return filing",
  "Tax document review",
  "Tax compliance",
  "Tax consultation",
  "Federal and state filing",
];

const whyChoose = [
  { title: "Veteran Owned & Operated", desc: "Built on discipline, integrity, and accountability" },
  { title: "Accurate Filing", desc: "Every return is reviewed for accuracy and compliance" },
  { title: "Timely Submission", desc: "Ensuring your returns are filed before deadlines" },
  { title: "Full Document Review", desc: "Thorough review of all tax documents before filing" },
];

const whoBenefits = [
  "Individuals and families",
  "Self-employed professionals",
  "Small business owners",
  "Growing companies",
  "Startups and entrepreneurs",
  "Established businesses",
];

export default function YearEndTaxFilingPage() {
  return (
    <>
      <Hero
        title="Year End Tax Filing Services in Los Angeles"
        subtitle="Accurate Filing Before Every Deadline"
        description="MBS TAXES provides dependable year end tax filing services to ensure your returns are prepared correctly, reviewed thoroughly, and submitted on time."
        bgImage="/images/pexels-mizunokozuki-12903182.jpg"
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
                subtitle="Year End Filing"
                title="File With Confidence"
                align="left"
              />
              <p className="text-muted leading-relaxed text-lg">
                Year end tax filing requires attention to detail and a thorough understanding of current tax regulations. At MBS TAXES, we handle every aspect of the filing process to make sure your returns are accurate, compliant, and submitted before the deadline.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Our team reviews all of your tax documents, identifies applicable deductions and credits, and prepares both individual and business returns for federal and state filing. Whether you are filing for yourself or your business, we provide the support you need for a smooth year end.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/pexels-mizunokozuki-12903182.jpg"
                    alt="Year end tax filing and document preparation"
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
            title="Year End Tax Filing Services Include"
            description="Our year end filing services cover everything you need to complete your tax returns accurately and on time."
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
                <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all h-full">
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
            title="Who Benefits from Year End Tax Filing"
            description="Our year end tax filing services are designed for individuals and businesses who need accurate, timely filing support."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {whoBenefits.map((type, i) => (
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
