"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../molecules/tracing-beam";

export function AboutUsDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2
              style={{
                backgroundImage: `-webkit-linear-gradient(#EF7709, #EF7709)`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className="  text-[50px]  px-4 py-1 mb-4"
            >
              {item.badge}
            </h2>

            <p className={"text-xl mb-4"}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

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
