# Project Restructure Guide

## New Folder Structure Created

The project has been restructured according to the ideal React project structure. Here's what was created:

### 📁 New Directories

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── Button/
│   │   ├── Modal/
│   │   └── Loader/
│   ├── layout/          # Layout components
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Sidebar/
│   └── features/        # Feature-specific components
├── hooks/               # Custom React hooks
├── services/            # API and external services
├── utils/               # Helper functions & constants
├── styles/              # Global styles
├── theme/               # Theme configuration
├── types/               # Type definitions (JSDoc)
├── routes/              # Routing configuration
├── store/               # Redux store (optional)
│   └── slices/
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
```

## 📋 Files to Migrate

### Move Components to New Locations

**Layout Components:**
- `Navbar.jsx` → `src/components/layout/Header/` (rename to Navbar.jsx)
- `Footer.jsx` → `src/components/layout/Footer/` (already created)

**Common/Reusable Components:**
- `ProductCard.jsx` → `src/components/common/` or `src/components/features/`
- `Pagination.jsx` → `src/components/common/`
- `Carousel.jsx` → `src/components/common/`

**Feature Components:**
- `FilterSection.jsx` → `src/components/features/`
- `Features.jsx` → `src/components/features/`
- `MidBanner.jsx` → `src/components/features/`
- `Breadcrums.jsx` → `src/components/features/`
- `ProductListView.jsx` → `src/components/features/`
- `Catagory.jsx` → `src/components/features/`

### Context (Already organized)
- `CartContext.jsx` ✅ Already in `src/context/`
- `DataContext.jsx` ✅ Already in `src/context/`

### Pages (Already organized)
- All page files remain in `src/pages/` ✅

## ✨ New Files Created

### Hooks (`src/hooks/`)
- `useCart.js` - Hook for cart context
- `useProducts.js` - Hook for products context

### Services (`src/services/`)
- `api.js` - Centralized API calls

### Utils (`src/utils/`)
- `constants.js` - App constants
- `helpers.js` - Utility functions
- `validators.js` - Validation functions

### Theme (`src/theme/`)
- `theme.js` - Theme configuration

### Styles (`src/styles/`)
- `global.css` - Global styles

### Routes (`src/routes/`)
- `AppRoutes.jsx` - Centralized routing

### Components (`src/components/`)
- `common/Button/` - Reusable button component
- `common/Loader/` - Loading component
- `layout/Layout.jsx` - Main layout wrapper

### Store (`src/store/`)
- `index.js` - Redux store configuration

## 🔧 Next Steps

1. **Move existing component files** to their new locations
2. **Update import paths** in your application
3. **Delete old component files** from `src/components/` root
4. **Configure absolute imports** in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

5. **Update imports** to use absolute paths:
   ```javascript
   // Before
   import Button from '../../components/common/Button/Button'
   
   // After
   import Button from '@/components/common/Button/Button'
   ```

6. **Create index files** for barrel exports to simplify imports:
   ```javascript
   // src/components/index.js
   export * from './common'
   export * from './layout'
   export * from './features'
   ```

## 📚 Recommended Dependencies

```bash
npm install react-router-dom
npm install axios
npm install @reduxjs/toolkit react-redux  # if using Redux
npm install tailwindcss postcss autoprefixer
```

## 🎯 Best Practices

- Use custom hooks (`useCart`, `useProducts`) instead of direct context
- Use services for all API calls
- Keep components small and focused
- Export from index files for cleaner imports
- Use absolute imports with `@/` prefix
