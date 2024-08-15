import React from "react";
import { Metadata } from "next";
import HakimPortfolio from "./index";

export const metadata: Metadata = {
  metadataBase: new URL(`https://beeneural.com/`),
  title: {
    template: "BeeNeural | DevOps And ML Engineer",
    default: `BeeNeural | DevOps And ML Engineer`,
  },
  alternates: {
    canonical: "./",
  },
  description:
    "BeeNeural, a leading AI company, excels in data science and advanced analytics. " +
    "Our team harnesses the power of machine learning, statistical modeling, and big data to deliver insights that drive business success. " +
    "Discover innovative data science solutions tailored to your needs, from predictive analytics to data-driven decision-making. " +
    "Partner with BeeNeural to unlock the full potential of your data with cutting-edge AI technology.",
};
const Page = () => {
  return (
    <div>
      <HakimPortfolio />
    </div>
  );
};

export default Page;
