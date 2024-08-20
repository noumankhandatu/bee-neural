"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const left = "left";
const right = "right";

export function InfiniteMovingCardsDemo() {
  const [turn, setTurn] = useState(left);
  const theme = localStorage.getItem("theme");
  return (
    <div
      className={`h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <FaArrowLeft
        className={`absolute left-10 border-2 rounded-full h-[30px] w-[30px] p-1 cursor-pointer ${
          theme === "dark"
            ? "border-secondary text-secondary"
            : "border-primary text-primary"
        }`}
        onClick={() => setTurn(left)}
      />
      <InfiniteMovingCards items={testimonials} direction={turn} speed="slow" />
      <FaArrowRight
        className={`absolute right-10 border-2 rounded-full h-[30px] w-[30px] p-1 cursor-pointer ${
          theme === "dark"
            ? "border-secondary text-secondary"
            : "border-primary text-primary"
        }`}
        onClick={() => setTurn(right)}
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
