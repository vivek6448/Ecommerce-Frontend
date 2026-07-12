import { useState, lazy, Suspense } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext.jsx";

const NavAuth = lazy(() => import("./NavAuth"));

const Navbar = ({ location }) => {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();

  const links = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-white shadow-xl sticky top-0 z-50">
      <div className="py-2 sm:py-3">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 flex items-center justify-between">

          <div className="flex items-center gap-3 sm:gap-6">
            <Link to="/">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
                <span className="text-red-500 font-serif">Z</span>aptro
              </h1>
            </Link>

            <div className="hidden sm:flex gap-1 cursor-pointer text-gray-700 items-center text-xs sm:text-sm">
              <MapPin className="text-red-500 h-4 w-4" />
              <span className="font-semibold truncate max-w-[140px] sm:max-w-none">
                {location
                  ? `${location.city || location.locality}, ${location.principalSubdivision}`
                  : "Detecting location..."}
              </span>
              <FaCaretDown className="mt-0.5" />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">

            <ul className="hidden md:flex gap-6 lg:gap-8 items-center text-sm lg:text-base font-semibold">
              {links.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  className={({ isActive }) =>
                    `pb-1 transition ${
                      isActive
                        ? "border-b-2 border-red-500 text-red-500"
                        : "text-black hover:text-red-500"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>

            <Link to="/cart" className="relative">
              <IoCartOutline className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              <span className="bg-red-500 text-[10px] sm:text-xs px-1.5 sm:px-2 rounded-full absolute -top-2 -right-2 text-white">
                {cartItems.length}
              </span>
            </Link>

            <div>
              <Suspense fallback={null}>
                <NavAuth />
              </Suspense>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-lg sm:text-xl ml-1"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <ul className="flex flex-col text-center py-2 gap-1 font-semibold text-sm">
            {links.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 transition ${
                    isActive ? "text-red-500 bg-gray-100" : "hover:bg-gray-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
