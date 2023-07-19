import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import Category from "./Category";
const url = "https://fakestoreapi.com/products?limit=12";
function Products() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      const allProduct = res.data;
      setProduct(allProduct);
      console.log(allProduct);
    });
  }, []);
  return (
    <div className="lg:flex p-5 justify-between">
      <Category />
      <div className="p-4 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:w-[80%]">
        {products.map((product) => {
          return (
            <>
              <div key={product.id} className="ring-1 ">
                <div className="grid justify-center">
                  <div className= "grid justify-center">
                    <img
                      src={product.image}
                      alt=""
                      className="w-24 h-24 mb-1 mt-4  grid justify-center"
                    />
                  </div>
                  <p className="text-center text-sm h-24">{product.title}</p>
                </div>
                <div className="font-mono p-1  sm:p-2 ">
                  <p className="text-left text-red-600">${product.price}</p>
                  <p className="text-xs">{product.category}</p>
                </div>
                <div className="p-1">
                  <button className="bg-[#4fec4f] rounded-xl p-2 text-sm">
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
