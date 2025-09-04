import React from "react";
import WorkCard from "../common/WorkCard";
import { FaChevronRight } from "react-icons/fa6";

const HowWorks = () => {
  return (
    <div className="bg-white my-30 flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center text-center mb-15">
        <h1 className="font-futura font-extrabold text-6xl uppercase text-blue-900">
          how does it works ?
        </h1>
        <p className="text-textB mt-4 text-lg">
          we get you featured in the news to boost your visibility , build brand
          trust , attract <br /> new customers , and drive real buisness impact.{" "}
        </p>
      </div>
      <WorkCard/>
        <button className="flex items-center px-7 py-3 gap-3 rounded-full mx-auto bg-gradient-to-tr from-sky to-blue text-white capitalize ">
            see our plans <FaChevronRight/>
        </button>
    </div>
  );
};

export default HowWorks;
