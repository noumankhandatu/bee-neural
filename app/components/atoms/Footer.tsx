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
    <footer className="bg-teal-700 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 w-[80%]">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">ABOUT US</h2>
          <hr className="border-white w-16" />
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">USEFUL LINKS</h2>
          <hr className="border-white w-16" />
          <ul className="space-y-2">
            <li>Portfolio</li>
            <li>Team</li>
            <li>Career</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">CONTACT US</h2>
          <hr className="border-white w-16" />
          <address className="not-italic">
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
          <p>
            With Our Skills Put Together, You Get An Ensemble Capable Of Doing
            Anything And Everything Your Brand Needs. Subscribe Here To Get Our
            Latest Updates.
          </p>
          <div className="flex">
            <LabelInputContainer className="mb-4">
              <Input id="email" placeholder="mike@mail.com" type="email" />
            </LabelInputContainer>
          </div>
        </div>
      </div>
    </footer>
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
