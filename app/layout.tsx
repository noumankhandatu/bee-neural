import React from "react";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientProvider from "./components/atoms/ClientProvider";

// Import the Client Component

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata | any = {
  title: "Bee Neural",
  description: "Bee Neural Leading Artificial Intelligence Company",
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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.icons.icon.map((icon: any, index: number) => (
          <link key={index} rel={icon.rel} type={icon.type} href={icon.url} />
        ))}
      </head>
      <body className={roboto.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
