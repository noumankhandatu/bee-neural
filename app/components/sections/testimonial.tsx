import React from "react";
import { useSelector } from "react-redux";
import { InfiniteMovingCardsDemo } from "../molecules/InfiniteMovingCards";

const Testimonial = () => {
  const theme = localStorage.getItem("theme");
  return (
    <div
      id="career"
      className={`${theme === "dark" ? "bg-black" : "bg-white"}`}
    >
      <p
        id="faq"
        className={`text-4xl text-center font-bold pt-20 flex justify-center items-center ${
          theme === "dark" ? "text-secondary" : "text-primary"
        }`}
      >
        Testimonials 🤝
      </p>
      <p
        className={`text-[16px] text-center pt-4 pb-12 ${
          theme === "dark" ? "text-neutral-200" : "text-black"
        }`}
      >
        See What People Have To Say About Us
      </p>
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default Testimonial;
