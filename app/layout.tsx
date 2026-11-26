import type { Metadata, Viewport } from "next";
import { Anton, Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import { business, main } from "@/data/business";
import { img } from "@/lib/images";
import { Providers } from "@/components/Providers";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin", "latin-ext"], variable: "--font-anton", display: "swap" });
const instrument = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin", "latin-ext"], variable: "--font-instrument", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-hanken", display: "swap" });

const title = "Zona 20 Pizzeria e Osteria — Napuljska pizza | Beograd";
const description =
  "Zona 20 Pizzeria e Osteria: napuljska pizza, doručak, sendviči i salate na Voždovcu i u naselju Stepa Stepanović. Od 2016. godine.";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "sr_RS",
    siteName: business.name,
    images: [{ url: img.prosciuttoBurrata.src, width: img.prosciuttoBurrata.width, height: img.prosciuttoBurrata.height, alt: "Pizza Prosciutto con Burrata" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [img.prosciuttoBurrata.src] },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#151515" };

// Strukturirani podaci — samo verifikovane informacije iz data/business.ts
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  servesCuisine: ["Italian", "Pizza"],
  telephone: main.phone.e164,
  url: business.siteUrl,
  image: `${business.siteUrl}${img.prosciuttoBurrata.src}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: main.street,
    addressLocality: business.city,
    addressCountry: business.country,
  },
  openingHours: business.hoursSchema,
  acceptsReservations: true,
  sameAs: [business.instagram.url],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr-Latn" className={`${anton.variable} ${instrument.variable} ${hanken.variable}`}>
      <body className="grain">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
