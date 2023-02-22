import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./Navbar.module.css";

function RestaurantNavbar() {
  return (
    <Navbar id={classes["restaurant-navbar"]}>
      <Container>
        <Navbar.Brand href='/restaurant' id={classes["navbar-brand-link"]}>
          Thai Awesome
        </Navbar.Brand>
        <Nav id={classes.shift}>
          <Nav.Link href='/restaurant/menu'>Menu</Nav.Link>
          <Nav.Link href='/restaurant/reservation'>Reservation</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default RestaurantNavbar;
