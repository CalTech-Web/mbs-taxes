import type { MetadataRoute } from "next";

const BASE = "https://mbs-taxes.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/book-appointment",
    "/contact",
    "/faqs",
    "/pricing",
    "/privacy-policy",
    "/resources",
    "/resources/client-resource-center",
    "/resources/client-update-newsletter",
    "/resources/newsletters",
    "/resources/tax-tips",
    "/resources/tax-videos",
    "/services",
    "/services/business-consulting",
    "/services/corporate-tax",
    "/services/financial-accounting",
    "/services/quickbooks",
    "/services/tax-consultant",
    "/services/year-end-tax-filing",
    "/testimonials",
    "/terms-and-conditions",
    "/why-choose-us",
  ];

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
