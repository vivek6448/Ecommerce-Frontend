import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import NotFound from '../components/common/NotFound';
import { ROUTES } from './routeConfig';
import Home from '../pages/Home';
import Products from '../pages/Products';
import SingleProduct from '../pages/SingleProduct';
import CategoryProduct from '../pages/CategoryProduct';
import Cart from '../pages/Cart';
import About from '../pages/About';
import Contact from '../pages/Contact';

export const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<SingleProduct />} />
          <Route path={ROUTES.CATEGORY} element={<CategoryProduct />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};
