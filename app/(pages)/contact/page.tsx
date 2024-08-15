import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import { SignupFormDemo } from "@/app/components/sections/contact-section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL(`https://beeneural.com/`),
  title: {
    template: "BeeNeural - AI Solutions | Contact",
    default: `BeeNeural - AI Solutions | Contact`,
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
const ContactPage = () => {
  return (
    <Wrapper>
      <section style={{ height: 40 }} />
      <SignupFormDemo />
      <section style={{ height: 100 }} />
    </Wrapper>
  );
};

export default ContactPage;
