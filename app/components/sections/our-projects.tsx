"use client";

import React from "react";
import { useSelector } from "react-redux";
import { GlobeDemo } from "../molecules/globe";
import { projectCardArray } from "@/lib/raw-data";
import { HoverEffect } from "../molecules/card-hover-effect/card-hover-effect";

const OurProjectsDemo = () => {
  const theme = localStorage.getItem("theme");
  return (
    <div
      className={` w-full mx-auto px-4 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <GlobeDemo />

      <div className={`max-w-5xl mx-auto px-8`}>
        <HoverEffect items={projectCardArray} />
      </div>
    </div>
  );
};

export default OurProjectsDemo;
