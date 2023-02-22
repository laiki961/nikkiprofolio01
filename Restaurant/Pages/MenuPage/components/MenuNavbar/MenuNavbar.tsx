import { NavLink } from "react-router-dom";
import classes from "./MenuNavbar.module.css";

const DUMMY_CATEGORIES: any = [
  { id: 1, category: "Starter" },
  // { id: 2, category: "Soups & Salads" },
  { id: 3, category: "Rice" },
  // { id: 4, category: "Side" },
  // { id: 5, category: "Curry" },
  { id: 6, category: "Noodles" },
  // { id: 7, category: "Stir Fry" },
  { id: 8, category: "Desserts" },
];

export function MenuNavbar() {
  return (
    <nav id={classes["menu-categories"]}>
      {DUMMY_CATEGORIES.map((category: any) => (
        <NavLink
          key={category.id}
          to={`/restaurant/${category}`}
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes["category-link"]}`
              : classes["category-link"]
          }
        >
          {category.category}
        </NavLink>
      ))}
    </nav>
  );
}
