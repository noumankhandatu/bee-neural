"use client";

import React from "react";
import { BackgroundBeams } from "../../components/molecules/background-beam";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen w-full text-center rounded-md bg-secondary relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-[#dd5f00] to-[#dd5f00]  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to BeeNeural, the best ai service on the web. We provide
          reliable, scalable, and customizable ai solutions for your business.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border p-3 border-[#dd5f00] focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-[#eeefef] placeholder:text-neutral-700"
        />
        <Link href={"/"}>
          <button className="p-[3px] relative mt-6 z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Submit
            </div>
          </button>
        </Link>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
