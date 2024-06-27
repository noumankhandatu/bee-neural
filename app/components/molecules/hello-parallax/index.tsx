"use client";
import React from "react";
import { products } from "@/lib/raw-data";
import { HeroParallax } from "./hero-parallax";

function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export default HeroParallaxDemo;
