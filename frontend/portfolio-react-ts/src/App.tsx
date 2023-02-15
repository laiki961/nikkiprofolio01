import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/Pages/LandingPage/Root";
import ErrorPage from "./Layouts/components/Error/Error";
import { LandingPage } from "./Layouts/Pages/LandingPage/LandingPage";
import ECommerceLandingPage from "./Projects/eCommerce/Pages/LandingPage/eCommerceHomePage";
import LibraryHomePage from "./Projects/LibraryApp/Pages/LibraryHomePage/HomePage";
// import Details from "./WeatherForecast/pages/Details";
import Forecasts from "./Projects/WeatherForecast/pages/Forecasts";
import WeatherRootLayout from "./Projects/WeatherForecast/pages/Root";
import Home from "./Projects/WeatherForecast/pages/Home";
import LibraryRootLayout from "./Projects/LibraryApp/Pages/Root";
import { SearchBooksPage } from "./Projects/LibraryApp/Pages/SearchBooksPage/SearchBooksPage";
import { BookCheckoutPage } from "./Projects/LibraryApp/Pages/BookCheckoutPage/BookCheckoutPage";
import { oktaConfig } from "./lib/config";
import { LoginCallback } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import EcommerceRootLayout from "./Projects/eCommerce/Pages/Root";

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
            element: <Home />,
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
        ],
      },
      {
        path: "ecommerce",
        element: <EcommerceRootLayout />,
        children: [{ index: true, element: <ECommerceLandingPage /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
