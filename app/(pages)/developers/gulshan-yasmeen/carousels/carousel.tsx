"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";

const GulshamYasmeenCarousel = () => {
  return (
    <div>
      <Carousel
        autoPlaySpeed={3000}
        centerMode={false}
        draggable
        infinite
        pauseOnHover
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        shouldResetAutoplay
        slidesToSlide={1}
        swipeable
      >
        <div
          style={{ justifyItems: "center" }}
          className="grid grid-cols-1 md:grid-cols-2 justify-center  align-middle items-center "
        >
          <Image
            src="/assets/images/ags.png"
            style={{
              height: "300px",
              width: "300px",
            }}
            height={1000}
            width={1000}
            alt="image"
          />
          <div className="w-full ">
            <h1 className="font-bold text-3xl text-center md:text-left mt-10 md:mt-0">
              Autograding System
            </h1>{" "}
            <section style={{ height: 30 }} />
            <p className="md:w-[400px] w-full text-center md:text-left text-[14px]">
              The Subjective-Based Auto-Grading System is an AI-driven solution
              that automates grading for subjective exam papers. Using OCR
              technology, it converts handwritten or printed text from scanned
              papers into digital format. The text is then preprocessed and
              vectorized using methods like TF-IDF or BERT embeddings. By
              calculating cosine similarity between student responses and
              reference answers, the system assigns grades automatically.
              Educators can upload papers, view results, and adjust grades
              through an intuitive interface, enhancing efficiency and
              consistency in grading.
            </p>
          </div>
        </div>
        <div
          style={{ justifyItems: "center" }}
          className="grid grid-cols-1 md:grid-cols-2 justify-center  align-middle items-center "
        >
          <Image
            src="/assets/images/mtrc.png"
            style={{
              height: "300px",
              width: "300px",
            }}
            height={1000}
            width={1000}
            alt="image"
          />
          <div className="w-full ">
            <h1 className="font-bold text-3xl text-center md:text-left mt-10 md:mt-0">
              Medical Test Recommendation <br /> System
            </h1>
            <section style={{ height: 30 }} />
            <p className="md:w-[400px] w-full text-center md:text-left text-[14px]">
              In hospitals, waiting for appointments takes a long time, and
              doctors decide on tests after hearing about symptoms. My project
              helps by suggesting which medical tests someone might need, just
              based on their symptoms. This way, we can speed up the process and
              make it easier for people to get the right tests without
              waiting too long.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default GulshamYasmeenCarousel;
