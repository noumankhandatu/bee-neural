"use client";

import { toggleTheme } from "@/toolkit/themeSlice";
import useTheme from "@/utils/useTheme";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const navItems = [
  "Home",
  "Services",
  "Tools",
  "Portfolio",
  "Team",
  "Career",
  "Pricing",
  "Contact",
  "FAQ",
];

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = React.useState(false)[0];
  const { theme } = useTheme();
  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`relative mb-16 ${
        theme === "dark" ? "bg-[#0D0D0D]" : "bg-secondary"
      }`}
    >
      <nav
        className={`w-full shadow-md p-3 fixed top-0 left-0 right-0 z-50 ${
          theme === "dark"
            ? "bg-[#0D0D0D] text-secondary"
            : "bg-secondary text-black"
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
                src="/logo.png"
                alt="logo"
                height={200}
                width={200}
                className="w-[180px] h-full"
              />
            )}
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 ${
              theme === "dark"
                ? "text-secondary hover:bg-black focus:ring-black"
                : "text-black hover:bg-secondary focus:ring-secondary"
            }`}
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              className={`font-medium items-center flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${
                theme === "dark"
                  ? "border-black text-secondary"
                  : "bg-secondary border-secondary text-black"
              }`}
            >
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "waitlist" ||
                      item === "Tools" ||
                      item === "Career" ||
                      item === "Contact" ||
                      item === "Pricing" ||
                      item === "FAQ"
                        ? `${item.toLowerCase()}`
                        : `/#${item.toLowerCase()}`
                    }
                    className={`block capitalize py-2 px-3 text-[15px] rounded md:p-0 ${
                      theme === "dark"
                        ? "md:hover:text-primary"
                        : "hover:bg-secondary md:hover:text-primary"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <Link href={"/connect"}>
                <button
                  className={`font-semibold py-2 px-4 border rounded ${
                    theme === "dark"
                      ? "bg-transparent text-secondary border-secondary hover:bg-alpha hover:border-alpha"
                      : "bg-transparent text-primary border-primary hover:bg-primary hover:text-secondary"
                  }`}
                >
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
