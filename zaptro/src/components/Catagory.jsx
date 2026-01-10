import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Catagory = () => {
  const { categoryOnlyData } = getData();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-around py-4 sm:py-6">
          {categoryOnlyData?.map((category, index) => (
            <button
              onClick={() =>
                navigate(
                  `/category/${category.toLowerCase().replace(/\s+/g, "-")}`
                )
              }
              key={index}
              className="uppercase bg-red-300 text-black px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap hover:scale-105 transition-transform duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagory;
