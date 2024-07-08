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
        We are a team of highly skilled data scientists and professionals with
        diverse expertise in artificial intelligence. Our mission is to
        demonstrate our capabilities and showcase our extensive skills, offering
        a wide range of AI services tailored to meet your needs. From machine
        learning, data analytics, natural language processing and computer
        vision, we are committed to delivering innovative solutions. Our goal is
        to drive your business forward with cutting-edge AI technologies and
        unparalleled expertise.
      </p>
    ),
    badge: "About Us",
    image: "/parallex/image9.webp",
  },
];
