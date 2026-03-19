import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ExternalWidget from "@/components/ExternalWidget";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Tax Videos",
  description:
    "Watch informative tax videos from MBS TAXES to better understand tax preparation, accounting, and financial planning.",
};

export default function TaxVideosPage() {
  return (
    <>
      <Hero
        title="Tax Videos"
        subtitle="Watch & Learn About Tax Topics"
        description="MBS TAXES offers informative tax videos designed to help individuals and businesses better understand tax preparation, accounting, and financial planning."
        bgImage="/images/pexels-mikhail-nilov-7735691.jpg"
        compact
      />

      <section className="py-24 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Video Library"
            title="Tax & Financial Videos"
          />
          <div className="mt-8">
            <ExternalWidget src="https://widget.resourcesforclients.com/taxvid/tv-ncd.js?u=T9LHWPeABJsm" />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
