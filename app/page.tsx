import React, { lazy, Suspense } from "react";
import type { Metadata } from "next";
import { bgImage } from "@/utils/styles";
import { HeroParallaxDemo } from "./components/molecules/hello-parallax";
const Navbar = lazy(() => import("./components/atoms/Navbar"));

export const metadata: Metadata = {
  title: "Bee Neural Home",
  description: "Bee Neural Home Page",
};

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<div className="center">Loading...</div>}>
      {/* <div style={bgImage}>
        <Navbar />
        <div className="text-center center ">
          <p className="text-white text-[50px]">
            Empower Your Business With AI Services
          </p>
          <p className="text-white text-[20px] font-bold">With BeeNeural</p>
        </div>
      </div> */}
      {/* section two */}
      <Navbar />
      <HeroParallaxDemo />
    </Suspense>
  );
};

export default HomePage;
