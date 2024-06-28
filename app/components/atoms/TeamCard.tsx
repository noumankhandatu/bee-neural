"use client";
import Image from "next/image";
import React from "react";
import { FaGlobe, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const TeamCard = ({ name, position, image }: any) => {
  return (
    <div className="transition-transform hover:translate-y-[-10px] ease-in-out duration-700">
      <div className="relative bg-white shadow-lg rounded-lg w-[80%] max-w-xs mx-auto h-[400px] overflow-hidden ">
        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-[#098797] rounded-full"></div>
        <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-[#CCCCCC] rounded-full"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
        </div>
        <div className="p-4 text-center relative">
          <div className="relative w-44 h-44 rounded-full overflow-hidden mx-auto mt-12 border-4 border-white shadow-xl ease-in-out">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">{name}</h3>
          <p className="text-teal-600">{position}</p>
          <div className="z-10 mt-8 flex justify-around text-gray-600">
            <FaGlobe
              size={20}
              className="hover:text-black cursor-pointer text-black transition-colors ease-in-out"
            />
            <FaGithub
              size={20}
              className="hover:text-black cursor-pointer text-black transition-colors ease-in-out"
            />
            <FaTwitter
              size={20}
              className="hover:text-black cursor-pointer text-black transition-colors ease-in-out"
            />
            <FaLinkedin
              size={20}
              className="hover:text-black cursor-pointer text-black transition-colors ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="relative bg-[#535353] shadow-lg w-[80%] max-w-xs mx-auto h-[45px] overflow-hidden mt-3">
        <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-[#454545] rounded-full"></div>

        <div className="p-2 text-center relative">
          <div className="z-10 rotate-180 flex justify-around text-gray-600">
            <FaGlobe
              size={20}
              className="hover:text-black cursor-pointer text-[#262626] transition-colors ease-in-out"
            />
            <FaGithub
              size={20}
              className="hover:text-black cursor-pointer text-[#262626] transition-colors ease-in-out"
            />
            <FaTwitter
              size={20}
              className="hover:text-black cursor-pointer text-[#262626] transition-colors ease-in-out"
            />
            <FaLinkedin
              size={20}
              className="hover:text-black cursor-pointer text-[#262626] transition-colors ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
