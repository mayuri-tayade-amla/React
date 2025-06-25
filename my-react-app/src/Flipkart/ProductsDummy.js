import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("....");

    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        data?.products && setProducts(data?.products);
      });
  }, []);
  const cartupdated = () => {
    alert("alert");
  };

  return (
    <div>
      <h3 className="font-bold text-black text-center text-3xl py-5">
        Products Grid System
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border-black">
        {products.map((todo, index) => (
          <div className="bg-white shadow-md rounded-lg py-10 px-4" key={index}>
            <h3 className="text-lg font-bold mb-2">Title : {todo.title}</h3>
            <p className="text-gray-700 mb-4">
              {" "}
              description: {todo.description}
            </p>
            <p className="text-indigo-600 font-semibold py-3">
              Price: {todo.price}
            </p>
            <p className="text-red-500 font-semibold py-3">
              category: {todo.category}
            </p>
            <span className="font-semibold text-sm text-black py-3">
              {" "}
              Rating:
              {todo.rating}
            </span>
            <h3 className="font-semibold text-sm text-black py-3">
              {" "}
              SKU: {todo.sku}
            </h3>
            <button className="border-blue-700" onClick={cartupdated()}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
