import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Cursor } from "@/components/shared/cursor";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { COMPANY } from "@/constants/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.pcs.co.tz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pannecia Consulting Services (PCS) — Connecting the Dots",
    template: "%s | Pannecia Consulting Services (PCS)",
  },
  description:
    "PCS partners with organizations across East and West Africa to solve complex business, technology, and public health challenges through innovative consulting solutions.",
  keywords: [
    "Pannecia Consulting Services",
    "PCS Tanzania",
    "business consulting Tanzania",
    "management consulting Africa",
    "HIV/AIDS workplace programs",
    "digital transformation consulting",
    "public health consulting Tanzania",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: COMPANY.name,
    title: "Pannecia Consulting Services (PCS) — Connecting the Dots",
    description:
      "Connecting business, technology, and community impact across East and West Africa.",
    images: [{ url: "/brand/pcs-lockup-countries.jpg", width: 1039, height: 731 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pannecia Consulting Services (PCS) — Connecting the Dots",
    description:
      "Connecting business, technology, and community impact across East and West Africa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: COMPANY.name,
              alternateName: "PCS",
              url: siteUrl,
              email: COMPANY.email,
              telephone: COMPANY.phones[0],
              address: {
                "@type": "PostalAddress",
                streetAddress: COMPANY.address.line1,
                addressLocality: "Dar es Salaam",
                addressCountry: "TZ",
              },
              foundingDate: "2020-04-18",
              areaServed: COMPANY.countries,
              description:
                "Business management consulting firm providing integrated business, technology, and public health solutions across East and West Africa.",
            }),
          }}
        />
        <LoadingScreen />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
