import { Outlet } from "react-router-dom";
import RestaurantNavbar from "../Components/Navbar/Navbar";

function RestaurantRootLayout() {
  return (
    <>
      <RestaurantNavbar />
      <Outlet />
    </>
  );
}

export default RestaurantRootLayout;
