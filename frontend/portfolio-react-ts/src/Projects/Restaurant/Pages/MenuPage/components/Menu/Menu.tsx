import { useEffect, useState } from "react";
import useHttp from "../../../../../../hooks/use-http";
import Loading from "../../../../../../Layouts/components/Loading/Loading";
import ProductModel from "../../../../Models/ProductModel";
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
  const [products, setProducts] = useState<ProductModel[]>([]);
  const { isLoading, error, sendRequest: fetchProducts } = useHttp();

  useEffect(() => {
    const tranformProducts = (productsObj: any) => {
      const responseData = productsObj._embedded.productEntities;
      const loadedProducts: ProductModel[] = [];
      for (const key in responseData) {
        loadedProducts.push({
          id: responseData[key].id,
          name: responseData[key].name,
          ingredients: responseData[key].ingredients,
          category: responseData[key].category,
          img: responseData[key].img,
          price: responseData[key].price,
          totalQuantity: responseData[key].totalQuantity,
          quantityAvailable: responseData[key].quantityAvailable,
        });
      }
      setProducts(loadedProducts);
    };

    fetchProducts(
      {
        url: `http://localhost:8080/restaurant/api/productEntities`,
      },
      tranformProducts
    );
  }, [fetchProducts]);

  let content: JSX.Element = <></>;
  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !error && products) {
    content = (
      <>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </>
    );
  }

  return <div id={classes["products-container"]}>{content}</div>;
};

// <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
//   <div id={classes["products-container"]}>
//     <Await resolve={products}>
//       {/* {(loadedProducts: ProductModel[]) =>
//         loadedProducts.map((product) => (
//           <Product key={product.id} product={product} />
//         ))
//       } */}
//     </Await>
//   </div>
// </Suspense>

// async function loadProducts() {
//   const response = await fetch(
//     `http://localhost:8080/restaurant/api/productEntities`
//   );

//   if (!response.ok) {
//     throw new Error(
//       `Request Failed ${response.status}: ${response.statusText}`
//     );
//   }
//   const data = await response.json();
//   const convertedData = data._embedded.productEntities;
//   console.log(convertedData);
//   return convertedData;
// }

// export function loader() {
//   return defer({
//     products: loadProducts(),
//   });
// }
