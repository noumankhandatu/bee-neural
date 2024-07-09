"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

const RocketFired: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      if (offset >= 1000) iconRef.current.style.display = "block";
      else iconRef.current.style.display = "none";
    }
  }, [offset]);

  return (
    <div className="fixed right-8 bottom-8">
      <a href="#top">
        <div
          ref={iconRef}
          className="hidden rounded-full border-2 border-white shadow-lg bg-primary text-white p-2"
        >
          <IoMdArrowRoundUp className="w-4 h-4" />
        </div>
      </a>
    </div>
  );
};

export default RocketFired;
