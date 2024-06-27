"use client";
import React from "react";
import { products } from "@/lib/raw-data";
import { HeroParallax } from "./hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
