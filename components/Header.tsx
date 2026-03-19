"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Tax Consultant", href: "/services/tax-consultant" },
      { label: "Financial Accounting", href: "/services/financial-accounting" },
      { label: "Corporate Tax & Accounting", href: "/services/corporate-tax" },
      { label: "Business Consulting", href: "/services/business-consulting" },
      { label: "Year End Tax Filing", href: "/services/year-end-tax-filing" },
      { label: "QuickBooks Tax Filing", href: "/services/quickbooks" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Testimonials", href: "/testimonials" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "FAQs", href: "/faqs" },
      { label: "Pricing", href: "/pricing" },
      { label: "Client Resource Center", href: "/resources/client-resource-center" },
      { label: "Newsletters", href: "/resources/newsletters" },
      { label: "Client Update Newsletter", href: "/resources/client-update-newsletter" },
      { label: "Tax Tips", href: "/resources/tax-tips" },
      { label: "Tax Videos", href: "/resources/tax-videos" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Utility Bar */}
        <div
          className={`text-white text-sm hidden lg:block transition-all duration-300 overflow-hidden ${
            scrolled
              ? "max-h-0 opacity-0"
              : "max-h-12 opacity-100 bg-navy-900/60 backdrop-blur-sm"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
            <span className="text-white/80 text-xs">
              Veteran-Owned Tax Consultant &amp; Accounting Services in Los Angeles
            </span>
            <a
              href="tel:3102562412"
              className="flex items-center gap-2 hover:text-red-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              (310) 256-2412
            </a>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/75 backdrop-blur-xl shadow-lg border-b border-white/30"
              : "bg-navy-900/25 backdrop-blur-[3px]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/main-logo.png"
                alt="MBS Taxes"
                width={180}
                height={60}
                className="h-14 w-auto transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                        scrolled
                          ? "text-dark hover:text-navy-500"
                          : "text-white hover:text-red-300"
                      }`}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 min-w-[240px]">
                        <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-white/40 py-2 overflow-hidden">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-2.5 text-sm text-dark hover:bg-navy-50/80 hover:text-navy-600 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      scrolled
                        ? "text-dark hover:text-navy-500"
                        : "text-white hover:text-red-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href="tel:3102562412"
                className="ml-2 px-5 py-2.5 bg-red-700 text-white text-sm font-semibold rounded-full hover:bg-red-600 transition-all shadow-md hover:shadow-lg"
              >
                Call Now
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "hover:bg-light text-dark"
                  : "hover:bg-white/10 text-white"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 lg:hidden">
          <nav
            className="max-w-md mx-auto px-6 py-8"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-gray-100">
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label ? null : item.label
                      )
                    }
                    className="flex items-center justify-between py-4 w-full text-left"
                    aria-expanded={mobileDropdown === item.label}
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <span className="text-base font-medium text-dark">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-dark transition-transform ${
                        mobileDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="pb-3 pl-4">
                      {item.href && (
                        <Link
                          href={item.href}
                          className="block py-2.5 text-sm font-medium text-navy-600 hover:text-navy-700 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          View All {item.label}
                        </Link>
                      )}
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2.5 text-sm text-muted hover:text-navy-500 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block py-4 text-base font-medium text-dark border-b border-gray-100 hover:text-navy-500 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="tel:3102562412"
                className="flex items-center gap-2 text-sm text-navy-600 font-semibold"
              >
                <Phone className="w-4 h-4" />
                (310) 256-2412
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
