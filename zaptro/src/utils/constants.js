// Application constants

export const APP_NAME = 'Zaptro E-commerce';
export const APP_VERSION = '1.0.0';

// Pagination
export const ITEMS_PER_PAGE = 12;
export const MAX_PAGES = 5;

// Product filters
export const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $500', min: 100, max: 500 },
  { label: 'Above $500', min: 500, max: Infinity },
];

export const SORT_OPTIONS = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Most Popular', value: 'popular' },
];

// Messages
export const MESSAGES = {
  SUCCESS: 'Operation successful',
  ERROR: 'An error occurred',
  LOADING: 'Loading...',
  NOT_FOUND: 'Product not found',
};
