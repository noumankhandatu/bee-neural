import Link from "next/link";
import React from "react";

const ConnectButton = () => {
  return (
    <Link href={"/contact"}>
      <button className="px-8 py-2 border border-beta bg-transparent text-white relative group transition duration-200">
        <div className="absolute -bottom-2 -right-2 bg-primary h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
        <span className="relative">Connect</span>
      </button>
    </Link>
  );
};

export default ConnectButton;
