import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Catagory = () => {
  const { categoryOnlyData } = useData();
  const navigate = useNavigate();

  const handleClick = (category) =>
    navigate(`/category/${category.toLowerCase().replace(/\s+/g, "-")}`);

  const buttons = categoryOnlyData?.map((category, index) => (
    <button
      onClick={() => handleClick(category)}
      key={index}
      className="uppercase bg-red-300 text-black px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap hover:bg-red-400 transition-colors duration-200 flex-shrink-0"
    >
      {category}
    </button>
  ));

  return (
    <div className="bg-gray-100 py-4 sm:py-5 overflow-hidden">
      <div className="flex gap-3 animate-marquee">
        {buttons}
        {buttons}
      </div>
    </div>
  );
};

export default Catagory;
