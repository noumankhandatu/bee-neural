"use client";

import { primary } from "@/utils/colors";
import React from "react";
import { GlobeDemo } from "../molecules/globe";
import ProjectCard from "../atoms/ProjectCard";
import { projectCardArray } from "@/lib/raw-data";
import { HoverEffect } from "../molecules/card-hover-effect/card-hover-effect";

const OurProjectsDemo = () => {
  return (
    <div className="container mx-auto px-4">
      <GlobeDemo />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-[80%]">
          {projectCardArray.map(
            (
              items: {
                title: string;
                description: string;
                icon: any;
              },
              id: number
            ) => {
              return (
                <ProjectCard
                  key={id}
                  icon={items.icon}
                  title={items.title}
                  description={items.description}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default OurProjectsDemo;

export const projects = [
  {
    title: "Imtiyaz Ali (CEO)",
    description:
      "Working with BeeNeural was an amazing experience. They were able to  deliver a custom AI solution that exceeded our expectations. We highly recommend their services.",
    link: "",
  },
  {
    title: "Shaapa (DIGIACOM) ",
    description:
      "AI Services Hub and BeeNeural helped us to develop a machine learning model that improved our sales forecasting accuracy. Their team was professional  and knowledgeable, and we would definitely work with them again.",
    link: "",
  },
  {
    title: "Aly (CTO)",
    description:
      "AI Services Hub and BeeNeural provided us with valuable insights into our customer   behavior using natural language processing. Their team was responsive and delivered  the project on time. We would highly recommend their services.",
    link: "",
  },
  {
    title: "Aleezy (FREELANCER)",
    description:
      "AI Services Hub and BeeNeural provided us with valuable insights into our customer  behavior using natural language processing. Their team was responsive and delivered  the project on time. We would highly recommend their services.",
    link: "https://meta.com",
  },
];
