import React from "react";
import { Metadata } from "next";
import { Oxygen } from "next/font/google";
import ClientProvider from "./components/atoms/ClientProvider";
import Head from "next/head";
import "./globals.css";
import "aos/dist/aos.css";

const oxygen = Oxygen({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "BeeNeural ",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content=" BeeNeural - AI Solutions | Home" />
      </Head>
      <body className={oxygen.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
