import React from "react";
import PackageRc from "../common/PackageRc";
import RestrictedTop from "../common/RestrictedTop";
import NavbarP from "../ui/NavbarP";

const PulishPackage = () => {
  const links = [
    { name: "limited", to: "/limited" },
    { name: "popular", to: "/popular" },
    { name: "autharity", to: "/autharity" },
    { name: "ultimate", to: "/ultimate" },
  ];
  return (
    <div className="mt-30 bg-purple-50 py-20 flex flex-col justify-center">
      <div className="pb-15 space-y-5">
        <h1 className="lg:text-6xl md:text-3xl text-2xl  font-extrabold text-blue-900 font-futura text-center uppercase ">
          publishing Packages
        </h1>
        <p className="lg:text-lg text-sm px-3 text-textB capitalize text-center font-Inter">
          Benefit from the readership and authority our partnered news sites
          have built over many years. <br /> Our growing list of news sites
          ranks high on Google, delivering you quality readers and clicks.
        </p>
      </div>
      <NavbarP links={links}/>
      <PackageRc/>
      <RestrictedTop/>
    </div>
  );
};

export default PulishPackage;
