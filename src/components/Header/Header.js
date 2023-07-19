import React, { useState } from "react";
import mainLogo from "../images/shopping-cart.png";
import menuBtn from "../images/Menu.png";
import closeBtn from "../images/close.png";
import emptyCart from "../images/emptyCart.png";
import Body from "../Body/Body";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);
  const [closeMenu, setCloseMenu] = useState(false);

  const changeMenu = () => {
    setOpenMenu(!openMenu);
    setCloseMenu(!closeMenu);
  };
  return (
    <div>
      <header className=" text-center">
        <img src={mainLogo} className="hidden items-center" alt="" />
        <div className="flex justify-between p-2">
          <div className="text-[#03a103] text-left ml-3">
            <p className="text-2xl font-serif leading-none">EBEANO</p>
            <p className="text-lg font-serif ">SuperMarket</p>
          </div>
          <div className="hidden lg:block mt-1">
            <input
              type="text"
              placeholder="Search Product,  brands and Categories"
              className="w-[500px] px-10 py-2 border-2"
            />
            <button className="bg-[#4fec4f] py-2 px-4 ml-2 rounded-md hover:text-white">
              search
            </button>
          </div>
          <div className="hidden lg:flex justify-end lg:mr-8 lg:text lg:font-serif">
            <ul className="hidden lg:flex">
              <li className="mr-6 mt-3 hover:cursor-pointer hover:text-[#1e801e]">Account</li>
              <li className="mr-6 mt-3 hover:cursor-pointer hover:text-[#1e801e]">Help</li>
              <li className="mr-6 mt-3 hover:cursor-pointer hover:text-[#1e801e]">Contact</li>
              <li>
                <img src={emptyCart} alt="" className="hover:cursor-pointer" />
              </li>
            </ul>
          </div>
          
          <div onClick={changeMenu} className="lg:hidden">
            {openMenu ? (
              <div className=" w-12 mr-3">
                <img src={menuBtn} alt="" className="hover:cursor-pointer" />
              </div>
            ) : (
              <div className="w-10">
                <img src={closeBtn} alt="" className="hover:cursor-pointer" />
              </div>
            )}
          </div>
        </div>
        <div className="font-serif text-2xl  ">
          {closeMenu ? (
            <div className="lg:hidden relative bg-[#4fec4f] p-8 ">
              <ul className="">
                <li className="mb-6 hover:text-white">Kids</li>
                <li className="mb-6 hover:text-white">Adult</li>
                <li className="mb-6 hover:text-white">Contact Us </li>
                <li className="grid justify-center">
                  <img src={emptyCart} alt="" className="mb-3" />
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="lg:w-[27%] absolute lg:left-[850px] bg-white">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil obcaecati laudantium quidem, veniam sequi earum minus aliquam, saepe vero ea, excepturi aliquid? Quo nesciunt repellendus eveniet dolor nobis porro incidunt delectus aliquid, harum consequuntur quasi vel, voluptatem obcaecati! Deserunt, aperiam.</p>
        </div>
      </header>
      <Body />
    </div>
  );
}
