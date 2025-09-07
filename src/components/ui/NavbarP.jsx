import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarP = ({ links }) => {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <div className="bg-[#E7E9F2] md:h-17 h-11 md:max-w-[100%]  rounded-full flex items-center border border-[#E9EAEB] justify-around mx-auto md:px-3 px-2">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          onClick={() => setActiveIndex(index)} 
          className={`md:text-xl text-sm capitalize md:px-10 md:py-3 px-3 py-1 rounded-full font-semibold lg:tracking-wide transition-colors duration-300 ${
            activeIndex === index
              ? "bg-gradient-to-tr from-sky to-blue text-white"
              : "bg-transparent text-textB"
          }`}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavbarP;
