import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { DarkGradientBg } from "./components/ui/elegant-dark-pattern";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Loader from "./components/common/Loader/Loader";
import Preloader from "./components/Preloader";
import { ROUTES } from "./routes/routeConfig";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./pages/Cart"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const CategoryProduct = lazy(() => import("./pages/CategoryProduct"));
const NotFound = lazy(() => import("./components/common/NotFound"));

const LOCATION_CACHE_KEY = "zaptro_location";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [location, setLocation] = useState(() => {
    try {
      const cached = localStorage.getItem(LOCATION_CACHE_KEY);
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  });

  const getLocation = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
          const res = await axios.get(url);
          setLocation(res.data);
          localStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify(res.data));
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
    if (!localStorage.getItem(LOCATION_CACHE_KEY)) getLocation();
  }, []);

  return (
    <ErrorBoundary>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <BrowserRouter>
        <Navbar location={location} />
        <DarkGradientBg>
          <main className="pt-16 sm:pt-[72px]">
            <Suspense fallback={<Loader fullscreen />}>
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
            </Suspense>
          </main>
          <Footer />
        </DarkGradientBg>
        <ToastContainer position="top-right" autoClose={2000} />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
