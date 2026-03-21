import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import {
  HelpCircle,
  DollarSign,
  Star,
  MessageSquare,
  Newspaper,
  Mail,
  Lightbulb,
  Video,
  FolderOpen,
} from "lucide-react";
import { ArrowRight, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Access helpful resources from MBS TAXES including FAQs, pricing information, client testimonials, and contact details.",
};

interface ResourceLink {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  accent: string;
}

const resources: ResourceLink[] = [
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    description:
      "Find answers to the most common questions about our tax and accounting services, filing process, and business support.",
    href: "/faqs",
    accent: "navy",
  },
  {
    icon: DollarSign,
    title: "Pricing Plans",
    description:
      "View our individual and business tax preparation pricing tiers. Contact us for a personalized quote based on your needs.",
    href: "/pricing",
    accent: "gold",
  },
  {
    icon: Star,
    title: "Client Testimonials",
    description:
      "Read what our clients say about working with MBS TAXES. We maintain a 5.0 star rating on Google with 16 reviews.",
    href: "/testimonials",
    accent: "blue",
  },
  {
    icon: MessageSquare,
    title: "Contact Us",
    description:
      "Get in touch with our team for a free consultation. We are available by phone, email, or at any of our office locations.",
    href: "/contact",
    accent: "teal",
  },
  {
    icon: FolderOpen,
    title: "Client Resource Center",
    description:
      "Access practical tools including newsletters, tax tips, and tax videos to stay informed and prepared.",
    href: "/resources/client-resource-center",
    accent: "navy",
  },
  {
    icon: Newspaper,
    title: "Tax & Business Newsletter",
    description:
      "Stay informed with updates on tax laws, financial planning, and business guidance.",
    href: "/resources/newsletters",
    accent: "gold",
  },
  {
    icon: Mail,
    title: "Client Update Newsletter",
    description:
      "Important tax changes, deadlines, and service updates from MBS TAXES.",
    href: "/resources/client-update-newsletter",
    accent: "blue",
  },
  {
    icon: Lightbulb,
    title: "Tax Tips",
    description:
      "Practical strategies to reduce tax liability and improve financial organization.",
    href: "/resources/tax-tips",
    accent: "rose",
  },
  {
    icon: Video,
    title: "Tax Videos",
    description:
      "Watch informative videos on tax preparation, accounting, and financial planning.",
    href: "/resources/tax-videos",
    accent: "emerald",
  },
];

const accentIconColors: Record<string, string> = {
  navy: "text-navy-500",
  gold: "text-red-600",
  blue: "text-blue-500",
  teal: "text-teal-500",
  rose: "text-rose-500",
  emerald: "text-emerald-500",
};

export default function ResourcesPage() {
  return (
    <>
      <Hero
        title={<><span className="word-highlight">Resources</span></>}
        subtitle="Helpful Information & Tools"
        bgImage="/images/pexels-n-voitkevich-6863245.jpg"
        compact
      />

      <section className="py-20 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Explore"
            title={<>Resources for Our <span className="word-highlight">Clients</span></>}
            description="Access the information and tools you need to stay informed about our services, pricing, and how to work with our team."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              const iconColor = accentIconColors[resource.accent] || "text-navy-500";
              return (
                <ScrollReveal key={resource.title} delay={i * 0.1}>
                  <Link
                    href={resource.href}
                    className="group block h-full"
                    aria-label={`Go to ${resource.title}`}
                  >
                    <div
                      className={`card-luxury card-${resource.accent} rounded-2xl p-8 h-full border border-navy-100/20 ring-1 ring-navy-100/10`}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl icon-luxury icon-float flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300"
                        aria-hidden="true"
                      >
                        <Icon className={`w-8 h-8 ${iconColor} icon-glitch`} />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-dark mb-2 group-hover:text-navy-500 transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 group-hover:text-gold-600 transition-colors duration-300">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
