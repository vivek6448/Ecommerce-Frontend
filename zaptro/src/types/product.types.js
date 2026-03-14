/**
 * Product Type Definitions
 * These are JSDoc type definitions for JavaScript
 */

/**
 * @typedef {Object} Product
 * @property {number} id - Product ID
 * @property {string} name - Product name
 * @property {string} description - Product description
 * @property {number} price - Product price
 * @property {string} category - Product category
 * @property {string} image - Product image URL
 * @property {number} rating - Product rating (0-5)
 * @property {number} reviews - Number of reviews
 * @property {boolean} inStock - Whether product is in stock
 * @property {number} discount - Discount percentage
 */

/**
 * @typedef {Object} CartItem
 * @property {number} productId - Product ID
 * @property {string} productName - Product name
 * @property {number} price - Unit price
 * @property {number} quantity - Quantity in cart
 * @property {string} image - Product image URL
 */

/**
 * @typedef {Object} Category
 * @property {number} id - Category ID
 * @property {string} name - Category name
 * @property {string} icon - Category icon URL
 * @property {string} description - Category description
 */
