"use client";

import { primary } from "@/utils/colors";
import useTheme from "@/utils/useTheme";
import React, { useState } from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";

const faqData = [
  {
    question: "How Much Will It Cost?",
    answer: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        To get a better idea of the cost for your BeeNeural project, give us a
        quick call. We’ll ask a few questions about the nature of your site, the
        level of interactivity, your graphic design needs, etc. Then, we’ll
        provide you with a ballpark figure. If you&apos;re still interested,
        we&apos;ll visit your place of business and provide a firm quote.
      </p>
    ),
  },
  {
    question: "How Long Does It Take To Design?",
    answer: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        The timeframe for any BeeNeural assignment is normally dictated by the
        client. If you have a specific deadline in mind, we will attempt to meet
        it for you. The main general delay in creating a website is often
        waiting for the content of the pages to be provided by the client.
      </p>
    ),
  },
  {
    question: "How Do I Associate With BeeNeural?",
    answer: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        The process begins when you contact BeeNeural with your requirements. We
        analyze your needs and respond accordingly. Based on further discussion,
        you can choose an engagement model that suits you best. After that, we
        begin the development process.
      </p>
    ),
  },
  {
    question: "Can BeeNeural Help My Current Project Look More Professional?",
    answer: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Yes. Provide us with your requirements, and BeeNeural’s experienced team
        will help give your project a new, professional look that truly stands
        out.
      </p>
    ),
  },
  {
    question: "When Do I Pay for BeeNeural Services?",
    answer: (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        For most BeeNeural projects, equal payments are made at the start,
        midway, and the end of the project. However, we can work with you to set
        up a payment schedule that meets your needs. We understand this is a
        significant investment and want to help you budget for the expense. We
        accept checks, PayPal, and all major credit cards.
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
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <p
        className={`text-4xl text-center font-bold mt-20 flex justify-center items-center pt-10 pb-10  ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
        id="faq"
        style={{ color: primary }}
      >
        FAQ&apos;S
        <HiQuestionMarkCircle className="ml-4" />
      </p>
      <p
        className={`text-[16px] text-center pt-4 pb-12 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        Frequently Asked Questions
      </p>
      <div
        className={`flex  justify-center pb-24 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
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
