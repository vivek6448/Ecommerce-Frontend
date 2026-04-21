# React Project — Complete Folder Structure Guide

> **Golden Rule**: Every file must stay **under 300 lines**. Split logic into hooks, utils, or sub-components when approaching this limit.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React + TypeScript |
| **Routing** | React Router v6 |
| **HTTP** | Axios |
| **UI Libraries** | Bootstrap · Material UI · TailwindCSS |
| **State** | Redux Toolkit / Context API |
| **Linting** | ESLint + Prettier |
| **Build Tool** | Vite |

---

## 📦 Install Dependencies

```bash
# Core
npm install react-router-dom axios

# UI Libraries
npm install bootstrap
npm install @mui/material @emotion/react @emotion/styled

# Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 📁 Root Structure

```
my-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── features/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── store/
│   ├── styles/
│   ├── theme/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .env.example
├── tailwind.config.js
└── package.json
```

---

## 📁 Detailed Source Structure

```
src/
│
├── assets/                            # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/                        # Shared, reusable UI components
│   ├── common/                        # App-level utility components
│   │   ├── ErrorBoundary.tsx
│   │   ├── PageLoader.tsx
│   │   └── NotFound.tsx
│   ├── layout/                        # Header / Sidebar / Footer
│   │   ├── Header/
│   │   │   ├── Header.tsx             # <300 lines
│   │   │   └── Header.module.css
│   │   ├── Sidebar/
│   │   └── Footer/
│   └── ui/                            # Design-system primitives
│       ├── Button/
│       │   ├── Button.tsx             # <300 lines
│       │   ├── Button.styles.ts
│       │   └── index.ts
│       ├── Input/
│       │   ├── Input.tsx
│       │   └── index.ts
│       ├── Modal/
│       │   ├── Modal.tsx
│       │   └── index.ts
│       └── Spinner/
│           ├── Spinner.tsx
│           └── index.ts
│
├── context/                           # React Context providers
│   ├── AuthContext.tsx                # Auth state via Context API
│   └── ThemeContext.tsx               # Global theme toggle
│
├── features/                          # Feature-based modules (co-locate everything)
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx          # <300 lines
│   │   │   ├── RegisterForm.tsx       # <300 lines
│   │   │   └── ForgotPassword.tsx     # <300 lines
│   │   ├── hooks/
│   │   │   ├── useLogin.ts
│   │   │   ├── useRegister.ts
│   │   │   └── useAuth.ts
│   │   ├── services/
│   │   │   └── auth.service.ts        # API calls only, no UI logic
│   │   ├── store/
│   │   │   ├── authSlice.ts
│   │   │   └── authSelectors.ts
│   │   └── index.ts                   # Public API of the feature
│   │
│   ├── dashboard/
│   │   ├── components/
│   │   │   ├── DashboardStats.tsx
│   │   │   └── DashboardChart.tsx
│   │   ├── hooks/
│   │   │   └── useDashboard.ts
│   │   └── index.ts
│   │
│   └── profile/
│       ├── components/
│       │   ├── ProfileForm.tsx
│       │   └── AvatarUpload.tsx
│       ├── hooks/
│       │   └── useProfile.ts
│       └── index.ts
│
├── hooks/                             # Global / shared custom hooks
│   ├── useAuth.ts                     # Reads from store or context
│   ├── useDebounce.ts
│   ├── useFetch.ts
│   ├── useLocalStorage.ts
│   └── useWindowSize.ts
│
├── layouts/                           # Page layout wrappers
│   ├── AuthLayout.tsx                 # For login / register pages
│   ├── MainLayout.tsx                 # For authenticated pages (with sidebar/nav)
│   └── PublicLayout.tsx               # For public / marketing pages
│
├── pages/                             # Route-level page components — thin, delegate to features
│   ├── Home/
│   │   ├── Home.tsx                   # <50 lines
│   │   └── Home.module.css
│   ├── Login/
│   │   └── LoginPage.tsx
│   ├── Dashboard/
│   │   └── DashboardPage.tsx
│   ├── Profile/
│   │   └── ProfilePage.tsx
│   └── NotFound/
│       └── NotFoundPage.tsx
│
├── routes/                            # All routing + guard logic lives here
│   ├── index.tsx                      # Root router — wires all routes
│   ├── routeConfig.ts                 # Centralized route path constants
│   ├── PrivateRoute.tsx               # Blocks unauthenticated users
│   ├── PublicRoute.tsx                # Blocks already-logged-in users
│   └── RoleRoute.tsx                  # Role-based access guard
│
├── services/                          # API layer — no business logic here
│   ├── api.ts                         # Axios instance + interceptors
│   ├── authService.ts                 # Auth API calls
│   ├── userService.ts                 # User API calls
│   └── endpoints.ts                   # All endpoint strings in one place
│
├── store/                             # Redux Toolkit global store
│   ├── index.ts                       # Store setup + middleware
│   ├── rootReducer.ts
│   └── slices/
│       ├── authSlice.ts
│       └── userSlice.ts
│
├── styles/                            # Global style entry points
│   ├── global.css                     # CSS resets + base styles
│   ├── tailwind.css                   # Tailwind directives
│   └── bootstrap.scss                 # Bootstrap overrides / partials
│
├── theme/                             # MUI theme configuration
│   └── muiTheme.ts
│
├── types/                             # Shared TypeScript types
│   ├── user.types.ts
│   └── api.types.ts
│
├── utils/                             # Pure functions, no side effects
│   ├── constants.ts                   # App-wide constants
│   ├── formatters.ts                  # Date, currency, string helpers
│   ├── validators.ts                  # Form validation helpers
│   └── tokenStorage.ts               # get / set / remove token from localStorage
│
├── App.tsx                            # Root: wraps router + global providers
├── main.tsx                           # ReactDOM.createRoot entry point
└── vite-env.d.ts
```

---

## 🔐 Authentication Guards

Three layered guards cover every auth scenario.

### `routes/routeConfig.ts` — Centralized Route Constants

```ts
// routes/routeConfig.ts
export const ROUTES = {
  HOME:      "/",
  LOGIN:     "/login",
  REGISTER:  "/register",
  FORGOT:    "/forgot-password",
  DASHBOARD: "/dashboard",
  PROFILE:   "/profile",
  ADMIN:     "/admin",
  NOT_FOUND: "*",
} as const;
```

---

### `routes/PrivateRoute.tsx` — Block Unauthenticated Users

```tsx
// routes/PrivateRoute.tsx  (~30 lines)
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import PageLoader from "@/components/common/PageLoader";

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <PageLoader />;

  return isAuthenticated
    ? <Outlet />
    : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
