/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useState } from "react";
import axios from "axios";


export const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
    const [data, setData] = useState();

    //Fetching all Products from Api
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products?limit=150");
            const productsData = response.data.products;
            setData(productsData);
            console.log("response", productsData);
        } catch (error) {
            console.log(error)
        }
    }
    const getUniqueCategories = (data, property) => {
        let newVAL = data?.map((curElem) => {
            return curElem[property]
        })
        return ["All", ...new Set(newVAL)]
    }
    const categoryOnlyData = getUniqueCategories(data, "category")
    console.log(categoryOnlyData);
    const brandOnlyData = getUniqueCategories(data, "brand")
    return (
        <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}>
            {children}
        </DataContext.Provider>
    )
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getData = () => useContext(DataContext);