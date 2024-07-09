import React from "react";
import { AnimatedTooltipPreview } from "../molecules/customer-tooltip";
import { InfiniteMovingCardsDemo } from "../molecules/InfiniteMovingCards";

const Testimonial = () => {
  return (
    <div id="career">
      <div
        style={{ color: "#EE9D1A" }}
        className="  md:text-7xl  text-center text-xl  font-bold text-black dark:text-white"
      >
        Testimonials 🤝
      </div>
      <p className="text-[16px] text-center mt-4 mb-12">
        See What People Have To Say About Us
      </p>
      <AnimatedTooltipPreview />
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default Testimonial;
