"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";

const GulshamYasmeenCarousel = () => {
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
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        shouldResetAutoplay
        slidesToSlide={1}
        swipeable
      >
        <div
          style={{ justifyItems: "center" }}
          className="grid grid-cols-1 md:grid-cols-2 justify-center  align-middle items-center "
        >
          <Image
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            style={{
              height: "300px",
              width: "300px",
            }}
            height={1000}
            width={1000}
            alt="image"
          />
          <div className="w-full">
            <h1 className="font-bold text-3xl">Legal Contractor</h1>
            <p className="w-[400px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              quae, autem repudiandae consequuntur quis alias. Voluptates est
              nobis Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nostrum quae, autem repudiandae consequuntur quis alias.
              Voluptates est nobis Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nostrum quae, autem repudiandae consequuntur
              quis alias. Voluptates est nobis
            </p>
          </div>
        </div>
        <div
          style={{ justifyItems: "center" }}
          className="grid grid-cols-1 md:grid-cols-2 justify-center  align-middle items-center "
        >
          <Image
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            style={{
              height: "300px",
              width: "300px",
            }}
            height={1000}
            width={1000}
            alt="image"
          />
          <div className="w-full">
            <h1 className="font-bold text-3xl">Legal Contractor</h1>
            <p className="w-[400px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              quae, autem repudiandae consequuntur quis alias. Voluptates est
              nobis Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nostrum quae, autem repudiandae consequuntur quis alias.
              Voluptates est nobis Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nostrum quae, autem repudiandae consequuntur
              quis alias. Voluptates est nobis
            </p>
          </div>
        </div>
        <div
          style={{ justifyItems: "center" }}
          className="grid grid-cols-1 md:grid-cols-2 justify-center  align-middle items-center "
        >
          <Image
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            style={{
              height: "300px",
              width: "300px",
            }}
            height={1000}
            width={1000}
            alt="image"
          />
          <div className="w-full">
            <h1 className="font-bold text-3xl">Legal Contractor</h1>
            <p className="w-[400px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              quae, autem repudiandae consequuntur quis alias. Voluptates est
              nobis Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nostrum quae, autem repudiandae consequuntur quis alias.
              Voluptates est nobis Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nostrum quae, autem repudiandae consequuntur
              quis alias. Voluptates est nobis
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default GulshamYasmeenCarousel;
