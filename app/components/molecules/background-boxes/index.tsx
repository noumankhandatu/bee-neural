"use client";
import React from "react";
import { Boxes } from "./background-boxes";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <p className={cn("md:text-7xl text-xl text-white relative z-20")}>
        COMING SOON
      </p>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        BeeNeural is always on working stay tunned
      </p>
      <Link href={"/"}>
        <div className="w-[200px] mt-5">
          <button
            className="bg-gradient-to-br relative group/btn from-primary  to-primary block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Go Back →
          </button>
        </div>
      </Link>
    </div>
  );
}
