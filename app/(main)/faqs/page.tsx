import type { Metadata } from "next";
import Hero from "@/components/Hero";
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

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FAQAccordion />
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
