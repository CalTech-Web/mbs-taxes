import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find answers to frequently asked questions about MBS TAXES services, tax preparation, business accounting, IRS compliance, pricing, and more.",
};

export default function FAQsPage() {
  return (
    <>
      <Hero
        title={<>Frequently Asked <span className="word-highlight">Questions</span></>}
        bgImage="/images/pexels-leeloothefirst-5428828.jpg"
        compact
      />

      <section className="py-20 bg-gradient-to-b from-white via-navy-50/20 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-500/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="FAQs"
            title={<>Answers to Common <span className="word-highlight">Questions</span></>}
            description="Find answers to the most common questions about our tax and accounting services. If you need additional help, don't hesitate to reach out."
          />

          <FAQAccordion />
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
