import { useData } from "../context/useData";

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
  const { categoryOnlyData, brandOnlyData } = useData();

  return (
    <div className="bg-white/10 backdrop-blur border border-white/10 text-gray-200 mt-4 md:mt-10 p-3 sm:p-4 rounded-md h-[70vh] w-full md:w-[260px] overflow-y-auto">

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white/10 p-2 rounded-md border border-white/20 text-white placeholder-gray-400 w-full text-sm sm:text-base"
      />

      {/* CATEGORY */}
      <h1 className="mt-4 font-semibold text-base sm:text-lg text-white">Category</h1>
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
      <h1 className="mt-4 font-semibold text-base sm:text-lg text-white">Brand</h1>
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
      <h1 className="mt-4 font-semibold text-base sm:text-lg text-white">Price</h1>
      <input
        type="range"
        min="0"
        max="5000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, Number(e.target.value)])}
        className="w-full mt-2 accent-green-500"
      />
      <p className="text-sm mt-1 text-gray-300">$0 - ${priceRange[1]}</p>

      {/* APPLY BUTTON (MOBILE ONLY) */}
      {closeMobileFilters && (
        <button
          onClick={closeMobileFilters}
          className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full transition"
        >
          Apply Filters
        </button>
      )}
    </div>
  );
};

export default FilterSection;
