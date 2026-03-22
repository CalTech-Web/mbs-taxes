"use client";

import { MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const offices = [
  { name: "Lawndale (HQ)", address: "16129 Hawthorne Blvd STE D #1007", phone: "(310) 256-2412", href: "tel:3102562412" },
  { name: "Palm Springs", phone: "(760) 688-0565", href: "tel:7606880565" },
  { name: "Long Beach", phone: "(562) 285-5555", href: "tel:5622855555" },
  { name: "San Gabriel", phone: "(626) 535-2288", href: "tel:6265352288" },
  { name: "Español LA", phone: "(213) 291-8840", href: "tel:2132918840" },
  { name: "Mandarin", phone: "(626) 545-0695", href: "tel:6265450695" },
];

const serviceAreas = [
  "Lawndale", "Long Beach", "Palm Springs", "San Gabriel", "Los Angeles",
  "Torrance", "Hawthorne", "Inglewood", "Gardena", "Redondo Beach",
  "Manhattan Beach", "El Segundo", "Hermosa Beach", "Carson", "Compton",
];

export default function OfficeLocations() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-navy-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-gold-400">
            Our Locations
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-3">
            Office <span className="word-highlight">Locations</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-10">
            With offices across Southern California and multilingual support, we serve clients throughout the greater Los Angeles area and beyond.
          </p>
        </ScrollReveal>

        {/* Office Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-14">
          {offices.map((office, i) => (
            <ScrollReveal key={office.name} delay={i * 0.06}>
              <div className="group relative bg-white rounded-xl p-5 border border-navy-100/30 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-left h-full">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-navy-500/10 flex items-center justify-center group-hover:bg-gold-400 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-navy-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-sm font-bold text-dark">{office.name}</h3>
                    {"address" in office && (
                      <p className="text-xs text-muted mt-0.5">{office.address}</p>
                    )}
                    <a
                      href={office.href}
                      className="inline-flex items-center gap-1.5 mt-1.5 text-sm font-semibold text-gold-400 hover:text-gold-500 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {office.phone}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Service Area Pills */}
        <ScrollReveal>
          <h3 className="font-heading text-lg font-semibold text-dark mb-6">
            Areas We Serve
          </h3>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {serviceAreas.map((area, i) => (
            <ScrollReveal key={area} delay={i * 0.04}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-navy-200/40 rounded-full text-sm font-semibold text-navy-700 shadow-sm hover:bg-navy-500 hover:text-white hover:border-navy-500 hover:shadow-md transition-all duration-300 cursor-default">
                <span className="relative flex h-4 w-4 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-gold-400/40 animate-ping" />
                  <MapPin className="relative h-4 w-4 text-gold-500" />
                </span>
                {area}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
