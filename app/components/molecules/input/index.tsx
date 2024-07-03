"use client";

import React, { useState } from "react";
import { serviceArray } from "@/lib/raw-data";
import { ThreeDCardDemo } from "../3d-card";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import { FaHome } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

const placeholders = [
  "Find Natural Language Processing",
  "Web Development BeeNeural",
  "Machine Learning",
  "Searching ....",
  "Python",
];

function PlaceholdersAndVanishInputDemo() {
  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("title");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const filteredAndSortedArray = serviceArray
    .filter(
      (item) =>
        item.title.toLowerCase().includes(filterText.toLowerCase()) ||
        item.description.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "description") {
        return a.description.localeCompare(b.description);
      }
      return 0;
    });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-full mt-20 mb-10 flex flex-col justify-center items-center px-4">
      <div className="flex justify-between w-full">
        <Link href={"/"}>
          <IoMdArrowBack fontSize={35} color="#ef7709" />
        </Link>
        <p className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-black">
          <span className="text-primary">
            B<span className="text-beta">e</span>e
            <span className="text-beta">Neural Tools ⚙️</span>
          </span>
        </p>
        <div></div>
      </div>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div style={{ height: 150 }} />
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {filteredAndSortedArray.map((items: any, id: number) => {
            const isLastItem = id === filteredAndSortedArray.length - 1;
            return (
              <ThreeDCardDemo
                key={id}
                title={items.title}
                description={items.description}
                image={items.image}
                className={isLastItem ? "w-full flex justify-center" : "w-auto"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PlaceholdersAndVanishInputDemo;
