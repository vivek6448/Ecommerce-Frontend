const BASE = "https://dummyjson.com";

export const ENDPOINTS = {
  PRODUCTS_ALL: `${BASE}/products`,
  PRODUCTS_LIMIT: (limit) => `${BASE}/products?limit=${limit}`,
  PRODUCT_BY_ID: (id) => `${BASE}/products/${id}`,
  PRODUCTS_BY_CATEGORY: (category) => `${BASE}/products/category/${category}`,
  CATEGORIES: `${BASE}/products/categories`,
};
