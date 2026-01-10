import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../assets/Loading4.webm";
import { ChevronLeft } from "lucide-react";
import ProductListView from "../components/ProductListView";

export default function CategoryProduct() {
  const [searchData, setSearchData] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();

  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${encodeURIComponent(category)}`
      );
      setSearchData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-6 sm:mt-10 mb-10 px-3 sm:px-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 mb-4 sm:mb-6 text-white px-3 py-1.5 rounded-md cursor-pointer flex items-center gap-1 text-sm sm:text-base"
          >
            <ChevronLeft size={18} /> Back
          </button>

          <div className="flex flex-col gap-4 sm:gap-6">
            {searchData.map((product) => (
              <ProductListView key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[300px] sm:h-[400px]">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
}
