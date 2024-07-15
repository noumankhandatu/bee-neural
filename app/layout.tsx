import React from "react";
import { Metadata } from "next";
import { Oxygen } from "next/font/google";
import ClientProvider from "./components/atoms/ClientProvider";
import Head from "next/head";
import "./globals.css";
import "aos/dist/aos.css";
// Import the Client Component

const oxygen = Oxygen({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata | any = {
  title: "BeeNeural",
  description: "BeeNeural Leading Artificial Intelligence Company",
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
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.icons.icon.map((icon: any, index: number) => (
          <link key={index} rel={icon.rel} type={icon.type} href={icon.url} />
        ))}
      </head>
      <body className={oxygen.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
