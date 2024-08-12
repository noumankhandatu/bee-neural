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
    link: "/developers/gulshan-yasmeen",
  },
  {
    name: "Engr Shoaib Uddin",
    position: "Co-Founder Data Scientist And NLP Specialist",
    image: "/assets/team/team2.webp",
    link: "/developers/shoaib",
  },
  {
    name: "Hakeem Yar Baig",
    position: "Co-Founder DevOps And ML Engineer",
    image: "/assets/team/hakim.jpeg",
    link: "/developers/hakim",
  },
  {
    name: "Ammar Ali",
    position: "Co-Founder Data Scientist Computer Vision Expert",
    image: "/assets/team/ammer.webp",
    link: "/developers/ammar ",
  },
  {
    name: "Ania Shams",
    position: "Machine Learning Engineer And Bussiness Developer",
    image: "/assets/team/shams.jpeg",
    link: "/developers/nouman",
  },
  {
    name: "Nouman Datusing",
    position: "Developer",
    image: "/assets/team/me.png",
    link: "/developers/nouman",
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
    <div className="w-full">
      <p
        id="faq"
        className="text-4xl text-center font-bold mt-20 flex justify-center items-center text-primary"
      >
        Our Team
        <RiTeamFill className="ml-4" />
      </p>

      <p className="text-[16px] text-center mt-4 mb-12">
        A dynamic team of innovators dedicated to excellence and groundbreaking
        solutions.
      </p>
      <Carousel className="h-[363px]" responsive={responsive}>
        {cards.map((member: any, id: number) => {
          return (
            <div key={id}>
              <AnimatedPinDemo
                name={member.name}
                position={member.position}
                image={member.image}
                link={member.link}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default TeamSlider;
