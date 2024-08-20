"use client";
import { cn } from "@/utils/cn";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Label } from "@/app/components/sections/contact-section/label";
import { Input } from "@/app/components/sections/contact-section/input";
import { useState } from "react";
import Link from "next/link";
import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import ServicesDemo from "@/app/components/sections/services";
import useTheme from "@/utils/useTheme";

const ConnectPage = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    )
      return toast.warn("Enter all fields");
    setLoading(true);

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("message", formData.message);
    if (pdfFile) {
      formDataToSubmit.append("pdf", pdfFile);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/career`,
        {
          method: "POST",
          body: formDataToSubmit,
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <div
        className={`container mx-auto py-24 p-4 bg-black ${
          theme === "dark" ? "bg-black text-secondary" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between w-full">
          <Link className="text-white" href={"/"}>
            {/* <IoMdArrowBack fontSize={35} color="#EE9D1A" className="ml-4" /> */}
            .
          </Link>

          <p className="pb-5 sm:pb-5 text-xl text-center sm:text-5xl text-black">
            <span className="text-primary font-bold">
              B
              <span
                className={`${
                  theme === "dark" ? " text-secondary" : " text-black"
                }`}
              >
                ee
              </span>
              N
              <span
                className={`${
                  theme === "dark" ? " text-secondary" : " text-black"
                }`}
              >
                eural
              </span>
            </span>
          </p>
          <div></div>
        </div>

        <p className="text-[16px] text-center ">
          Connect with beeneural to make something great
        </p>
        <p className="text-[16px] text-center  pb-12">
          Below are our services let&apos;s connect and discuss further
        </p>
        <section id="services" style={{ height: 100 }} />
        <ServicesDemo />
        <div className="flex justify-center pt-40 ">
          <div className="w-[70%]">
            <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
              <h2 className="font-bold text-4xl text-center text-neutral-800 dark:text-neutral-200">
                Get In Touch
              </h2>

              <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Tyler"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="lastName">Linkedin Url</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="https://www.linkedin.com/in/no"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="projectmayhem@fc.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="message">Project Idea</Label>
                  <Input
                    id="message"
                    name="message"
                    placeholder="Brief Project Idea"
                    type="text"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </LabelInputContainer>
                <div className="bg-gradient-to-r from-transparent via-neutral-300  to-transparent my-8 h-[1px] w-full" />

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="resume">Upload Docs</Label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    disabled={loading}
                    className="block w-full text-sm text-primary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-br file:from-primary file:to-primary file:text-white hover:file:bg-gray-100 "
                  />
                </LabelInputContainer>

                <button
                  className="bg-gradient-to-br relative group/btn from-primary  to-primary block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit →"}
                  <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300  to-transparent my-8 h-[1px] w-full" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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

export default ConnectPage;
