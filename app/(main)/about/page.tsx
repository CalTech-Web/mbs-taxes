import type { Metadata } from "next";
import Hero from "@/components/Hero";
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
        title={<>About MBS <span className="word-highlight">TAXES</span></>}
        subtitle="Expert Tax Solutions & Accounting Services"
        description="We are committed to the financial success of our clients and businesses we serve."
        bgImage="/images/pexels-silverkblack-23496869.jpg"
        primaryCta={{ label: "Talk to a Tax Consultant", href: "/contact" }}
        secondaryCta={{ label: "(310) 256-2412", href: "tel:3102562412" }}
        compact
      />

      {/* Intro + Team — merged into one section */}
      <section className="py-20 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <ScrollReveal>
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark leading-tight">
                Veteran Leadership You Can <span className="word-highlight">Trust</span>
              </h2>
              <p className="mt-5 text-muted leading-relaxed text-lg">
                MBS TAXES is a veteran-owned firm providing dependable tax consultant and accounting services in Los Angeles. With decades of professional experience, our team supports individuals and businesses with accurate tax preparation, accounting, and financial guidance.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <TeamCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services, Industries, Software — pill/tag chips in cards */}
      <section className="py-16 bg-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7 border border-navy-100/20 shadow-sm h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-500/10 mb-5">
                  <span className="w-2 h-2 rounded-full bg-navy-500" />
                  <span className="text-xs font-semibold text-navy-600 uppercase tracking-wide">Services</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark mb-4">Services Provided</h3>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span key={s} className="inline-block px-3 py-1.5 rounded-full bg-navy-50 text-xs font-medium text-navy-700 border border-navy-100/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-7 border border-navy-100/20 shadow-sm h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-400/10 mb-5">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span className="text-xs font-semibold text-gold-600 uppercase tracking-wide">Industries</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark mb-4">Industries Served</h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((s) => (
                    <span key={s} className="inline-block px-3 py-1.5 rounded-full bg-gold-50 text-xs font-medium text-gold-700 border border-gold-200/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-7 border border-navy-100/20 shadow-sm h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 mb-5">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">Software</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark mb-4">Software Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {software.map((s) => (
                    <span key={s} className="inline-block px-3 py-1.5 rounded-full bg-teal-50 text-xs font-medium text-teal-700 border border-teal-200/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
