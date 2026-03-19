import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import {
  ShieldCheck,
  FileSearch,
  Users,
  Lock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why MBS TAXES is the trusted choice for tax consultant services. Audit protection, bilingual support, identity theft restoration, and year-round guidance.",
};

const auditFeatures = [
  "3 Year Audit Protection included with every 1040 return",
  "Partnership with Tax Protection Plus, a dedicated team of CPAs and Enrolled Agents",
  "Full coverage for federal and state individual returns",
];

const noticeServices = [
  "Interpret IRS and state letters and notices",
  "Provide guidance on next steps and deadlines",
  "Research return statuses and account transcripts",
  "Reconcile CP2000 notices and proposed adjustments",
  "Address IRS form issues and discrepancies",
  "Assist with denied credits and rejected claims",
  "Help resolve tax debts and payment arrangements",
];

const idTheftFeatures = [
  "24/7 access to identity theft restoration advocates",
  "Assistance with bank and financial institution notifications",
  "Placement of fraud alerts with credit bureaus",
  "Daily credit monitoring for 6 months following an incident",
];

const steps = [
  {
    number: "1",
    title: "Client Receives Notice",
    description:
      "You receive a letter or notice from the IRS or state tax authority regarding your return.",
  },
  {
    number: "2",
    title: "Notify Tax Protection Plus",
    description:
      "Contact our team and we immediately forward your case to Tax Protection Plus for review.",
  },
  {
    number: "3",
    title: "Tax Specialist Goes to Work",
    description:
      "A dedicated CPA or Enrolled Agent reviews your case, researches the issue, and takes action on your behalf.",
  },
  {
    number: "4",
    title: "Case Is Resolved",
    description:
      "Your case is handled from start to finish until the matter is fully resolved and closed.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <Hero
        title="Why Choose MBS TAXES"
        subtitle="Trusted Tax Consultant Services"
        description="We go beyond tax preparation with audit protection, year-round support, and a dedicated team that stands behind every return we file."
        bgImage="/images/pexels-mizunokozuki-13801813.jpg"
        compact
      />

      {/* 1040 Client Protection */}
      <section className="py-24 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Client Protection"
            title="1040 Client Protection Program"
            description="Every individual tax return we prepare comes with built-in audit protection through our partnership with Tax Protection Plus, a professional team of CPAs and Enrolled Agents dedicated to defending your return."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {auditFeatures.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-luxury card-navy rounded-2xl p-8 h-full border border-navy-100/20 ring-1 ring-navy-100/10">
                  <div className="w-14 h-14 rounded-2xl icon-luxury flex items-center justify-center mb-5">
                    <ShieldCheck className="w-7 h-7 text-navy-500" />
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{feature}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notices & Audit Assistance */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="orb orb-navy orb-animate w-64 h-64 -top-20 -right-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="Expert Assistance"
            title="Notices & Audit Assistance"
            description="Our bilingual team is equipped to help you navigate IRS and state correspondence with confidence. We handle the stress so you don't have to."
          />
          <div className="grid md:grid-cols-2 gap-12 items-start mt-8">
            <ScrollReveal>
              <div className="card-luxury card-gold rounded-2xl p-8 border border-navy-100/20 ring-1 ring-navy-100/10">
                <div className="w-14 h-14 rounded-2xl icon-luxury flex items-center justify-center mb-5">
                  <FileSearch className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark mb-4">
                  What We Handle
                </h3>
                <ul className="space-y-3">
                  {noticeServices.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="card-luxury card-blue rounded-2xl p-8 border border-navy-100/20 ring-1 ring-navy-100/10">
                <div className="w-14 h-14 rounded-2xl icon-luxury flex items-center justify-center mb-5">
                  <Users className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark mb-4">
                  Bilingual Support
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Our team offers bilingual support to ensure clear
                  communication and understanding throughout every step of the
                  process. Whether you prefer English or Spanish, we are here to
                  assist you with the same level of professionalism and care.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  We also have Mandarin-speaking staff available to serve our
                  Chinese-speaking clients, ensuring everyone has access to
                  quality tax services.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Identity Theft Restoration */}
      <section className="py-24 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Identity Protection"
            title="Identity Theft Restoration"
            description="If your identity is compromised, our protection program provides immediate assistance through dedicated advocates who work to restore your identity and financial security."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {idTheftFeatures.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-luxury card-navy rounded-2xl p-6 h-full border border-navy-100/20 ring-1 ring-navy-100/10 text-center">
                  <div className="w-12 h-12 rounded-full icon-luxury flex items-center justify-center mb-4 mx-auto">
                    <Lock className="w-6 h-6 text-navy-500" />
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{feature}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-24 bg-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-400/[0.02] to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="How It Works"
            title="Our 4-Step Protection Process"
            light
          />
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.12}>
                <div className="relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all h-full">
                  <div className="w-12 h-12 rounded-full bg-gold-400 text-white flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-gold-400 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400/60" />
                  )}
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
