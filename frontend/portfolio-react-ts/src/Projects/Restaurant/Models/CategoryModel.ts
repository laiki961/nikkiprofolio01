export type Category = {
  id: number;
  category: string;
};

class CategoryModel {
  id: number;
  category: string;

  constructor(id: number, category: string) {
    this.id = id;
    this.category = category;
  }
}

export default CategoryModel;
