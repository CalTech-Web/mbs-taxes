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
        title="Frequently Asked Questions"
        bgImage="/images/pexels-leeloothefirst-5428828.jpg"
        compact
      />

      <section className="py-24 section-depth">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle
            subtitle="FAQs"
            title="Answers to Common Questions"
            description="Find answers to the most common questions about our tax and accounting services. If you need additional help, don't hesitate to reach out."
          />

          <FAQAccordion />
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
