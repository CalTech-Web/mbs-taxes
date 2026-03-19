import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact MBS TAXES for a free consultation. Reach our tax consultant and accounting team in Lawndale, Palm Springs, Long Beach, and San Gabriel.",
};

const offices = [
  { label: "Palm Springs", phone: "(760) 688-0565", href: "tel:7606880565" },
  { label: "Long Beach", phone: "(562) 285-5555", href: "tel:5622855555" },
  { label: "Español LA", phone: "(213) 291-8840", href: "tel:2132918840" },
  { label: "San Gabriel", phone: "(626) 535-2288", href: "tel:6265352288" },
  { label: "Mandarin", phone: "(626) 545-0695", href: "tel:6265450695" },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact MBS TAXES"
        subtitle="Speak with a Tax Consultant"
        bgImage="/images/pexels-mikhail-nilov-7731330.jpg"
        compact
      />

      <section className="py-24 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Get in Touch"
            title="We're Here to Help"
            description="Whether you have a question, need a consultation, or are ready to get started, our team is available to assist you."
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="card-luxury card-navy rounded-2xl p-8 border border-navy-100/20 ring-1 ring-navy-100/10">
                <h3 className="font-heading text-xl font-semibold text-dark mb-6">
                  Send Us a Message
                </h3>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                {/* Corporate HQ */}
                <div className="card-luxury card-gold rounded-2xl p-8 border border-navy-100/20 ring-1 ring-navy-100/10">
                  <h3 className="font-heading text-xl font-semibold text-dark mb-5 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-navy-500" />
                    Corporate Headquarters
                  </h3>
                  <address className="not-italic text-muted text-sm leading-relaxed space-y-3">
                    <p>
                      16129 Hawthorne Blvd STE D #1007
                      <br />
                      Lawndale, CA
                    </p>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-navy-500" />
                      <a
                        href="tel:3102562412"
                        className="hover:text-navy-500 transition-colors font-medium"
                      >
                        (310) 256-2412
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted/60" />
                      <span>Fax: (310) 256-2413</span>
                    </div>
                  </address>
                </div>

                {/* Additional Offices */}
                <div className="card-luxury card-blue rounded-2xl p-8 border border-navy-100/20 ring-1 ring-navy-100/10">
                  <h3 className="font-heading text-xl font-semibold text-dark mb-5 flex items-center gap-3">
                    <Phone className="w-6 h-6 text-navy-500" />
                    Additional Offices
                  </h3>
                  <div className="space-y-3">
                    {offices.map((office) => (
                      <div
                        key={office.label}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted font-medium">
                          {office.label}
                        </span>
                        <a
                          href={office.href}
                          className="text-navy-500 hover:text-navy-600 transition-colors font-medium"
                        >
                          {office.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div className="card-luxury card-navy rounded-2xl p-8 border border-navy-100/20 ring-1 ring-navy-100/10">
                  <h3 className="font-heading text-xl font-semibold text-dark mb-5 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-navy-500" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm text-muted">
                    <div className="flex items-center justify-between">
                      <span>Monday &ndash; Saturday</span>
                      <span className="font-medium text-dark">
                        8:00 AM &ndash; 8:00 PM
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Sunday</span>
                      <span className="font-medium text-dark">CLOSED</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
