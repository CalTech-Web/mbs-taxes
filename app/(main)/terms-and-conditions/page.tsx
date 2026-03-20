import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import { highlightText } from "@/lib/highlightText";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the MBS TAXES terms and conditions governing the use of our website and services provided by Mossberg Business Services.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Hero
        title="Terms and Conditions"
        subtitle="Mossberg Business Services"
        bgImage="/images/pexels-khwanchai-12885860.jpg"
        highlights={["Conditions"]}
        compact
      />

      <section className="py-24 section-depth">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle
            subtitle="Legal"
            title="Terms of Service"
            highlights={["Service"]}
            description="These Terms and Conditions govern your use of the MBS TAXES website and the services provided by Mossberg Business Services. By accessing or using our website and services, you agree to be bound by these terms."
          />

          <div className="space-y-10">
            {/* Overview */}
            <ScrollReveal>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  Overview
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  This website is operated by Mossberg Business Services, doing
                  business as MBS TAXES. Throughout this site, the terms
                  &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo;
                  refer to Mossberg Business Services. We offer this website,
                  including all information, tools, and services available from
                  this site, to you, the user, conditioned upon your acceptance
                  of all terms, conditions, and policies stated here.
                </p>
              </div>
            </ScrollReveal>

            {/* General Conditions */}
            <ScrollReveal delay={0.05}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("General Conditions", ["General"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  By using our website and services, you agree to the following
                  general conditions:
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0 mt-1.5" />
                    You must be at least 18 years of age or have the legal
                    authority to enter into a binding agreement to use our
                    services.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0 mt-1.5" />
                    You may not use our services for any illegal or unauthorized
                    purpose, nor may you violate any laws in your jurisdiction
                    while using our services.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0 mt-1.5" />
                    We reserve the right to refuse service to anyone for any
                    reason at any time.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500 shrink-0 mt-1.5" />
                    Your use of this website and any information provided does
                    not constitute a professional-client relationship until a
                    formal engagement agreement is signed.
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Accuracy of Information */}
            <ScrollReveal delay={0.1}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Accuracy of Information", ["Accuracy"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  We make every effort to ensure the information on this website
                  is accurate and up to date. However, we do not warrant that
                  the information is complete, reliable, or current at all
                  times. The content on this site is provided for general
                  informational purposes only and should not be relied upon as
                  the sole basis for making financial or tax decisions without
                  consulting directly with a qualified professional.
                </p>
              </div>
            </ScrollReveal>

            {/* Pricing Changes */}
            <ScrollReveal delay={0.15}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Pricing and Service Changes", ["Service"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Prices for our services are subject to change without notice.
                  We reserve the right to modify or discontinue any service at
                  any time without liability. We will provide reasonable notice
                  to existing clients of any material changes to pricing or
                  service terms that may affect their engagement.
                </p>
              </div>
            </ScrollReveal>

            {/* Third-Party Links */}
            <ScrollReveal delay={0.2}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Third-Party Links", ["Third-Party"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Our website may contain links to third-party websites or
                  services that are not owned or controlled by Mossberg Business
                  Services. We have no control over, and assume no
                  responsibility for, the content, privacy policies, or
                  practices of any third-party sites or services. We encourage
                  you to review the terms and privacy policies of any
                  third-party website you visit.
                </p>
              </div>
            </ScrollReveal>

            {/* Personal Information */}
            <ScrollReveal delay={0.25}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Personal Information", ["Personal"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Your submission of personal information through this website
                  is governed by our Privacy Policy. We handle all client
                  information with strict confidentiality and in accordance with
                  applicable laws and professional standards. Please review our
                  Privacy Policy for detailed information on how we collect,
                  use, and protect your data.
                </p>
              </div>
            </ScrollReveal>

            {/* Indemnity */}
            <ScrollReveal delay={0.3}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  Indemnification
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Mossberg
                  Business Services and its affiliates, partners, employees,
                  and agents from any claims, damages, liabilities, costs, or
                  expenses arising from your violation of these Terms and
                  Conditions or your use of this website in a manner not
                  authorized by these terms.
                </p>
              </div>
            </ScrollReveal>

            {/* Governing Law */}
            <ScrollReveal delay={0.35}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Governing Law", ["Governing"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of the State of California,
                  without regard to its conflict of law provisions. Any disputes
                  arising under these terms shall be subject to the exclusive
                  jurisdiction of the courts located in Los Angeles County,
                  California.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal delay={0.4}>
              <div className="prose-section">
                <h3 className="font-heading text-xl font-semibold text-dark mb-3">
                  {highlightText("Contact Information", ["Contact"])}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  If you have any questions about these Terms and Conditions,
                  please contact us:
                </p>
                <div className="space-y-2 text-sm text-muted">
                  <p>
                    <span className="font-medium text-dark">
                      Mossberg Business Services (MBS TAXES)
                    </span>
                  </p>
                  <p>16129 Hawthorne Blvd STE D #1007, Lawndale, CA</p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:3102562412"
                      className="text-navy-500 hover:text-navy-600 transition-colors"
                    >
                      (310) 256-2412
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
