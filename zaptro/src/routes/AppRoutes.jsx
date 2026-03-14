import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/category/:name" element={<CategoryProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};
