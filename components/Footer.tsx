import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

const serviceLinks = [
  { label: "Tax Consultant", href: "/services/tax-consultant" },
  { label: "Financial Accounting", href: "/services/financial-accounting" },
  { label: "Corporate Tax & Accounting", href: "/services/corporate-tax" },
  { label: "Business Consulting", href: "/services/business-consulting" },
  { label: "Year End Tax Filing", href: "/services/year-end-tax-filing" },
  { label: "QuickBooks Tax Filing", href: "/services/quickbooks" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white relative">
      <WaveDivider toColor="#101f38" className="absolute bottom-full left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/main-logo.png"
                alt="MBS Taxes"
                width={160}
                height={50}
                className="h-12 w-auto brightness-200"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Veteran-owned firm providing dependable tax consultant and accounting services in Los Angeles with over 30 years of experience.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Footer service links">
            <h3 className="text-gold-400 font-heading font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-white/80 text-sm hover:text-gold-400 hover:translate-x-0.5 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-gold-400 font-heading font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-white/80 text-sm hover:text-gold-400 hover:translate-x-0.5 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-gold-400 font-heading font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <a
                  href="tel:3102562412"
                  className="flex items-start gap-3 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  (310) 256-2412
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                16129 Hawthorne Blvd STE D #1007, Lawndale, CA
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                Mon-Sat: 8:00AM - 8:00PM
              </li>
              <li>
                <a
                  href="mailto:info@mbs-taxes.com"
                  className="flex items-start gap-3 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10" style={{ borderImage: "linear-gradient(to right, transparent, rgba(255,255,255,0.2), rgba(228,158,0,0.4), rgba(255,255,255,0.2), transparent) 1" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <p>
            &copy; {new Date().getFullYear()} MBS Taxes. All rights reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://www.caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
