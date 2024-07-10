import React from "react";
import { AnimatedTooltipPreview } from "../molecules/customer-tooltip";
import { InfiniteMovingCardsDemo } from "../molecules/InfiniteMovingCards";

const Testimonial = () => {
  return (
    <div id="career">
      <p
        id="faq"
        className="text-4xl text-center font-bold mt-20 flex justify-center items-center text-primary"
      >
        Testimonials 🤝
      </p>
      <p className="text-[16px] text-center mt-4 mb-12">
        See What People Have To Say About Us
      </p>
      <AnimatedTooltipPreview />
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default Testimonial;
