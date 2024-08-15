import React from "react";
import { Metadata } from "next";
import GulshanYasmeenPortfolio from "./index";

export const metadata: Metadata = {
  metadataBase: new URL(`https://beeneural.com/`),
  title: {
    template: "BeeNeural | Founder and AI Lead Researcher",
    default: `BeeNeural | Founder and AI Lead Researcher`,
  },
  alternates: {
    canonical: "./",
  },
  description:
    "BeeNeural, under the visionary leadership of our Founder and AI Lead Researcher, is at the forefront of artificial intelligence innovation. " +
    "We specialize in pioneering AI research, pushing the boundaries of machine learning, natural language processing, and computer vision. " +
    "Our cutting-edge solutions are designed to solve complex problems and drive transformative results. " +
    "Partner with BeeNeural to harness the power of AI and shape the future of technology with a company led by experts in the field.",
};
const Page = () => {
  return (
    <div>
      <GulshanYasmeenPortfolio />
    </div>
  );
};

export default Page;
