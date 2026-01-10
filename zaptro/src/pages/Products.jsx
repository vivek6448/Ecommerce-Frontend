import { getData } from "../context/DataContext";
import { useEffect, useState } from "react";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading4.webm";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";

const Products = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);

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

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 mb-10 font-[Open_Sans]">
        {data?.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-5 md:gap-8">
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              handleBrandChange={handleBrandChange}
              handlecategoryChange={handlecategoryChange}
              brand={brand}
              setBrand={setBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />

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
