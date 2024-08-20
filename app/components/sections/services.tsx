import React from "react";
import { useSelector } from "react-redux";
import { serviceArray, serviceAry } from "@/lib/raw-data";
import { ServiceCard } from "../molecules/service-card";

const ServicesDemo = () => {
  const theme = localStorage.getItem("theme");
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <p
        className={`text-4xl text-center font-bold flex justify-center items-center ${
          theme === "dark" ? "text-secondary" : "text-primary"
        }`}
      >
        Our Services 📝
      </p>
      <p
        className={`text-center text-[16px] pt-8  leading-loose lg:ml-52 lg:mr-52 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        We provide a comprehensive range of AI services designed to help
        businesses achieve their goals. Our offerings at BeeNeural include
        cutting-edge machine learning solutions, natural language processing,
        web development with AI integration,
        <br /> computer vision, and predictive analytics.
      </p>
      <div className="h-[100px]" />
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-4 gap-y-32 w-full p-5">
          {serviceAry.map((items: any, id: number) => {
            const isLastItem = id === serviceArray.length - 1;
            return (
              <ServiceCard
                key={id}
                title={items.title}
                description={items.description}
                image={items.image}
                className={`${
                  isLastItem ? "w-full flex justify-center" : "w-auto"
                } ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesDemo;
