import ProductModel from "../../../../Models/ProductModel";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";

export const Product: React.FC<{ product: ProductModel }> = (props) => {
  return (
    // <Link to={`/restaurant/${props.product.id}`} className='p-2 '>
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img
    //       variant='top'
    //       src={require("../../../../Images/pad_thai.jpeg")}
    //       className='product-image'
    //     />
    //     <Card.Body>
    //       <Card.Title className={classes["product-name"]}>
    //         {props.product.name}
    //       </Card.Title>
    //       <Card.Text className={classes["product-price"]}>
    //         ${props.product.price}
    //       </Card.Text>
    //       {/* <Button variant='primary'>Go somewhere</Button> */}
    //     </Card.Body>
    //   </Card>
    // </Link>

    <Link
      to={`/restaurant/${props.product.id}`}
      className={`p-2 ${classes["product-link"]}`}
    >
      <Card>
        <Card.Body className={classes["product-card-container"]}>
          <Card.Img
            variant='left'
            src={require("../../../../Images/pad_thai.jpeg")}
            className={classes["product-img"]}
          />
          <div className={classes["product-info-container"]}>
            <Card.Title>
              {props.product.name}
              <span className={classes["product-price"]}>
                $ {props.product.price}
              </span>
            </Card.Title>
            <div className={classes["product-info"]}>
              <i className={classes["product-ingredients"]}>
                {props.product.ingredients}
              </i>
              <div>
                <button className={classes["product-button"]}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};
