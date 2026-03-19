import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import TeamCard from "@/components/TeamCard";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "MBS TAXES is a veteran-owned firm providing dependable tax consultant and accounting services in Los Angeles with over 30 years of experience.",
};

const team = [
  {
    name: "Dan Mossberg",
    title: "Founder & Lead Tax Consultant",
    veteran: "U.S. Marine Corps Veteran",
    description: "Dan Mossberg is the founder of MBS TAXES and a proud U.S. Marine Corps veteran who leads this family-owned firm with integrity and discipline. With more than 30 years of experience preparing personal and business tax returns, he brings extensive expertise in corporate accounting, cost accounting, and general accounting management. Dan earned a Bachelor of Science degree in Accounting and a Master's in Business Administration.",
  },
  {
    name: "Robert Mossberg",
    title: "Business Partner & Tax Specialist",
    veteran: "U.S. Army Veteran",
    description: "Robert Mossberg is a valued business partner and U.S. Army veteran who supports the firm with specialized tax preparation and accounting expertise. His experience in real estate provides essential knowledge in handling Schedule C profit and loss reporting, Schedule E rental property filings, and property management systems. Robert holds a Bachelor of Science degree in Accounting.",
  },
  {
    name: "Jian Li",
    title: "California Registered Tax Preparer",
    description: "Jian Li is a California Registered Tax Preparer who oversees daily operations and ensures the firm runs efficiently and securely. He holds a Bachelor of Science degree in Computer Science Technology along with a Computerized Accounting Certificate, combining technical and financial expertise. Jian focuses on maintaining compliance with tax regulations while protecting sensitive client information.",
  },
];

const services = [
  "Accounting", "Audits", "Book cleanup", "Bookkeeping", "Personal tax",
  "Self-employed Schedule C tax", "Small business tax", "Tax advice",
  "Tax consulting services", "Tax planning", "Tax preparation", "Tax services", "Tax setup",
];

const industries = [
  "Construction / Contractors", "Consulting", "Financial Services",
  "Manufacturing", "Medical / Dental / Health Services",
  "Property Management", "Retail", "Transportation",
];

const software = [
  "QuickBooks Desktop Basic / Pro / Premier", "QuickBooks Online Edition",
  "Intuit Turbo Tax", "Intuit Pro Series", "Gingr Pet-Care",
  "Shopmonkey Auto Shop", "Buildium Rental Management",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About MBS TAXES"
        subtitle="Expert Tax Solutions & Accounting Services"
        description="We are committed to the financial success of our clients and businesses we serve."
        bgImage="/images/pexels-silverkblack-23496869.jpg"
        primaryCta={{ label: "Talk to a Tax Consultant", href: "/contact" }}
        secondaryCta={{ label: "Call Now: (310) 256-2412", href: "tel:3102562412" }}
        compact
      />

      {/* About Intro */}
      <section className="py-24 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Who We Are"
            title="Veteran Leadership You Can Trust"
            description="MBS TAXES is a veteran-owned firm providing dependable tax consultant and accounting services in Los Angeles. With decades of professional experience, our team supports individuals and businesses with accurate tax preparation, accounting, and financial guidance."
          />
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="orb orb-navy orb-animate w-64 h-64 -top-20 -right-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle subtitle="Our Team" title="Meet the Leadership Team" />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <TeamCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services, Industries, Software */}
      <section className="py-24 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Expertise You Can Trust"
            title="Comprehensive Services"
            description="MBS TAXES provides flexible accounting and tax services that grow with you."
          />
          <div className="grid md:grid-cols-3 gap-10 mt-8">
            <ScrollReveal>
              <h3 className="font-heading text-xl font-semibold text-dark mb-4">Services Provided</h3>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <h3 className="font-heading text-xl font-semibold text-dark mb-4">Industries Served</h3>
              <ul className="space-y-2">
                {industries.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <h3 className="font-heading text-xl font-semibold text-dark mb-4">Software Expertise</h3>
              <ul className="space-y-2">
                {software.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
