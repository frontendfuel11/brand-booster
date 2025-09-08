import React from "react";
import image1 from "../../asset/images/avater/aa2.png";
import image2 from "../../asset/images/avater/aa.png";
import cicon1 from "../../asset/images/c logos/yf.png";
import cicon2 from "../../asset/images/c logos/dj.png";

const MoneyBack = () => {
  return (
    <div className="w-[95%] relative h-130 flex flex-col items-center mx-auto  my-40 pt-26 px-15 bg-purple-50 rounded-2xl">
      <div className="text-center  flex items-center justify-center flex-col">
        <div className="space-y-6 ">
          <h1 className="font-futura text-7xl tracking-[1px] font-extrabold uppercase text-blue-900">
            money back gurantee
          </h1>
          <p className="text-xl text-[#414651] leading-[170%] ">
            In the event that we cannot publish your news story on the news
            outlets included in your <br /> chosen publishing package, you will
            be entitled to a full refund.
          </p>
        </div>
        <button className="bg-gradient-to-tr from-sky to-blue w-[230px]  h-14 flex items-center justify-center  text-white font-normal relative  text-lg rounded-full mt-11 cursor-pointer border-1 border-sky">
          Get started
        </button>
      </div>
      <div className="absolute flex items-center justify-between w-full  ">
        <img src={cicon1} alt="cicon" className="absolute top-4   left-[175px]"/>
        <img src={cicon2} alt="cicon" className="absolute top-29   right-32" />
        <div className="relative z-2">
          <img src={image1} alt="image" className="left-11 top-12.5"  />
        </div>
        <div className="absolute top-30 right-10">
          <img src={image2} alt="image" className="" />
        </div>
      </div>
    </div>
  );
};

export default MoneyBack;
