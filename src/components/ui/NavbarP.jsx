import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarP = ({ links }) => {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <div className="bg-[#E7E9F2] h-17 max-w-[100%] rounded-full flex items-center border border-[#E9EAEB] justify-around mx-auto px-3">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          onClick={() => setActiveIndex(index)} 
          className={`text-xl capitalize px-10 py-3 rounded-full font-semibold tracking-wide transition-colors duration-300 ${
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
