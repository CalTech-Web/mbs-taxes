"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Phone, ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What services does MBS TAXES offer?",
        answer:
          "MBS TAXES provides a full range of tax and accounting services including individual and business tax preparation, tax consulting, bookkeeping, financial accounting, corporate tax filings, QuickBooks support, payroll services, and year-round tax planning. We serve individuals, small businesses, and established companies.",
      },
      {
        question: "Where is MBS TAXES located?",
        answer:
          "Our corporate headquarters is located at 16129 Hawthorne Blvd, Suite D, Lawndale, CA. We also have offices in Palm Springs, Long Beach, and the San Gabriel Valley to serve clients throughout Southern California.",
      },
      {
        question: "Do you serve clients outside of California?",
        answer:
          "Yes. While we are headquartered in Lawndale, California, we serve clients nationwide. Many of our services can be handled remotely, allowing us to support individuals and businesses throughout the United States.",
      },
      {
        question: "How long has MBS TAXES been in business?",
        answer:
          "MBS TAXES has been providing professional tax and accounting services for decades. Our founder, Dan Mossberg, brings over 30 years of experience in tax preparation, corporate accounting, and financial management.",
      },
      {
        question: "Is MBS TAXES a veteran-owned business?",
        answer:
          "Yes. MBS TAXES is proudly veteran-owned and operated. Our founder Dan Mossberg is a U.S. Marine Corps veteran, and our business partner Robert Mossberg is a U.S. Army veteran. We bring the same discipline and integrity from our military service to our tax and accounting practice.",
      },
    ],
  },
  {
    title: "Tax Preparation",
    faqs: [
      {
        question: "What types of tax returns do you prepare?",
        answer:
          "We prepare individual returns (Form 1040), business returns including LLC, S-Corp, Partnership, and C-Corp filings, self-employed Schedule C returns, rental property Schedule E filings, and all related forms and schedules.",
      },
      {
        question: "Can you help with small business tax returns?",
        answer:
          "Absolutely. Small business tax preparation is one of our core services. We handle LLC, S-Corp, Partnership, and C-Corp returns, including K-1 preparation, balance sheets, income statements, and all required business schedules.",
      },
      {
        question: "Do you work with self-employed individuals?",
        answer:
          "Yes. We have extensive experience with self-employed clients and Schedule C filings. We help track income and expenses, maximize deductions, estimate quarterly taxes, and ensure full compliance with IRS requirements.",
      },
      {
        question: "How can MBS TAXES help me reduce my tax liability?",
        answer:
          "We provide strategic tax planning and consulting throughout the year to identify deductions, credits, and strategies that legally reduce your tax burden. This includes retirement planning, business expense optimization, timing of income and deductions, and entity structure analysis.",
      },
      {
        question: "What documents do I need to bring for tax preparation?",
        answer:
          "Common documents include W-2 forms, 1099 forms (1099-NEC, 1099-MISC, 1099-INT, 1099-DIV, 1099-B), prior year tax returns, records of income and expenses, mortgage interest statements (Form 1098), property tax records, and any IRS correspondence you have received.",
      },
      {
        question: "How long does it take to complete my tax return?",
        answer:
          "Most individual returns are completed within a few days of receiving all necessary documents. Business returns may take slightly longer depending on complexity. We work efficiently while ensuring accuracy and thoroughness on every return.",
      },
    ],
  },
  {
    title: "Business Services",
    faqs: [
      {
        question: "Do you offer bookkeeping services?",
        answer:
          "Yes. We provide comprehensive bookkeeping services including transaction recording, bank reconciliation, accounts payable and receivable management, financial statement preparation, and monthly or quarterly reporting to keep your finances organized.",
      },
      {
        question: "Can you provide business advisory services?",
        answer:
          "Yes. Our business consulting services include financial analysis, cash flow management, entity structure evaluation, tax planning strategies, and operational guidance to help your business grow and remain financially healthy.",
      },
      {
        question: "Do you help with accounting systems and QuickBooks?",
        answer:
          "We are experienced with QuickBooks Desktop and QuickBooks Online. We offer setup, training, cleanup, and ongoing support to ensure your accounting system is accurate and efficient. We also work with other accounting platforms as needed.",
      },
      {
        question: "Can you handle payroll for my business?",
        answer:
          "Yes. We assist with payroll processing, payroll tax calculations and filings, W-2 and 1099 preparation, and compliance with federal and state payroll requirements to keep your business running smoothly.",
      },
      {
        question: "Do you assist with contractor payments and 1099 filings?",
        answer:
          "Yes. We help businesses properly classify workers, track payments to independent contractors, and prepare and file 1099 forms to ensure compliance with IRS reporting requirements.",
      },
    ],
  },
  {
    title: "IRS & Compliance",
    faqs: [
      {
        question: "Can you help if I have an issue with the IRS?",
        answer:
          "Yes. We assist clients with IRS notices, audits, CP2000 discrepancies, denied credits, and other compliance matters. Through our partnership with Tax Protection Plus, we also provide professional audit representation by CPAs and Enrolled Agents.",
      },
      {
        question: "What happens if I get audited?",
        answer:
          "If you are audited on a return prepared by MBS TAXES, our 1040 Client Protection Program provides audit assistance through Tax Protection Plus. A dedicated CPA or Enrolled Agent will review your case and represent you throughout the audit process.",
      },
      {
        question: "Can you help with back taxes or unfiled returns?",
        answer:
          "Yes. We help clients who have unfiled returns or outstanding tax debts get back into compliance. We prepare delinquent returns, negotiate payment arrangements with the IRS, and work to resolve your tax situation as efficiently as possible.",
      },
      {
        question: "Do you prepare amended tax returns?",
        answer:
          "Yes. If you need to correct a previously filed return due to errors, missed income, or overlooked deductions, we prepare and file amended returns (Form 1040-X) to ensure your records are accurate with the IRS.",
      },
    ],
  },
  {
    title: "Working With Us",
    faqs: [
      {
        question: "How do I get started with MBS TAXES?",
        answer:
          "Getting started is simple. You can contact us by phone, visit our office, or submit an inquiry through our website. We offer a free consultation to discuss your tax and accounting needs and determine how we can best serve you.",
      },
      {
        question: "Can I submit my documents remotely?",
        answer:
          "Yes. We accept documents via secure email, our client portal, or in person at any of our office locations. We have streamlined our process to make remote collaboration easy and secure for clients who prefer not to visit in person.",
      },
      {
        question: "Do you offer free consultations?",
        answer:
          "Yes. We provide a free initial consultation so you can discuss your situation, learn about our services, and understand how MBS TAXES can help you. There is no obligation and no pressure.",
      },
      {
        question: "How do you protect my personal and financial information?",
        answer:
          "We take data security seriously. All client information is handled with strict confidentiality, stored securely, and shared only as necessary to complete your tax and accounting work. We follow industry best practices to protect your sensitive data.",
      },
      {
        question: "Are you available year-round or only during tax season?",
        answer:
          "We are available year-round. While tax season is our busiest time, we provide ongoing support for tax planning, bookkeeping, business consulting, and IRS correspondence throughout the entire year.",
      },
    ],
  },
  {
    title: "Pricing",
    faqs: [
      {
        question: "How much do your services cost?",
        answer:
          "Our fees vary based on the complexity of your tax situation and the services required. We offer competitive, transparent pricing and will discuss fees with you upfront before any work begins. Contact us for a personalized quote.",
      },
      {
        question: "Do you offer flexible pricing or packages?",
        answer:
          "Yes. We offer flexible pricing options and service packages tailored to your specific needs. Whether you need a simple individual return or comprehensive business accounting support, we can customize a plan that works for you.",
      },
      {
        question: "Are there any long-term contracts required?",
        answer:
          "No. We do not require long-term contracts. Our clients stay with us because of the quality of our work and the trust we build. You are free to engage our services on a per-project or ongoing basis as needed.",
      },
    ],
  },
];

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function FAQAccordion() {
  const [activeSection, setActiveSection] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = useCallback((index: number) => {
    setTocOpen(false);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] xl:grid-cols-[240px_1fr_240px] gap-8 xl:gap-10">

      {/* ── Left Column: Table of Contents ── */}
      <div className="lg:block">
        {/* Mobile: collapsible toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="w-full flex items-center justify-between bg-white rounded-xl border border-gray-200 px-5 py-3.5 shadow-sm"
          >
            <span className="font-heading font-bold text-navy-700 text-sm">Table of Contents</span>
            <ChevronDown className={`w-4 h-4 text-navy-400 transition-transform duration-200 ${tocOpen ? "rotate-180" : ""}`} />
          </button>
          {tocOpen && (
            <nav className="mt-2 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
              <ol className="space-y-1">
                {faqCategories.map((cat, i) => (
                  <li key={cat.title}>
                    <button
                      onClick={() => scrollToSection(i)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeSection === i
                          ? "text-navy-700 font-semibold border-l-[3px] border-navy-600 bg-navy-50/50"
                          : "text-gray-600 hover:text-navy-700 hover:underline"
                      }`}
                    >
                      <span className="text-gray-400 mr-2.5">{i + 1}.</span>
                      {cat.title}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>

        {/* Desktop: sticky card */}
        <div className="hidden lg:block sticky top-[74px] self-start">
          <div className="rounded-xl bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="bg-navy-700 px-5 py-3.5">
              <h2 className="font-heading font-bold text-white text-sm tracking-wide">Table of Contents</h2>
            </div>
            <nav className="p-4">
              <ol className="space-y-0.5">
                {faqCategories.map((cat, i) => (
                  <li key={cat.title}>
                    <button
                      onClick={() => scrollToSection(i)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-[13px] leading-snug transition-all duration-200 ${
                        activeSection === i
                          ? "text-navy-700 font-semibold border-l-[3px] border-navy-600 bg-navy-50/40"
                          : "text-gray-500 hover:text-navy-700 hover:underline border-l-[3px] border-transparent"
                      }`}
                    >
                      <span className="text-gray-400 mr-2">{i + 1}.</span>
                      {cat.title}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* ── Center Column: FAQ Content ── */}
      <div>
        {faqCategories.map((category, catIndex) => (
          <div
            key={category.title}
            id={slugify(category.title)}
            ref={(el) => { sectionRefs.current[catIndex] = el; }}
            className="scroll-mt-24 mb-14 last:mb-0"
          >
            {/* Section label */}
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 mb-6">
              {category.title}
            </p>

            {/* Questions & Answers */}
            {category.faqs.map((faq, faqIndex) => (
              <div key={faqIndex} className={faqIndex < category.faqs.length - 1 ? "mb-8 pb-8 border-b border-gray-100" : ""}>
                <h3 className="font-heading font-bold text-dark text-xl md:text-[22px] leading-snug mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-500 text-[15px] leading-[1.85]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── Right Column: Contact Card ── */}
      <div>
        {/* Desktop: sticky */}
        <div className="hidden lg:block sticky top-[74px] self-start">
          <div className="rounded-xl bg-[#f0f3f7] p-6">
            <div className="w-11 h-11 rounded-full bg-navy-700 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-heading font-bold text-navy-700 text-lg mb-2">Contact Us</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Have a question not listed here? Our team is ready to help with any tax or accounting inquiry.
            </p>
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-navy-600 mb-1.5">CALL NOW!</p>
            <a href="tel:+13103554911" className="font-heading font-extrabold text-gold-400 text-2xl hover:underline">
              (310) 355-4911
            </a>
          </div>
        </div>

        {/* Mobile: static at bottom */}
        <div className="lg:hidden mt-8">
          <div className="rounded-xl bg-[#f0f3f7] p-6 text-center">
            <div className="w-11 h-11 rounded-full bg-navy-700 flex items-center justify-center mb-4 mx-auto">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-heading font-bold text-navy-700 text-lg mb-2">Contact Us</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Have a question not listed here? Our team is ready to help with any tax or accounting inquiry.
            </p>
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-navy-600 mb-1.5">CALL NOW!</p>
            <a href="tel:+13103554911" className="font-heading font-extrabold text-gold-400 text-2xl hover:underline">
              (310) 355-4911
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
