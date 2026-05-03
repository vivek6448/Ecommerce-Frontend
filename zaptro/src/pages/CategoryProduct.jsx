import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../assets/Loading4.webm";
import { ChevronLeft } from "lucide-react";
import ProductListView from "../components/ProductListView";

export default function CategoryProduct() {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${encodeURIComponent(category)}`
        );
        setSearchData(res.data.products);
      } catch {
        setSearchData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
    window.scrollTo(0, 0);
  }, [category]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[300px] sm:h-[400px]">
        <video muted autoPlay loop>
          <source src={Loading} type="video/webm" />
        </video>
      </div>
    );
  }

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
        <div className="flex flex-col items-center justify-center h-[300px] sm:h-[400px] gap-4">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-1"
          >
            <ChevronLeft size={18} /> Back
          </button>
        </div>
      )}
    </div>
  );
}
