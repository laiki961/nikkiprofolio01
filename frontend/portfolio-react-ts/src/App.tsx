import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/LandingPage/Root";
import ErrorPage from "./Layouts/components/ErrorPage/Error";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import OpenWeather from "./WeatherForecast/OpenWeather";
import ForcastWeather from "./WeatherForecast/ForecastWeather";
import { element } from "prop-types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "weather",
        element: <OpenWeather />,
        children: [{ index: true, element: <OpenWeather /> }],
      },
      // {
      //   path: "library"
      //   element:
      // }
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
