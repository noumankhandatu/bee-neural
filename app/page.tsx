import React, { lazy, Suspense } from "react";
import type { Metadata } from "next";
import Spinner from "./components/atoms/Spinner";
import Testimonial from "./components/sections/testimonial";
import { SignupFormDemo } from "./components/sections/contact-section";
import FaqDemo from "./components/sections/faq";
import Footer from "./components/atoms/Footer";
import RocketFired from "./components/atoms/rocket";
import TeamCarousel from "./components/molecules/team-carousel/team-carousel";

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
      <div style={{ height: 200 }} />
      <OurProjectsDemo />
      <div style={{ height: 100 }} />
      <Testimonial />
      <div style={{ height: 100 }} />

      <TeamCarousel />
      <div style={{ height: 100 }} />

      <FaqDemo />
      <SignupFormDemo />
      <Footer />
      <div
        className="flex align-middle justify-center items-center"
        style={{ height: 120, backgroundColor: "#eeefef", color: "black" }}
      >
        <p> Copyright © 2024 BeeNeural. All Rights Reserved.</p>
      </div>
      <RocketFired />
    </Suspense>
  );
};

export default HomePage;
