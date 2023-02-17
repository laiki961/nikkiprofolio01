import React from "react";
import { useState } from "react";
import CategoryModel from "../Models/CategoryModel";
import ProductModel from "../Models/ProductModel";

const DUMMY_CATEGORIES: CategoryModel[] = [
  { id: 1, category: "Starter" },
  { id: 2, category: "Soups & Salads" },
  { id: 3, category: "Rice" },
  { id: 4, category: "Side" },
  { id: 5, category: "Curry" },
  { id: 6, category: "Noodles" },
  { id: 7, category: "Stir Fry" },
  { id: 8, category: "Desserts" },
];

const DUMMY_PRODUCT: ProductModel[] = [
  {
    id: 1,
    name: "Pad Thai",
    description: "Peanuts",
    category: [{ id: 1, category: "Boy" }],
    img: "../../Images/pad_thai.jpeg",
    price: 99.99,
  },
  {
    id: 2,
    name: "Nunc tincidunt, leo eu vestibulum convallis",
    description: "Mango Sticky Rice",
    category: [{ id: 8, category: "Desserts" }],
    img: "../../Images/rice-mango.jpeg",
    price: 199.99,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Jogger",
    category: [{ id: 6, category: "Noodles" }],
    img: "../../Images/pad_thai.jpeg",
    price: 59.99,
  },
  {
    id: 4,
    name: "Mango Sticky Rice",
    description: "Coconut Milk",
    category: [{ id: 8, category: "Desserts" }],
    img: ".../../Images/rice-mango.jpeg",
    price: 79.99,
  },
  {
    id: 5,
    name: "Mango Sticky Rice",
    description: "Coconut Milk",
    category: [{ id: 8, category: "Desserts" }],
    img: ".../../Images/rice-mango.jpeg",
    price: 79.99,
  },
  {
    id: 6,
    name: "Pad Thai",
    description: "Peanuts",
    category: [{ id: 1, category: "Boy" }],
    img: "../../Images/pad_thai.jpeg",
    price: 99.99,
  },
];

const RestaurantContext = React.createContext({
  onFetchProducts: (foods: ProductModel[]) => {},
  onFetchCategories: (categories: CategoryModel[]) => {},
  categories: [],
  products: [],
});

export const RestaurantContextProvider = (props: any) => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  const restaurantContext = {
    // onFetchProducts,
    // onFetchCategories,
  };

  // return (
  //   <RestaurantContext.Provider
  //     value={restaurantContext}
  //   ></RestaurantContext.Provider>
  // );
};

export default RestaurantContext;
