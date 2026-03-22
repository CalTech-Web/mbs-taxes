import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MBS Taxes | Tax Consultant & Accounting Services in Los Angeles",
    template: "%s | MBS Taxes",
  },
  description:
    "MBS TAXES provides dependable tax consultant and accounting services in Los Angeles for individuals, business owners, and established companies. Over 30 years of experience. Veteran-owned.",
  metadataBase: new URL("https://mbs-taxes.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MBS Taxes",
    title: "MBS Taxes | Tax Consultant & Accounting Services in Los Angeles",
    description:
      "Veteran-owned firm providing dependable tax consultant and accounting services in Los Angeles with over 30 years of experience.",
    images: [
      {
        url: "/images/main-logo.png",
        width: 1200,
        height: 630,
        alt: "MBS Taxes - Tax Consultant & Accounting Services",
      },
    ],
  },
  alternates: {
    canonical: "./",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBS Taxes | Tax Consultant & Accounting Services",
    description:
      "Dependable tax consultant and accounting services in Los Angeles. Veteran-owned. 30+ years experience.",
  },
  icons: {
    icon: "/images/main-logo.png",
    apple: "/images/main-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "@id": "https://mbs-taxes.com/#organization",
      name: "MBS Taxes",
      alternateName: "Mossberg Business Services",
      url: "https://mbs-taxes.com",
      logo: "https://mbs-taxes.com/images/main-logo.png",
      description:
        "Veteran-owned firm providing dependable tax consultant and accounting services in Los Angeles with over 30 years of experience.",
      telephone: "(310) 256-2412",
      faxNumber: "(310) 256-2413",
      address: {
        "@type": "PostalAddress",
        streetAddress: "16129 Hawthorne Blvd STE D #1007",
        addressLocality: "Lawndale",
        addressRegion: "CA",
        postalCode: "90260",
        addressCountry: "US",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
      areaServed: {
        "@type": "City",
        name: "Los Angeles",
      },
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://mbs-taxes.com/#website",
      url: "https://mbs-taxes.com",
      name: "MBS Taxes",
      publisher: { "@id": "https://mbs-taxes.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
