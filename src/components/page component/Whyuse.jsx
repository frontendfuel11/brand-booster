import React from "react";
import WhyUseCard from "../common/WhyUse";

const Whyuse = () => {
  return (
    <div className="py-20 flex flex-col justify-center items-center space-y-10">
      <div className="space-y-3 text-center">
        <h1 className="text-6xl text-blue-900 font-futura font-bold uppercase">
          why use brandBooster ?
        </h1>
        <p className="text-textB text-xl ">With years of experience and over 10,000 published news stories, you can expect the best results publishing with us.</p>
      </div>
      <WhyUseCard/>
      <button className="text-xl text-white bg-gradient-to-tr from-sky to-blue px-10 py-5 capitalize rounded-full cursor-pointer">
          get started
      </button>
    </div>
  );
};

export default Whyuse;
