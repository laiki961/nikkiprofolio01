import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/Pages/LandingPage/Root";
import ErrorPage from "./Layouts/components/Error/Error";
import { LandingPage } from "./Layouts/Pages/LandingPage/LandingPage";
import ECommerceLandingPage from "./eCommerce/Pages/LandingPage/eCommerceHomePage";
import LibraryHomePage from "./LibraryApp/Pages/LibraryHomePage/HomePage";
// import Details from "./WeatherForecast/pages/Details";
//import Home from "./WeatherForecast/pages/Home";
//import Forecasts from "./WeatherForecast/pages/Forecasts";
// import WeatherRootLayout from "./WeatherForecast/pages/Root";
// import ForecastList from "./WeatherForecast/components/ForecastList";
// import Home from "./WeatherForecast/pages/Home";
import OpenWeather from "./WeatherForecast/OpenWeather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "weather",
        // element: <WeatherRootLayout />,
        element: <OpenWeather />,
        // children: [
        //   {
        //     index: true,
        //     element: <Home />,
        //     // element: <Forecasts />,
        //   },
        //   {
        //     path: ":cityName",
        //     id: "forecast-weather",
        //     // loader: forecastWeatherLoader,
        //     children: [
        //       {
        //         index: true,
        //         element: <ForecastList />,
        //         // element: <Forecasts />,
        //       },
        //       {
        //         path: ":Dayid",
        //         id: "weather-details",
        //         element: <Details />,
        //       },
        //     ],
        //   },
        // ],
      },
      {
        path: "library",
        element: <LibraryHomePage />,
        children: [
          { index: true, element: <LibraryHomePage /> },
          // { path: "/search" },
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

// export function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
