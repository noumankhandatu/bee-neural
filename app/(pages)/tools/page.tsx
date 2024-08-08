import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import Link from "next/link";
import React from "react";

const ToolsPage = () => {
  return (
    <Wrapper>
      <div className="flex bg-secondary flex-col items-center justify-center h-screen">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Coming - Soon</h2>
        <p className="text-lg text-gray-600 mb-3">
          The page youre looking is still under construction 🚧
        </p>
        <p className="text-[13px] text-gray-600 mb-8">
          But not to worry about because BeeNeural is always working . 🙌
        </p>
        <Link href="/">
          <p className="text-blue-500 hover:underline">Return Home</p>
        </Link>
      </div>
    </Wrapper>
  );
};

export default ToolsPage;
