import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import "react-toastify/dist/ReactToastify.css";
import CategoryProduct from "./pages/CategoryProduct";
import ErrorBoundary from "./components/common/ErrorBoundary";
import NotFound from "./components/common/NotFound";
import { ROUTES } from "./routes/routeConfig";


const App = () => {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
          const res = await axios.get(url);
          setLocation(res.data);
        } catch {
          // geolocation fetch failed silently
        }
      },
      () => {
        // permission denied — location stays null
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar location={location} />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<SingleProduct />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CATEGORY} element={<CategoryProduct />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route
            path={ROUTES.CART}
            element={<Cart location={location} getLocation={getLocation} />}
          />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
