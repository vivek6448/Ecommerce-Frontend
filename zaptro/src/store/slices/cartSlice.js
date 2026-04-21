import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { id, action: direction } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (!item) return;
      if (direction === "increment") item.quantity += 1;
      if (direction === "decrement") {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
