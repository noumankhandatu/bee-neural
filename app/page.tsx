import React from "react";
import HomePage from "./components/ui/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(`https://beeneural.com/`),
  title: {
    template: "BeeNeural - AI Solutions | Home",
    default: `BeeNeural - AI Solutions | Home`,
  },
  alternates: {
    canonical: "./",
  },
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

const page = () => {
  return <HomePage />;
};

export default page;
