import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductListView({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-100 rounded-md p-2 sm:p-3">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-start sm:items-center">
        {/* IMAGE */}
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          width={240}
          height={240}
          className="
            w-full h-48
            sm:w-60 sm:h-60
            object-cover rounded-md cursor-pointer
          "
          onClick={() => navigate(`/products/${product.id}`)}
        />

        {/* DETAILS */}
        <div className="space-y-2 w-full">
          <h1 className="font-bold text-base sm:text-xl line-clamp-2 hover:text-red-400">
            {product.title}
          </h1>

          <p className="font-semibold flex items-center text-lg sm:text-xl">
            <span className="text-2xl sm:text-4xl">${product.price}</span>
          </p>

          <p className="text-sm sm:text-base">
            FREE delivery <span className="font-semibold">Fri, 18 Apr</span>
            <br />
            Or fastest delivery{" "}
            <span className="font-semibold">Tomorrow, 17 Apr</span>
          </p>

          <button
            onClick={() => addToCart(product)}
            className="
              bg-red-500 hover:bg-red-600 transition
              text-white px-4 py-2 rounded-md
              w-full sm:w-fit
            "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
