"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";

export function AnimatedPinDemo({ name, position, image }: any) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  ">
      <PinContainer
        className=""
        title={name}
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-beta sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-beta">
            {name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{position}</span>
          </div>
          <div className="flex flex-1 items-center justify-center w-full rounded-lg mt-4 bg-gradient-to-br from-primary via-purple-secondary to-alpha">
            <Image
              src={image}
              alt="img"
              height={1000}
              width={1000}
              className="w-[120px] h-[120px]"
              style={{ borderRadius: "100%", border: "3px solid #dd5f00" }}
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
