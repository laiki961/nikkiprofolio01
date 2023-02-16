import { Container, Row, Col } from "react-bootstrap";
import ProductModel from "../../Models/ProductModel";
import { Products } from "./components/Products/Products";
import classes from "./HomePage.module.css";

const DUMMY_PRODUCT: ProductModel[] = [
  {
    id: 1,
    name: "Pad Thai",
    description: "Peanuts",
    category: [{ id: 1, category: "Boy" }],
    img: "../../Images/pad_thai.jpeg",
    price: 99.99,
  },
  {
    id: 2,
    name: "Nunc tincidunt, leo eu vestibulum convallis",
    description: "Mango Sticky Rice",
    category: [{ id: 8, category: "Desserts" }],
    img: "../../Images/rice-mango.jpeg",
    price: 199.99,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Jogger",
    category: [{ id: 6, category: "Noodles" }],
    img: "../../Images/pad_thai.jpeg",
    price: 59.99,
  },
  {
    id: 4,
    name: "Mango Sticky Rice",
    description: "Coconut Milk",
    category: [{ id: 8, category: "Desserts" }],
    img: ".../../Images/rice-mango.jpeg",
    price: 79.99,
  },
];

export function RestaurantLandingPage() {
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
