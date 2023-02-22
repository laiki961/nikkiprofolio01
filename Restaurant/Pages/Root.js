import { Outlet } from "react-router-dom";
import RestaurantNavbar from "../Components/Navbar/Navbar";
import { RestaurantContextProvider } from "../Store/restaurant-context";

function RestaurantRootLayout() {
  return (
    <RestaurantContextProvider>
      <RestaurantNavbar />
      <Outlet />
    </RestaurantContextProvider>
  );
}

export default RestaurantRootLayout;
