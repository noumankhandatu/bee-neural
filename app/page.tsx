import React, { lazy, Suspense } from "react";
import type { Metadata } from "next";
import { bgImage } from "@/utils/styles";
import { HeroParallaxDemo } from "./components/molecules/hello-parallax";
import { GoogleGeminiEffect } from "./components/molecules/google-gemini-effect/google-gemini-effect";
import { GoogleGeminiEffectDemo } from "./components/molecules/google-gemini-effect";
import { AboutUsDemo } from "./components/sections/aboutus";
import ServicesDemo from "./components/sections/services";
import { ThreeDCardDemo } from "./components/molecules/3d-card";
import OurProjectsDemo from "./components/sections/our-projects";
const Navbar = lazy(() => import("./components/atoms/Navbar"));

export const metadata: Metadata = {
  title: "Bee Neural Home",
  description: "Bee Neural Home Page",
};

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<div className="center">Loading...</div>}>
      <Navbar />
      <HeroParallaxDemo />
      <GoogleGeminiEffectDemo />
      <div style={{ height: 200 }} />
      <AboutUsDemo />
      <hr />
      <div style={{ height: 200 }} />
      <ServicesDemo />
      <OurProjectsDemo />
    </Suspense>
  );
};

export default HomePage;

{
  /* <div style={bgImage}>
        <Navbar />
        <div className="text-center center ">
          <p className="text-white text-[50px]">
            Empower Your Business With AI Services
          </p>
          <p className="text-white text-[20px] font-bold">With BeeNeural</p>
        </div>
      </div> */
}
{
  /* section two */
}
