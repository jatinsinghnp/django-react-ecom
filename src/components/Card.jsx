import React from "react";
import fashon from "../img/fasonshell.png";
import person from "../img/person.png";
import bag2 from "../img/armbag.png";
import camera from "../img/cam2.png";
import vest from "../img/jacket.png";
import mouse from "../img/mouse12.png";

const Card = () => {
  return (
    <div className="">
      <div className="h-[720px]">
        <div className="flex items-center justify-center ml-8 ">
          <div className="">
            <img src={person} className="w-[300px] p-3 ml-4" alt="" />
          </div>
          <div className="w-[400px] ">
            <img src={fashon} className="w-[300px] p-3 " alt="" />
          </div>
        </div>
        <div className="ml-11 flex mt-6 ">
          <div>
            <img src={camera} className="w-[150px] h-[119px] p-1 " alt="" />
            <div className="flex-col items-center justify-center ml-5">
              <p>
                <span>Lorem, ipsum dolor.</span>
              </p>
              <p>
                <s>$900</s>
                <span>300</span>
              </p>
            </div>
          </div>
          <div>
            <img src={bag2} className="w-[150px] h-[119px] p-1 " alt="" />
            <div className="flex-col items-center justify-center ml-5">
              <p>
                <span>Lorem, ipsum dolor.</span>
              </p>
              <p>
                <s>$900</s>
                <span>300</span>
              </p>
            </div>
          </div>
          <div>
            <img src={vest} className="w-[150px] h-[119px] p-1" alt="" />
            <div className="flex-col items-center justify-center ml-5">
              <p>
                <span>Lorem, ipsum dolor.</span>
              </p>
              <p>
                <s>$900</s>
                <span>300</span>
              </p>
            </div>
          </div>
          <div>
            <img src={mouse} className="w-[150px] h-[119px] p-1" alt="" />
            <div className="flex-col items-center justify-center ml-5">
              <p>
                <span>Lorem, ipsum dolor.</span>
              </p>
              <p>
                <s>$900</s>
                <span>300</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
