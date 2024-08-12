import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import Image from "next/image";
import React from "react";
import GulshamYasmeenCarousel from "../gulshan-yasmeen/carousels/carousel";
import GulshanYasmeenTestimonailCarousel from "../gulshan-yasmeen/carousels/testimonail-carousel";

const AmmarPortfolio = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20">
        <div>
          <h1 className="text-3xl font-bold">Who is Hakim ?</h1>
          <p className="text-[14px] mt-10 text-beta leading-loose">
            They say that success is a journey, not a destination, and Irfan
            Malik’s story is a testament to that. Born into a humble background,
            Malik was discouraged from pursuing his dreams of becoming a tech
            leader. He turned adversity into an advantage and proved that
            determination, resilience, and a hunger for success can overcome any
            obstacle. Irfan Malik is a Data Scientist, Entrepreneur, and a tech
            consultant. Despite starting out as an office boy, he fulfilled his
            vision of starting his own company and became the founder and CEO of
            Xeven Solutions. Today the company has offices in several countries
            including the UK, USA, UAE, and Pakistan. Irfan Malik not only
            succeeded in the tech industry but also gave back to the community.
            His free courses platform, Xeven Skills, empowers people and
            promotes access to education.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            height={1000}
            width={1000}
            className="w-[400px] h-[500px] border-red border-2 rounded-sm shadow-2xl ceoImage"
            src={"/assets/team/frontimage2.jpg"}
            alt="ceo"
          />
        </div>
      </div>
      <section style={{ height: 100 }} />
      {/* section two */}
      <div>
        <h2 className="text-3xl font-bold text-center">Journey and Impact</h2>
        <p className="text-[14px] mt-10 text-beta leading-loose text-center">
          Discover my noteworthy engagements, meaningful contributions, and
          impactful initiatives that shaped my journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4  justify-center items-center text-center p-20">
          {/* image 1 */}
          <div className="relative w-[200px] h-[300px]">
            <Image
              height={1000}
              width={1000}
              className="w-full h-full"
              src={"/assets/team/frontimage2.jpg"}
              alt="ceo"
            />

            <div className="absolute inset-0 flex justify-start items-end mb-4 ml-4 text-black transition-opacity duration-300 hover:opacity-0">
              <div className="text-center">
                <p className="font-bold">Interview</p>
              </div>
            </div>

            <div className="absolute inset-0 flex justify-center items-center bg-blue-700 bg-opacity-0 text-white opacity-0 transition-opacity duration-300 hover:bg-opacity-70 hover:opacity-100">
              <div className="text-center">
                <p className="font-bold">Interview</p>
                <p className="text-[8px]">Insights and wisdom from industry</p>
              </div>
            </div>
          </div>
          {/* image 2 */}
          <div className="relative w-[200px] h-[300px]">
            <Image
              height={1000}
              width={1000}
              className="w-full h-full"
              src={"/assets/team/frontimage2.jpg"}
              alt="ceo"
            />

            <div className="absolute inset-0 flex justify-start items-end mb-4 ml-4 text-black transition-opacity duration-300 hover:opacity-0">
              <div className="text-center">
                <p className="font-bold">Interview</p>
              </div>
            </div>

            <div className="absolute inset-0 flex justify-center items-center bg-blue-700 bg-opacity-0 text-white opacity-0 transition-opacity duration-300 hover:bg-opacity-70 hover:opacity-100">
              <div className="text-center">
                <p className="font-bold">Interview</p>
                <p className="text-[8px]">Insights and wisdom from industry</p>
              </div>
            </div>
          </div>
          {/* image 3 */}
          <div className="relative w-[200px] h-[300px]">
            <Image
              height={1000}
              width={1000}
              className="w-full h-full"
              src={"/assets/team/frontimage2.jpg"}
              alt="ceo"
            />

            <div className="absolute inset-0 flex justify-start items-end mb-4 ml-4 text-black transition-opacity duration-300 hover:opacity-0">
              <div className="text-center">
                <p className="font-bold">Interview</p>
              </div>
            </div>

            <div className="absolute inset-0 flex justify-center items-center bg-blue-700 bg-opacity-0 text-white opacity-0 transition-opacity duration-300 hover:bg-opacity-70 hover:opacity-100">
              <div className="text-center">
                <p className="font-bold">Interview</p>
                <p className="text-[8px]">Insights and wisdom from industry</p>
              </div>
            </div>
          </div>
          {/* image 4 */}
          <div className="relative w-[200px] h-[300px]">
            <Image
              height={1000}
              width={1000}
              className="w-full h-full"
              src={"/assets/team/frontimage2.jpg"}
              alt="ceo"
            />

            <div className="absolute inset-0 flex justify-start items-end mb-4 ml-4 text-black transition-opacity duration-300 hover:opacity-0">
              <div className="text-center">
                <p className="font-bold">Interview</p>
              </div>
            </div>

            <div className="absolute inset-0 flex justify-center items-center bg-blue-700 bg-opacity-0 text-white opacity-0 transition-opacity duration-300 hover:bg-opacity-70 hover:opacity-100">
              <div className="text-center">
                <p className="font-bold">Interview</p>
                <p className="text-[8px]">Insights and wisdom from industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <section style={{ height: 100 }} />

      <div>
        <h2 className="text-3xl font-bold text-center">
          Irfan&apos;s Tech Portfolio
        </h2>
        <p className="text-[14px] mt-10 text-beta leading-loose text-center">
          Highlighting my skills and accomplishments through tangible work
          examples and experiences.
        </p>

        <div className="p-20">
          <GulshamYasmeenCarousel />
          <section style={{ height: 100 }} />
          <h2 className="text-3xl font-bold text-center">
            Client Testimonials
          </h2>
          <p className="text-[14px] mt-10 text-beta leading-loose text-center">
            Feedback on the Professional Services and Results
          </p>
          {/* <GulshanYasmeenTestimonailCarousel /> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AmmarPortfolio;
