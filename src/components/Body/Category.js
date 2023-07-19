import React, { useEffect, useState } from "react";
import washingMach from "../images/washingMachine.png";
import womenWear from "../images/womenFashion.jpg";
import jewellery from "../images/weddingRings.jpg";
import axios from "axios";

const url = "https://fakestoreapi.com/products/categories";

function Category() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      let allCategory = res.data;
      setCategory(allCategory);
    });
  }, []);
  return (
    <div className="lg:border-r-2 lg:w-[15%]">
      <div className="flex justify-between p-3 text-[#03a103] font-semibold ">
        <h3 className="text-2xl">Categories</h3>
        <h3 className="lg:hidden">View All</h3>
      </div>
      <div>
        <div className="text-[#03a103] p-2 text-center  -mt-8 flex ">
          <div className="mr-9">
            <div className="grid justify-center">
              <img
                src={washingMach}
                alt=""
                className="w-20 justify-center lg:hidden"
              />
            </div>
            <p className="lg:hidden">Electronics</p>
          </div>
          <div className="mr-5  mt-8">
            <div className="grid justify-center">
              <img
                src={womenWear}
                alt=""
                className="w-16 justify-center lg:hidden"
              />
            </div>

            <p className="lg:hidden">Women's ware</p>
          </div>
          <div className="mt-8">
            <div className="grid justify-center">
              <img
                src={jewellery}
                alt=""
                className="w-16 h-24 justify-center lg:hidden"
              />
            </div>
            <p className="lg:hidden">Jewellery</p>
          </div>
        </div>

        <div className="hidden lg:block">
          {category.map((cat) => {
            return (
              <div className="">
                <p className="m-4 ">{cat.toUpperCase()}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
