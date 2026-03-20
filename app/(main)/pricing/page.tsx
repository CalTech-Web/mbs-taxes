import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "View MBS TAXES pricing plans for individual and business tax preparation. Contact us for a personalized quote on tax consultant and accounting services.",
};

interface PricingTier {
  title: string;
  features: string[];
  accent: string;
}

const individualTiers: PricingTier[] = [
  {
    title: "SINGLE",
    features: [
      "Simple returns",
      "Unemployment income",
      "W-2 / Students",
    ],
    accent: "navy",
  },
  {
    title: "HOH",
    features: [
      "Includes Single services",
      "Dependents",
      "Child tax credits",
      "Form 8812",
      "Form 8867",
    ],
    accent: "gold",
  },
  {
    title: "MARRIED",
    features: [
      "Includes HOH services",
      "Charitable contributions",
      "Crypto reporting",
      "Form 1098",
    ],
    accent: "blue",
  },
];

const businessTiers: PricingTier[] = [
  {
    title: "LLC / SMLLC",
    features: [
      "Schedule K-1",
      "Balance Sheet",
      "Income Statement",
    ],
    accent: "teal",
  },
  {
    title: "S-CORP / PARTNERSHIP",
    features: [
      "Pass Through Taxation",
      "Owners' Equity",
      "K-1 Preparation",
      "Balance Sheet",
      "Income Statement",
      "Form 7203",
    ],
    accent: "rose",
  },
  {
    title: "C-CORP",
    features: [
      "Charitable / Fringe Benefits",
      "1099-DIV Reporting",
      "K-1 Preparation",
      "Balance Sheet",
      "Income Statement",
    ],
    accent: "emerald",
  },
];

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className={`card-luxury card-${tier.accent} rounded-2xl p-8 h-full border border-navy-100/20 ring-1 ring-navy-100/10 flex flex-col`}
      >
        <h3 className="font-heading text-xl font-bold text-dark mb-6 text-center">
          {tier.title}
        </h3>
        <ul className="space-y-3 flex-1">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-sm text-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-8 block text-center px-6 py-3 bg-navy-500 text-white font-semibold rounded-full hover:bg-navy-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Contact for Pricing
        </Link>
      </div>
    </ScrollReveal>
  );
}

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Pricing Plans"
        bgImage="/images/pexels-kampus-8463148.jpg"
        compact
      />

      {/* Individual Plans */}
      <section className="py-24 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Individual Returns"
            title="Personal Tax Preparation"
            description="Our individual tax preparation services cover all filing statuses and common tax situations. Each plan includes audit protection through our 1040 Client Protection Program."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {individualTiers.map((tier, i) => (
              <PricingCard key={tier.title} tier={tier} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="orb orb-gold orb-animate w-72 h-72 -top-20 -right-20" />
        <div className="orb orb-navy orb-animate w-56 h-56 -bottom-16 -left-16" style={{ animationDelay: "5s" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="Business Returns"
            title="Business Tax Preparation"
            description="Our business tax services cover all entity types with comprehensive filing, reporting, and compliance support tailored to your business structure."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {businessTiers.map((tier, i) => (
              <PricingCard key={tier.title} tier={tier} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 section-depth">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-muted text-sm leading-relaxed">
              Pricing varies based on the complexity of your tax situation,
              number of forms required, and additional services needed. Contact
              us for a personalized quote tailored to your specific needs. We
              offer transparent pricing with no hidden fees.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
