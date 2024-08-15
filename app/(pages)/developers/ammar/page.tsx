import React from "react";
import { Metadata } from "next";
import AmmarPortfolio from ".";

export const metadata: Metadata = {
  metadataBase: new URL(`https://beeneural.com/`),
  title: {
    template: "BeeNeural | Computer Vision Expert",
    default: `BeeNeural | Computer Vision Expert`,
  },
  alternates: {
    canonical: "./",
  },
  description:
    "BeeNeural, a leading AI company, specializes in cutting-edge computer vision solutions. " +
    "Our team leverages advanced artificial intelligence, machine learning, and image processing techniques " +
    "to develop scalable, high-performance applications. Discover innovative computer vision solutions tailored to your business needs, " +
    "from automated image recognition to real-time video analysis. Partner with BeeNeural to elevate your operations with state-of-the-art AI technology.",
};
const Page = () => {
  return (
    <div>
      <AmmarPortfolio />
    </div>
  );
};

export default Page;
