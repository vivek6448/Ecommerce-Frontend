import { lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCaretDown, FaMapMarkerAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/useCart";
import PillNav from "./PillNav/PillNav.jsx";
import StaggeredMenu from "./StaggeredMenu.jsx";
import zaptroMark from "../assets/zaptro-mark.svg";

const NavbarAuth = lazy(() => import("./NavbarAuth.jsx"));

const links = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navbar = ({ location }) => {
  const { cartItems } = useCart();
  const routerLocation = useLocation();

  const navItems = links.map((item) => ({
    label: item.label,
    href: item.path,
    ariaLabel: `Go to ${item.label}`,
  }));

  const mobileItems = [
    ...links.map((item) => ({
      label: item.label,
      link: item.path,
      ariaLabel: `Go to ${item.label}`,
    })),
    { label: "Cart", link: "/cart", ariaLabel: "Go to cart" },
  ];

  const locality = location?.city || location?.locality;
  const region = location?.principalSubdivision;
  const locationText = !location
    ? "Detecting location..."
    : locality && region && locality.toLowerCase() !== region.toLowerCase()
    ? `${locality}, ${region}`
    : locality || region || "Unknown location";

  const locationPill = (
    <span className="pill" style={{ cursor: "default" }}>
      <span
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", lineHeight: "normal" }}
      >
        <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-green-500" />
        <span className="truncate max-w-[140px]" style={{ lineHeight: "normal" }}>
          {locationText}
        </span>
        <FaCaretDown className="shrink-0" />
      </span>
    </span>
  );

  const mobileFooter = (
    <>
      <span className="flex items-center gap-2 text-sm text-gray-300">
        <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-green-500" />
        <span className="truncate">{locationText}</span>
      </span>

      <Suspense fallback={null}>
        <NavbarAuth />
      </Suspense>
    </>
  );

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex fixed top-0 inset-x-0 z-50 justify-center px-3">
        <div className="bg-gradient-to-b from-black/50 to-black/0 backdrop-blur-md rounded-b-2xl sm:rounded-b-3xl px-3 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-8 max-w-full">
          <PillNav
            logo={zaptroMark}
            logoAlt="Zaptro"
            items={navItems}
            activeHref={routerLocation.pathname}
            baseColor="#22c55e"
            pillColor="transparent"
            pillTextColor="#e5e7eb"
            hoveredPillTextColor="#ffffff"
            initialLoadAnimation={false}
            trailingContent={locationPill}
          />

          <div className="flex items-center gap-2 sm:gap-5 text-white shrink-0">
            <Link to="/cart" className="relative">
              <IoCartOutline className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              <span className="bg-green-500 text-[10px] sm:text-xs px-1.5 sm:px-2 rounded-full absolute -top-2 -right-2 text-white">
                {cartItems.length}
              </span>
            </Link>

            <Suspense fallback={null}>
              <NavbarAuth />
            </Suspense>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="md:hidden">
        <StaggeredMenu
          isFixed
          position="right"
          items={mobileItems}
          socialItems={[]}
          displaySocials={false}
          displayItemNumbering
          logoUrl={zaptroMark}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen
          accentColor="#22c55e"
          colors={["#052e16", "#0a2015"]}
          footerContent={mobileFooter}
          onMenuOpen={() => {
            document.body.style.overflow = "hidden";
          }}
          onMenuClose={() => {
            document.body.style.overflow = "";
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
