import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/Pages/LandingPage/Root";
import ErrorPage from "./Layouts/components/Error/Error";
import { LandingPage } from "./Layouts/Pages/LandingPage/LandingPage";
import { oktaConfig } from "./lib/config";
import { LoginCallback } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";

import WeatherRootLayout from "./Projects/WeatherForecast/pages/Root";
import WeatherHome from "./Projects/WeatherForecast/pages/Home";
import Forecasts from "./Projects/WeatherForecast/pages/Forecasts";
// import Details from "./WeatherForecast/pages/Details";

import LibraryRootLayout from "./Projects/LibraryApp/Pages/Root";
import LibraryHomePage from "./Projects/LibraryApp/Pages/LibraryHomePage/HomePage";
import { SearchBooksPage } from "./Projects/LibraryApp/Pages/SearchBooksPage/SearchBooksPage";
import { BookCheckoutPage } from "./Projects/LibraryApp/Pages/BookCheckoutPage/BookCheckoutPage";

import { MenuPage } from "./Projects/Restaurant/Pages/MenuPage/MenuPage";
//import { loader as productsLoader } from "./Projects/Restaurant/Pages/MenuPage/components/Menu/Menu";
import RestaurantRootLayout from "./Projects/Restaurant/Pages/Root";
import { DetailsPage } from "./Projects/Restaurant/Pages/DetailsPage/DetailsPage";
import { ReviewListPage } from "./Projects/LibraryApp/Pages/BookCheckoutPage/ReviewListPage/ReviewListPage";
// import { Details as ProductDetailsPage } from "./Projects/Restaurant/Pages/ProductDetailsPage/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "/login",
        element: <LoginWidget config={oktaConfig} />,
      },
      { path: "/callback", element: <LoginCallback /> },
      {
        path: "weather",
        element: <WeatherRootLayout />,
        children: [
          {
            index: true,
            element: <WeatherHome />,
          },
          {
            path: ":cityName",
            id: "forecast-weather",
            children: [
              {
                index: true,
                element: <Forecasts />,
              },
            ],
          },
        ],
      },
      {
        path: "library",
        element: <LibraryRootLayout />,
        children: [
          { index: true, element: <LibraryHomePage /> },
          { path: "/library/search", element: <SearchBooksPage /> },
          { path: "/library/checkout/:bookId", element: <BookCheckoutPage /> },
          { path: "/library/reviewlist/:bookId", element: <ReviewListPage /> },
        ],
      },
      {
        path: "restaurant",
        element: <RestaurantRootLayout />,
        children: [
          {
            index: true,
            element: <MenuPage />,
          },
          {
            path: "/restaurant/:productId",
            element: <DetailsPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
