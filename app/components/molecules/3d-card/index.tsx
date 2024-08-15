"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer } from "./3d-card";

interface ThreeCardTypes {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export function ThreeDCardDemo({
  title,
  description,
  image,
  className,
}: ThreeCardTypes) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescription = () => {
    if (showFullDescription) {
      return description;
    } else {
      const maxLength = 100; // Maximum characters to show before truncating
      if (description.length > maxLength) {
        return `${description.substring(0, maxLength)}...`;
      } else {
        return description;
      }
    }
  };

  return (
    <CardContainer className={className}>
      <CardBody
        className={`bg-secondary relative group/card border-black/[0.1] w-auto h-auto rounded-xl p-6 border transition-all duration-300 ease-in-out  hover:shadow-2xl hover:shadow-orange-500/50`}
      >
        <p className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </p>
        <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {getDescription()}
          {!showFullDescription && (
            <button
              onClick={toggleDescription}
              className="text-blue-500 hover:underline ml-1"
            >
              Show more
            </button>
          )}
        </p>
        <p className="w-full mt-4">
          <Image
            src={image}
            priority
            height="300"
            width="300"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </p>
      </CardBody>
    </CardContainer>
  );
}
