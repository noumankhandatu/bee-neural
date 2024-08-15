import React, { lazy, Suspense } from "react";
import Spinner from "./components/atoms/Spinner";
import TeamSlider from "./components/molecules/team-slider";
import Wrapper from "./components/molecules/headerfooter-wrapper";
import Image from "next/image";
import { Metadata } from "next";

// Lazy imports
const Testimonial = lazy(() => import("./components/sections/testimonial"));

const RocketFired = lazy(() => import("./components/atoms/rocket"));

const OurProjectsDemo = lazy(
  () => import("./components/sections/our-projects")
);

const ServicesDemo = lazy(() => import("./components/sections/services"));

export const metadata: Metadata = {
  title: "BeeNeural - AI Solutions | Home",
  description: "BeeNeural Leading Artificial Intelligence Company",
};
const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Wrapper>
        <RocketFired />
        <main>
          <section id="home" style={{ height: 100 }} />
          <div className="relative">
            <div
              style={{
                background: `url(/web.png)`,
                backgroundSize: "cover",
                backgroundPosition: "600px -470px",
                height: 600,
                opacity: 0.1,
              }}
              className="px-32 flex justify-between"
            ></div>
            <div className=" text-black   absolute  top-10 left-32">
              <h1 className="text-6xl font-bold text-[#34373E]">
                Empower Your Business With
              </h1>
              <h2 className="text-6xl font-bold text-[#34373E] mt-4">
                {" "}
                AI Services Of <span className="text-[#EE9D1A]">B</span>ee
                <span className="text-[#EE9D1A]">N</span>
                eural
              </h2>
              <p className="text-[16px] mt-10">
                We build beautiful products with the latest technologies and
                frameworks.
              </p>
              <p className="text-[16px] mt-4">
                We are a team of passionate developers and designers that love
                to build
              </p>
              <p className="text-[16px] mt-4">amazing products</p>
            </div>
          </div>
          {/* <AboutUsDemo />
          <hr /> */}
          <section id="services" style={{ height: 10 }} />
          <ServicesDemo />
          <section id="portfolio" style={{ height: 200 }} />
          <OurProjectsDemo />
          <section style={{ height: 100 }} />
          <Testimonial />
          <section id="team" style={{ height: 100 }} />
          <TeamSlider />
          <section style={{ height: 100 }} />
        </main>
      </Wrapper>
      <footer>
        <div className="flex align-middle justify-center items-center bg-primary text-white h-[90px]">
          <p> Copyright © 2024 BeeNeural. All Rights Reserved.</p>
        </div>
      </footer>
    </Suspense>
  );
};

export default HomePage;
