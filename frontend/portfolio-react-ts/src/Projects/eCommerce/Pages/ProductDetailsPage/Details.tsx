import { Row, Col, Container } from "react-bootstrap";
import { Breadcrumbs } from "../../../../Layouts/components/Breadcrumbs/Breadcrumbs";
import ProductModel, { Product } from "../../Models/ProductModel";
import classes from "./Details.module.css";

const DUMMY_PRODUCT: Product = {
  id: 1,
  name: "Product 1",
  description: "Pant",
  size: "4",
  category: [{ id: 1, category: "Boy" }],
  img: "../../Images/WunderTrain_black25.webp",
  price: 99.99,
};

//: React.FC<{ product: ProductModel }>
export const Details = (props: any) => {
  return (
    <Container className='product-details-container'>
      <Breadcrumbs product={DUMMY_PRODUCT} />
      <Row>
        <Col>
          <div id={classes["product-image-carousel"]}>
            <img
              className={classes["product-details-img"]}
              src={require("../../Images/WunderTrain_black25.webp")}
            ></img>
          </div>
        </Col>
        <Col>
          <div id={classes["product-details"]}>
            <h2>{DUMMY_PRODUCT.name}</h2>
            <div>Size:</div>
            <div>Color:</div>
            <div>
              {DUMMY_PRODUCT.price}
              <span> CAD</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
