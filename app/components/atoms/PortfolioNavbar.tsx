"use client";
import { toggleTheme } from "@/toolkit/themeSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PortfolioNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const theme = localStorage.getItem("theme");
  console.log(theme);
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`relative mb-16 ${
        theme === "dark" ? "bg-[#0D0D0D] text-white" : "bg-white text-black"
      }`}
    >
      <nav
        className={`w-full p-3 fixed top-0 left-0 right-0 z-50 ${
          theme === "dark" ? "bg-[#0D0D0D] " : "bg-[#F2F2F2] shadow-md"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link href={"/"}>
            {theme === "dark" ? (
              <Image
                priority
                src="/dark-logo.jpg"
                alt="logo"
                height={200}
                width={200}
                className="w-[180px] h-full"
              />
            ) : (
              <Image
                priority
                src="/logo.png "
                alt="logo"
                height={200}
                width={200}
                className="w-[180px] h-full"
              />
            )}
          </Link>
          <div className="flex  items-center gap-4">
            <Link href={"/contact"}>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#EE9D1A,45%,#686d77,55%,#EE9D1A)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Connect
              </button>
            </Link>
            <button onClick={handleToggleTheme} className="ml-2">
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PortfolioNavbar;
