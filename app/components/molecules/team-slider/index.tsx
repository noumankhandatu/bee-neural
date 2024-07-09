"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AnimatedPinDemo } from "../pin-card";
import { RiTeamFill } from "react-icons/ri";

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

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function TeamSlider() {
  return (
    <div>
      <div id="team" className="w-full">
        <div
          style={{ color: "#EF7709" }}
          className="md:text-7xl text-center text-xl font-bold text-black flex justify-center"
        >
          Our Team
          <span>
            <RiTeamFill className="ml-10" color="#FFC83D" />
          </span>
        </div>
        <p className="text-[16px] text-center mt-4 mb-12">
          A dynamic team of innovators dedicated to excellence and
          groundbreaking solutions.
        </p>
        <Carousel className="h-[363px]" responsive={responsive}>
          {cards.map((member: any, id: number) => {
            return (
              <div key={id}>
                <AnimatedPinDemo
                  name={member.name}
                  position={member.position}
                  image={member.image}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default TeamSlider;
