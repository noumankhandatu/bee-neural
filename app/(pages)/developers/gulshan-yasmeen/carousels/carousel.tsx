"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";

const PortfolioCarousel = ({ carouselItems }: any) => {
  return (
    <div>
      <Carousel
        autoPlaySpeed={3000}
        centerMode={false}
        draggable
        infinite
        pauseOnHover
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
          },
        }}
        shouldResetAutoplay
        slidesToSlide={1}
        swipeable
      >
        {carouselItems.map((item: any, index: any) => (
          <div
            key={index}
            style={{ justifyItems: "center" }}
            className="grid grid-cols-1 md:grid-cols-2 justify-center align-middle items-center"
          >
            <Image
              src={item.src}
              style={{ height: "300px", width: "300px" }}
              height={300}
              width={300}
              alt={item.title}
            />
            <div className="w-full">
              <h1 className="font-bold text-3xl text-center md:text-left mt-10 md:mt-0">
                {item.title}
              </h1>
              <section style={{ height: 30 }} />
              <p className="md:w-[400px] w-full text-center md:text-left text-[13px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PortfolioCarousel;
