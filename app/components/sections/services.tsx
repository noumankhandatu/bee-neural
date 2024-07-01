import { primary } from "@/utils/colors";
import React from "react";
import { ThreeDCardDemo } from "../molecules/3d-card";
import { serviceArray } from "@/lib/raw-data";

const ServicesDemo = () => {
  return (
    <>
      <div
        id="services"
        style={{ color: "#EF7709" }}
        className=" mb-6 md:text-7xl  text-center text-xl  font-bold text-black dark:text-white"
      >
        Our Services 📝
      </div>
      <p className=" text-center mt-8 md:text-lg">
        At AI Services Hub, We Offer A Range Of AI Services To Help Businesses
        Achieve Their Goals. Our Services <br /> Include Natural Language
        Processing (NLP), Cloud Computing, Computer Vision, Machine Learning,
        And More.
      </p>
      <div style={{ height: 150 }} />
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-[80%]  ">
          {serviceArray.map((items: any, id: number) => {
            return (
              <ThreeDCardDemo
                key={id}
                title={items.title}
                description={items.description}
                image={items.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesDemo;
