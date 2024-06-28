import React, { lazy, Suspense } from "react";
import type { Metadata } from "next";
import Spinner from "./components/atoms/Spinner";
import Testimonial from "./components/sections/testimonial";
import { SignupFormDemo } from "./components/sections/contact-section";

// lazy imports
const Navbar = lazy(() => import("./components/atoms/Navbar"));
const HeroParallaxDemo = lazy(
  () => import("./components/molecules/hello-parallax")
);
const OurProjectsDemo = lazy(
  () => import("./components/sections/our-projects")
);
const GoogleGeminiEffectDemo = lazy(
  () => import("./components/molecules/google-gemini-effect")
);
const ServicesDemo = lazy(() => import("./components/sections/services"));
const AboutUsDemo = lazy(() => import("./components/sections/aboutus"));

export const metadata: Metadata = {
  title: "Bee Neural Home",
  description: "Bee Neural Home Page",
};

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Navbar />
      <HeroParallaxDemo />
      <GoogleGeminiEffectDemo />
      <div style={{ height: 200 }} />
      <AboutUsDemo />
      <hr />
      <div style={{ height: 200 }} />
      <ServicesDemo />
      <OurProjectsDemo />
      <Testimonial />
      <SignupFormDemo />
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
