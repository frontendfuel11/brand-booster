import React , {useState , useEffect} from "react";
import { CardData } from "../../data/CardData";

const WorkCard = () => {

  return (
    <div className="flex items-center justify-center  lg:gap-31.25  lg:my-10">
      {CardData.map((item, index) => {
        return (
          <div
            className="flex flex-col items-center justify-center text-center gap-4 w-54  h-40"
            key={index}
          >
            <div className="lg:w-16 lg:h-16 ">
              <img src={item.img} alt="" className="w-full h-full" />
            </div>
            <h3 className="font-futura font-bold lg:text-3xl tracking-[-2%] text-xl uppercase text-blue-900 ">
              {item.heading}
            </h3>
            <p className="text-sm text-textB ">{item.subtext}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCard;
