import React from "react";
import { serviceArray, serviceAry } from "@/lib/raw-data";
import { ServiceCard } from "../molecules/service-card";

const ServicesDemo = () => {
  return (
    <div>
      <p className="text-4xl text-center font-bold  flex justify-center items-center text-primary">
        Our Services 📝
      </p>
      <p className=" text-center mt-8 md:text-sm lg:ml-52 lg:mr-52">
        We provide a comprehensive range of AI services designed to help
        businesses achieve their goals. Our offerings at BeeNeural include
        cutting-edge machine learning solutions, natural language processing,{" "}
        <br /> computer vision, and predictive analytics.
      </p>
      <div style={{ height: 100 }} />
      <div className="flex justify-center w-full ">
        <div className="flex flex-wrap justify-center gap-4 w-full p-5 ">
          {serviceAry.map((items: any, id: number) => {
            const isLastItem = id === serviceArray.length - 1;
            return (
              <ServiceCard
                key={id}
                title={items.title}
                description={items.description}
                image={items.image}
                className={isLastItem ? "w-full flex justify-center" : "w-auto"}
              />
            );
          })}
        </div>
      </div>
      <p className=" text-center mt-8 md:text-lg">
        We are dedicated to delivering innovative solutions that drive success
        and transform industries.
      </p>
    </div>
  );
};

export default ServicesDemo;
