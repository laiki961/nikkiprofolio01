import { Row, Col, Container } from "react-bootstrap";
import { Breadcrumbs } from "../../../../Layouts/components/Breadcrumbs/Breadcrumbs";
import ProductModel from "../../Models/ProductModel";
import classes from "./Details.module.css";

const DUMMY_PRODUCT: ProductModel = {
  id: 1,
  name: "Pad Thai",
  description: "Pant",
  category: [{ id: 6, category: "Noodles" }],
  img: "../../Images/pad_thai.jpeg",
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
              src={require("../../Images/pad_thai.jpeg")}
            ></img>
          </div>
        </Col>
        <Col>
          <div id={classes["product-details"]}>
            <h2>{DUMMY_PRODUCT.name}</h2>
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
