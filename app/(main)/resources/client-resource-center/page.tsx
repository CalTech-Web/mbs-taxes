import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ExternalWidget from "@/components/ExternalWidget";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "Client Resource Center",
  description:
    "Access the MBS TAXES Client Resource Center for helpful tax information, financial resources, newsletters, tax tips, and tax videos.",
};

export default function ClientResourceCenterPage() {
  return (
    <>
      <Hero
        title="Client Resource Center"
        subtitle="Helpful Information & Resources"
        description="The Client Resource Center provides valuable information to help individuals and businesses understand tax requirements, financial planning, and compliance."
        bgImage="/images/pexels-yankrukov-7792743.jpg"
        compact
      />

      <section className="py-20 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Your Resources"
            title="Stay Informed & Prepared"
            description="MBS TAXES provides dependable tax consultant services in Los Angeles to help individuals and businesses prepare and file tax returns accurately and efficiently."
          />
          <div className="mt-8">
            <ExternalWidget src="https://widget.resourcesforclients.com/crc/crc-ncd.js?u=T9LHWPeABJsm" />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
