import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext.jsx";

const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
        setSingleProduct(res.data);
      } catch {
        // fetch failed — singleProduct stays undefined
      }
    };
    fetchProduct();
  }, [params.id]);

  const handleAddToCart = useCallback(() => {
    for (let i = 0; i < quantity; i++) addToCart(singleProduct);
  }, [addToCart, singleProduct, quantity]);

  return (
    <>
      {singleProduct ? (
        <div className="px-3 sm:px-4 pb-6 md:px-0">
          <Breadcrums title={singleProduct.title} />

          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <div className="w-full flex justify-center">
              <img
                src={singleProduct.thumbnail}
                alt={singleProduct.title}
                className="rounded-xl sm:rounded-2xl w-full max-w-md md:max-w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>

              <div className="text-gray-700 font-semibold text-xs sm:text-sm">
                {singleProduct.brand?.toUpperCase()} /{" "}
                {singleProduct.category?.toUpperCase()} / Stock:{" "}
                {singleProduct.stock}
              </div>

              <p className="text-lg sm:text-xl font-bold text-red-500">
                ${singleProduct.price}
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {singleProduct.description}
              </p>

              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-16 sm:w-20 border border-gray-300 rounded-lg px-3 py-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="flex gap-4 mt-2 sm:mt-4">
                <button
                  className="text-white px-5 sm:px-6 flex gap-2 py-2 text-sm sm:text-lg bg-red-500 hover:bg-red-600 transition rounded-md w-full sm:w-auto justify-center"
                  onClick={handleAddToCart}
                >
                  <IoCartOutline className="w-5 h-5 sm:w-6 sm:h-6" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[50vh]">
          <video muted autoPlay loop className="w-40 sm:w-56">
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
