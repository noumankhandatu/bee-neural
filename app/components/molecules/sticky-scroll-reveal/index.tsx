"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./sticky-scroll-reveal";

export function StickyScrollRevealDemo({ content }: any) {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
