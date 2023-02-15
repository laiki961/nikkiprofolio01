import { Category } from "./CategoryModel";

export type Product = {
  id: number;
  name: string;
  description: string;
  size: string;
  category: Category[];
};

class ProductModel {
  id: number;
  name: string;
  size: string;
  description: string;
  category: Category[];

  constructor(
    id: number,
    name: string,
    size: string,
    description: string,
    category: Category[]
  ) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.description = description;
    this.category = category;
  }
}

export default ProductModel;
