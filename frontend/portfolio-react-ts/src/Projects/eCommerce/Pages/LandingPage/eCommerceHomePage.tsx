import { useEffect, useState } from "react";
import Card from "../../../../Layouts/components/Card/Card";
import ProductModel, { Product } from "../../Models/ProductModel";
import classes from "./eCommerceHomePage.module.css";

const DUMMY_PRODUCT = [
  {
    id: 1,
    name: "Product 1",
    description: "Pant",
    size: "4",
    category: { id: 1, category: "Boy" },
  },
  {
    id: 2,
    name: "Product 2",
    description: "Parka",
    size: "6",
    category: { id: 3, category: "Men" },
  },
  {
    id: 3,
    name: "Product 3",
    description: "Jogger",
    size: "2",
    category: { id: 3, category: "Girl" },
  },
];

function ECommerceLandingPage() {
  const [products, setProudcts] = useState<ProductModel[]>([]);

  useEffect(() => {
    const loadedProducts: ProductModel[] = [];
    for (const key in DUMMY_PRODUCT) {
      loadedProducts.push({
        id: DUMMY_PRODUCT[key].id,
        name: DUMMY_PRODUCT[key].name,
        description: DUMMY_PRODUCT[key].description,
        size: DUMMY_PRODUCT[key].size,
        category: [
          {
            id: DUMMY_PRODUCT[key].category.id,
            category: DUMMY_PRODUCT[key].category.category,
          },
        ],
      });
    }
    setProudcts(loadedProducts);
  });

  return (
    <section id={classes.ecommerce}>
      <div>eCommerceLandingPage </div>
      {products.length > 0
        ? products.map((product) => (
            <Card className='ecommerce-product-card'>
              {product.id}
              {product.name}
            </Card>
          ))
        : "No products yet"}
    </section>
  );
}

export default ECommerceLandingPage;
