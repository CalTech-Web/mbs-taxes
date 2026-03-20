import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Shield, BarChart2, BookOpen, CalendarClock } from "lucide-react";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Financial Accounting Services in Los Angeles",
  description:
    "MBS TAXES provides financial accounting services in Los Angeles including profit and loss statements, balance sheets, income reports, and QuickBooks financial reports.",
};

const services = [
  "Profit and loss statements",
  "Balance sheets",
  "Income and expense reports",
  "Financial summaries",
  "QuickBooks financial reports",
  "Monthly, quarterly, and annual reporting",
];

const whyChoose = [
  { icon: Shield, title: "Veteran Owned", desc: "Discipline, integrity, and accountability" },
  { icon: BarChart2, title: "Accurate Reporting", desc: "Precise financial statements you can rely on" },
  { icon: BookOpen, title: "QuickBooks Expertise", desc: "Seamless integration with your accounting software" },
  { icon: CalendarClock, title: "Flexible Reporting", desc: "Monthly, quarterly, or annual reporting to fit your needs" },
];

const whoBenefits = [
  "Small Business Owners",
  "Growing Companies",
  "Self-Employed Professionals",
  "Startups & Entrepreneurs",
  "Property Managers",
  "Established Businesses",
];

export default function FinancialAccountingPage() {
  return (
    <>
      <Hero
        title="Financial Accounting Services in Los Angeles"
        subtitle="Clear Financial Insight for Your Business"
        description="MBS TAXES delivers accurate financial accounting services to help businesses understand their financial position and make informed decisions."
        bgImage="/images/pexels-n-voitkevich-6863245.jpg"
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
                Our Accounting Services
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark leading-tight">
                Financial Clarity You Can Count On
              </h2>
              <p className="mt-5 text-muted leading-relaxed text-lg">
                Understanding your financial position is essential for making sound business decisions. At MBS TAXES, our financial accounting services provide you with accurate, organized, and timely financial reports that give you a clear picture of where your business stands.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                From profit and loss statements to comprehensive balance sheets, our team ensures your financial records are accurate and ready when you need them. We work with QuickBooks and other accounting platforms to deliver seamless reporting.
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
                    src="/images/pexels-n-voitkevich-6863245.jpg"
                    alt="Financial accounting reports and analysis"
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
                Financial Accounting Services Include
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Our financial accounting services are designed to give you a complete and accurate view of your business finances.
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

      {/* Why Choose — compact horizontal strip */}
      <section className="py-12 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-gold-400">{item.title}</h3>
                    <p className="text-white/70 text-xs mt-0.5">{item.desc}</p>
                  </div>
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
