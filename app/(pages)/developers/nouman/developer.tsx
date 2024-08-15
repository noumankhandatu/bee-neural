/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ConnectButton from "@/app/components/atoms/ConnectButton";
import Link from "next/link";
import AOS from "aos";
import { noumandata } from "@/lib/portfolio-data";
import PortfolioNavbar from "@/app/components/atoms/PortfolioNavbar";

const WebDeveloperPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="min-h-screen mt-20 text-black flex flex-col items-center justify-center bg-gradient">
      <PortfolioNavbar />
      <div className="relative w-full flex justify-center">
        <video
          loop
          autoPlay
          muted
          width={"100%"}
          className="w-full max-w-[50%]"
          preload="auto"
          controls={false}
        >
          <source src="/videos/nouman-video.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <main className="flex flex-col lg:flex-row items-center justify-center w-full px-10">
        <div
          data-aos="fade-right"
          className="text-center lg:text-left lg:w-1/2 lg:ml-20 ml-0"
        >
          <h1 className="font-bold mb-4">HI, I'M NOUMAN</h1>
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-primary">
            I'M A FULL STACK DEVELOPER 👨🏻‍💻
          </h2>
          <p className="mb-6">
            Full stack developer with a passion for crafting innovative
            solutions. My journey in technology has been marked by a diverse
            portfolio of projects that showcase my expertise across various
            domains.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-bold">Frontend Technologies</h3>
            <ul className="list-disc list-inside mt-2">
              {noumandata.frontendTechnologies.map((tech, index) => (
                <li key={index}>
                  {tech.name} {tech.emoji}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold">Backend Technologies</h3>
            <ul className="list-disc list-inside mt-2">
              {noumandata.backendTechnologies.map((tech, index) => (
                <li key={index}>
                  {tech.name} {tech.emoji}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold">Databases</h3>
            <ul className="list-disc list-inside mt-2 ">
              {noumandata.databases.map((db, index) => (
                <li key={index}>
                  {db.name} {db.emoji}
                </li>
              ))}
            </ul>
          </div>
          <ConnectButton />
        </div>
        <div data-aos="fade-left" className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-10">
          <Image
            src="/assets/team/Hi.png"
            alt="Saul"
            width={400}
            priority
            height={400}
            className="w-[500px] h-[500px]"
          />
        </div>
      </main>
      {/* Projects */}
      <section className="w-full mt-32 mb-20 px-10">
        <h3 className="text-3xl font-bold mb-4 text-center">
          My Recent Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-20 ">
          {noumandata.projects.map((project, index) => (
            <Link
              data-aos="zoom-in"
              target="_blank"
              key={index}
              href={project.link}
              rel="noopener noreferrer"
            >
              <div className="border p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 ">
                <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h4>
                <hr />
                <Image
                  src={project.image}
                  height={150}
                  width={400}
                  alt="image"
                  className="w-full h-[150px]"
                />
                <hr />
                <p className="mt-2 text-gray-500 text-left ">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebDeveloperPage;
