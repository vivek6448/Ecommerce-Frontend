// API service for handling all HTTP requests
// Import axios or fetch API here

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Product endpoints
export const productService = {
  getAllProducts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw error;
    }
  },

  getProductById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch product:', error);
      throw error;
    }
  },

  getProductsByCategory: async (category) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch products by category:', error);
      throw error;
    }
  },
};

// Cart endpoints
export const cartService = {
  addToCart: async (productId, quantity) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity }),
      });
      return await response.json();
    } catch (error) {
      console.error('Failed to add to cart:', error);
      throw error;
    }
  },

  removeFromCart: async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/remove/${productId}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      console.error('Failed to remove from cart:', error);
      throw error;
    }
  },
};
