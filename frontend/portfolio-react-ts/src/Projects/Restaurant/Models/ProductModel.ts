import { Category } from "./CategoryModel";

class ProductModel {
  id: number;
  name: string;
  ingredients: string;
  category: string;
  img?: string;
  price: number;
  totalQuantity: number;
  quantityAvailable: number;

  constructor(
    id: number,
    name: string,
    ingredients: string,
    category: string,
    img: string,
    price: number,
    totalQuantity: number,
    quantityAvailable: number
  ) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.category = category;
    this.img = img;
    this.price = price;
    this.totalQuantity = totalQuantity;
    this.quantityAvailable = quantityAvailable;
  }
}

// class ProductModel {
//   id: number;
//   name: string;
//   description: string;
//   category: Category[];
//   img?: string;
//   price: number;

//   constructor(
//     id: number,
//     name: string,
//     description: string,
//     category: Category[],
//     img: string,
//     price: number
//   ) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.category = category;
//     this.img = img;
//     this.price = price;
//   }
// }

export default ProductModel;
