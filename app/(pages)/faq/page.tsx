import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import FaqDemo from "@/app/components/sections/faq";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "BeeNeural | FAQ",
  description: "BeeNeural Leading Artificial Intelligence Company",
};

const FaqPage = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Wrapper>
        <section style={{ height: 40 }} />
        <FaqDemo />
        <section style={{ height: 100 }} />
      </Wrapper>
    </>
  );
};

export default FaqPage;
