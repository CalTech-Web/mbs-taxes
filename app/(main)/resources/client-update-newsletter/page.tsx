import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ExternalWidget from "@/components/ExternalWidget";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Client Update Newsletter",
  description:
    "Stay informed with the MBS TAXES Client Update Newsletter for important tax changes, deadlines, and service updates.",
};

export default function ClientUpdateNewsletterPage() {
  return (
    <>
      <Hero
        title="Client Update Newsletter"
        subtitle="Important Tax Updates & Announcements"
        description="The MBS TAXES Client Update Newsletter keeps you informed about important tax changes, deadlines, and service updates to help you remain compliant, organized, and prepared."
        bgImage="/images/pexels-mikhail-nilov-6931334.jpg"
        compact
      />

      <section className="py-20 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Client Updates"
            title="Stay Connected"
          />
          <div className="mt-8">
            <ExternalWidget src="https://widget.resourcesforclients.com/newsletter/CU.js?u=T9LHWPeABJsm&n=CU" />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
