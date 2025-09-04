import React from "react";
import { CImages, images } from "../../data/Images";
import bannerimage from "../../asset/images/image 1.png";
import brandLogo from "../../asset/images/c logos/datafloq.png";
import boostIcon from "../../asset/icons/booster.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="h-auto w-screen font-inter bg-gradient-to-b from-purple-50 from-70% to-white-50 to-100%">
      <div className="flex items-center justify-between">
        <div className="w-[50%] flex justify-center">
          <div className="flex flex-col gap-5 pt-20 px-15 ml-20">
            <h1 className="font-futura font-extrabold text-8xl text-blue-900 capitalize">
              your brand on 200+ news sites
            </h1>
            <p className="font-normal text-xl text-textB">
              Share your story on <b>200+ influential news sites </b> your
              competitor can't reach — and watch your visibility, credibility,
              and audience grow.
            </p>
            <div>
              <div className="flex items-center gap-5 mt-2">
                <div className="flex tracking-[-20px]">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt=""
                      className="h-12 w-12 shadow rounded-full border-2 border-white -ml-4"
                    />
                  ))}
                </div>
                <p className="capitalize text-xl text-textB">
                  trusted by 2000+ brands worldwide
                </p>
              </div>
            </div>
            <div className="mt-1">
              <button className="flex items-center justify-between gap-2 text-xl bg-gradient-to-tr from-sky to-blue text-white px-7 py-4 rounded-full">
                <img src={boostIcon} alt="icon" /> Boost Now
              </button>
            </div>
            <div className="flex flex-col mt-7 gap-4">
              <h3 className="font-bold text-2xl">Publish Your Story on :</h3>
              <div className="flex items-center gap-10 mt-4">
                {CImages.map((img , index)=> {
                  return <img  className="h-8 w-auto" key={index} src={img} alt="" />
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-screen flex items-center justify-center pt-30">
          <div className="w-[32.18rem] h-[38.75rem] border-[0.20rem] border-white rounded-4xl relative overflow-hidden object-center">
            <img
              src={bannerimage}
              alt=""
              className="absolute top-0 left-0 w-full h-full"
            />
            <div className="bg-[#00000025] absolute top-0 left-0 w-full h-full">
              <img
                src={brandLogo}
                alt=""
                className="h-10 w-auto absolute top-7 left-7"
              />
            </div>
            <div className="flex z-2 items-center mx-auto top-110 gap-4 absolute flex-col bg-gradient-to-b  from-transparent to-[#00000050] w-full pb-30">
              <div className="font-futura text-3xl text-white uppercase text-center">
                <h1>author jesica miller's second novel coming this week</h1>
              </div>
              <div className="bg-[#ffffff25] flex items-center text-white gap-3 py-4.5 px-10 rounded-full backdrop-blur-lg">
                <FaChevronLeft className="text-xl"/>
                <div className="flex items-center gap-5">
                <i className="h-4 w-4 bg-white rounded-full"></i>
                <i className="h-4 w-4 bg-white rounded-full opacity-50"></i>
                <i className="h-4 w-4 bg-white rounded-full opacity-50"></i>
                </div>
                <FaChevronRight className="text-xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
