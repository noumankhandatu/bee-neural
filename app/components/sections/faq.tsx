"use client";

import { primary } from "@/utils/colors";
import React, { useState } from "react";

const faqData = [
  {
    question: " How Much Will It Cost?",
    answer: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        To Get A Better Idea Of The Cost Of What You Want To Build, Give Us A
        Quick Phone Call. We’ll Ask You A Few Questions About The Nature Of The
        Site, What Sort Of Interactivity The Site Will Have, Your Graphic Design
        Needs, Etc. Then We’ll Be Able To Give You A Ballpark Figure. If You’re
        Still Interested, We’ll Come To Your Place Of Business And Come Up With
        A Firm Quote.
      </p>
    ),
  },
  {
    question: "How Long It Takes To Design?",
    answer: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        The Time Limit Of Any Assignment Is Normally Dictated By The Client. If
        You Have Any Time Limit In Mind We Will Attempt To Assemble It For You.
        The Main General Delay In The Making Of A Website Is Waiting For The
        Content Of The Pages To Be Sent To Us By The Client.
      </p>
    ),
  },
  {
    question: "How Do I Associate With BeeNeural?",
    answer: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        The Process Begins When You Contact Us With Your Requirements. We
        Analyze Your Requirements And Respond To You. On The Basis Of The
        Further Discussion, You Can Choose An Engagement Model That Suits You
        The Best. After That, We Begin The Process Of Development.
      </p>
    ),
  },
  {
    question: "Can You Help My Current Project Look More Professional?",
    answer: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Yes. Give Us Your Requirements And We Have Experienced Expertise To Help
        You Give A New Professional Look That Really Wonders!
      </p>
    ),
  },
  {
    question: "When Do I Pay?",
    answer: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        For Most Projects, Equal Payments Are Made At The Start, Midway, And The
        End Of The Project, But We Can Work With You To Set Up A Schedule That
        Meets Your Needs. We Understand That This Is A Big Investment And Want
        To Help You Budget For The Expense In Whatever Way Possible. We Accept
        Checks, PayPal, And All Major Credit Cards.
      </p>
    ),
  },
];

const FaqItem = ({ question, answer, isOpen, onToggle }: any) => (
  <div>
    <h2>
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={question}
      >
        <span>{question}</span>
        <svg
          data-accordion-icon
          className={`w-3 h-3 transform ${isOpen ? "rotate-180" : ""} shrink-0`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      style={{ color: primary }}
      className={`${
        isOpen ? "block" : "hidden"
      } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
      aria-labelledby={question}
    >
      {answer}
    </div>
  </div>
);

const FaqDemo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <p
        className="text-4xl text-center font-bold mt-20"
        style={{ color: primary }}
      >
        FAQ
      </p>
      <p className="text-[16px] text-center mt-4 mb-12">
        Frequently Asked Questions
      </p>
      <div className="flex justify-center">
        <div
          id="accordion-collapse"
          className="w-[80%]"
          data-accordion="collapse"
        >
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqDemo;
