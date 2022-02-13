import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";


import logo from '../img/Logo2.png'



//icons 
const cart = <FontAwesomeIcon icon={faCartShopping} />;
const search = <FontAwesomeIcon icon={faMagnifyingGlass} />;

const Header = () => {
  return (
    <div>
      <div className="bg-[black] m-0 text-cyan-50 p-3">
        <div className>
          <ul className="flex items-center justify-end space-x-3 mr-[13rem]">
            <li>
              <span>My account |</span>
            </li>
            <li>
              <span>whit list |</span>
            </li>
            <li>
              <span>my cart |</span>
            </li>
            <li>
              <span>check out |</span>
            </li>
            <li>
              <span>login</span>
            </li>
          </ul>
          <div className="flex justify-between">
            <div className="text-3xl">
              <img src={logo} alt="" />
            </div>
            <div className="flex justify-center items-center space-x-[3rem]  mx-auto mt-4">
              <div>
                <input
                  type="text"
                  className="py-[.4rem] rounded-l-md w-[33rem]"
                />
                <button className=" bg-red-600 py-2 w-[54px] rounded-r-md">
                  {search}
                </button>
              </div>
              <div className="flex">
                <div className="bg-red-600 py-4 rounded-full w-11 text-center">
                  <span>{cart}</span>
                </div>
                <ul>
                  <li className="ml-2">total</li>
                  <li>$6000.00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex space-x-20 text-cyan-50 bg-red-600 items-center justify-center py-4">
          <li>
            <a href>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href>
              <span>About us</span>
            </a>
          </li>
          <li>
            <a href>
              <span>Clothing</span>
            </a>
          </li>
          <li>
            <a href>
              <span>Electronics hot</span>
            </a>
          </li>
          <li>
            <a href>
              <span>healthy and beautiful</span>
            </a>
          </li>
          <li>
            <a href>
              <span>Watches</span>
            </a>
          </li>
          <li>
            <a href>
              <span>jwellerly</span>
            </a>
          </li>
          <li>
            <a href>
              <span>shoes</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
