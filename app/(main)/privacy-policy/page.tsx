import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import { highlightText } from "@/lib/highlightText";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the MBS TAXES privacy policy to understand how Mossberg Business Services collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="Mossberg Business Services"
        bgImage="/images/pexels-khwanchai-12885860.jpg"
        highlights={["Privacy"]}
        compact
      />

      <section className="py-24 section-depth">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle
            subtitle="Legal"
            title="Our Privacy Practices"
            highlights={["Privacy"]}
            description="This Privacy Policy explains how Mossberg Business Services (&ldquo;MBS TAXES,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects your personal information when you use our website and services."
          />

          <div className="space-y-10">
            {/* Information Collection */}
            <ScrollReveal>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Information We Collect", ["Information"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  We may collect the following types of information when you use
                  our website, contact us, or engage our services:
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0 mt-1.5" />
                    Personal identification information (name, email address, phone number, mailing address)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0 mt-1.5" />
                    Financial information necessary for tax preparation and accounting services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0 mt-1.5" />
                    Tax identification numbers, Social Security numbers, and related documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0 mt-1.5" />
                    Website usage data including IP address, browser type, and pages visited
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* How We Use Data */}
            <ScrollReveal delay={0.05}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("How We Use Your Information", ["Use", "Information"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                    Provide tax preparation, accounting, and consulting services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                    Communicate with you regarding your account and services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                    Process and respond to inquiries and consultation requests
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                    Comply with legal and regulatory requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                    Improve our website and services
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Data Sharing */}
            <ScrollReveal delay={0.1}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Information Sharing", ["Information"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following circumstances: with your explicit consent; with the
                  IRS, state tax authorities, or other government agencies as
                  required to perform our services; with trusted service
                  providers who assist in operating our website and services
                  under strict confidentiality agreements; or when required by
                  law, regulation, or legal process.
                </p>
              </div>
            </ScrollReveal>

            {/* Data Protection */}
            <ScrollReveal delay={0.15}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Data Protection", ["Protection"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  We implement industry-standard security measures to protect
                  your personal and financial information. This includes secure
                  data storage, encrypted communications, restricted access
                  controls, and regular security assessments. While we strive to
                  protect your information, no method of electronic transmission
                  or storage is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>
            </ScrollReveal>

            {/* Cookies */}
            <ScrollReveal delay={0.2}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  Cookies
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Our website may use cookies and similar tracking technologies
                  to enhance your browsing experience, analyze website traffic,
                  and understand how visitors interact with our site. You can
                  control cookie preferences through your browser settings. Some
                  features of the website may not function properly if cookies
                  are disabled.
                </p>
              </div>
            </ScrollReveal>

            {/* Changes to Policy */}
            <ScrollReveal delay={0.25}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Changes to This Policy", ["Changes"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  We reserve the right to update or modify this Privacy Policy
                  at any time. Any changes will be posted on this page with an
                  updated effective date. We encourage you to review this policy
                  periodically to stay informed about how we are protecting your
                  information.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal delay={0.3}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Contact Us", ["Contact"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-sm text-muted">
                  <p>
                    <span className="font-medium text-dark">
                      Mossberg Business Services (MBS TAXES)
                    </span>
                  </p>
                  <p>16129 Hawthorne Blvd STE D #1007, Lawndale, CA</p>
                  <p>
                    Lawndale Office:{" "}
                    <a
                      href="tel:3102562412"
                      className="text-navy-500 hover:text-navy-600 transition-colors"
                    >
                      (310) 256-2412
                    </a>
                  </p>
                  <p>
                    Palm Springs Office:{" "}
                    <a
                      href="tel:7606880565"
                      className="text-navy-500 hover:text-navy-600 transition-colors"
                    >
                      (760) 688-0565
                    </a>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
