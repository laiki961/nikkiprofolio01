import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./Navbar.module.css";
// import { useState } from "react";
import CategoryModel, { Category } from "../../Models/CategoryModel";

const DUMMY_CATEGORIES: Category[] = [
  { id: 1, category: "Starter" },
  { id: 2, category: "Soups & Salads" },
  { id: 3, category: "Rice" },
  { id: 4, category: "Side" },
  { id: 5, category: "Curry" },
  { id: 6, category: "Noodles" },
  { id: 7, category: "Stir Fry" },
  { id: 8, category: "Desserts" },
];

function RestaurantNavbar() {
  // const [categories, setCategories] = useState<CategoryModel>();

  function renderCatgories() {
    const categories: JSX.Element[] = [];
    for (let category of DUMMY_CATEGORIES) {
      categories.push(
        <Nav.Link href={`/restaurant/${category.category}`} key={category.id}>
          {category.category}
        </Nav.Link>
      );
    }
    return categories;
  }

  return (
    <Navbar id={classes["restaurant-navbar"]}>
      <Container>
        <Navbar.Brand href='/restaurant' id={classes["navbar-brand-link"]}>
          Thai Awesome
        </Navbar.Brand>
        <Nav id={classes.shift}>
          {renderCatgories()}
          <Nav.Link href='/restaurant/menu'>Menu</Nav.Link>
          <Nav.Link href='/restaurant/reservation'>Reservation</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default RestaurantNavbar;
