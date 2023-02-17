import ProductModel from "../../../../Models/ProductModel";
import { Product } from "../Product/Product";
import classes from "./Menu.module.css";

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

export const Menu = () => {
  return (
    <div id={classes["products-container"]}>
      {DUMMY_PRODUCT.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
