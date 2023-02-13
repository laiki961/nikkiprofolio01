import { Navigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import Loading from "../Layouts/components/Loading/Loading";
import OktaSignInWidget from "./OktaSigninWidget";

const LoginWidget = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();

  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log("Sign in error: ", err);
  };

  if (!authState) {
    return <Loading />;
  }

  return authState.isAuthenticated ? (
    <Navigate to='/' />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};

export default LoginWidget;
