import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-100 rounded-xl sm:rounded-2xl cursor-pointer transition-all hover:scale-[1.03] hover:shadow-xl p-2 sm:p-3 h-full flex flex-col">
      <div
        className="bg-gray-100 rounded-lg overflow-hidden"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          width={400}
          height={400}
          className="aspect-square w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h1 className="line-clamp-2 mt-2 text-sm sm:text-base font-semibold flex-1">
        {product.title}
      </h1>

      <p className="mt-1 text-base sm:text-lg text-gray-800 font-bold">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-red-500 hover:bg-red-600 px-3 py-2 text-sm sm:text-base rounded-md text-white w-full flex gap-2 items-center justify-center font-semibold transition"
      >
        <IoCartOutline className="w-5 h-5 sm:w-6 sm:h-6" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
