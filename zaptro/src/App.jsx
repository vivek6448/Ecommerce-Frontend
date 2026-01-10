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


const App = () => {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
          const res = await axios.get(url);
          setLocation(res.data); // full location object
        } catch (error) {
          console.log("Error fetching location data:", error);
        }
      },
      (error) => {
        console.log("Location permission denied", error);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      {/* PASS LOCATION TO NAVBAR */}
      <Navbar location={location} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:category" element={<CategoryProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart location={location} getLocation={getLocation} />}
        />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
};

export default App;
