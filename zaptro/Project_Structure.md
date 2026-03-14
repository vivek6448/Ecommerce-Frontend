# React Project Ideal Folder Structure

This structure is suitable for **scalable production React
applications**. Supports **Bootstrap, Material UI, and TailwindCSS**.

------------------------------------------------------------------------

# Tech Stack

-   React
-   TypeScript (recommended)
-   React Router
-   Axios / Fetch
-   Bootstrap
-   Material UI
-   TailwindCSS
-   Redux Toolkit / Context API
-   ESLint + Prettier

------------------------------------------------------------------------

# Project Structure

    src/
    │
    ├── assets/
    │   ├── images/
    │   ├── icons/
    │   └── fonts/
    │
    ├── components/
    │   ├── common/
    │   │   ├── Button/
    │   │   │   ├── Button.tsx
    │   │   │   └── Button.styles.ts
    │   │   ├── Modal/
    │   │   └── Loader/
    │   │
    │   ├── layout/
    │   │   ├── Header/
    │   │   ├── Sidebar/
    │   │   └── Footer/
    │
    ├── pages/
    │   ├── Home/
    │   │   ├── Home.tsx
    │   │   └── Home.module.css
    │   ├── Login/
    │   ├── Dashboard/
    │   └── NotFound/
    │
    ├── routes/
    │   ├── AppRoutes.tsx
    │   └── ProtectedRoute.tsx
    │
    ├── hooks/
    │   ├── useAuth.ts
    │   ├── useFetch.ts
    │   └── useDebounce.ts
    │
    ├── context/
    │   ├── AuthContext.tsx
    │   └── ThemeContext.tsx
    │
    ├── store/
    │   ├── index.ts
    │   └── slices/
    │       ├── userSlice.ts
    │       └── authSlice.ts
    │
    ├── services/
    │   ├── api.ts
    │   ├── authService.ts
    │   └── userService.ts
    │
    ├── utils/
    │   ├── helpers.ts
    │   ├── constants.ts
    │   └── validators.ts
    │
    ├── styles/
    │   ├── tailwind.css
    │   ├── bootstrap.scss
    │   └── global.css
    │
    ├── theme/
    │   └── muiTheme.ts
    │
    ├── types/
    │   ├── user.types.ts
    │   └── api.types.ts
    │
    ├── App.tsx
    ├── main.tsx
    └── vite-env.d.ts

------------------------------------------------------------------------

# Styling Strategy

## TailwindCSS

Use Tailwind for utility styling.

Example:

    <div className="flex items-center justify-between p-4 bg-gray-100">

------------------------------------------------------------------------

## Material UI

Use for complex UI components.

    import Button from '@mui/material/Button';

    <Button variant="contained">Save</Button>

------------------------------------------------------------------------

## Bootstrap

Use mainly for layout and grid system.

    <div className="container">
      <div className="row">
        <div className="col-md-6">

------------------------------------------------------------------------

# Theme Setup (Material UI)

    import { createTheme } from "@mui/material";

    export const theme = createTheme({
      palette: {
        primary: {
          main: "#1976d2"
        }
      }
    });

------------------------------------------------------------------------

# Best Practices

-   Keep components small and reusable
-   Use feature-based folder structure
-   Separate API logic from UI
-   Prefer custom hooks for reusable logic
-   Use absolute imports

Example:

    import Button from "@/components/common/Button"

------------------------------------------------------------------------

# Recommended VS Code Extensions

-   ES7+ React Snippets
-   Tailwind CSS IntelliSense
-   Prettier
-   ESLint
-   Auto Rename Tag
-   Path IntelliSense

------------------------------------------------------------------------

# Install Dependencies

    npm install react-router-dom axios
    npm install bootstrap
    npm install @mui/material @emotion/react @emotion/styled
    npm install tailwindcss postcss autoprefixer

------------------------------------------------------------------------

# Tailwind Setup

    npx tailwindcss init -p

Add to `tailwind.config.js`

    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ]
