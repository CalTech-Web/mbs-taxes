import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Phone, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule an appointment with MBS TAXES for a free tax consultation. Contact our team by phone or online to get started.",
};

const features = [
  {
    icon: MessageSquare,
    title: "Personalized Guidance",
    description: "Discuss your tax and accounting needs with an experienced consultant.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "We work around your schedule with appointments Monday through Saturday.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond promptly to all inquiries and appointment requests.",
  },
  {
    icon: Phone,
    title: "No Obligation",
    description: "Your initial consultation is completely free with no pressure.",
  },
];

export default function BookAppointmentPage() {
  return (
    <>
      <Hero
        title="Book an Appointment"
        subtitle="Schedule Your Free Consultation"
        description="Ready to take control of your taxes and finances? Schedule a free consultation with our team to discuss your needs and learn how MBS TAXES can help."
        bgImage="/images/pexels-mikhail-nilov-7731330.jpg"
        compact
      />

      <section className="py-24 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Get Started"
            title="Schedule Your Appointment"
            description="Whether you need help with personal taxes, business accounting, or tax planning, our team is ready to assist. Contact us to schedule a convenient time to meet."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title} delay={i * 0.1}>
                  <div className="card-luxury card-navy rounded-2xl p-6 h-full border border-navy-100/20 ring-1 ring-navy-100/10 text-center">
                    <div className="w-14 h-14 rounded-2xl icon-luxury flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-7 h-7 text-navy-500" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-muted text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact us today to schedule your free consultation. You can
                reach us online through our contact form or call us directly to
                speak with a member of our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-shine px-8 py-3.5 bg-gold-400 text-dark font-semibold rounded-full hover:bg-gold-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Contact Us Online
                </Link>
                <a
                  href="tel:3102562412"
                  className="px-8 py-3.5 bg-navy-500 text-white font-semibold rounded-full hover:bg-navy-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: (310) 256-2412
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
