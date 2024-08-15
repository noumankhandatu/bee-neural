import React from "react";
import { Metadata } from "next";
import { Oxygen } from "next/font/google";
import ClientProvider from "./components/atoms/ClientProvider";
import Head from "next/head";
import "./globals.css";
import "aos/dist/aos.css";
import Script from "next/script";

const oxygen = Oxygen({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://beeneural.com/`),
  title: {
    template: "%s",
    default: `BeeNeural`,
  },
  alternates: {
    canonical: "./",
    languages: {
      "en-US": "https://beeneural.com/en-US",
    },
  },
  description: "BeeNeural Leading Artificial Intelligence Company",
  keywords: [
    "AI Solutions",
    "Artificial Intelligence Services",
    "Machine Learning Consultancy",
    "Deep Learning Models",
    "AI-Driven Analytics",
    "Computer Vision Applications",
    "Natural Language Processing",
    "Smart Parking Systems",
    "Autonomous Workflow Automation",
    "AI for Business Intelligence",
    "Data Science Consulting",
    "AI Startup in Pakistan",
    "Women in Tech",
    "AI-Powered Applications",
    "SaaS for AI Solutions",
    "Custom AI Models",
    "MLOps Services",
    "AI in Gilgit Baltistan",
    "Intelligent Automation",
    "AI Integration for Enterprises",
    "Bee Neural",
    "Beeneural",
    "BeeNeural",
  ],
  verification: {
    google:
      "google-site-verification=lanVQI4iLkjXaq5nG8zW94a2QWrhPvzZc7B8aV1JTlw",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/ico",
        url: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content=" BeeNeural - AI Solutions | Home" />
      </Head>
      <Script id="schema-org-markup-website" type="application/ld+json">
        {`
          {
            "@context" : "https://schema.org",
            "@type" : "WebSite",
            "name" : "BeeNeural",
            "url" : "https://beeneural.com/"
          }
        `}
      </Script>
      <body className={oxygen.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
