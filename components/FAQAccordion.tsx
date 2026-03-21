"use client";

import { useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown, HelpCircle, FileText, Building2, Shield, Handshake, DollarSign } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: typeof HelpCircle;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "General Questions",
    icon: HelpCircle,
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
    icon: FileText,
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
    icon: Building2,
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
    icon: Shield,
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
    icon: Handshake,
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
    icon: DollarSign,
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

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`group rounded-2xl transition-all duration-300 ${
        isOpen
          ? "bg-white shadow-lg ring-1 ring-navy-100/30 border-l-4 border-l-gold-400"
          : "bg-white/60 hover:bg-white border border-navy-100/15 hover:shadow-md hover:border-navy-100/30"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span
          className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-heading transition-all duration-300 ${
            isOpen
              ? "bg-gold-400 text-white"
              : "bg-navy-500/8 text-navy-400 group-hover:bg-navy-500/15"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`font-heading font-semibold text-sm md:text-base flex-1 transition-colors duration-300 ${
            isOpen ? "text-navy-600" : "text-dark"
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-gold-400/10 rotate-180"
              : "bg-navy-50 group-hover:bg-navy-100/50"
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 transition-colors duration-300 ${
              isOpen ? "text-gold-400" : "text-navy-400"
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pl-[4.5rem]">
          <div className="w-12 h-[2px] bg-gradient-to-r from-gold-400 to-gold-300 rounded-full mb-3" />
          <p className="text-muted text-sm leading-[1.8]">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState(0);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToCategory = (index: number) => {
    setActiveCategory(index);
    categoryRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const totalFaqs = faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-10">
      {/* Sticky Sidebar Nav */}
      <div className="hidden lg:block">
        <div className="sticky top-28">
          <div className="rounded-2xl bg-white border border-navy-100/20 shadow-sm p-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4">
              Categories
            </p>
            <nav className="space-y-1.5">
              {faqCategories.map((category, i) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.title}
                    onClick={() => scrollToCategory(i)}
                    className={`group w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-all duration-200 ${
                      activeCategory === i
                        ? "bg-navy-500 text-white shadow-md"
                        : "text-muted hover:bg-navy-50 hover:text-navy-600"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 shrink-0 icon-glitch ${
                        activeCategory === i ? "text-gold-300" : "text-navy-400 group-hover:text-navy-500"
                      }`}
                    />
                    {category.title}
                    <span
                      className={`ml-auto text-xs font-bold ${
                        activeCategory === i ? "text-white/60" : "text-navy-300"
                      }`}
                    >
                      {category.faqs.length}
                    </span>
                  </button>
                );
              })}
            </nav>
            <div className="mt-5 pt-4 border-t border-navy-100/20">
              <p className="text-xs text-muted">
                <span className="font-bold text-navy-500">{totalFaqs}</span> questions across{" "}
                <span className="font-bold text-navy-500">{faqCategories.length}</span> categories
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Category Pills */}
      <div className="lg:hidden -mx-6 px-6 pb-2 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {faqCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <button
                key={category.title}
                onClick={() => scrollToCategory(i)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === i
                    ? "bg-navy-500 text-white shadow-md"
                    : "bg-white border border-navy-200/40 text-navy-600 hover:bg-navy-50"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${activeCategory === i ? "text-gold-300" : "text-navy-400"}`} />
                {category.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ Content */}
      <div className="space-y-14">
        {faqCategories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <ScrollReveal
              key={category.title}
              delay={catIndex * 0.05}
            >
              <div
                ref={(el) => { categoryRefs.current[catIndex] = el; }}
                className="scroll-mt-28"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="group shrink-0 w-11 h-11 rounded-xl bg-navy-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-navy-500 icon-glitch" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-dark">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted">
                      {category.faqs.length} question{category.faqs.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="hidden sm:block flex-1 h-[1.5px] bg-gradient-to-r from-navy-100/40 to-transparent rounded-full" />
                </div>

                {/* FAQ Items */}
                <div className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => {
                    const key = `${catIndex}-${faqIndex}`;
                    return (
                      <FAQItem
                        key={key}
                        faq={faq}
                        isOpen={!!openItems[key]}
                        onToggle={() => toggleItem(key)}
                        index={faqIndex}
                      />
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
