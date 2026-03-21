import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Shield, TrendingUp, Lightbulb, Handshake } from "lucide-react";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";

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
  { icon: Shield, title: "Veteran Owned & Operated", desc: "Built on discipline, integrity, and accountability" },
  { icon: TrendingUp, title: "Strategic Guidance", desc: "Practical advice to strengthen your operations" },
  { icon: Lightbulb, title: "Startup Expertise", desc: "Helping new businesses build a strong financial foundation" },
  { icon: Handshake, title: "Long-Term Partnership", desc: "Ongoing support as your business grows" },
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
        primaryCta={{ label: "FREE Consultation", href: "/contact" }}
        secondaryCta={{ label: "(310) 256-2412", href: "tel:3102562412" }}
        compact
      />

      {/* Intro — asymmetric 2-col with inline heading */}
      <section className="py-20 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <ScrollReveal direction="left" className="lg:col-span-3">
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400">
                Our Consulting Services
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark leading-tight">
                Build a Stronger Business
              </h2>
              <p className="mt-5 text-muted leading-relaxed text-lg">
                Strong financial organization is the backbone of a successful business. At MBS TAXES, our business consulting services help you streamline your bookkeeping and accounting processes, organize your financial records, and establish systems that support sustainable growth.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Whether you are launching a new business or looking to improve your existing operations, our team provides practical guidance on tax law, financial reporting, and accounting system setup. We also offer QuickBooks consulting to help you get the most out of your accounting software.
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
                    src="/images/pexels-rdne-8293653.jpg"
                    alt="Business consulting and strategy session"
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
      <section className="py-16 bg-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-x-12 gap-y-8 items-start">
            <ScrollReveal className="lg:sticky lg:top-8">
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400">
                What We Provide
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark leading-tight">
                Business Consulting Services Include
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Our consulting services cover the essential areas your business needs to stay organized and grow effectively.
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

      {/* Who Benefits — inline pills */}
      <section className="py-16 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <ScrollReveal className="shrink-0">
              <h2 className="font-heading text-2xl font-bold text-dark">Who Benefits</h2>
              <p className="mt-1 text-sm text-muted">Our services are designed for</p>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2.5">
              {whoBenefits.map((type, i) => (
                <ScrollReveal key={type} delay={i * 0.05}>
                  <span className="inline-block px-5 py-2.5 rounded-full bg-white border border-navy-200/40 text-sm font-semibold text-navy-700 shadow-sm hover:bg-navy-500 hover:text-white hover:border-navy-500 transition-all duration-300">
                    {type}
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
