import React from "react";
import NavLink from "../../data/NavLink";
import logo from "../../asset/logo/logo.png";
import boostIcon from "../../asset/icons/booster.png";

const Navigation = () => {
  return (
    <div className="w-[90%]  h-20 z-10 shadow left-[5%] font-Inter mx-auto fixed top-3  flex items-center justify-between px-3 bg-white rounded-[50px]">
      <div className=" pl-7 ">
        <img src={logo} alt="" className="h-17 w-auto" />
      </div>
      <ul className="flex items-center gap-5 ">
        {NavLink.map((link, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-2 capitalize  text-textB cursor-pointer"
            >
              <p>{link.name}</p>
              <span className="flex items-center justify-center text-textD">
                {link.icon}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center px-7 py-4 gap-3 cursor-pointer rounded-full bg-gradient-to-tr from-sky to-blue text-white ">
        <img src={boostIcon} alt="" />
        <p className="text-xl">Boost now</p>
      </div>
    </div>
  );
};

export default Navigation;
