// import Card from "../../../../Layouts/components/Card/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "../../Models/ProductModel";
import { Products } from "./components/Products/Products";
import classes from "./eCommerceHomePage.module.css";

const DUMMY_PRODUCT: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Pant",
    size: "4",
    category: [{ id: 1, category: "Boy" }],
    img: "../../Images/WunderTrain_black25.webp",
    price: 99.99,
  },
  {
    id: 2,
    name: "Nunc tincidunt, leo eu vestibulum convallis",
    description: "Parka",
    size: "6",
    category: [{ id: 3, category: "Men" }],
    img: "../../Images/WunderTrain_blue_25.webp",
    price: 199.99,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Jogger",
    size: "2",
    category: [{ id: 3, category: "Girl" }],
    img: "../../Images/WunderTrain_blue_25.webp",
    price: 59.99,
  },
  {
    id: 4,
    name: "ante enim convallis libero, et sodales",
    description: "Jogger",
    size: "2",
    category: [{ id: 3, category: "Girl" }],
    img: "../../Images/WunderTrain_blue_25.webp",
    price: 79.99,
  },
];

function ECommerceLandingPage() {
  return (
    <section id={classes.ecommerce}>
      <Container>
        <Row>
          {DUMMY_PRODUCT.map((product) => (
            <Col>
              <Products key={product.id} product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ECommerceLandingPage;
