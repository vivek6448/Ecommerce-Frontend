/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  const fetchAllProducts = useCallback(async () => {
    if (data) return;
    try {
      const response = await axios.get("https://dummyjson.com/products?limit=150");
      setData(response.data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, [data]);

  const categoryOnlyData = useMemo(() => {
    const values = data?.map((item) => item.category) ?? [];
    return ["All", ...new Set(values)];
  }, [data]);

  const brandOnlyData = useMemo(() => {
    const values = data?.map((item) => item.brand).filter(Boolean) ?? [];
    return ["All", ...new Set(values)];
  }, [data]);

  const value = useMemo(
    () => ({ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }),
    [data, fetchAllProducts, categoryOnlyData, brandOnlyData]
  );

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);