import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useHttp from "../../../../hooks/use-http";
import Loading from "../../../../Layouts/components/Loading/Loading";
import ProductModel from "../../Models/ProductModel";
import classes from "./DetailsPage.module.css";

export const DetailsPage: React.FC<{}> = (props) => {
  const params = useParams();
  const { isLoading, error, sendRequest: fetchProduct } = useHttp();
  const [product, setProduct] = useState<ProductModel>();
  const [ingredients, setIngredients] = useState<[]>([]);

  useEffect(() => {
    const tranformedProduct = (responseData: any) => {
      const loadedProduct: ProductModel = {
        id: responseData.id,
        name: responseData.name,
        ingredients: responseData.ingredients,
        category: responseData.category,
        img: responseData.img,
        price: responseData.price,
        totalQuantity: responseData.totalQuantity,
        quantityAvailable: responseData.quantityAvailable,
      };
      setProduct(loadedProduct);

      const formattedIngredients: [] = responseData.ingredients
        .split(",")
        .map((ing: string) => ing.trim());
      setIngredients(formattedIngredients);
    };
    fetchProduct(
      {
        url: `http://localhost:8080/restaurant/api/productEntities/${params.productId}`,
      },
      tranformedProduct
    );
  }, [fetchProduct, params.productId]);

  let content: JSX.Element = <></>;
  if (isLoading) {
    content = <Loading />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !error && product && ingredients) {
    content = (
      <>
        <Col>
          <img
            alt='meal'
            src={require(`../../Images/pad_thai.jpeg`)}
            className={classes["product-image"]}
          />
        </Col>
        <Col xs={9}>
          <h3>Order your customize meal</h3>
          <p>Ingredients:</p>
          {product.ingredients}
        </Col>
      </>
    );
  }
  return (
    <section id={classes["product-details"]}>
      <Container>
        <Row className='my-5'>{content}</Row>
      </Container>
    </section>
  );
};
