import React, { lazy, Suspense } from "react";
import type { Metadata } from "next";
import Spinner from "./components/atoms/Spinner";
import { SignupFormDemo } from "./components/sections/contact-section";

// Lazy imports
const Testimonial = lazy(() => import("./components/sections/testimonial"));

const FaqDemo = lazy(() => import("./components/sections/faq"));
const Footer = lazy(() => import("./components/atoms/Footer"));
const RocketFired = lazy(() => import("./components/atoms/rocket"));
const TeamCarousel = lazy(
  () => import("./components/molecules/team-carousel/team-carousel")
);

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

const baseurl = "https://bee-neural.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseurl),
  title: {
    default: "Bee Neural Home",
    template: "%s | Bee Neural",
  },
  description:
    "Welcome to Bee Neural, your go-to platform for neural network insights and resources.",
  keywords: [
    "Bee Neural",
    "Bee Neural Home",
    "Bee Neural | Home Page",
    "Bee Neural Website",
    "AI Services",
    "Bee Neural AI Services",
  ],
  openGraph: {
    type: "website",
    url: baseurl,
    title: "Bee Neural",
    description:
      "Welcome to Bee Neural, your go-to platform for neural network insights and resources.",
    images: [
      {
        url: "/assets/svg/logo.svg",
        width: 800,
        height: 600,
        alt: "Bee Neural Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bee Neural Home",
    description:
      "Welcome to Bee Neural, your go-to platform for neural network insights and resources.",
    images: ["/assets/svg/logo.svg"],
  },
  alternates: {
    canonical: baseurl,
  },
  other: {
    "theme-color": "#dd5f00",
  },
};

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Navbar />
      <main>
        <HeroParallaxDemo />
        <GoogleGeminiEffectDemo />
        <section style={{ height: 200 }} />
        <AboutUsDemo />
        <hr />
        <section style={{ height: 200 }} />
        <ServicesDemo />
        <section style={{ height: 200 }} />
        <OurProjectsDemo />
        <section style={{ height: 100 }} />
        <Testimonial />
        <section style={{ height: 100 }} />

        <TeamCarousel />
        <section style={{ height: 100 }} />

        <FaqDemo />
        <SignupFormDemo />
      </main>
      <footer>
        <Footer />
        <div
          className="flex align-middle justify-center items-center"
          style={{ height: 120, backgroundColor: "#eeefef", color: "black" }}
        >
          <p> Copyright © 2024 BeeNeural. All Rights Reserved.</p>
        </div>
      </footer>
      <RocketFired />
    </Suspense>
  );
};

export default HomePage;
