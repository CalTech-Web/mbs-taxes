"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import RecaptchaBadge from "@/components/RecaptchaBadge";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const { executeRecaptcha } = useRecaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    let recaptchaToken = "";
    try {
      recaptchaToken = await executeRecaptcha("contact");
    } catch {
      // Continue without token
    }

    const payload = {
      site: "mbs-taxes.com",
      name: form.name,
      email: form.email,
      phone: form.phone || "",
      subject: form.subject || "Website Inquiry",
      message: form.message,
      source: "contact-page",
      recaptchaToken,
    };

    try {
      const emailRes = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!emailRes.ok) throw new Error("Failed to send message");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-navy-500 mx-auto mb-4" />
        <h4 className="font-heading text-xl font-bold text-dark mb-2">
          Message Sent!
        </h4>
        <p className="text-muted">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-navy-500 font-semibold hover:text-navy-600 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            aria-required="true"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            aria-required="true"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500 transition-all"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-dark mb-1.5">
            Subject
          </label>
          <select
            id="subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500 transition-all"
          >
            <option value="">Select a subject</option>
            <option>Tax Preparation</option>
            <option>Business Accounting</option>
            <option>Tax Consulting</option>
            <option>QuickBooks Support</option>
            <option>Schedule Consultation</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          aria-required="true"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-navy-500/30 focus:border-navy-500 transition-all resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          Something went wrong. Please try again.
        </div>
      )}

      <RecaptchaBadge />

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-500 text-white font-semibold rounded-full hover:bg-navy-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "loading" ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
