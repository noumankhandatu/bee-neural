import React from "react";
import WebDeveloperPage from "./developer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(`https://beeneural.com/`),
  title: {
    template: "BeeNeural | Web Development",
    default: `BeeNeural | Web Development`,
  },
  alternates: {
    canonical: "./",
  },
  description:
    "BeeNeural, a leading AI company, excels in cutting-edge web development services. " +
    "Our team integrates advanced artificial intelligence, machine learning, and natural language processing " +
    "to build scalable, high-performance web applications. Discover innovative web solutions tailored to your business needs, " +
    "from responsive design to seamless user experience. Partner with BeeNeural to elevate your web presence with state-of-the-art AI technology.",
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

const Page = () => {
  return (
    <div>
      <WebDeveloperPage />
    </div>
  );
};

export default Page;
