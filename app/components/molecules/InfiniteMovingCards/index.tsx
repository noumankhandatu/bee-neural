"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with BeeNeural was an amazing experience. They were able to  deliver a custom AI solution that exceeded our expectations. We highly recommend their services.",
    name: "Imtiyaz Ali ",
    title: "CEO",
  },
  {
    quote:
      "AI Services Hub and BeeNeural helped us to develop a machine learning model that improved our sales forecasting accuracy. Their team was professional  and knowledgeable, and we would definitely work with them again.",
    name: "Shaapa",
    title: "DIGIACOM",
  },
  {
    quote:
      "AI Services Hub and BeeNeural provided us with valuable insights into our customer   behavior using natural language processing. Their team was responsive and delivered  the project on time. We would highly recommend their services.",
    name: "Aly",
    title: "CTO",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "AI Services Hub and BeeNeural provided us with valuable insights into our customer  behavior using natural language processing. Their team was responsive and delivered  the project on time. We would highly recommend their services.",
    name: "Aleezy",
    title: "FREELANCER",
  },
];
