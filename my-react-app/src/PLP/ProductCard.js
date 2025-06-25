import React from "react";

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="h-44 w-full object-contain p-4"
        />

        {/* Product Info */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
            {product.title}
          </h2>
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            <span className="font-semibold text-gray-900">Category: </span>
            {product.category}
          </p>
          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            <span className="font-semibold text-gray-900">Description: </span>
            {product.description}
          </p>
          <div className="flex items-center justify-between mb-2">
            <span className="text-indigo-600 font-semibold text-md">
              <span className="font-semibold text-gray-900">Price: </span>₹{" "}
              {product.price}
            </span>
            <div className="flex items-center text-sm text-yellow-500 font-medium gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-3 h-3 text-yellow-400"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.26 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>
                {" "}
                {product.rating?.rate} ({product.rating?.count})
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 pt-0">
        <button
          onClick={() => onDelete(product.id)}
          className="w-full bg-slate-800 hover:bg-slate-800 text-white py-2 rounded-lg font-medium transition"
        >
          Remove Card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
