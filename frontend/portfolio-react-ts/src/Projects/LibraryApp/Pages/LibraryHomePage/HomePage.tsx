import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";
import classes from "../Library.module.css";
//import { SearchBooksPage } from "../SearchBooksPage/SearchBooksPage_copy";
import { SearchBooksPage } from "../SearchBooksPage/SearchBooksPage";

const HomePage = () => {
  return (
    <section id={classes["library-section"]}>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      {/* <SearchBooksPage /> */}
    </section>
  );
};

export default HomePage;
