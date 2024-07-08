"use client";
import React, { useState, useEffect } from "react";
import { AnimatedPinDemo } from "../pin-card";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const cards = [
  {
    name: "Gulshan Yasmeen",
    position: "Founder And AI Lead Researchers",
    image: "/assets/team/team1.webp",
  },
  {
    name: "Engr Shoaib Uddin",
    position: "Co-Founder Data Scientist And NLP Specialist",
    image: "/assets/team/team2.webp",
  },
  {
    name: "Hakeem Yar Baig",
    position: "Co-Founder DevOps And ML Engineer",
    image: "/assets/team/hakim.jpeg",
  },
  {
    name: "Ammar Ali",
    position: "Co-Founder Data Scientist Computer Vision Expert",
    image: "/assets/team/ammer.webp",
  },
  {
    name: "Ania Shams",
    position: "Machine Learning Engineer And Bussiness Developer",
    image: "/assets/team/shams.jpeg",
  },
  {
    name: "Nouman Datusing",
    position: "Developer",
    image: "/assets/team/me.jpg",
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [cards.length]);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 4 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === cards.length - 4 ? 0 : currentIndex + 1);
  };

  return (
    <div id="team" className="w-full">
      <div
        style={{ color: "#EF7709" }}
        className="md:text-7xl text-center text-xl font-bold text-black"
      >
        Our Team 👩‍💻👨‍💻
      </div>
      <p className="text-[16px] text-center mt-4 mb-12">
        A dynamic team of innovators dedicated to excellence and groundbreaking
        solutions.
      </p>

      <div className="flex justify-center w-full">
        <div className="flex w-full flex-wrap justify-center gap-10">
          {cards.map((member: any, id: number) => {
            const isLastItem = id === cards.length - 1;
            return (
              <div key={id} className="flex">
                <AnimatedPinDemo
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  className={
                    isLastItem ? "w-full flex justify-center" : "w-auto"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="grid grid-cols-4   gap-4">
        {cards.map((member, index) => (
          <div key={index} className="flex justify-center">
            <AnimatedPinDemo />
          </div>
        ))}
      </div> */}
      {/* <div className="relative lg:flex hidden justify-center ">
        <FaArrowLeft
          onClick={handlePrev}
          className="absolute left-10 top-64 border-2 border-primary rounded-full h-[30px] w-[30px] p-1 text-primary cursor-pointer"
        />
        <div className="relative w-[90%] mx-auto">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform ease-in-out duration-500 gap-32"
              style={{ transform: `translateX(-${(currentIndex / 4) * 100}%)` }}
            >
              {cards.map((member, index) => (
                <div key={index} className="w-1/6 flex-shrink-0">
                  <AnimatedPinDemo
                    name={member.name}
                    position={member.position}
                    image={member.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <FaArrowRight
          onClick={handleNext}
          className="absolute right-10 top-64 border-2 border-primary rounded-full h-[30px] w-[30px] p-1 text-primary cursor-pointer"
        />
      </div> */}
    </div>
  );
};

export default TeamCarousel;

// export const TeamCarouselMobile = () => {
//   return (
//     <div className="flex lg:hidden justify-center lg:p-10  overflow-scroll gap-12">
//       <div className="relative w-[90%] mx-auto">
//         <div className=" relative">
//           <div className="flex gap-[100px] overflow-x-scroll lg:flex-wrap">
//             {cards.map((member, index) => (
//               <div key={index} className="w-full lg:w-1/4 flex-shrink-0 ">
//                 <AnimatedPinDemo
//                   name={member.name}
//                   position={member.position}
//                   image={member.image}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
