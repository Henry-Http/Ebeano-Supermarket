import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-[#4fec4f] lg:h-auto">
        <div className="p-6 flex justify-between">
          <div>
            <p className="mb-4 font-bold">NEED HELP?</p>
            <ul>
              <li>FAQ's</li>
              <li>Help Center</li>
              <li>Contact us</li>
              <li>Delivery time</li>
              <li>Report Product</li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <p className="mb-4 font-bold">MAKE MONEY WITH EBEANO</p>
            <ul>
              <li>Sell on Ebeano</li>
              <li>Become a sales consultant</li>
              <li>Ebeano Express</li>
              <li>Terms & Conditions</li>
              <li></li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <p className="mb-4 font-bold">EBEANO INTERNATIONAL</p>
            <ul>
              <li>Chad</li>
              <li>Ghana</li>
              <li>Nigeria</li>
              <li>South Africa</li>
              <li></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-bold">ABOUT EBEANO</p>
            <ul className="">
              <li>About Us</li>
              <li>Ebeano Careers</li>
              <li>Ebeano Express</li>
              <li>Terms & Conditions</li>
              <li></li>
            </ul>
          </div>
        </div>
        <h3 className="text-center font-bold pb-2">
          &copy; {new Date().getFullYear()} - All rights reserved. 
          <p>HoD</p>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
