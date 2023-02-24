import ProductModel from "../../../../Models/ProductModel";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "../../MenuPage.module.css";

export const Product: React.FC<{ product: ProductModel }> = (props) => {
  return (
    <Link to={`/restaurant/${props.product.id}`} className='p-2 '>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant='top'
          src={require("../../../../Images/pad_thai.jpeg")}
          className='product-image'
        />
        <Card.Body>
          <Card.Title className={classes["product-name"]}>
            {props.product.name}
          </Card.Title>
          <Card.Text className={classes["product-price"]}>
            ${props.product.price}
          </Card.Text>
          {/* <Button variant='primary'>Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
};
