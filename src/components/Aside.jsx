import React from "react";
import bag from "../img/bg.png";
import shoe from "../img/ec (1).png";
const Aside = () => {
  return (
    <div className="ml-[12.5rem] h-[883px] w-[280px]  mt-2 flex-col items-center justify-between p-3">
      <div className="h-[423px] w-[287px] bg-[#fff] p-10">
        <h1 className="text-2xl">Hot deal</h1>
        <img src={bag} alt="" className="h-[210px] w-[250px]" />
        <div className="text-center p-3 space-x-2">
          <p>
            <span className="">Lorem, ipsum dolor.</span>
          </p>
          <s>$1000</s> <span className="text-center">$900</span>
          <p>start</p>
        </div>
      </div>
      <div className="h-[423px] w-[287px] bg-[#fff] p-10">
        <h1 className="text-2xl">Hot deal</h1>
        <img src={shoe} alt="" className="h-[210px] w-[250px]" />
        <div className="text-center p-3 space-x-2">
          <p>
            <span className="">Lorem, ipsum dolor.</span>
          </p>
          <s>$1000</s>
          <span className="text-center">$900</span>

          <p>start</p>
        </div>
      </div>
    </div>
  );
};

export default Aside;
