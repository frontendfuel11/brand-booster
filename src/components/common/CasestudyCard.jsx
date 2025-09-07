import React, { useState, useEffect } from "react";
import { CaseStudyData } from "../../data/CaseStudyData";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const CasestudyCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const CsData = JSON.parse(JSON.stringify(CaseStudyData));
    setData(CsData);
  }, []);
  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 mt-12.5  px-13  md:mt-12.5 md:px-30 ">
      {data.map((items, index) => {
        return (
          <div key={index} class="md:w-[18.62rem] md:h-[30.75rem] w-75   h-auto bg-lightSky relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative w-[18.62rem] h-[16.87rem]  ">
              <img
                src={items.img}
                alt="Office workspace"
                class=" object-top object-cover h-full w-full"
              />
              <div class="absolute top-0 left-0 h-full w-full bg-black-20 flex items-end p-4">
                <img src={items.logo} alt="Google logo" class="h-8 w-auto" />
              </div>
            </div>
            <div class="py-4 px-3 flex flex-col h-[15rem] justify-between">
              <div className="space-y-3">
                <h3 class="text-blue-900 md:text-lg text-lg font-bold tracking-[-2%] leading-[120%] uppercase font-futura">
                  {items.name}
                </h3>
                <p class="text-textB text-xs leading-[120%">
                  {items.subtext.slice(0, 80)}...
                </p>
              </div>
              <div className="flex flex-col gap-2.5 justify-end mt-10.5 mb-4">
              <div class="relative bg-darksky  py-3 rounded-lg border-l-3 pr-4 pl-5 border-green  ">
                <p class="text-[10px] text-textB">
                  🔥 Fast Google Visibility &
                  <span class="font-bold text-textD">15% Longer Visits</span>
                </p>
              </div>
              <div className="flex ">
                <Link className="flex items-center justify-center gap-2.5 text-xs leading-[120%] capitalize font-semibold bg-gradient-to-tr from-sky to-blue bg-clip-text text-transparent">
                  view full case study <FaArrowRight className='text-blue' />
                </Link>
              </div>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CasestudyCard;
