import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Tile() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        setProducts(data);
      });
  }, []);

  const deletecard = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const Addcard = () => {
    const newProduct = {
      id: Date.now(),
      title: "New Product",
      description: "This is a newly added product with placeholder info.",
      price: 99.99,
      image: "https://via.placeholder.com/150",
      rating: {
        rate: 4.5,
        count: 10,
      },
    };
    setProducts([newProduct, ...products]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-10">
          <button
            onClick={Addcard}
            className="bg-slate-800 hover:bg-slate-700 text-white text-lg font-medium px-6 py-3 rounded-xl shadow transition-all duration-200 flex items-center gap-2"
          >
            {" "}
            Add Card
          </button>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={deletecard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tile;
