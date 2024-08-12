import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import Image from "next/image";
import React from "react";
import GulshamYasmeenCarousel from "../gulshan-yasmeen/carousels/carousel";
import GulshanYasmeenTestimonailCarousel from "../gulshan-yasmeen/carousels/testimonail-carousel";
import { ShoaibJourney } from "@/lib/journey-data";

const ShoaibPortfolio = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-20 p-10">
        <div>
          <h1 className="text-4xl font-bold">Who is Shoaib Uddin ? </h1>
          <p className="text-[14px] mt-10 text-beta leading-loose">
            I&apos;m a dedicated Machine Learning and Embedded Systems engineer
            with 2 years of industry experience, where I&apos;ve worked on
            various NLP and computer vision projects. My background in
            Electrical and Computer Engineering has led me to the exciting world
            of Data Science and Artificial Intelligence.
          </p>
          <p className="text-[14px] mt-2 text-beta leading-loose">
            I enjoy using data to solve problems and create innovative
            solutions. My journey in data science reflects my passion for
            staying ahead in technology and making a real difference in this
            ever-changing field.
          </p>
          <p className="text-[14px] mt-2 text-beta leading-loose">
            As the co-founder of BeeNeural Pvt and the General Secretary of the
            Gilgit Baltistan Artificial Intelligence Association (GBAIA), I am
            committed to contributing to our community.
          </p>
          <p className="text-[14px] mt-2 text-beta leading-loose">
            I actively share my skills and experience by organizing tech camps,
            encouraging others to explore the limitless possibilities where
            data, technology, and creativity meet. Let&apos;s connect and
            explore how we can make an impact together!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            height={1000}
            width={1000}
            className="md:w-[400px] md:h-[500px]  w-full h-full border-red border-2 rounded-sm shadow-2xl ceoImage"
            src={"/assets/team/shoaib-front.jpg"}
            alt="ceo"
          />
        </div>
      </div>
      <section style={{ height: 100 }} />

      {/* section 3 */}
      <section style={{ height: 100 }} />

      <div>
        <h2 className="text-3xl font-bold text-center">
          Shoaib&apos;s Portfolio
        </h2>
        <p className="text-[14px] mt-10 text-beta leading-loose text-center ml-10 mr-10">
          Highlighting my skills and accomplishments through tangible work
          examples and experiences.
        </p>

        <div className="md:p-20 p-10">
          <GulshamYasmeenCarousel />
          <section style={{ height: 200 }} />
          <h2 className="text-3xl font-bold text-center">Journey and Impact</h2>

          <p className="text-[14px] mt-10 text-beta leading-loose text-center ml-10 mr-10">
            Discover my noteworthy engagements, meaningful contributions, and
            impactful initiatives that shaped my journey.
          </p>
          <section style={{ height: 250 }} />

          <GulshanYasmeenTestimonailCarousel cards={ShoaibJourney} />
          <section style={{ height: 200 }} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ShoaibPortfolio;
