"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../molecules/tracing-beam";

function AboutUsDemo() {
  return (
    <TracingBeam className="px-6">
      <div id="about" className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <div
              style={{
                backgroundImage: `-webkit-linear-gradient(#EF7709, #EF7709)`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className="  text-[60px] px-4 py-1 mb-4 font-bold text-center"
            >
              <div
                style={{ color: "#EF7709" }}
                className=" mb-6 md:text-7xl  text-center text-xl  font-bold text-black dark:text-white"
              >
                {item.badge}
                🧑‍💼
              </div>
            </div>
            <div className="text-sm  prose prose-sm dark:prose-invert text-center">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {/* <p className={"text-3xl mb-4 text-center"}>{item.title}</p> */}

              <div className="max-w-2xl text-base md:text-lg mt-8 text-beta">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
export default AboutUsDemo;

const dummyContent = [
  {
    title: "AI Services Hub ",
    description: (
      <p>
        We Are A Team Of Skilled Data Scientists And Professionals With Diverse
        Expertise In Artificial Intelligence Services. Our Aim Is To Showcase
        Our Capabilities, Expertise, And Skills, And To Offer Information About
        The Range Of AI Services Provided. Our Services Include Natural Language
      </p>
    ),
    badge: "About Us",
    image: "/assets/images/img3.jpg",
  },
];
