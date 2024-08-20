"use client";

import React, { lazy, Suspense } from "react";
import TeamSlider from "../molecules/team-slider";
import Wrapper from "../molecules/headerfooter-wrapper";
import Spinner from "../atoms/Spinner";

// Lazy imports
const Testimonial = lazy(() => import("../sections/testimonial"));
const RocketFired = lazy(() => import("../atoms/rocket"));
const OurProjectsDemo = lazy(() => import("../sections/our-projects"));
const ServicesDemo = lazy(() => import("../sections/services"));

const HomePage: React.FC = () => {
  const theme = localStorage.getItem("theme");
  return (
    <Suspense fallback={<Spinner />}>
      <Wrapper>
        <RocketFired />
        <main>
          <section id="home" />
          <div
            className={` relative ${
              theme === "dark" ? "bg-black" : "bg-white"
            }`}
          >
            <div
              style={{
                background:
                  theme === "dark" ? `url(/web-dark.jpg)` : `url(/web.png)`,
                backgroundSize: "cover",
                backgroundPosition: "600px -470px",
                height: 600,
                opacity: theme === "dark" ? 0.1 : 0.1,
              }}
              className={`px-32 flex justify-between ${
                theme === "dark" ? "bg-black" : "bg-secondary"
              }`}
            ></div>
            <div
              className={`absolute top-10 left-32 ${
                theme === "dark" ? "text-secondary" : "text-black"
              }`}
            >
              <h1
                className={`text-6xl font-bold pt-6 ${
                  theme === "dark" ? "text-white" : "text-[#34373E]"
                }`}
              >
                Empower Your Business With
              </h1>
              <h2
                className={`text-6xl font-bold mt-4 ${
                  theme === "dark" ? "text-white" : "text-[#34373E]"
                }`}
              >
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

          <section
            id="services"
            style={{
              height: 10,
              background: theme === "dark" ? "black" : "white",
            }}
          />
          <ServicesDemo />
          <section
            id="portfolio"
            style={{
              height: 100,
              background: theme === "dark" ? "black" : "white",
            }}
          />
          <OurProjectsDemo />
          <section
            style={{
              height: 100,
              background: theme === "dark" ? "black" : "white",
            }}
          />
          <Testimonial />
          <section
            id="team"
            style={{
              height: 100,
              background: theme === "dark" ? "black" : "white",
            }}
          />
          <TeamSlider />
          <section
            style={{
              height: 100,
              background: theme === "dark" ? "black" : "white",
            }}
          />
        </main>
      </Wrapper>
      <footer>
        <div
          className={`flex align-middle justify-center items-center h-[90px] ${
            theme === "dark"
              ? "bg-black text-secondary"
              : "bg-primary text-white"
          }`}
        >
          <p> Copyright © 2024 BeeNeural. All Rights Reserved.</p>
        </div>
      </footer>
    </Suspense>
  );
};

export default HomePage;