```

---

### `routes/PublicRoute.tsx` — Block Already Logged-In Users

```tsx
// routes/PublicRoute.tsx  (~25 lines)
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import PageLoader from "@/components/common/PageLoader";

const PublicRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <PageLoader />;

  return isAuthenticated
    ? <Navigate to="/dashboard" replace />
    : <Outlet />;
};

export default PublicRoute;
```

---

### `routes/RoleRoute.tsx` — Role-Based Access Control

```tsx
// routes/RoleRoute.tsx  (~35 lines)
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import NotFound from "@/components/common/NotFound";

interface RoleRouteProps {
  allowedRoles: string[];
}

const RoleRoute = ({ allowedRoles }: RoleRouteProps) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user?.role ?? "")) return <NotFound />;

  return <Outlet />;
};

export default RoleRoute;
```

---

### `routes/index.tsx` — Root Router

```tsx
// routes/index.tsx  (~65 lines)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routeConfig";

import PrivateRoute  from "./PrivateRoute";
import PublicRoute   from "./PublicRoute";
import RoleRoute     from "./RoleRoute";

import AuthLayout    from "@/layouts/AuthLayout";
import MainLayout    from "@/layouts/MainLayout";

import LoginPage        from "@/pages/Login/LoginPage";
import RegisterPage     from "@/pages/Register/RegisterPage";
import DashboardPage    from "@/pages/Dashboard/DashboardPage";
import ProfilePage      from "@/pages/Profile/ProfilePage";
import AdminPage        from "@/pages/Admin/AdminPage";
import NotFoundPage     from "@/pages/NotFound/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>

      {/* Public only — redirect to /dashboard if already logged in */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN}    element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.FORGOT}   element={<ForgotPasswordPage />} />
        </Route>
      </Route>

      {/* Private — must be logged in */}
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.PROFILE}   element={<ProfilePage />} />

          {/* Role-based — admin only */}
          <Route element={<RoleRoute allowedRoles={["admin"]} />}>
            <Route path={ROUTES.ADMIN} element={<AdminPage />} />
          </Route>
        </Route>
      </Route>

      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
