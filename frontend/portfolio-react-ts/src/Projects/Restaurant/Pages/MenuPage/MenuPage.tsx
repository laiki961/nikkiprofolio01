// import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Menu } from "./components/Menu.tsx/Menu";
import { MenuNavbar } from "./components/MenuNavbar/MenuNavbar";
import classes from "./MenuPage.module.css";

export function MenuPage() {
  return (
    <section id={classes.restaurant}>
      <Container>
        <MenuNavbar />
        <Menu />
      </Container>
    </section>
  );
}
