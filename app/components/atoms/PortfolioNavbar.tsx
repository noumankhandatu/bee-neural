"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PortfolioNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mb-16">
      <nav
        className={`w-full bg-[#F2F2F2] shadow-md p-3   fixed top-0 left-0 right-0 z-50 `}
      >
        <div className="max-w-screen-xl flex  flex-wrap items-center justify-between mx-auto">
          <Link href={"/#contact"}>
            <Image
              priority
              src="/logo.png"
              alt="logo"
              height={1000}
              width={1000}
              className="w-[180px] h-full]"
            />
          </Link>
          <Link href={"/#contact"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#EE9D1A,45%,#686d77,55%,#EE9D1A)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Connect
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default PortfolioNavbar;
