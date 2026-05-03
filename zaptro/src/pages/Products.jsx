import { useData } from "../context/DataContext";
import { useEffect, useMemo, useState } from "react";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading4.webm";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";

const Products = () => {
  const { data, fetchAllProducts } = useData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);

  const [showFilters, setShowFilters] = useState(false);

  const handlecategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const filteredData = useMemo(
    () =>
      data?.filter(
        (item) =>
          String(item.title).toLowerCase().includes(search.toLowerCase()) &&
          (category === "All" ||
            String(item.category).toLowerCase() === String(category).toLowerCase()) &&
          (brand === "All" ||
            String(item.brand).toLowerCase() === String(brand).toLowerCase()) &&
          item.price >= priceRange[0] &&
          item.price <= priceRange[1]
      ),
    [data, search, category, brand, priceRange]
  );

  const dynamicPage = Math.ceil((filteredData?.length ?? 0) / 8);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, [fetchAllProducts]);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 mb-10 font-[Open_Sans]">
        {data?.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 relative">

            {/* MOBILE FILTER BUTTON */}
            <div className="md:hidden flex justify-end mt-3">
              <button
                onClick={() => setShowFilters(true)}
                className="px-4 py-2 bg-black text-white rounded-md"
              >
                ☰ Filters
              </button>
            </div>

            {/* DESKTOP FILTER SIDEBAR */}
            <div className="hidden md:block">
              <FilterSection
                search={search}
                setSearch={setSearch}
                category={category}
                handlecategoryChange={handlecategoryChange}
                brand={brand}
                handleBrandChange={handleBrandChange}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>

            {/* MOBILE FILTER DRAWER */}
            {showFilters && (
              <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
                <div className="bg-white w-[280px] h-full p-4 overflow-y-auto">

                  <div className="flex justify-between items-center mb-3">
                    <h2 className="font-bold text-lg">Filters</h2>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="text-xl font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  <FilterSection
                    search={search}
                    setSearch={setSearch}
                    category={category}
                    handlecategoryChange={handlecategoryChange}
                    brand={brand}
                    handleBrandChange={handleBrandChange}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    closeMobileFilters={() => setShowFilters(false)}
                  />
                </div>
              </div>
            )}

            {/* PRODUCTS */}
            {filteredData?.length > 0 ? (
              <div className="flex flex-col items-center w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-4 sm:mt-10 w-full">
                  {filteredData
                    ?.slice(page * 8 - 8, page * 8)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <Pagination
                  pageHandler={pageHandler}
                  page={page}
                  dynamicPage={dynamicPage}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center w-full min-h-[300px] sm:min-h-[500px]">
                <Lottie
                  animationData={notfound}
                  className="w-64 h-64 sm:w-96 sm:h-96"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[60vh]">
            <video muted autoPlay loop className="w-40 sm:w-56">
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
