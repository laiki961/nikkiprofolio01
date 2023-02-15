import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
// import { useState } from "react";
import CategoryModel, { Category } from "../../Models/CategoryModel";

const DUMMY_CATEGORIES: Category[] = [
  { id: 1, category: "Boy" },
  { id: 2, category: "Girl" },
  { id: 3, category: "Men" },
  { id: 4, category: "Women" },
];

function EcommerceNavbar() {
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
    <nav
      className={`navbar navbar-expand-lg p-3 mb-2 text-white ${classes["ecommerce-navbar"]}`}
    >
      <Link className='navbar-brand' to='/ecommerce'>
        eCommerce
      </Link>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <li className='nav-item dropdown'>
          <a
            className='nav-link dropdown-toggle'
            href='#'
            id='navbarDropdownMenuLink'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            Category
          </a>
          <div
            className='dropdown-menu'
            id={classes["dropdown-menu-category"]}
            aria-labelledby='navbarDropdownMenuLink'
          >
            {renderCatgories()}
            {/* <a className='dropdown-item' href='#'>
              Action
            </a> */}
          </div>
        </li>
      </div>
    </nav>
  );
}

export default EcommerceNavbar;
