import { Category } from "./CategoryModel";

class ProductModel {
  id: number;
  name: string;
  description: string;
  category: Category[];
  img?: string;
  price: number;

  constructor(
    id: number,
    name: string,
    description: string,
    category: Category[],
    img: string,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.img = img;
    this.price = price;
  }
}

export default ProductModel;
