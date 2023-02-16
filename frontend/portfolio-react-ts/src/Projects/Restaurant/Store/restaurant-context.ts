import React from "react";
import ProductModel from "../Models/ProductModel";

export const RestaurantContext = React.createContext({
  onFetch: (foods: ProductModel[]) => {},
});
