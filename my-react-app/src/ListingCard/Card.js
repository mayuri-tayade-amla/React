import React from "react";

const Card = ({ product, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transform transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-center mb-2">
        {product.title}
      </h3>
      <p className="text-green-600 font-bold mb-4">${product.price}</p>
      <button
        onClick={() => onDelete(product.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
      >
        ❌ Delete
      </button>
    </div>
  );
};

export default Card;
