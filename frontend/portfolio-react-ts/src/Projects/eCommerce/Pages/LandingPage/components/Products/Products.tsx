import ProductModel from "../../../../Models/ProductModel";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Products: React.FC<{ product: ProductModel }> = (props) => {
  return (
    <Link to='/' className='product-card'>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant='top'
          src={require("../../../../Images/WunderTrain_blue_25.webp")}
          className='product-image'
        />
        <Card.Body>
          <Card.Title className='product-name'>{props.product.name}</Card.Title>
          <Card.Text className='product-price'>{props.product.price}</Card.Text>
          {/* <Button variant='primary'>Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
};
