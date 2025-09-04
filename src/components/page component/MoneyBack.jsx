import React from "react";
import image1 from "../../asset/images/avater/aa2.png"
import image2 from "../../asset/images/avater/aa.png"
import cicon1 from "../../asset/images/c logos/yf.png"
import cicon2 from "../../asset/images/c logos/dj.png"


const MoneyBack = () => {
  return (
    <div className="w-[80%] relative max-h-auto min-h-80 flex flex-col items-center mx-auto  my-40 py-30 px-15 bg-purple-50 rounded-2xl">
      <div className="text-center space-y-5 flex items-center justify-center flex-col">
        <h1 className="font-futura text-6xl font-extrabold uppercase text-blue-900">
          money back gurantee
        </h1>
        <p className="text-lg text-textB ">
          In the event that we cannot publish your news story on the news
          outlets included in your <br /> chosen publishing package, you will be
          entitled to a full refund.
        </p>
        <button className="bg-gradient-to-tr from-sky to-blue w-51 h-12 flex items-center justify-center  text-white font-semibold capitalize text-lg rounded-full mt-5">
           get started
        </button>
      </div>
      <div className="absolute flex items-center justify-between w-full px-20 top-[60px]">
        <div className="relative">
          <img src={image1} alt="image"  />
          <img src={cicon1} alt="cicon" className="absolute top-4.5 -z-1 right-3" />
        </div>
        <div className="absolute top-30 right-10">
          <img src={image2} alt="image"  />
          <img src={cicon2} alt="cicon" className="absolute -top-1 -z-1 left-7" />
        </div>
      </div>
    </div>
  );
};

export default MoneyBack;
