import React from "react";
import banner from '../img/banner.jpg'
const Hero = () => {
  return (
    <div className="ml-[13rem] flex items-center justify-center">
      <div className="mr-[48px]">
        <ul className="w-[18rem] bg-[#ffffff] px-5">
          <li className="pb-5">
            <a href>
              <span>clothing</span>
            </a>
            <div className="bg-[#] p-[.1px]" />
          </li>
          <li className="pb-5">
            <a href>
              <span>electronic </span>
            </a>
            <div className="bg-[#] p-[.1px]" />
          </li>
          <li className="pb-5">
            <a href>
              <span>shoes</span>
            </a>
            <div className="bg-[#] p-[.1px]" />
          </li>
          <li className="pb-5">
            <a href>
              <span>watches</span>
            </a>
            <div className="bg-[#] p-[.1px]" />
          </li>
          <li className="pb-5">
            <a href>
              <span>jwellerly</span>
            </a>
            <div className="bg-[#] p-[.1px]" />
          </li>
          <li className="pb-5">
            <a href>
              <span>health and beauty</span>
              <div className="bg-[#] p-[.1px]" />
            </a>
          </li>
          <li className="pb-5">
            <a href>
              <span>kids and babies</span>
              <div className="bg-[#] p-[.1px]" />
            </a>
          </li>
          <li className="pb-5">
            <a href>
              <span>sports</span>
            </a>
            <div className="bg-[#] p-[.1px]" />
          </li>
          <li className="pb-5">
            <a href>
              <span>Home and Garden</span>
              <div className="bg-[#] p-[.1px]" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mr-[13rem] ">
        <img src={banner} alt="" />
        
      </div>
    </div>
  );
};

export default Hero;
