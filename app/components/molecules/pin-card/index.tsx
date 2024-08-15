"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";

export function AnimatedPinDemo({ name, position, image, link }: any) {
  return (
    <div className="  flex items-center justify-center ">
      <PinContainer className="" title={name} href={link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-beta sm:basis-1/2 w-full">
          <h3 className="max-w-xs text-center !pb-2 !m-0 font-bold  text-base text-beta">
            {name}
          </h3>
          <div className="text-base text-center !m-0 !p-0 font-normal h-[50px]">
            <span className="text-slate-500 ">{position}</span>
          </div>
          <div className="flex flex-1 items-center justify-center w-full rounded-lg mt-4 bg-gradient-to-br from-primary via-purple-secondary to-secondary">
            <Image
              src={image}
              alt="img"
              width={150}
              priority
              height={150}
              className="h-[150px] w-[150px]"
              style={{ borderRadius: "110px", border: "4px solid white" }}
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
