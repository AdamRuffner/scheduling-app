import React from "react";
import Nav from "./Nav";
import Lottie from "lottie-react";
import animationData from "../assets/phone-animation.json";

const Confirmation = () => {
  return (
    <div>
      <Nav />
      <h3>
        Thank you for scheduling with us! Please check your email for your
        confirmation!
      </h3>
      <div className="lottie">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Confirmation;
