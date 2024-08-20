"use client";

import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AnimatedPinDemo } from "../pin-card";
import { RiTeamFill } from "react-icons/ri";

const cards = [
  {
    name: "Gulshan Yasmeen",
    position: "Founder And AI Lead Researchers",
    image: "/assets/g1.JPG",
    link: "/developers/gulshan-yasmeen",
  },
  {
    name: "Engr Shoaib Uddin",
    position: "Co-Founder Data Scientist And NLP Specialist",
    image: "/assets/team/team2.webp",
    link: "/developers/shoaib",
  },
  {
    name: "Hakeem Yar Baig",
    position: "Co-Founder DevOps And ML Engineer",
    image: "/hakin-photoaidcom-cropped.jpg",
    link: "/developers/hakim",
  },
  {
    name: "Ammar Ali",
    position: "Co-Founder Data Scientist Computer Vision Expert",
    image: "/assets/team/ammer.webp",
    link: "/developers/ammar",
  },
  {
    name: "Ania Shams",
    position: "Machine Learning Engineer And Bussiness Developer",
    image: "/assets/team/shams.jpeg",
    link: "/developers/nouman",
  },
  {
    name: "Nouman Datusing",
    position: "Developer",
    image: "/assets/team/me.png",
    link: "/developers/nouman",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function TeamSlider() {
  const theme = localStorage.getItem("theme");
  return (
    <div
      className={`w-full ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <p
        id="faq"
        className={`text-4xl text-center font-bold pt-20 flex justify-center items-center ${
          theme === "dark" ? "text-primary" : "text-primary"
        }`}
      >
        Our Team
        <RiTeamFill className="ml-4" />
      </p>

      <p
        className={`text-[16px] text-center mt-4 pb-12 ${
          theme === "dark" ? "text-neutral-200" : "text-neutral-700"
        }`}
      >
        A dynamic team of innovators dedicated to excellence and groundbreaking
        solutions.
      </p>
      <Carousel className="h-[363px]" responsive={responsive}>
        {cards.map((member: any, id: number) => (
          <div key={id}>
            <AnimatedPinDemo
              name={member.name}
              position={member.position}
              image={member.image}
              link={member.link}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TeamSlider;
