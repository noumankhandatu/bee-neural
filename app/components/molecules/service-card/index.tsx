"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { CardBody, CardContainer } from "../3d-card/3d-card";

interface ThreeCardTypes {
  title: string;
  description?: string;
  image: string;
  className?: string;
}

export function ServiceCard({
  title,
  image,
  className,
  description,
}: ThreeCardTypes) {
  const theme = localStorage.getItem("theme");
  const slugify = (text: string) => {
    return text.trim().toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <CardContainer className={className}>
      <CardBody
        className={`${
          theme === "dark"
            ? "bg-gray-800 border-white"
            : "bg-secondary border-black/[0.1]"
        } h-[400px] text-center relative group/card w-auto rounded-xl p-6 border transition-all duration-300 ease-in-out hover:shadow-2xl ${
          theme === "dark"
            ? "hover:shadow-orange-500/50"
            : "hover:shadow-orange-500/50"
        }`}
      >
        <h1
          className={`font-bold ${
            theme === "dark" ? "text-white" : "text-neutral-600"
          } mb-2`}
        >
          {title}
        </h1>
        <Image
          priority
          src={image}
          height={200}
          width={300}
          className="h-[200px] w-[300px] object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
        <p
          className={` text-[15px]   mt-4 ${
            theme === "dark" ? "text-gray-300" : "text-black"
          }`}
        >
          {description}
        </p>
      </CardBody>
    </CardContainer>
  );
}
