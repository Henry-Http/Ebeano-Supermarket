import React from "react";
import shopImg from "../images/Ecommerce-home.jpg";
import Products from "./Products";

export default function Body() {
  return (
    <div>
      <div className="">
        <div>
          <img src={shopImg} alt="" className="lg:h-screen lg:w-[100%]" />
        </div>
      </div>
      <Products />
    </div>
  );
}
