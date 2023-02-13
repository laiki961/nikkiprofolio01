import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/Pages/LandingPage/Root";
import ErrorPage from "./Layouts/components/Error/Error";
import { LandingPage } from "./Layouts/Pages/LandingPage/LandingPage";
import ECommerceLandingPage from "./eCommerce/Pages/LandingPage/eCommerceHomePage";
import LibraryHomePage from "./LibraryApp/Pages/LibraryHomePage/HomePage";
// import Details from "./WeatherForecast/pages/Details";
import Forecasts from "./WeatherForecast/pages/Forecasts";
import WeatherRootLayout from "./WeatherForecast/pages/Root";
import Home from "./WeatherForecast/pages/Home";
import LibraryRootLayout from "./LibraryApp/Pages/Root";
import { SearchBooksPage } from "./LibraryApp/Pages/SearchBooksPage/SearchBooksPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "weather",
        element: <WeatherRootLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          //   { path: "/login",
          //  },
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
          { path: "/library/checkout/:bookId" },
        ],
      },
      {
        path: "ecommerce",
        element: <ECommerceLandingPage />,
        children: [{ index: true, element: <ECommerceLandingPage /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
