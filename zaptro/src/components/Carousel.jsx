import { useData } from "../context/DataContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import Catagory from "./Catagory.jsx";
import { useNavigate } from "react-router-dom";

const arrowClasses =
  "flex items-center justify-center w-10 h-10 rounded-full absolute z-10 text-white text-3xl font-black p-0 m-px cursor-pointer transition-all duration-[250ms]";
const arrowStyle = {
  background: "linear-gradient(135deg, #6a11cb, #2575fc)",
  boxShadow: "0 6px 14px rgba(0,0,0,0.3)",
};

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} ${arrowClasses} right-[10px]`}
      style={{ ...style, ...arrowStyle }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} ${arrowClasses} left-[10px]`}
      style={{ ...style, ...arrowStyle }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const { data, fetchAllProducts } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7).map((item) => {
          return (
            <div
              key={item.id}
              className="bg-gradient-to-r from-[#2c0a0a] via-[#7a1c1c] to-[#3a0f1a]"
            >
              <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 justify-center items-center px-4 py-8 md:py-10 min-h-[420px] md:min-h-[600px]">
                <div className="space-y-3 md:space-y-6 text-center md:text-left px-2">
                  <h3 className="text-red-500 font-semibold text-xs md:text-sm">
                    Powering Your World
                  </h3>

                  <h1 className="text-white font-bold text-base sm:text-lg md:text-xl uppercase line-clamp-2 max-w-full md:max-w-[500px] mx-auto md:mx-0">
                    {item.title}
                  </h1>

                  <p className="text-gray-400 text-sm md:text-base line-clamp-3 max-w-full md:max-w-[500px] mx-auto md:mx-0">
                    {item.description}
                  </p>

                  <button onClick={()=>navigate('/products')} className="bg-red-300 text-black px-6 py-2 rounded-full mx-auto md:mx-0 block">
                    Shop Now
                  </button>
                </div>

                <div className="flex justify-center items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] md:h-[400px] md:w-[400px] object-contain hover:scale-105 transition-transform duration-300 shadow-xl shadow-red-400/40"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <Catagory />
    </div>
  );
};

export default Carousel;
