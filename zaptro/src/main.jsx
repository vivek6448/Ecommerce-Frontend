import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/DataContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Loader from "./components/common/Loader/Loader.jsx";

const ClerkProvider = lazy(() =>
  import("@clerk/clerk-react").then((m) => ({ default: m.ClerkProvider }))
);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <DataProvider>
      <Suspense fallback={<Loader fullscreen />}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </Suspense>
    </DataProvider>
  </CartProvider>
);
