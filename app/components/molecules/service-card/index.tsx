"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card/3d-card";
import Link from "next/link";

interface ThreeCardTypes {
  title: string;
  description?: string;
  image: string;
  className?: string;
}

export function ServiceCard({ title, image, className }: ThreeCardTypes) {
  return (
    <Link href="/tools" className="cursor-pointer">
      <CardContainer className={className}>
        <CardBody
          className={`bg-secondary relative group/card border-black/[0.1] w-auto h-auto rounded-xl p-6 border transition-all duration-300 ease-in-out  hover:shadow-2xl hover:shadow-orange-500/50`}
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              priority
              src={image}
              height="1000"
              width="1000"
              className="h-[200px] w-[300px] object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  );
}
