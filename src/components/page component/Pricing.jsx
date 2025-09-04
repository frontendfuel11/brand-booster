import React from "react";
import {PricingTable} from "../common/PricingTable";

const Pricing = () => {
  return (
    <div className="my-30 flex flex-col justify-center items-center ">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-6xl font-futura font-extrabold text-blue-900  ">
          Grow Your Brand Today
        </h1>
        <p className="text-xl text-textB ">
          Get featured on major news sites to drive visitors and customers to
          your website, all for a one-time payment.
        </p>
      </div>
      <PricingTable />
    </div>
  );
};

export default Pricing;
