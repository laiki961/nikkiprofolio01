import { useEffect, useState } from "react";
import { Await, defer, redirect, useRouteLoaderData } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import BookModel from "../../Models/BookModel";
import { Pagination } from "../../Utils/Pagination";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { SearchBook } from "./components/SearchBook";

export const SearchBooksPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  const { isLoading, error, sendRequest: fetchBooks } = useHttp();
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);
  const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [searchUrl, setSearchUrl] = useState("");
  const [categorySelection, setCategorySelection] = useState("Book category");

  const responseBooksData = (responseData: any) => {
    const books = responseData._embedded.books;
    setTotalAmountOfBooks(responseData.page.totalElements);
    setTotalPages(responseData.page.totalPages);

    const loadedBooks: BookModel[] = [];
    for (const key in books) {
      loadedBooks.push({
        id: responseData[key].id,
        title: responseData[key].title,
        author: responseData[key].author,
        description: responseData[key].description,
        copies: responseData[key].copies,
        copiesAvailable: responseData[key].copiesAvailable,
        category: responseData[key].category,
        img: responseData[key].img,
      });
    }
    setBooks(loadedBooks);
  };

  useEffect(() => {
    const baseUrl: string = "http://localhost:8080/api/books";
    let url: string = "";

    if (searchUrl === "") {
      url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
    } else {
      url = baseUrl + searchUrl;
    }

    fetchBooks(
      {
        url: url,
      },
      responseBooksData
    );
    console.log(error);
    setHttpError(error);
    window.scrollTo(0, 0);
  }, [currentPage, searchUrl]);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className='container m-5'>
        <p>{httpError}</p>
      </div>
    );
  }

  const searchHandleChange = () => {
    if (search === "") {
      setSearchUrl("");
    } else {
      setSearchUrl(
        `/search/findByTitleContaining?title=${search}&page=0size=${booksPerPage}`
      );
    }
  };

  const categoryField = (value: string) => {
    if (
      value.toLowerCase() === "fe" ||
      value.toLowerCase() === "be" ||
      value.toLowerCase() === "data" ||
      value.toLowerCase() === "devops"
    ) {
      setCategorySelection(value);
      setSearchUrl(
        `/search/findByCategory?category=${value}&page=0size=${booksPerPage}`
      );
    } else {
      setCategorySelection("All");
      setSearchUrl(`?page=0size=${booksPerPage}`);
    }
  };

  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook: number = indexOfLastBook - booksPerPage;

  let lastItem =
    booksPerPage * currentPage <= totalAmountOfBooks
      ? booksPerPage * currentPage
      : totalAmountOfBooks;

  const paignate = (pageNumber: number) => setCurrentPage(pageNumber);

  ///////////////////
  // const responseBooksData = (responseData: any) => {
  //   const books = responseData._embedded.books;
  //   setTotalAmountOfBooks(responseData.page.totalElements);
  //   setTotalPages(responseData.page.totalPages);

  //   const loadedBooks: BookModel[] = [];
  //   for (const key in books) {
  //     loadedBooks.push({
  //       id: responseData[key].id,
  //       title: responseData[key].title,
  //       author: responseData[key].author,
  //       description: responseData[key].description,
  //       copies: responseData[key].copies,
  //       copiesAvailable: responseData[key].copiesAvailable,
  //       category: responseData[key].category,
  //       img: responseData[key].img,
  //     });
  //   }
  //   setBooks(loadedBooks);
  // };

  return (
    <div>
      <div className='container'>
        <div>
          <div className='row mt-5'>
            <div className='col-6'>
              <div className='d-flex'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-labelledby='Search'
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className='btn btn-online-success'
                  onClick={() => searchHandleChange()}
                >
                  Search
                </button>
              </div>
            </div>
            <div className='col-4'>
              <div className='dropdown'>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMeunButton1'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {categorySelection}
                </button>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='dropdownMeunButton1'
                >
                  <li onClick={() => categoryField("All")}>
                    <a className='dropdown-item' href='#'>
                      All
                    </a>
                  </li>
                  <li onClick={() => categoryField("FE")}>
                    <a className='dropdown-item' href='#'>
                      Front End
                    </a>
                  </li>
                  <li onClick={() => categoryField("BE")}>
                    <a className='dropdown-item' href='#'>
                      Back End
                    </a>
                  </li>
                  <li onClick={() => categoryField("Data")}>
                    <a className='dropdown-item' href='#'>
                      Data
                    </a>
                  </li>
                  <li onClick={() => categoryField("DevOps")}>
                    <a className='dropdown-item' href='#'>
                      DevOps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {totalAmountOfBooks > 0 ? (
            <>
              {" "}
              <div className='mt-3'>
                <h5>Number of result: ({totalAmountOfBooks})</h5>
              </div>
              <p>
                {indexOfFirstBook + 1} to {lastItem} of {totalAmountOfBooks}{" "}
                items:
              </p>
              {books.map((book) => (
                <SearchBook book={book} key={book.id} />
              ))}
            </>
          ) : (
            <div className='m-5'>
              <h3>Can't find what you are looking for?</h3>
              <a
                type='button'
                className='btn main-color btn-md px-4 me-md-2 fw-bold text-white'
              >
                Library Services
              </a>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paignate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// async function loadBooks() {
//   const baseUrl: string = "http://localhost:8080/api/books";
//   let url: string = "";
//   if (searchUrl === "") {
//     url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
//   } else {
//     url = baseUrl + searchUrl;
//   }
//   fetchBooks(
//     {
//       url: url,
//     },
//     responseBooksData
//   );
//   console.log(error);
//   setHttpError(error);
//   window.scrollTo(0, 0);
// }

// export async function loader() {
//   return defer({
//     books: loadBooks(),
//   });
// }
