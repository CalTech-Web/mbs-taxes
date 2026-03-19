import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";

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
  { title: "Veteran Owned & Operated", desc: "Built on discipline, integrity, and accountability" },
  { title: "Decades of Experience", desc: "Over 30 years of tax preparation expertise" },
  { title: "Year Round Support", desc: "Available beyond tax season for ongoing guidance" },
  { title: "Personalized Service", desc: "Tailored solutions for your unique tax situation" },
];

const whoBenefits = [
  "Individuals and families",
  "Self-employed professionals",
  "Small business owners",
  "Growing companies",
  "Startups and entrepreneurs",
  "Established businesses",
];

export default function TaxConsultantPage() {
  return (
    <>
      <Hero
        title="Tax Consultant Services in Los Angeles"
        subtitle="Expert Tax Guidance You Can Trust"
        description="MBS TAXES provides dependable tax consultant services to help individuals and businesses navigate tax preparation, planning, and compliance with confidence."
        bgImage="/images/pexels-yankrukov-7693717.jpg"
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
                subtitle="Our Tax Consultant Services"
                title="Comprehensive Tax Solutions"
                align="left"
              />
              <p className="text-muted leading-relaxed text-lg">
                At MBS TAXES, our tax consultant services are designed to provide individuals and businesses with accurate, compliant, and strategically sound tax preparation and planning. Whether you need help filing your annual return or want to develop a long-term tax strategy, our experienced team is here to help.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                With over 30 years of experience, we understand the complexities of federal and state tax regulations and work to identify every deduction and credit available to you.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/pexels-yankrukov-7693717.jpg"
                    alt="Tax consultant reviewing documents with client"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gold-400/90 backdrop-blur-sm text-dark rounded-xl p-5 shadow-xl ring-1 ring-gold-300/30">
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
            title="Tax Consultant Services Include"
            description="Our team delivers a full range of tax consultant services to help you stay compliant and make informed financial decisions."
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
            title="Who Benefits from Tax Consultant Services"
            description="Our tax consultant services are designed for a wide range of clients who need dependable guidance and accurate tax preparation."
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
