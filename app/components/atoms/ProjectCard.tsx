"use client";

import React, { useState } from "react";

interface Props {
  title: string;
  description: string;
  icon: any; // Update this line
}

const ProjectCard = ({ title, description, icon }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const truncateDescription = (desc: string) => {
    if (desc.length <= 100) return desc;
    return isExpanded ? desc : `${desc.slice(0, 100)}...`;
  };

  return (
    <div>
      <div
        className={`${
          isExpanded ? "h-full" : "h-[300px]"
        } block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
      >
        <span style={{ fontSize: 30, textAlign: "center" }}>{icon}</span>
        <span className="mb-2 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </span>
        <p className="font-normal text-[15px] leading-relaxed text-gray-700 dark:text-gray-400 mt-8 ">
          {truncateDescription(description)}
        </p>
        {description.length > 100 && (
          <button
            onClick={toggleExpand}
            className="mt-2 text-blue-500 hover:underline focus:outline-none"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
