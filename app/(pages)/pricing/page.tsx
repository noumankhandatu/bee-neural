import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import { Metadata } from "next";
import React from "react";
import PricingCard from "./card";

export const metadata: Metadata = {
  metadataBase: new URL(`https://beeneural.com/`),
  title: {
    template: "BeeNeural | Pricing",
    default: `BeeNeural | Pricing`,
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

const PricingPage = () => {
  return (
    <Wrapper>
      <div className="lg:pl-20 pl:10  lg:pr-20 pr:10  pt-20 pb-20 text-black w-full">
        <h1 className="text-4xl font-bold mb-20 text-center ">
          Simple, transparent pricing that <br /> works for you
        </h1>
        <div className="flex justify-center gap-3  flex-wrap w-full">
          <PricingCard
            title="Fixed"
            price="?"
            period="/ PER PROJECT"
            description="One-off projects only"
            features={["✔️ Simple", "✔️ Predictable", "✔️ Guaranteed"]}
            buttonText="Get In Touch"
          />
          <PricingCard
            title="Hourly"
            price="$38"
            period="/ PER HOUR"
            description="One-off projects & on-going work"
            features={["✔️ Flexible", "✔️ Transparent", "✔️ Scalable"]}
            buttonText="Get In Touch"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingPage;
