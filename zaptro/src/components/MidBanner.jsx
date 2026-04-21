import React from "react";
import banner from "../assets/banner1.jpg";

const MidBanner = () => {
  return (
    <div className="bg-gray-100 py-10 sm:py-14 md:py-24 px-2 sm:px-4">
      <div
        className="relative max-w-7xl mx-auto rounded-xl md:rounded-2xl pt-24 sm:pt-28 bg-cover bg-center bg-fixed h-[420px] sm:h-[500px] md:h-[600px] overflow-hidden"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-xl md:rounded-2xl flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
              Best Store in your Fingertips
            </h1>

            <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 text-gray-200">
              Discover the latest tech innovations with unbeatable prices and
              free shipping on all orders.
            </p>

            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 sm:py-3 sm:px-7 rounded-lg transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
