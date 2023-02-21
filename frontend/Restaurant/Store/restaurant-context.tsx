import React, { useEffect } from "react";
import { useState } from "react";
import useHttp from "../../../hooks/use-http";
import CategoryModel from "../Models/CategoryModel";
import ProductModel from "../Models/ProductModel";

// const DUMMY_CATEGORIES: CategoryModel[] = [
//   { id: 1, category: "Starter" },
//   { id: 2, category: "Soups & Salads" },
//   { id: 3, category: "Rice" },
//   { id: 4, category: "Side" },
//   { id: 5, category: "Curry" },
//   { id: 6, category: "Noodles" },
//   { id: 7, category: "Stir Fry" },
//   { id: 8, category: "Desserts" },
// ];

const RestaurantContext = React.createContext({
  onFetchProducts: () => {},
  categories: [],
  products: [],
  isLoading: null,
  error: null,
});

export const RestaurantContextProvider = (props: any) => {
  const [searchUrl, setSearchUrl] = useState("");
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    isLoading: isFetchingData,
    error,
    sendRequest: fetchProducts,
    resetErrorHandler,
  } = useHttp();

  const setCateogry = (category) => {
    console.log(category);
    setCategory(category);
  };

  // useEffect(() => {}, []);

  const fetchProducts = async () => {
    const baseUrl: string = `http://localhost:8080/restaurant/api/productEntities`;
    // const baseUrl: string = `http://localhost:8080/public/product/`;
    let url: string = "";

    if (searchUrl === "") {
      url = `${baseUrl}?page=$`;
    }
  };

  const restaurantContext = {
    onFetchProducts: fetchProducts,
    isLoading: isFetchingData,
    products,
  };

  return (
    <RestaurantContext.Provider value={restaurantContext}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext;
