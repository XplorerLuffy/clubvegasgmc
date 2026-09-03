import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { business, siteConfig } from "@/lib/site-config";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Karaoke, ${business.locality}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "karaoke bar",
    "karaoke lounge",
    "private karaoke rooms",
    "Gelephu Mindfulness City",
    "Bhutan nightlife",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Karaoke, ${business.locality}`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Karaoke, ${business.locality}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0806",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "NightClub"],
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: business.phone,
  email: business.email,
  priceRange: "Nu 200 – Nu 6,500",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.addressLines[0],
    addressLocality: business.locality,
    addressRegion: "Sarpang",
    addressCountry: business.country,
  },
  openingHoursSpecification: business.hoursSpecSchema.map((spec) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: spec.days,
    opens: spec.opens,
    closes: spec.closes,
  })),
  sameAs: Object.values(business.socials).filter((href) => href !== "#"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
