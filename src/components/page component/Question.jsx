import React from "react";
import Questionboard from "../common/Questionboard";

const Question = () => {
  return (
    <div className="bg-purple-50 min-h-200 w-full flex flex-col items-center  py-30 px-20">
      <div className="text-center space-y-2">
        <h1 className="text-6xl font-extrabold font-futura  uppercase text-blue-900">
          frequently asked questions{" "}
        </h1>
        <p className="text-lg text-textB ">
          Benefit from the readership and authority our partnered news sites
          have built over many years. <br /> Our growing list of news sites
          ranks high on Google, delivering you quality readers and clicks.
        </p>
      </div>
      <Questionboard/>
    </div>
  );
};

export default Question;
