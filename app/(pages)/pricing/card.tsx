"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-down" className="bg-beta rounded-lg p-10 w-96 cards">
      <h2 className="text-lg text-white font-semibold mb-2">{title}</h2>
      <p className="text-4xl text-white font-bold mb-4">{price}</p>
      <p className="text-sm text-white mb-8">{period}</p>
      <p className="text-sm text-white mb-8">{description}</p>
      <hr />
      <ul className="text-sm text-white mb-8 space-y-2 mt-3">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link href={"/connect"}>
        <button className="bg-white text-black rounded-lg py-2 px-4 text-[14px] font-bold w-full hover:bg-primary hover:text-white transition duration-300 ease-in-out ">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default PricingCard;
