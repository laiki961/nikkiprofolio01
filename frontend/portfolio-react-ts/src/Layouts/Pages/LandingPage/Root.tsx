// import { useEffect } from "react";
import { Security, LoginCallback } from "@okta/okta-react";
import {
  Outlet,
  // useLoaderData,
  useNavigate,
  // useNavigation,
  // useSubmit,
} from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
// import { getTokenDuration } from "../util/auth";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { oktaConfig } from "../../../lib/config";

const oktaAuth = new OktaAuth(oktaConfig);

function RootLayout() {
  const navigate = useNavigate();

  const customAuthHandler = () => {
    navigate("/login");
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin));
  };

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
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={customAuthHandler}
    >
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Security>
  );
}

export default RootLayout;
