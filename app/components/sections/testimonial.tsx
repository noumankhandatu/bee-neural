import React from "react";
import { AnimatedTooltipPreview } from "../molecules/customer-tooltip";
import { primary } from "@/utils/colors";
import { InfiniteMovingCardsDemo } from "../molecules/InfiniteMovingCards";

const Testimonial = () => {
  return (
    <div>
      <p
        className="text-4xl text-center font-bold mt-20"
        style={{ color: primary }}
      >
        Testimonials
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
