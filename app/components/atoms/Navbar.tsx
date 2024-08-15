"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navItems = [
  "Home",
  // "About",
  "Services",
  "Tools",
  "Portfolio",
  "Team",
  "Career",
  "Pricing",
  "Contact",
  "FAQ",
  // "waitlist",
];

const Navbar: React.FC = () => {
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
          <Link href={"/"}>
            <Image
              priority
              src="/logo.png"
              alt="logo"
              height={200}
              width={200}
              className="w-[180px] h-full]"
            />
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary hover:text-primary rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
            <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
              <>
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
                      className="block capitalize py-2 px-3 text-[15px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0  md:dark:hover:text-primary  text-beta  "
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <Link href={"/connect"}>
                  <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
                    Connect
                  </button>
                </Link>
              </>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
