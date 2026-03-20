import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import { highlightText } from "@/lib/highlightText";

export const metadata: Metadata = {
  title: "Business Consulting Services in Los Angeles",
  description:
    "MBS TAXES provides business consulting services in Los Angeles including bookkeeping, financial organization, tax law guidance, QuickBooks consulting, and startup consulting.",
};

const services = [
  "Streamlining bookkeeping and accounting",
  "Organizing financial records",
  "Tax law guidance",
  "Financial reporting",
  "Accounting system setup",
  "QuickBooks consulting",
  "Startup consulting",
];

const whyChoose = [
  { title: "Veteran Owned & Operated", highlight: "Veteran", desc: "Built on discipline, integrity, and accountability" },
  { title: "Strategic Guidance", highlight: "Strategic", desc: "Practical advice to strengthen your operations" },
  { title: "Startup Expertise", highlight: "Expertise", desc: "Helping new businesses build a strong financial foundation" },
  { title: "Long-Term Partnership", highlight: "Partnership", desc: "Ongoing support as your business grows" },
];

const whoBenefits = [
  "Small business owners",
  "Startups and entrepreneurs",
  "Growing companies",
  "Self-employed professionals",
  "Business owners seeking organization",
  "Companies needing financial systems",
];

export default function BusinessConsultingPage() {
  return (
    <>
      <Hero
        title="Business Consulting Services in Los Angeles"
        subtitle="Strategic Guidance for Business Growth"
        description="MBS TAXES offers business consulting services to help you streamline operations, organize financial records, and build a strong foundation for long-term growth."
        bgImage="/images/pexels-rdne-8293653.jpg"
        primaryCta={{ label: "Schedule a FREE Consultation", href: "/contact" }}
        secondaryCta={{ label: "Call Now: (310) 256-2412", href: "tel:3102562412" }}
        highlights={["Consulting", "Los Angeles"]}
        compact
      />

      {/* Main Content */}
      <section className="py-24 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionTitle
                subtitle="Our Consulting Services"
                title="Build a Stronger Business"
                highlights={["Stronger"]}
                align="left"
              />
              <p className="text-muted leading-relaxed text-lg">
                Strong financial organization is the backbone of a successful business. At MBS TAXES, our business consulting services help you streamline your bookkeeping and accounting processes, organize your financial records, and establish systems that support sustainable growth.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Whether you are launching a new business or looking to improve your existing operations, our team provides practical guidance on tax law, financial reporting, and accounting system setup. We also offer QuickBooks consulting to help you get the most out of your accounting software.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/pexels-rdne-8293653.jpg"
                    alt="Business consulting and strategy session"
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
        <div className="orb orb-gold orb-animate w-64 h-64 -top-20 -right-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="What We Provide"
            title="Business Consulting Services Include"
            highlights={["Consulting", "Services"]}
            description="Our consulting services cover the essential areas your business needs to stay organized and grow effectively."
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
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-24 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="Who Benefits"
            title="Who Benefits from Business Consulting"
            highlights={["Benefits", "Consulting"]}
            description="Our business consulting services are designed for anyone looking to improve their financial organization and operational efficiency."
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
