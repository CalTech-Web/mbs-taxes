import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "QuickBooks Tax Filing Services",
  description:
    "MBS TAXES provides QuickBooks tax filing services including tax return preparation, W2 and 1099 preparation, year end accounting, book cleanup, and QuickBooks setup.",
};

const services = [
  "QuickBooks tax return preparation and filing",
  "W2 preparation",
  "1099 preparation",
  "Year end accounting and reporting",
  "Book cleanup",
  "QuickBooks setup",
];

const whyChoose = [
  { title: "Veteran Owned & Operated", desc: "Built on discipline, integrity, and accountability" },
  { title: "QuickBooks Certified", desc: "Deep expertise across QuickBooks Desktop and Online" },
  { title: "Book Cleanup Specialists", desc: "We organize and correct your financial records" },
  { title: "Full Filing Support", desc: "From QuickBooks data to completed tax returns" },
];

const whoBenefits = [
  "Small business owners",
  "Self-employed professionals",
  "Startups needing QuickBooks setup",
  "Businesses with messy books",
  "Companies needing W2 and 1099 prep",
  "Established businesses",
];

export default function QuickBooksPage() {
  return (
    <>
      <Hero
        title="QuickBooks Tax Filing Services"
        subtitle="From QuickBooks to Filed Returns"
        description="MBS TAXES provides QuickBooks tax filing services including setup, book cleanup, W2 and 1099 preparation, and year end accounting to keep your finances accurate and compliant."
        bgImage="/images/pexels-yankrukov-7693186.jpg"
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
                subtitle="QuickBooks Services"
                title="Expert QuickBooks Tax Filing Support"
                align="left"
              />
              <p className="text-muted leading-relaxed text-lg">
                QuickBooks is a powerful tool for managing your business finances, but getting the most out of it requires expertise. At MBS TAXES, we provide comprehensive QuickBooks tax filing services that take your accounting data and turn it into accurate, compliant tax returns.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Whether you need help setting up QuickBooks for the first time, cleaning up your existing books, or preparing W2s and 1099s for year end, our experienced team handles every step of the process. We work with both QuickBooks Desktop and QuickBooks Online.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/pexels-yankrukov-7693186.jpg"
                    alt="QuickBooks tax filing and accounting services"
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
        <div className="orb orb-gold orb-animate w-64 h-64 -top-20 -right-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="What We Provide"
            title="QuickBooks Tax Filing Services Include"
            description="Our QuickBooks services cover setup, maintenance, and tax filing to ensure your financial records are accurate and complete."
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
            title="Who Benefits from QuickBooks Tax Filing"
            description="Our QuickBooks tax filing services are designed for businesses that rely on QuickBooks and need expert help with their financial records and tax returns."
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
