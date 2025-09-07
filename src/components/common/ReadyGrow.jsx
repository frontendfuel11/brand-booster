import React from "react";
import boosticon from "../../asset/icons/flash g.png"

const ReadyGrow = () => {
  return (
    <div className="w-[77.5rem] h-[13.43rem] mt-7.5  py-12 px-16 mx-auto bg-gradient-to-tr from-blue to-sky rounded-3xl flex items-center justify-between ">
      <div className="">
        <h1 className="text-[44px] font-bold leading-[120%] font-futura uppercase tracking-[-2%] text-white ">
          Ready to Grow Your Brand?
        </h1>
        <p className="text-[#FFFFFFB2]">
          Your brand deserves to be recognized! Start getting real exposure for
          your brand and high-quality buyers for your site.
        </p>
      </div>
      <button className="bg-white  w-[20.5rem] h-14 text-lg  py-4 rounded-full  transition duration-300 ml-[15.56rem] gap-2.5 flex items-center justify-center text-[#214750]">
          <img src={boosticon} alt="" />
        Get Started Now
      </button>
    </div>
  );
};

export default ReadyGrow;
