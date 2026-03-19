import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ExternalWidget from "@/components/ExternalWidget";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Tax Tips",
  description:
    "Practical tax tips from MBS TAXES to help individuals and businesses stay compliant, reduce tax liability, and improve financial organization.",
};

export default function TaxTipsPage() {
  return (
    <>
      <Hero
        title="Tax Tips"
        subtitle="Helpful Guidance for Tax Preparation"
        description="MBS TAXES provides practical tax tips to help individuals and businesses stay compliant, reduce tax liability, and improve financial organization."
        bgImage="/images/pexels-yankrukov-7792785.jpg"
        compact
      />

      <section className="py-24 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Expert Tips"
            title="Tax Tips & Strategies"
          />
          <div className="mt-8">
            <ExternalWidget src="https://widget.resourcesforclients.com/wtt/tips.js?u=T9LHWPeABJsm" />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
