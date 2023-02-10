// import { useEffect } from "react";
import {
  Outlet,
  // useLoaderData,
  // useNavigation,
  // useSubmit,
} from "react-router-dom";
import MainNavigation from "../../Layouts/components/MainNavigation/MainNavigation";
// import { getTokenDuration } from "../util/auth";

function RootLayout() {
  // const token = useLoaderData();
  // const submit = useSubmit();

  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }
  //   if (token === "EXPIRED") {
  //     submit(null, { action: "/logout", method: "post" });
  //     return;
  //   }

  //   const tokenDuration = getTokenDuration();
  //   console.log(tokenDuration);

  //   setTimeout(() => {
  //     submit(null, { action: "/logout", method: "post" });
  //   }, tokenDuration);
  // }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
