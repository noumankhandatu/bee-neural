import Image from "next/image";
import React from "react";
import GulshanYasmeenTestimonailCarousel from "../gulshan-yasmeen/carousels/testimonail-carousel";
import { HakeemJourney, ShoaibJourney } from "@/lib/journey-data";
import PortfolioCarousel from "../gulshan-yasmeen/carousels/carousel";
import { HakimPortfolioData } from "@/lib/portfolio-data";
import PortfolioNavbar from "@/app/components/atoms/PortfolioNavbar";

const HakimPortfolio = () => {
  return (
    <div>
      <PortfolioNavbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-20 p-10">
        <div>
          <h1 className="text-4xl font-bold">Who is Hakeem Yar Baig ? </h1>
          <p className="text-[14px] mt-10 text-beta leading-loose">
            Hakeem Yar Baig’s journey is a story of hard work and persistence.
            Hailing from Gilgit, Pakistan, he has established himself in the
            tech industry, rising from modest beginnings. He is a proficient
            ML/AI and DevOps Engineer who has contributed to several significant
            projects.
          </p>
          <p className="text-[14px] mt-2 text-beta leading-loose">
            Hakeem studied Computer Science at Karakoram International
            University and later completed a 6-month certification in Data
            Science and AI from NUST Pakistan. He also earned certifications in
            Google Advanced Data Analytics and MLOps from Coursera, which helped
            him grow in his career.
          </p>
          <p className="text-[14px] mt-2 text-beta leading-loose">
            At Cloudlem Pvt Ltd, Hakeem contributed to various projects,
            including developing chatbots, deploying applications using
            Kubernetes, and setting up cloud infrastructure with Terraform. His
            skills cover data science, deep learning, web development, and cloud
            computing.
          </p>
          <p className="text-[14px] mt-2 text-beta leading-loose">
            Hakeem is also a co-founder of a startup called BeeNeural Pvt Ltd,
            which focuses on AI solutions. He has worked on personal projects
            like license plate detection and automating processes with GitHub
            Actions, showing his love for technology. Hakeem’s story is about
            learning, solving problems, and never giving up. His journey shows
            that with hard work and a passion for what you do, you can achieve
            great things.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            height={400}
            priority
            width={400}
            className="md:w-[400px] md:h-[400px]  w-full h-full border-red border-2 rounded-sm shadow-2xl ceoImage"
            src={"/assets/team/hakin.jpg"}
            alt="ceo"
          />
        </div>
      </div>
      <section style={{ height: 100 }} />

      {/* section 3 */}
      <section style={{ height: 100 }} />

      <div>
        <h2 className="text-3xl font-bold text-center">
          Hakeem&apos;s Portfolio
        </h2>
        <p className="text-[14px] mt-10 text-beta leading-loose text-center ml-10 mr-10">
          Highlighting my skills and accomplishments through tangible work
          examples and experiences.
        </p>

        <div className="md:p-20 p-10">
          <PortfolioCarousel carouselItems={HakimPortfolioData} />
          <section style={{ height: 200 }} />
          <h2 className="text-3xl font-bold text-center">Journey and Impact</h2>

          <p className="text-[14px] mt-10 text-beta leading-loose text-center ml-10 mr-10">
            Discover my noteworthy engagements, meaningful contributions, and
            impactful initiatives that shaped my journey.
          </p>
          <section style={{ height: 250 }} />

          <GulshanYasmeenTestimonailCarousel cards={HakeemJourney} />
          <section style={{ height: 200 }} />
        </div>
      </div>
    </div>
  );
};

export default HakimPortfolio;
