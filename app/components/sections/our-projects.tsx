"use client";

import React from "react";
import { GlobeDemo } from "../molecules/globe";
import { projectCardArray } from "@/lib/raw-data";
import { HoverEffect } from "../molecules/card-hover-effect/card-hover-effect";

const OurProjectsDemo = () => {
  return (
    <div className="container mx-auto px-4 ">
      <GlobeDemo />
      <div style={{ height: 50 }} />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projectCardArray} />
      </div>
    </div>
  );
};

export default OurProjectsDemo;
