import { Outlet } from "react-router-dom";
import EcommerceNavbar from "../Components/Navbar/Navbar";

function EcommerceRootLayout() {
  return (
    <>
      <EcommerceNavbar />
      <Outlet />
    </>
  );
}

export default EcommerceRootLayout;
