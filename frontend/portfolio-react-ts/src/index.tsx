import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import reportWebVitals from "./reportWebVitals";

const stripePromise = loadStripe(
  "pk_test_51MgYY1KMnNozoMqcvnbOTT0i4kVMy9i8Rew6ONV4XVN6iOixAoSnd9La4XvfTQCOXF1erLlwJYscztn0uhO8yQlE00brw4KFxS"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
