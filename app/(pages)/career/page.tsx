"use client";
import { cn } from "@/utils/cn";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Label } from "@/app/components/sections/contact-section/label";
import { Input } from "@/app/components/sections/contact-section/input";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import { useSelector } from "react-redux";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Get the current theme from Redux
  const theme = localStorage.getItem("theme");
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
        className={`mx-auto py-24 ${
          theme === "dark" ? "bg-black" : "text-white"
        }`}
      >
        <div className="flex justify-between w-full">
          <Link
            className={cn(
              "text-white",
              theme === "dark" ? "text-gray-200" : "text-black"
            )}
            href={"/"}
          >
            {/* <IoMdArrowBack fontSize={35} color="#EE9D1A" className="ml-4" /> */}
            .
          </Link>

          <p
            className={cn(
              "mp-5 sm:pb-5 text-xl text-center sm:text-5xl",
              theme === "dark" ? "text-white" : "text-black"
            )}
          >
            <span className="font-bold">
              <span className="text-primary">B</span>
              <span
                className={theme === "dark" ? "text-gray-200" : "text-black"}
              >
                ee
              </span>
              <span className="text-primary">N</span>
              <span
                className={theme === "dark" ? "text-gray-200" : "text-black"}
              >
                eural
              </span>
            </span>
            👩🏻‍💻
          </p>
          <div></div>
        </div>

        <p
          className={cn(
            "text-[20px] text-center mb-12",
            theme === "dark" ? "text-gray-300" : "text-black"
          )}
        >
          Join BeeNeural and be a part of something great
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%]">
            <div
              className={cn(
                "w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input",
                theme === "dark"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-black"
              )}
            >
              <h2 className="font-bold text-xl">Fill the form below 🙌</h2>
              <p className="text-sm max-w-sm mt-2">
                Remember to drop your resume below
              </p>

              <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                  <LabelInputContainer>
                    <Label
                      className={
                        theme === "dark" ? "text-gray-200" : "text-black"
                      }
                      htmlFor="firstName"
                    >
                      First name
                    </Label>
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
                  <LabelInputContainer>
                    <Label
                      className={
                        theme === "dark" ? "text-gray-200" : "text-black"
                      }
                      htmlFor="lastName"
                    >
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Durden"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                  <Label
                    className={
                      theme === "dark" ? "text-gray-200" : "text-black"
                    }
                    htmlFor="email"
                  >
                    Email Address
                  </Label>
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
                  <Label
                    className={
                      theme === "dark" ? "text-gray-200" : "text-black"
                    }
                    htmlFor="message"
                  >
                    Message
                  </Label>
                  <Input
                    id="message"
                    name="message"
                    placeholder="Write your humble words 🙂"
                    type="text"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </LabelInputContainer>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />

                <LabelInputContainer className="mb-4">
                  <Label
                    className={
                      theme === "dark" ? "text-gray-200" : "text-black"
                    }
                    htmlFor="resume"
                  >
                    Upload Resume (PDF)
                  </Label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    disabled={loading}
                    className={cn(
                      "block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:font-semibold hover:file:bg-gray-100",
                      theme === "dark"
                        ? "file:bg-gray-700 file:text-white"
                        : "file:bg-gray-300 file:text-black"
                    )}
                  />
                </LabelInputContainer>

                <button
                  className={cn(
                    "bg-gradient-to-br relative group/btn from-gray-700 to-gray-900 block w-full rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]",
                    theme === "dark" ? "text-white" : "text-white"
                  )}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit →"}
                  <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />
              </form>
            </div>
            <Image
              priority
              src={"/assets/images/beeneural.webp"}
              alt="image"
              height={400}
              width={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
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

export default CareerPage;
