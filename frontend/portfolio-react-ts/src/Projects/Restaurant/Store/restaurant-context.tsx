import React, { useEffect } from "react";
import { useState } from "react";
import useHttp from "../../../hooks/use-http";
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

type RestaurantContextObj = {
  products: ProductModel[];
  onFetch: (url: string) => void;
  isLoading: boolean;
  error: boolean;
  urlParam: (urlParam: string) => void;
};

export const RestaurantContext = React.createContext<RestaurantContextObj>({
  onFetch: (url: string) => {},
  products: [],
  isLoading: false,
  error: false,
  urlParam: (urlParam: string) => {},
});

export const RestaurantContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [searchUrl, setSearchUrl] = useState<string>("");
  //const [category, setCategory] = useState<string>("");
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // const setCateogry = (category: string) => {
  //   console.log(category);
  //   setCategory(category);
  // };

  useEffect(() => {
    // onFetch();
    setProducts([]);
    searchUrl && onFetch();
  }, [searchUrl]);

  const urlParam = (urlParam: string) => {
    setSearchUrl(urlParam);
  };

  const onFetch = async () => {
    const baseUrl: string = `http://localhost:8080/restaurant/api/productEntities`;
    // const baseUrl: string = `http://localhost:8080/public/product/`;

    let url: string = "";
    if (searchUrl === "") {
      url = `${baseUrl}?page=0`;
    } else {
      url = baseUrl + searchUrl;
    }

    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Request Failed ${response.status}: ${response.statusText}`
        );
      }
      const responseJson = await response.json();
      const responseData = responseJson._embedded.productEntities;

      // const loadedProducts: ProductModel[] = [];
      // for (const key in responseData) {
      //   loadedProducts.push({
      //     id: responseData[key].id,
      //     name: responseData[key].name,
      //     category: responseData[key].category,
      //     ingredients: responseData[key].ingredients,
      //     price: responseData[key].price,
      //     totalQuantity: responseData[key].totalQuantity,
      //     quantityAvailable: responseData[key].quantityAvailable,
      //   });
      // }
      setProducts(responseData);
    } catch (error: any) {
      setError(error.message || `Something went wrong`);
    }
    setIsLoading(false);
  };

  const restaurantContext: RestaurantContextObj = {
    onFetch,
    isLoading,
    products,
    error,
    urlParam,
  };

  return (
    <RestaurantContext.Provider value={restaurantContext}>
      {props.children}
    </RestaurantContext.Provider>
  );
};
