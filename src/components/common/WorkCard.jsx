import React , {useState , useEffect} from "react";
import { CardData } from "../../data/CardData";

const WorkCard = () => {

  return (
    <div className="flex items-center justify-center gap-10 px-10 my-10 flex-wrap ">
      {CardData.map((item, index) => {
        return (
          <div
            className="flex flex-col items-center justify-center text-center gap-4 w-[18%]"
            key={index}
          >
            <div className="h-14 w-auto ">
              <img src={item.img} alt="" className="h-auto w-auto" />
            </div>
            <h3 className="font-futura font-bold text-3xl uppercase text-blue-900 ">
              {item.heading}
            </h3>
            <p className="text-sm text-textB capitalize">{item.subtext}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCard;
