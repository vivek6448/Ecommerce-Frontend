import React from "react";
import { getData } from "../context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  category,
  brand,
  priceRange,
  setPriceRange,
  handlecategoryChange,
  handleBrandChange,
  setCategory,
  setBrand,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <div className="bg-gray-100 mt-4 md:mt-10 p-3 sm:p-4 rounded-md h-max w-full md:w-[260px] block md:block">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 rounded-md border border-gray-300 w-full text-sm sm:text-base"
      />

      <h1 className="mt-4 sm:mt-5 font-semibold text-base sm:text-lg">
        Category
      </h1>
      <div className="flex flex-col gap-2 mt-2 sm:mt-3">
        {categoryOnlyData?.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input
              type="checkbox"
              name={item}
              checked={category === item}
              onChange={handlecategoryChange}
              value={item}
              className="accent-red-500"
            />
            <button className="cursor-pointer uppercase text-xs sm:text-sm">
              {item}
            </button>
          </div>
        ))}
      </div>

      <h1 className="mt-4 sm:mt-5 font-semibold text-base sm:text-lg mb-2 sm:mb-3">
        Brand
      </h1>
      <select
        value={brand}
        onChange={handleBrandChange}
        className="bg-white w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
      >
        {brandOnlyData?.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>

      <h1 className="mt-4 sm:mt-5 font-semibold text-base sm:text-lg mb-2 sm:mb-3">
        Price Range
      </h1>
      <div className="flex flex-col gap-2">
        <label className="text-xs sm:text-sm">
          Price Range : $ {priceRange[0]} - $ {priceRange[1]}
        </label>
        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          value={priceRange[1]}
          className="w-full accent-red-500"
        />
      </div>

      <button
        className="bg-red-500 text-white rounded-md px-3 py-2 mt-4 sm:mt-5 w-full text-sm sm:text-base cursor-pointer"
        onClick={() => {
          setPriceRange([0, 5000]);
          setSearch("");
          setBrand("All");
          setCategory("All");
        }}
      >
        Reset Filter
      </button>
    </div>
  );
};

export default FilterSection;
