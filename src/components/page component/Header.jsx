import React from "react";
import { CImages, images } from "../../data/Images";
import bannerimage from "../../asset/images/image 1.png";
import brandLogo from "../../asset/images/c logos/datafloq.png";
import boostIcon from "../../asset/icons/booster.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className=" w-screen h-auto font-inter bg-gradient-to-b from-purple from-40% to-white-50 to-80%">
      <div className="flex flex-col md:flex-row justify-between px-12.5   ">
        <div className=" w-full lg:w-[50%] sm:w-[50%] flex lg:pt-62.25 md:ml-3 md:justify-center">
          <div className="flex flex-col  gap-8  md:pt-0  text-center sm:text-left sm:pt-20 ">
            <div className="gap-6 flex flex-col">
              <h1 className="font-futura font-bold lg:font-bold  text-3xl lg:uppercase lg:text-7xl tracking-[-2%] lg:leading-[92%] text-blue-900 ">
                your brand on 200+ news sites
              </h1>
              <p className="font-medium text-sm lg:text-xl text-textB">
                Share your story on <b>200+ influential news sites </b> your
                competitor can't reach — and watch your visibility, credibility,
                and audience grow.
              </p>
              <div>
                <div className="flex gap-2 lg:gap-4  flex-col sm:flex-row items-center md:justify-start ">
                  <div className="flex tracking-tighter lg:tracking-[-20px] ">
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt=""
                        className=" h-9 w-9 lg:h-10 lg:w-10 shadow rounded-full border-[#ccc] border-3 lg:border-2  lg:border-white -ml-4"
                      />
                    ))}
                  </div>
                  <p className="capitalize text-sm lg:text-xl text-textB">
                    trusted by{" "}
                    <span className="text-[#181D27] font-semibold">2000+</span>{" "}
                    brands worldwide
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-1 flex justify-center sm:justify-start">
              <button className="flex items-center justify-center w-[197px] h-13   gap-2  text-sm  lg:text-xl bg-gradient-to-tr from-sky to-blue text-white rounded-full text-semibold">
                <img src={boostIcon} alt="icon" /> Boost Now
              </button>
            </div>
            <div className="flex flex-col  mt-3.5  gap-9.1 text-center sm:text-left items-center sm:items-start">
              <h3 className="font-bold text-lg hidden md:flex md:text-lg">
                Publish Your Story on:
              </h3>
              <div className="flex items-center  flex-wrap lg:flex-nowrap gap-20 mt-4 justify-between sm:justify-start">
                {CImages.map((img, index) => {
                  return (
                    <img
                      className="lg:h-6 h-5 w-auto"
                      key={index}
                      src={img}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-auto md:flex hidden justify-center  pr-6.25 pt-35 ">
          <div className="lg:w-[32.18rem] lg:h-[38.75rem] md:w-[17rem] md:h-[23rem] border-[0.20rem] border-white rounded-3xl relative overflow-hidden object-bottom object-cover">
            <img
              src={bannerimage}
              alt=""
              className="absolute top-0 left-0 w-full h-full"
            />
            <div className="bg-[#00000025] absolute top-0 left-0 w-full h-full">
              <img
                src={brandLogo}
                alt=""
                className="md:h-10 h-7 w-auto absolute top-7 left-7"
              />
            </div>
            <div className="flex z-2 items-center top-[382px] h-[14.87rem] mx-auto  gap-4 absolute flex-col bg-gradient-to-b  from-transparent from-10% to-[#00000090] to-70% w-full md:pb-10 lg:pb-30">
              <div className="font-futura text-sm px-3 pt-20 lg:text-3xl text-white uppercase text-center">
                <h1>author jesica miller's second novel coming this week</h1>
              </div>
              <div className="bg-[#ffffff30] flex items-center  justify-between w-[13.06rem] h-12 text-white px-2 py-2.5 rounded-full backdrop-blur-[3rem]">
                <FaChevronLeft className="lg:text-3xl md:text-sm" />
                <div className="flex items-center lg:gap-5">
                  <i className="lg:h-3.5 lg:w-3.5 md:h-2 md:w-2 bg-white rounded-full"></i>
                  <i className="lg:h-3.5 lg:w-3.5 md:h-2 md:w-2 bg-white rounded-full opacity-45"></i>
                  <i className="lg:h-3.5 lg:w-3.5 md:h-2 md:w-2 bg-white rounded-full opacity-45"></i>
                </div>
                <FaChevronRight className="lg:text-3xl md:text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
