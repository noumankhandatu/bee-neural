"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GulshanYasmeenTestimonailCarousel from "./carousels/testimonail-carousel";
import { GulshanJourney } from "@/lib/journey-data";
import Modal from "./modal/caro-model";
import MultiImageCarousel from "./modal/journey-model-carousel";
import PortfolioCarousel from "./carousels/carousel";
import { GulshanPortfolioData } from "@/lib/portfolio-data";
import PortfolioNavbar from "@/app/components/atoms/PortfolioNavbar";
import AOS from "aos";

const journeyImages = [
  {
    src: "/assets/team/journey/gulshan/g1.jpg",
    title: "Workshop ",
    description:
      "One Day Workshop on Artificial Intelligence and Data Science, at Karakorum International University Gilgit.",
  },
  {
    src: "/assets/team/journey/gulshan/c2/c22.jpeg",
    title: "Serving ",
    description:
      "Serving as the Vice-President of GBAI Association. It is the first AI association in Gilgit Baltistan that is working in field of AI and Data Sciences, to bring more opportunities into Gilgit, related to these cutting Edge Technologies. ",
  },
  {
    src: "/assets/team/journey/gulshan/g5.jpeg",
    title: "Tech ",
    description:
      "Tech Empowerment Camp for youth of Gilgit, arranged by Aga Khan Economic Planning Board. I delivered session on Artificial Intelligence and Ethical Consideration in AI.",
  },
  {
    src: "/assets/team/journey/gulshan/c3/c33.JPG",
    title: "Training",
    description:
      "Conducted 2 months training program to the Faculty of Karakoram International University, in the field of Data Science. This training Program was conducted in collaboration with Institute of Professional Development center, KIU.",
  },
];

const carouselOnearray = [
  {
    src: "/assets/team/journey/gulshan/c1/c11.jpeg",
  },
  {
    src: "/assets/team/journey/gulshan/c1/c12.jpg",
  },
  {
    src: "/assets/team/journey/gulshan/c1/c13.jpg",
  },
  {
    src: "/assets/team/journey/gulshan/c1/c14.jpg",
  },
  {
    src: "/assets/team/journey/gulshan/c1/c15.jpg",
  },
];
const carouselTwoarray = [
  {
    src: "/assets/team/journey/gulshan/c2/c21.jpeg",
  },
  {
    src: "/assets/team/journey/gulshan/c2/c22.jpeg",
  },
  {
    src: "/assets/team/journey/gulshan/c2/c23.jpeg",
  },
];
const carouselThreearray = [
  {
    src: "/assets/team/journey/gulshan/c2/c24.jpeg",
  },
  {
    src: "/assets/team/journey/gulshan/c2/c25.jpeg",
  },
];
const carouselFourarray = [
  {
    src: "/assets/team/journey/gulshan/c3/c31.jpeg",
  },
  {
    src: "/assets/team/journey/gulshan/c3/c32.jpeg",
  },
  {
    src: "/assets/team/journey/gulshan/c3/c33.JPG",
  },
  {
    src: "/assets/team/journey/gulshan/c3/c34.jpeg",
  },
];

const GulshanYasmeenPortfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [selectedCarousel, setSelectedCarousel] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCarouselModal = (carouselArray: any) => {
    setSelectedCarousel(carouselArray);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <PortfolioNavbar />
      {/* Section 1: About */}
      <div
        data-aos="fade-down"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-20 p-10"
      >
        <div>
          <h1 className="text-4xl font-bold">About Gulshan Yasmeen</h1>
          <p className="text-[14px] mt-10 text-beta leading-loose">
            Gulshan Yasmeen is a Software Engineer who graduated from NUST
            Islamabad, one of Pakistan&lsquo;s top engineering universities,
            recognized globally in the QS World University Rankings. After
            gaining experience at a multinational company, her entrepreneurial
            spirit led her to pursue her own business ventures. Initially, she
            explored e-commerce, but her growing passion for the transformative
            power of data inspired her to establish BeeNeural Private Ltd in
            Gilgit—the region&lsquo;s first AI-based startup.
          </p>
          <p className="text-[14px] mt-2 text-beta leading-loose">
            Gulshan is not only a successful entrepreneur but also a dedicated
            community leader. She actively trains and mentors youth in modern
            technologies, empowering the next generation. Throughout her life,
            she has remained deeply involved in co-curricular activities,
            embodying a balanced approach to personal and professional
            development.
          </p>
          <p className="text-[14px] mt-2 text-beta leading-loose">
            She believes that with passion, faith in God, and self-belief,
            nothing is impossible to achieve.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            priority
            height={1000}
            width={1000}
            className="md:w-[400px] md:h-[500px] w-full h-full border-red border-2 rounded-sm shadow-2xl ceoImage"
            src={"/assets/team/frontimage2.jpg"}
            alt="ceo"
          />
        </div>
      </div>

      {/* Section 2: Journey and Impact */}
      <section style={{ height: 100 }} />
      <div data-aos="fade-down">
        <h2 className="text-3xl font-bold text-center">Journey and Impact</h2>
        <p className="text-[14px] mt-10 text-beta leading-loose text-center mx-10">
          Discover my noteworthy engagements, meaningful contributions, and
          impactful initiatives that shaped my journey.
        </p>
        <div
          style={{ justifyItems: "center" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-2 justify-center  text-center md:p-20 p-10 items-center"
        >
          {journeyImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-full md:w-[230px] md:h-[300px]"
              onClick={() => {
                if (index === 0) openCarouselModal(carouselOnearray);
                if (index === 1) openCarouselModal(carouselTwoarray);
                if (index === 2) openCarouselModal(carouselThreearray);
                if (index === 3) openCarouselModal(carouselFourarray);
              }}
            >
              <Image
                height={1000}
                priority
                width={1000}
                className="w-full h-full"
                src={image.src}
                alt={image.title}
              />
              {/* Image title and description overlays */}
              <div className="absolute inset-0 flex justify-start items-end mb-4 ml-4 text-black transition-opacity duration-300 hover:opacity-0">
                <div className="text-center">
                  <p className="font-bold text-white">{image.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex justify-center items-center bg-beta bg-opacity-0 text-white opacity-0 transition-opacity duration-300 hover:bg-opacity-70 hover:opacity-100">
                <div className="text-center">
                  <p className="font-bold">{image.title}</p>
                  <p className="text-[8px]">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <MultiImageCarousel images={selectedCarousel} />
        </Modal>
      )}
      {/* Section 3: Portfolio and Testimonials */}
      <section style={{ height: 100 }} />
      <div data-aos="fade-down">
        <h2 className="text-3xl font-bold text-center">
          Gulshan&apos;s Tech Portfolio
        </h2>
        <p className="text-[14px] mt-10 text-beta leading-loose text-center mx-10">
          Highlighting my skills and accomplishments through tangible work
          examples and experiences.
        </p>
        <div className="md:p-20 p-10">
          <PortfolioCarousel carouselItems={GulshanPortfolioData} />
          <section style={{ height: 200 }} />
          <h2 className="text-3xl font-bold text-center">
            Client Testimonials
          </h2>
          <p className="text-[14px] mt-10 text-beta leading-loose text-center">
            Feedback on the Professional Services and Results
          </p>
          <section style={{ height: 250 }} />
          <GulshanYasmeenTestimonailCarousel cards={GulshanJourney} />
          <section style={{ height: 200 }} />
        </div>
      </div>
    </div>
  );
};

export default GulshanYasmeenPortfolio;
