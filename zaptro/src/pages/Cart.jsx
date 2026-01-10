import { useCart } from "../context/CartContext.jsx";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
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
    <div className="mt-6 max-w-6xl mx-auto mb-10 px-3 sm:px-4">
      {cartItems.length > 0 ? (
        <div>
          <h1 className="font-bold text-lg sm:text-2xl">
            My Cart ({cartItems.length})
          </h1>

          {/* CART ITEMS */}
          <div className="mt-6 space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 p-3 rounded-md flex flex-col sm:flex-row items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 w-full">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h1 className="font-semibold text-sm line-clamp-2">
                      {item.title}
                    </h1>
                    <p className="text-red-500 font-bold">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-3">
                  <div className="bg-red-500 text-white flex gap-4 px-4 py-1.5 rounded-md font-bold">
                    <button onClick={() => updateQuantity(item.id, "decrement")}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, "increment")}>
                      +
                    </button>
                  </div>

                  <span
                    className="p-2 rounded-full hover:bg-white hover:shadow cursor-pointer"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FaRegTrashAlt className="text-red-500 text-xl" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            {/* DELIVERY INFO */}
            <SignedIn>
              <div className="bg-gray-100 rounded-md p-5 space-y-3">
                <h1 className="font-bold text-lg">Delivery Info</h1>

                <input
                  className="p-2 rounded w-full"
                  value={user?.fullName || ""}
                  placeholder="Full Name"
                />

                <input
                  className="p-2 rounded w-full"
                  value={location?.locality || location?.city || ""}
                  placeholder="Address"
                />

                <div className="flex gap-3">
                  <input
                    className="p-2 rounded w-full"
                    value={location?.principalSubdivision || ""}
                    placeholder="State"
                  />
                  <input
                    className="p-2 rounded w-full"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="Postcode"
                  />
                </div>

                <div className="flex gap-3">
                  <input
                    className="p-2 rounded w-full"
                    value={location?.countryName || ""}
                    placeholder="Country"
                  />
                  <input className="p-2 rounded w-full" placeholder="Phone" />
                </div>

                <button className="bg-red-500 text-white py-2 rounded-md w-full">
                  Submit
                </button>

                <button
                  onClick={getLocation}
                  className="bg-red-500 text-white py-2 rounded-md w-full"
                >
                  Detect Location
                </button>
              </div>
            </SignedIn>

            {/* LOGIN MESSAGE */}
            <SignedOut>
              <div className="bg-yellow-100 text-yellow-800 p-5 rounded-md text-center">
                <p className="font-semibold">
                  Please sign in to continue checkout
                </p>
                <div className="mt-4">
                  <SignInButton className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer" />
                </div>
              </div>
            </SignedOut>

            {/* BILLING */}
            <div className="bg-white shadow-xl rounded-md p-5 space-y-3 h-max">
              <h1 className="font-bold text-lg">Billing Summary</h1>

              <div className="flex justify-between">
                <span className="flex gap-1 items-center">
                  <LuNotebookText /> Items Total
                </span>
                <span>${totalPrice}</span>
              </div>

              <div className="flex justify-between">
                <span className="flex gap-1 items-center">
                  <MdDeliveryDining /> Delivery
                </span>
                <span className="text-red-500">Free</span>
              </div>

              <div className="flex justify-between">
                <span className="flex gap-1 items-center">
                  <GiShoppingBag /> Handling
                </span>
                <span>$5</span>
              </div>

              <hr />

              <div className="flex justify-between font-bold">
                <span>Grand Total</span>
                <span>${totalPrice + 5}</span>
              </div>

              <button className="bg-red-500 text-white py-2 rounded-md w-full mt-3">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center min-h-[60vh]">
          <h1 className="text-red-500 font-bold text-2xl sm:text-4xl">
            Your Cart is Empty
          </h1>

          <img src={emptyCart} className="w-56 sm:w-80" />

          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 text-white px-6 py-2 rounded-md"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