```

---

## 🪝 Auth Hook

### `hooks/useAuth.ts` — Single Source of Truth for Auth State

```ts
// hooks/useAuth.ts  (~40 lines)
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import type { RootState } from "@/store";

export const useAuth = () => {
  const dispatch        = useDispatch();
  const user            = useSelector((s: RootState) => s.auth.user);
  const isAuthenticated = useSelector((s: RootState) => s.auth.isAuthenticated);
  const isLoading       = useSelector((s: RootState) => s.auth.isLoading);

  const handleLogout = () => dispatch(logout());

  return { user, isAuthenticated, isLoading, logout: handleLogout };
};
```

---

## 🌐 API Layer

### `services/api.ts` — Axios Instance + Interceptors

```ts
// services/api.ts  (~55 lines)
import axios from "axios";
import { getToken, removeToken } from "@/utils/tokenStorage";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
});

// Attach Bearer token to every request
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auto-handle 401 — token expired or invalid
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
```

---

## 🎨 Styling Strategy

### TailwindCSS — Utility Styling

```tsx
// Utility classes directly on JSX
<div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
  <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
</div>
```

`tailwind.config.js`:
```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

---

### Material UI — Complex Components

```tsx
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

<Button variant="contained" color="primary">Save</Button>
<TextField label="Email" variant="outlined" fullWidth />
```

---

### Bootstrap — Layout & Grid

```tsx
<div className="container">
  <div className="row">
    <div className="col-md-8">Main Content</div>
    <div className="col-md-4">Sidebar</div>
  </div>
</div>
```

---

## 🎨 MUI Theme Setup

### `theme/muiTheme.ts`

```ts
// theme/muiTheme.ts  (~40 lines)
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary:   { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});
```

Wrap in `App.tsx`:
```tsx
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/muiTheme";

<ThemeProvider theme={theme}>
  <AppRouter />
</ThemeProvider>
```

---

## 📐 Absolute Imports (Vite)

`vite.config.ts`:
```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
```

Usage:
```ts
import Button from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";
```

---

## ✅ Key Rules Summary

| Rule | Detail |
|------|--------|
| **File size** | Every file **< 300 lines** — split into hooks/utils if growing |
| **TypeScript** | Use `.ts` / `.tsx` throughout; define types in `types/` |
| **PrivateRoute** | Wraps all authenticated pages; redirects to `/login` if not authed |
| **PublicRoute** | Wraps login/register; redirects to `/dashboard` if already authed |
| **RoleRoute** | Takes `allowedRoles` prop; shows 404 if role doesn't match |
| **useAuth** | Single hook to read auth state — no direct store access in components |
| **Token** | Stored/read via `utils/tokenStorage.ts` — never hardcoded |
| **API interceptor** | Auto-attaches token; auto-handles 401 expiry globally |
| **Feature folders** | Each feature owns its components, hooks, services, and store slice |
| **Pages are thin** | Pages only import and compose — logic lives in feature hooks |
| **Route config** | All route strings in `routeConfig.ts` — no magic strings in components |
| **Styling** | Tailwind for utilities, MUI for complex components, Bootstrap for grid |
| **No custom CSS** | Use only Tailwind utility classes — no `.css` / `.module.css` / `style={{}}` files; extract repeated patterns into reusable components instead |
| **No empty files/folders** | Every file must have real content and every folder must contain at least one file — delete placeholders, stubs, and unused scaffolding immediately |
| **Absolute imports** | Always use `@/` prefix — no relative `../../` chains |

---

## 🧩 Recommended VS Code Extensions

- ES7+ React / Redux / React-Native Snippets
- Tailwind CSS IntelliSense
- Prettier — Code Formatter
- ESLint
- Auto Rename Tag
- Path IntelliSense
- Material Icon Theme
