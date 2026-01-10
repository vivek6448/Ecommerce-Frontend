import { useCart } from "../context/CartContext.jsx";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import emptyCart from "../assets/empty-cart.png";
import { useNavigate } from "react-router-dom";

const Cart = ({ location, getLocation }) => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, deleteItem } = useCart();
  const [postcode, setPostcode] = useState("");

  const { user } = useUser();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-6 sm:mt-10 max-w-6xl mx-auto mb-5 px-3 sm:px-4">
      {cartItems.length > 0 ? (
        <div>
          <h1 className="font-bold text-lg sm:text-2xl">
            My Cart ({cartItems.length})
          </h1>

          <div className="mt-6 sm:mt-10 space-y-3">
            {cartItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-100 p-2 sm:p-3 rounded-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h1 className="font-semibold text-sm sm:text-base line-clamp-2">
                        {item.title}
                      </h1>
                      <p className="text-red-500 font-semibold text-base sm:text-lg">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-3">
                    <div className="bg-red-500 text-white flex gap-4 px-4 py-1.5 rounded-md font-bold text-lg">
                      <button
                        className="cursor-pointer"
                        onClick={() => updateQuantity(item.id, "decrement")}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="cursor-pointer"
                        onClick={() => updateQuantity(item.id, "increment")}
                      >
                        +
                      </button>
                    </div>

                    <span
                      className="hover:bg-white/60 transition-all rounded-full p-2 hover:shadow-lg cursor-pointer"
                      onClick={deleteItem.bind(null, item.id)}
                    >
                      <FaRegTrashAlt className="text-red-500 text-xl sm:text-2xl w-5 h-5 sm:w-6 sm:h-6" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mt-6">
            <div className="bg-gray-100 rounded-md p-4 sm:p-7 space-y-3">
              <h1 className="text-gray-800 font-bold text-lg sm:text-xl">
                Delivery Info
              </h1>

              <div className="flex flex-col space-y-1">
                <label className="text-sm">Full Name</label>
                <input
                  type="text"
                  className="p-2 rounded-md text-sm sm:text-base"
                  value={user?.fullName || ""}
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm">Address</label>
                <input
                  type="text"
                  className="p-2 rounded-md text-sm sm:text-base"
                  value={location?.locality || location?.city || ""}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                <div className="flex flex-col space-y-1 w-full">
                  <label className="text-sm">State</label>
                  <input
                    type="text"
                    className="p-2 rounded-md w-full text-sm sm:text-base"
                    value={location?.principalSubdivision || ""}
                  />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label className="text-sm">Postcode</label>
                  <input
                    type="text"
                    className="p-2 rounded-md w-full text-sm sm:text-base"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                <div className="flex flex-col space-y-1 w-full">
                  <label className="text-sm">Country</label>
                  <input
                    type="text"
                    className="p-2 rounded-md w-full text-sm sm:text-base"
                    value={location?.countryName || ""}
                  />
                </div>

                <div className="flex flex-col space-y-1 w-full">
                  <label className="text-sm">Phone No.</label>
                  <input
                    type="number"
                    className="p-2 rounded-md w-full text-sm sm:text-base"
                  />
                </div>
              </div>

              <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full sm:w-auto text-sm sm:text-base">
                Submit
              </button>

              <div className="flex items-center justify-center text-gray-600 text-sm">
                -------- OR --------
              </div>

              <div className="flex justify-center">
                <button
                  onClick={getLocation}
                  className="bg-red-500 text-white px-4 py-2 rounded-md text-sm sm:text-base"
                >
                  Detect Location
                </button>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-md p-4 sm:p-7 space-y-3 h-max">
              <h1 className="text-gray-800 font-bold text-lg sm:text-xl">
                Billing Summary
              </h1>

              <div className="flex justify-between items-center text-sm sm:text-base">
                <h1 className="flex gap-1 items-center text-gray-700">
                  <LuNotebookText /> Items Total
                </h1>
                <p>${totalPrice}</p>
              </div>

              <div className="flex justify-between items-center text-sm sm:text-base">
                <h1 className="flex gap-1 items-center text-gray-700">
                  <MdDeliveryDining /> Delivery Charge
                </h1>
                <p className="text-red-500 font-semibold">
                  <span className="text-gray-600 line-through mr-1">$25</span>
                  Free
                </p>
              </div>

              <div className="flex justify-between items-center text-sm sm:text-base">
                <h1 className="flex gap-1 items-center text-gray-700">
                  <GiShoppingBag /> Handling Charge
                </h1>
                <p className="text-red-500 font-semibold">$5</p>
              </div>

              <hr />

              <div className="flex justify-between items-center font-semibold text-base sm:text-lg">
                <h1>Grand Total</h1>
                <p>${totalPrice + 5}</p>
              </div>

              <div>
                <h1 className="font-semibold text-gray-700 mb-2 mt-5 text-sm sm:text-base">
                  Apply Promo Code
                </h1>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className="p-2 rounded-md w-full text-sm sm:text-base"
                  />
                  <button className="border px-4 py-1 rounded-md text-sm sm:text-base">
                    Apply
                  </button>
                </div>
              </div>

              <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full mt-3 text-sm sm:text-base">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center min-h-[60vh] text-center px-4">
          <h1 className="text-red-500/80 font-bold text-2xl sm:text-4xl">
            Your Cart is Empty
          </h1>

          <img
            src={emptyCart}
            alt=""
            className="w-48 sm:w-72 md:w-96"
          />

          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 text-white px-6 py-2 rounded-md text-sm sm:text-base"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
