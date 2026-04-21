import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ENDPOINTS } from "../../services/endpoints";

export const fetchProducts = createAsyncThunk("data/fetchProducts", async (limit = 150) => {
  const response = await axios.get(ENDPOINTS.PRODUCTS_LIMIT(limit));
  return response.data.products;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
