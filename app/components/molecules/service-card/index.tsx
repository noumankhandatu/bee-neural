"use client";

import Image from "next/image";
import React from "react";
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
  const slugify = (text: string) => {
    return text.trim().toLowerCase().replace(/\s+/g, "-");
  };
  return (
    <CardContainer className={className}>
      <CardBody
        className={`bg-secondary h-[370px] text-center relative group/card border-black/[0.1] w-auto rounded-xl p-6 border transition-all duration-300 ease-in-out  hover:shadow-2xl hover:shadow-orange-500/50`}
      >
        <h1 className=" font-bold text-neutral-600 mb-2 "> {title}</h1>
        <Image
          priority
          src={image}
          height={200}
          width={300}
          className="h-[200px] w-[300px]  object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
        <p className="text-[13px] mt-4">{description}</p>
      </CardBody>
    </CardContainer>
  );
}
