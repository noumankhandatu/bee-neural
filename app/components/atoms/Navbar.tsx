"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const navItems = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Team",
  "Career",
  "Contact",
  "FAQ",
  "waitlist",
];

const Navbar: React.FC = () => {
  const colors = useSelector((state: any) => state.theme);
  console.log(colors, "colors");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={`w-full bg-secondary`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Image
            src="/assets/svg/logo.svg"
            alt="logo"
            height={550}
            width={550}
            className="w-[200px] h-[200px]"
          />
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary hover:text-primary rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={
                      item === "waitlist"
                        ? `${item.toLowerCase()}`
                        : `#${item.toLowerCase()}`
                    }
                    className="block capitalize py-2 px-3 lg:text-[18px] text-[16px]   md:text-[10px]    rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0  md:dark:hover:text-primary  text-beta  "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
