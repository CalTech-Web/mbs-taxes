import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import { highlightText } from "@/lib/highlightText";

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
  { title: "Veteran Owned & Operated", highlight: "Veteran", desc: "Built on discipline, integrity, and accountability" },
  { title: "Accurate Reporting", highlight: "Accurate", desc: "Precise financial statements you can rely on" },
  { title: "QuickBooks Expertise", highlight: "Expertise", desc: "Seamless integration with your accounting software" },
  { title: "Flexible Reporting", highlight: "Flexible", desc: "Monthly, quarterly, or annual reporting to fit your needs" },
];

const whoBenefits = [
  "Small business owners",
  "Growing companies",
  "Self-employed professionals",
  "Startups and entrepreneurs",
  "Property managers",
  "Established businesses",
];

export default function FinancialAccountingPage() {
  return (
    <>
      <Hero
        title="Financial Accounting Services in Los Angeles"
        subtitle="Clear Financial Insight for Your Business"
        description="MBS TAXES delivers accurate financial accounting services to help businesses understand their financial position and make informed decisions."
        bgImage="/images/pexels-n-voitkevich-6863245.jpg"
        primaryCta={{ label: "Schedule a FREE Consultation", href: "/contact" }}
        secondaryCta={{ label: "Call Now: (310) 256-2412", href: "tel:3102562412" }}
        highlights={["Accounting", "Los Angeles"]}
        compact
      />

      {/* Main Content */}
      <section className="py-24 section-depth relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <SectionTitle
                subtitle="Our Accounting Services"
                title="Financial Clarity You Can Count On"
                highlights={["Clarity", "Count"]}
                align="left"
              />
              <p className="text-muted leading-relaxed text-lg">
                Understanding your financial position is essential for making sound business decisions. At MBS TAXES, our financial accounting services provide you with accurate, organized, and timely financial reports that give you a clear picture of where your business stands.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                From profit and loss statements to comprehensive balance sheets, our team ensures your financial records are accurate and ready when you need them. We work with QuickBooks and other accounting platforms to deliver seamless reporting.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
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
            title="Financial Accounting Services Include"
            highlights={["Accounting", "Services"]}
            description="Our financial accounting services are designed to give you a complete and accurate view of your business finances."
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
            title="Who Benefits from Financial Accounting"
            highlights={["Benefits", "Accounting"]}
            description="Our financial accounting services support a wide range of clients who need organized, accurate financial reporting."
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
