import { useData } from "../context/useData";
import { useNavigate } from "react-router-dom";

const Catagory = () => {
  const { categoryOnlyData } = useData();
  const navigate = useNavigate();

  const handleClick = (category) =>
    navigate(`/category/${category.toLowerCase().replace(/\s+/g, "-")}`);

  const renderButtons = (prefix) =>
    categoryOnlyData?.map((category) => (
      <button
        onClick={() => handleClick(category)}
        key={`${prefix}-${category}`}
        className="uppercase bg-green-500 text-white px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap hover:bg-green-600 transition duration-200 flex-shrink-0"
      >
        {category}
      </button>
    ));

  return (
    <div className="bg-black/20 py-4 sm:py-5 overflow-hidden">
      <div className="flex gap-3 animate-marquee">
        {renderButtons("a")}
        {renderButtons("b")}
      </div>
    </div>
  );
};

export default Catagory;
