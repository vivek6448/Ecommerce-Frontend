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
  closeMobileFilters,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <div className="bg-gray-100 mt-4 md:mt-10 p-3 sm:p-4 rounded-md h-max w-full md:w-[260px]">

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 rounded-md border border-gray-300 w-full text-sm sm:text-base"
      />

      {/* CATEGORY */}
      <h1 className="mt-4 font-semibold text-base sm:text-lg">Category</h1>
      <div className="flex flex-col gap-2 mt-2">

        {/* MANUAL ALL */}
        <label className="flex gap-2 items-center">
          <input
            type="radio"
            value="All"
            checked={category === "All"}
            onChange={handlecategoryChange}
          />
          All
        </label>

        {/* API CATEGORIES WITHOUT "ALL" */}
        {categoryOnlyData
          ?.filter(
            (item) =>
              typeof item === "string" &&
              item.toLowerCase() !== "all"
          )
          ?.map((item, index) => (
            <label key={index} className="flex gap-2 items-center">
              <input
                type="radio"
                value={item}
                checked={
                  String(category).toLowerCase() ===
                  String(item).toLowerCase()
                }
                onChange={handlecategoryChange}
              />
              {item.toUpperCase()}
            </label>
          ))}
      </div>

      {/* BRAND */}
      <h1 className="mt-4 font-semibold text-base sm:text-lg">Brand</h1>
      <div className="flex flex-col gap-2 mt-2">

        {/* MANUAL ALL */}
        <label className="flex gap-2 items-center">
          <input
            type="radio"
            value="All"
            checked={brand === "All"}
            onChange={handleBrandChange}
          />
          All
        </label>

        {/* API BRANDS WITHOUT "ALL" */}
        {brandOnlyData
          ?.filter(
            (item) =>
              typeof item === "string" &&
              item.toLowerCase() !== "all"
          )
          ?.map((item, index) => (
            <label key={index} className="flex gap-2 items-center">
              <input
                type="radio"
                value={item}
                checked={
                  String(brand).toLowerCase() ===
                  String(item).toLowerCase()
                }
                onChange={handleBrandChange}
              />
              {item}
            </label>
          ))}
      </div>

      {/* PRICE */}
      <h1 className="mt-4 font-semibold text-base sm:text-lg">Price</h1>
      <input
        type="range"
        min="0"
        max="5000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, Number(e.target.value)])}
        className="w-full mt-2 accent-red-500"
      />
      <p className="text-sm mt-1">₹0 - ₹{priceRange[1]}</p>

      {/* APPLY BUTTON (MOBILE ONLY) */}
      {closeMobileFilters && (
        <button
          onClick={closeMobileFilters}
          className="mt-5 w-full bg-black text-white py-2 rounded-md"
        >
          Apply Filters
        </button>
      )}
    </div>
  );
};

export default FilterSection;
