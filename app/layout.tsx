import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Green Share Future PLC",
    template: "%s | Green Share Future PLC",
  },

  description:
    "Green Share Future PLC is a digital platform providing e-invoicing, business management, tenant management, and enterprise software solutions.",

  keywords: [
    "Green Share Future PLC",
    "Green Share",
    "GSF",
    "E-Invoice",
    "Electronic Invoice",
    "ERP",
    "Business Management System",
    "Invoice Management",
    "Accounting Software",
    "Enterprise Software",
    "Tenant Management",
    "Multi Tenant Platform",
    "POS System",
    "Tax Management",
    "Digital Transformation",
    "Ethiopia",
    "Ethiopian Software",
    "Fintech",
    "Business Solutions",
    "Trading PLC",
    "SaaS Platform",
    "Inventory Management",
    "Invoice Automation",
    "Financial Software",
    "Cloud Software",
    "Green Share Future",
  ],

  applicationName: "Green Share Future PLC",

  authors: [
    {
      name: "Green Share Future PLC",
    },
  ],

  creator: "Green Share Future PLC",

  publisher: "Green Share Future PLC",

  category: "Business",

  // metadataBase: new URL(
  //   "https://your-domain.com"
  // ),

  openGraph: {
    title: "Green Share Future PLC",
    description:
      "Enterprise software solutions including e-invoicing, tenant management, and business automation.",

    siteName: "Green Share Future PLC",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Green Share Future PLC",
    description:
      "Enterprise software and e-invoicing solutions.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">  <NextIntlClientProvider>{children}</NextIntlClientProvider></body>
    </html>
  );
}
