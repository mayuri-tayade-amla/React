import React, { useEffect, useState } from "react";
import Card from "./card";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [nextId, setNextId] = useState(1000);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    const newCard = {
      id: nextId,
      title: "New Product",
      price: 99.99,
      image: "https://via.placeholder.com/150",
      description: "This is a newly added product.",
    };
    setNextId((prev) => prev + 1);
    setProducts((prev) => [newCard, ...prev]);
  };

  return (
    <>
      <div className="flex justify-center mb-8">
        <button
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition"
        >
          ➕ Add Card
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300 ease-in-out">
        {products.map((product) => (
          <Card key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
