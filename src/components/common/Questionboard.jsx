import React, { useState } from "react";
import { Faqs } from "../../data/Faqs";
import { FaMinus, FaPlus, FaX } from "react-icons/fa6";

const items = ["service", "writing", "publishing"];
const Questionboard = () => {
  const [active, setActive] = useState("service");
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaqs = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-[70%] h-auto mx-auto bg-white mt-20 flex flex-col items-center rounded-xl pb-10 ">
      <ul className="flex gap-4 w-[90%] h-20  items-center justify-center  mx-auto border-b-1 border-[#ccc] mb-5">
        {items.map((item) => {
          return (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`w-full h-full font-semibold  text-center flex items-center justify-center py-2 text-lg capitalize ${
                active === item
                  ? "text-[#4FAABE] border-b-1 border-[#4FAABE]"
                  : "text-textB"
              } `}
            >
              {item}
            </li>
          );
        })}
      </ul>

      <div className="mt-10 w-full flex flex-col gap-5 px-10 transition-all">
        {Faqs.map((Faq, index) => {
          return (
            <div
              key={Faq}
              className={`flex flex-col px-10 w-full py-5 rounded-xl ${
                openIndex === index ? "bg-[#efefef] py-5" : "bg-white"
              }`}
            >
              <div
                className="flex justify-between w-full items-center "
                onClick={() => toggleFaqs(index)}
              >
                <h3 className="text-xl font-semibold text-[#181D27]">
                  {Faq.question}
                </h3>
                {openIndex === index ? <FaMinus  className="text-textB w-7 h-7 rounded-full border border-textB text-xl"/> : <FaPlus className="text-textB w-7 h-7 rounded-full border border-textB text-xl" />}
              </div>
              {openIndex === index && (
                <div className="transition-all mt-5 text-lg leading-7">
                  <span>{Faq.answer}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questionboard;
