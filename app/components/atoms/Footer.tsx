import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import { Label } from "../sections/contact-section/label";
import { Input } from "../sections/contact-section/input";
import { cn } from "@/utils/cn";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="bg-white text-black py-12">
        <div className="container mx-auto text-black grid grid-cols-1 md:grid-cols-4 gap-8 w-[80%]">
          <div className="space-y-4">
            <h2 className="text-lg font-bold  ">ABOUT US</h2>
            <hr className="border-primary w-16" />
            <ul className="space-y-2">
              <li className="text-[12px]">Home</li>
              <li className="text-[12px]">About Us</li>
              <li className="text-[12px]">Our Services</li>
              <li className="text-[12px]">Terms & Condition</li>
              <li className="text-[12px]">Privacy Policy</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold">USEFUL LINKS</h2>
            <hr className="border-primary w-16" />
            <ul className="space-y-2">
              <li className="text-[12px]">Portfolio</li>
              <li className="text-[12px]">Team</li>
              <li className="text-[12px]">Career</li>
              <li className="text-[12px]">Contact</li>
              <li className="text-[12px]">FAQ</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold">CONTACT US</h2>
            <hr className="border-white w-16" />
            <address className="not-italic text-[12px]">
              Room No 9, Salman Garments And Uniform Complex <br />
              Near Nadir Chowk, Naveed Shaheed Road, Gilgit <br />
              Pakistan <br />
              <br />
              Phone: +923554742477 <br />
              Email: info@beeneural.com
            </address>
            <div className="flex space-x-4 mt-4">
              <FaFacebook className="h-6 w-6" />
              <FaTwitter className="h-6 w-6" />
              <FaLinkedin className="h-6 w-6" />
              <FaInstagram className="h-6 w-6" />
              <FaGoogle className="h-6 w-6" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold">SUBSCRIPTION</h2>
            <hr className="border-white w-16" />
            <p className="text-[12px]">
              With Our Skills Put Together, You Get An Ensemble Capable Of Doing
              Anything And Everything Your Brand Needs. Subscribe Here To Get
              Our Latest Updates.
            </p>
            <div className="flex">
              <LabelInputContainer className="mb-4">
                <Input id="email" placeholder="mike@mail.com" type="email" />
              </LabelInputContainer>
            </div>
          </div>
        </div>
      </footer>
      <hr />
    </div>
  );
};

export default Footer;
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
