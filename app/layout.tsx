import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata | any = {
  title: "Bee Neural",
  description: "Bee Neural Leading Artificial Intelligence Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/assets/svg/logo.svg" />
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
