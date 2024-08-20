import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import FaqDemo from "@/app/components/sections/faq";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL(`https://beeneural.com/`),
  title: {
    template: "BeeNeural - AI Solutions | FAQ ",
    default: `BeeNeural - AI Solutions | FAQ  `,
  },
  alternates: {
    canonical: "./",
  },
  description: "BeeNeural Leading Artificial Intelligence Company",
};
const FaqPage = () => {
  return (
    <>
      <Wrapper>
        <FaqDemo />
      </Wrapper>
    </>
  );
};

export default FaqPage;
