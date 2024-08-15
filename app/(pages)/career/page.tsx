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

const CareerPage = () => {
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
      <section style={{ height: 40 }} />
      <div className="container mx-auto py-10">
        <div className="flex justify-between w-full">
          <Link className="text-white" href={"/"}>
            {/* <IoMdArrowBack fontSize={35} color="#EE9D1A" className="ml-4" /> */}
            .
          </Link>

          <p className="mb-5 sm:mb-5 text-xl text-center sm:text-5xl text-black">
            <span className="text-primary font-bold">
              B<span className="text-beta">ee</span>N
              <span className="text-beta">eural</span>
            </span>
            👩🏻‍💻
          </p>
          <div></div>
        </div>

        <p className="text-[20px] text-center  mb-12">
          Join BeeNeural and Be a part of something great
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%]">
            <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Fill form below 🙌
              </h2>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Remember to drop your resume below
              </p>

              <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                  <LabelInputContainer>
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
                  <LabelInputContainer>
                    <Label htmlFor="lastName">Last name</Label>
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
                  <Label htmlFor="message">Message</Label>
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
                <div className="bg-gradient-to-r from-transparent via-neutral-300  to-transparent my-8 h-[1px] w-full" />

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="resume">Upload Resume (PDF)</Label>
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

export default CareerPage;
