"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import { primary } from "@/utils/colors";
import TeamCarousel from "../team-carousel/team-carousel";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <p
          className="text-4xl text-center font-bold mt-20"
          style={{ color: primary }}
        >
          🤝 Our Team 🎉
        </p>
        <p className="text-[16px] text-center mt-4 mb-12">
          We arent team we are family
        </p>
      </motion.h1>
    </LampContainer>
  );
}
