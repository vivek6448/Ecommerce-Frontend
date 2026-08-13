import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "./useCart";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // ✅ Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const itemInCart = prev.find((item) => item.id === product.id);

      if (itemInCart) {
        toast.info("Quantity increased");
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      toast.success("Item added to cart");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Increase / Decrease quantity
  const updateQuantity = (productId, action) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            let newQty = item.quantity;

            if (action === "increment") {
              newQty += 1;
              toast.info("Quantity increased");
            }

            if (action === "decrement") {
              newQty -= 1;
              if (newQty === 0) {
                toast.error("Item removed");
                return null;
              }
              toast.info("Quantity decreased");
            }

            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // ✅ Delete item
  const deleteItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast.error("Item removed from cart");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
