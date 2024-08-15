import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL(`https://beeneural.com/`),
  title: {
    template: "BeeNeural | Legal Certificate",
    default: `BeeNeural | Legal Certificate`,
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

const LegalPolicy = () => {
  return (
    <Wrapper>
      <div className="p-20 bg-[#FEFCFA] text-cente flex justify-center flex-col items-center">
        <p className="text-4xl text-center ">BeeNeural Legal Certificate</p>
        <br /> <br />
        <br />
        <Image
          src={"/assets/images/c1.png"}
          alt="c1"
          height={800}
          width={800}
          className="w-[500px]"
        />
        <Image
          src={"/assets/images/c2.png"}
          alt="c1"
          height={800}
          width={800}
          className="w-[500px]"
        />
      </div>
    </Wrapper>
  );
};

export default LegalPolicy;
