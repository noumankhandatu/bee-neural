import React from "react";
import { AnimatedTooltipPreview } from "../molecules/customer-tooltip";
import { primary } from "@/utils/colors";
import { CardHoverEffectDemo } from "../molecules/card-hover-effect";

const Testimonial = () => {
  return (
    <div>
      <p
        className="text-4xl text-center font-bold mt-20"
        style={{ color: primary }}
      >
        Testimonials
      </p>
      <p className="text-[16px] text-center mt-8 mb-20">
        See What People Have To Say About Us
      </p>
      <AnimatedTooltipPreview />
      <div style={{ height: 100 }} />
      <CardHoverEffectDemo />
    </div>
  );
};

export default Testimonial;
