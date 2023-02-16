import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./Navbar.module.css";
// import { useState } from "react";
import CategoryModel, { Category } from "../../Models/CategoryModel";

const DUMMY_CATEGORIES: Category[] = [
  { id: 1, category: "Boy" },
  { id: 2, category: "Girl" },
  { id: 3, category: "Men" },
  { id: 4, category: "Women" },
];

function RestaurantNavbar() {
  // const [categories, setCategories] = useState<CategoryModel>();

  function renderCatgories() {
    const categories: JSX.Element[] = [];
    for (let category of DUMMY_CATEGORIES) {
      categories.push(
        <Link
          to={`/ecommerce/${category.category}`}
          key={category.id}
          className='dropdown-item'
        >
          {category.category}
        </Link>
      );
    }
    return categories;
  }

  return (
    // <nav className='fill'>
    //   <ul>
    //     <li>
    //       <Nav.Link href='/restaurant/menu'>Menu</Nav.Link>
    //     </li>
    //     <li>
    //       <a href='#'>About</a>
    //     </li>
    //     <li>
    //       <a href='#'>Downloads</a>
    //     </li>
    //     <li>
    //       <a href='#'>More</a>
    //     </li>
    //     <li>
    //       <a href='#'>Nice staff</a>
    //     </li>
    //   </ul>
    // </nav>

    <Navbar id={classes["restaurant-navbar"]}>
      <Container>
        <Navbar.Brand href='/restaurant' id={classes["navbar-brand-link"]}>
          Thai Awesome
        </Navbar.Brand>
        <Nav id={classes.shift}>
          <Nav.Link href='/restaurant/menu'>Menu</Nav.Link>
          <Nav.Link href='/restaurant/starter'>Starter</Nav.Link>
          <Nav.Link href='/restaurant/soupsNsalads'>Soups & Salads</Nav.Link>
          <Nav.Link href='/restaurant/rice'>Rice</Nav.Link>
          <Nav.Link href='/restaurant/side'>Side</Nav.Link>
          <Nav.Link href='/restaurant/curry'>Curry</Nav.Link>
          <Nav.Link href='/restaurant/noodles'>Noodles</Nav.Link>
          <Nav.Link href='/restaurant/stirfry'>Stir Fry</Nav.Link>
          <Nav.Link href='/restaurant/desserts'>Desserts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default RestaurantNavbar;
