"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";

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

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-navy-100/20 rounded-xl overflow-hidden transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-dark text-sm md:text-base">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-navy-500 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-muted text-sm leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-12">
      {faqCategories.map((category, catIndex) => (
        <ScrollReveal key={category.title} delay={catIndex * 0.05}>
          <div>
            <h3 className="font-heading text-xl font-semibold text-navy-500 mb-4 flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-gold-400 rounded-full" />
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.faqs.map((faq, faqIndex) => {
                const key = `${catIndex}-${faqIndex}`;
                return (
                  <FAQItem
                    key={key}
                    faq={faq}
                    isOpen={!!openItems[key]}
                    onToggle={() => toggleItem(key)}
                  />
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
