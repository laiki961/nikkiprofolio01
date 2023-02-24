import { Container } from "react-bootstrap";
import { Menu } from "./components/Menu/Menu";
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
