import React from "react";
import Navbar from "../../atoms/Navbar";
import Footer from "../../atoms/Footer";

type Props = {
  children: React.ReactNode;
};

const Wrapper = (props: Props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Wrapper;
