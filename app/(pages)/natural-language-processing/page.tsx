import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import React from "react";
import Image from "next/image";
import Title from "@/app/components/atoms/Title";
import { StickyScrollRevealDemo } from "@/app/components/molecules/sticky-scroll-reveal";
import { NLPcontent } from "@/lib/service-data";

const page = () => {
  return (
    <div>
      <Wrapper>
        <div className="p-10">
          <div className="text-center text-3xl font-bold mt-10">
            Natural Language Processing Services at <Title />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            <div className="flex justify-center">
              <Image
                src={"/assets/service-images/nlp.jpg"}
                width={1000}
                height={1000}
                alt="image"
                className="w-full h-full rounded-2xl shadow-2xl"
              />
            </div>

            <div
              style={{ letterSpacing: 2 }}
              className="leading-loose text-base md:text-lg text-beta text-center lg:text-left max-w-full md:max-w-2xl"
            >
              At <Title />, we harness the transformative power of Natural
              Language Processing (NLP) to provide innovative solutions that
              cater to the diverse needs of businesses across various sectors.
              Our NLP services are designed to help organizations unlock the
              value hidden within vast amounts of unstructured text data, from
              automating customer support to gaining deep insights from data
              analytics.
              <br /> <br />
              At <Title />, we are committed to delivering excellence through
              our NLP services, helping businesses innovate and thrive in a
              data-driven world. Contact us today to discover how our NLP
              solutions can transform your operations and provide you with the
              competitive edge you need.
            </div>
          </div>
        </div>
        {/* scroll */}

        <StickyScrollRevealDemo content={NLPcontent} />
      </Wrapper>
    </div>
  );
};

export default page;
