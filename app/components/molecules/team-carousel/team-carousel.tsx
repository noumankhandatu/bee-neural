"use client";
import React, { useState, useEffect } from "react";
import TeamCard from "../../atoms/TeamCard";

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  ];

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
    <div>
      <div className="flex justify-center bg-[#222222] p-10">
        <div className="relative w-[90%] mx-auto">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform ease-in-out duration-500 gap-4"
              style={{ transform: `translateX(-${(currentIndex / 4) * 100}%)` }}
            >
              {cards.map((member, index) => (
                <div key={index} className="w-1/4 flex-shrink-0">
                  <TeamCard
                    name={member.name}
                    position={member.position}
                    image={member.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
