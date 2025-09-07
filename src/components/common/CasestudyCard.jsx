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
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-5 mt-10 py-15 px-13  md:mt-20 md:px-30 ">
      {data.map((items, index) => {
        return (
          <div key={index} class="md:w-90 md:h-[37.75rem] w-75 md:flex-1/3  h-auto bg-lightSky relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative md:w-90 md:h-90 ">
              <img
                src={items.img}
                alt="Office workspace"
                class="md:w-90 md:h-90 h-75 w-75 object-cover"
              />
              <div class="absolute top-0 left-0 h-full w-full bg-black-20 flex items-end p-4">
                <img src={items.logo} alt="Google logo" class="h-9" />
              </div>
            </div>
            <div class="p-5 flex flex-col h-[15rem] justify-between">
              <div>
                <h3 class="text-blue-900 md:text-xl text-lg font-bold uppercase font-futura">
                  {items.name}
                </h3>
                <p class="text-textb text-sm mt-1">
                  {items.subtext.slice(0, 60)}
                </p>
              </div>
              <div className="flex flex-col justify-end h-auto">
              <div class="relative bg-darksky z-3 px-3 py-2 rounded-lg mt-5 after:absolute after:h-full after:w-2 after:top-0 after:-left-1 after:bg-green-500 after:rounded-tl-sm after:rounded-bl-sm">
                <p class="text-xs text-textB">
                  🔥 Fast Google Visibility &
                  <span class="font-bold text-textD">15% Longer Visits</span>
                </p>
              </div>
              <div className="mt-4  flex ">
                <Link className="flex items-center justify-center gap-2 text-sm capitalize font-semibold bg-gradient-to-tr from-sky to-blue bg-clip-text text-transparent">
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
