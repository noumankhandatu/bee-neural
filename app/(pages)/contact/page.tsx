import Wrapper from "@/app/components/molecules/headerfooter-wrapper";
import { SignupFormDemo } from "@/app/components/sections/contact-section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "BeeNeural | Contact",
  description: "BeeNeural Leading Artificial Intelligence Company",
};
const ContactPage = () => {
  return (
    <Wrapper>
      <section style={{ height: 40 }} />
      <SignupFormDemo />
      <section style={{ height: 100 }} />
    </Wrapper>
  );
};

export default ContactPage;
