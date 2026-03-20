import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ExternalWidget from "@/components/ExternalWidget";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Tax and Business Newsletter",
  description:
    "Stay informed with the MBS TAXES Tax and Business Newsletter. Get updates on tax laws, financial planning, and business guidance.",
};

export default function NewslettersPage() {
  return (
    <>
      <Hero
        title="Tax and Business Newsletter"
        subtitle="Stay Informed with the Latest Updates"
        description="The MBS TAXES Tax and Business Newsletter provides valuable updates on tax laws, financial planning, and business guidance to help you stay compliant, organized, and prepared year round."
        bgImage="/images/pexels-yankrukov-7792761.jpg"
        compact
      />

      <section className="py-20 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Newsletter"
            title="Tax & Business Insights"
          />
          <div className="mt-8">
            <ExternalWidget src="https://widget.resourcesforclients.com/newsletter/TBL.js?u=T9LHWPeABJsm&n=TBL" />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
