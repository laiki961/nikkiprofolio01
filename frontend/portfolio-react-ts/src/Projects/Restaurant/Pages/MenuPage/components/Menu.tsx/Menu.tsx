import { useContext, useEffect } from "react";
import ProductModel from "../../../../Models/ProductModel";
import { RestaurantContext } from "../../../../Store/restaurant-context";
import { Product } from "../Product/Product";
import classes from "./Menu.module.css";

const DUMMY_PRODUCT: ProductModel[] = [
  {
    id: 1,
    name: "Pad Thai",
    ingredients: "Peanuts",
    img: "../../Images/pad_thai.jpeg",
    category: "Noodles",
    price: 99.99,
    totalQuantity: 35,
    quantityAvailable: 23,
  },
  {
    id: 2,
    name: "Mango Sticky Rice",
    ingredients: "Nunc tincidunt, leo eu vestibulum convallis",
    img: "../../Images/rice-mango.jpeg",
    category: "Desserts",
    price: 199.99,
    totalQuantity: 100,
    quantityAvailable: 47,
  },
  {
    id: 3,
    name: "Product 3",
    ingredients: "Nunc tincidunt, leo eu vestibulum convallis",
    category: "Noodles",
    img: "../../Images/pad_thai.jpeg",
    price: 59.99,
    totalQuantity: 240,
    quantityAvailable: 68,
  },
  {
    id: 4,
    name: "Mango Sticky Rice",
    ingredients: "Coconut Milk",
    category: "Desserts",
    img: ".../../Images/rice-mango.jpeg",
    price: 79.99,
    totalQuantity: 220,
    quantityAvailable: 123,
  },
  {
    id: 5,
    name: "Mango Sticky Rice",
    ingredients: "Coconut Milk",
    category: "Desserts",
    img: ".../../Images/rice-mango.jpeg",
    price: 79.99,
    totalQuantity: 237,
    quantityAvailable: 143,
  },
  {
    id: 6,
    name: "Pad Thai",
    ingredients: "Peanuts",
    category: "Boy",
    img: "../../Images/pad_thai.jpeg",
    price: 99.99,
    totalQuantity: 220,
    quantityAvailable: 93,
  },
];

export const Menu = () => {
  const { products, isLoading, error } = useContext(RestaurantContext);

  // useEffect(()=>[products])

  return (
    <div id={classes["products-container"]}>
      {DUMMY_PRODUCT.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
