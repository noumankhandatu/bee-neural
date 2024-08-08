"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import Image from "next/image";

const TestimonialCard = ({ imageSrc, name, title, testimonial, isActive }) => {
  return (
    <div
      className={`bg-[#45C9F0] rounded-lg h-[250px] p-6 mt-10 mb-10 text-start text-white transition-transform duration-300 ease-in-out ml-2 mr-2 ${
        isActive ? "transform -translate-y-4" : ""
      }`}
    >
      <Image
        src={imageSrc}
        alt={`${name}'s picture`}
        className="rounded-full w-12 h-12 mb-4"
        height={300}
        width={300}
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <h4 className="text-md font-light mb-4">{title}</h4>
      <p className="text-[10px] leading-relaxed">{testimonial}</p>
    </div>
  );
};

const GulshanTestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the first card as active

  const handleBeforeChange = (nextSlide) => {
    setActiveIndex(nextSlide);
  };

  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        beforeChange={(previousSlide, nextSlide) =>
          handleBeforeChange(nextSlide)
        }
      >
        <TestimonialCard
          isActive={activeIndex === 0}
          imageSrc="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          name="Aram Saffarian"
          title="President of Treaty Health"
          testimonial="Xeven Solutions has improved the client's existing app. Xeven Solutions utilizes their expertise to deliver comprehensive, user-friendly solutions. Their team manages projects well and has excellent documentation processes and communication."
        />
        <TestimonialCard
          isActive={activeIndex === 1}
          imageSrc="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          name="Dr Tazeen R."
          title="Telemedicine Suite Development"
          testimonial="Mohammad I. and his team developed a robust and comprehensive Telemedicine platform based on our requirements. His team is very skilled, professional and competent."
        />
        <TestimonialCard
          isActive={activeIndex === 2}
          imageSrc="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          name="Kate Callahan"
          title="President of Memore"
          testimonial="The collaboration has been amazing. Flexible and accommodating of scope changes, the team is quick to accommodate requests and answer questions. They continue to deliver high-quality work at a competitive price."
        />
      </Carousel>
    </div>
  );
};

export default GulshanTestimonialCarousel;
