import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import Loading from "../../../../Layouts/components/Loading/Loading";
import { Link, Navigate } from "react-router-dom";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import PaymentInfoRequest from "../../Models/PaymentInfoRequest";

export const PaymentPage = () => {
  const { authState } = useOktaAuth();

  const [httpError, setHttpError] = useState(false);
  const [submitDisable, setSubmitDisable] = useState(false);
  const [fees, setFees] = useState(0);
  const [loadingFees, setLoadingFees] = useState(true);

  useEffect(() => {
    const fetchFees = async () => {
      if (authState && authState.isAuthenticated) {
        const url = `${process.env.REACT_APP_LIBRARY_API}/payments/search/findByUserEmail?userEmail=${authState.accessToken?.claims.sub}`;
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const paymentResponse = await fetch(url, requestOptions);
        if (!paymentResponse.ok) {
          throw new Error("Something went wrong!");
        }
        const paymentResponseJson = await paymentResponse.json();
        setFees(paymentResponseJson.amount);
        setLoadingFees(false);
      }
    };
    fetchFees().catch((error: any) => {
      setLoadingFees(false);
      setHttpError(error.message);
    });
  }, [authState]);

  const elements = useElements();
  const stripe = useStripe();

  async function checkout() {
    if (!stripe || !elements || !elements.getElement(CardElement)) {
      return;
    }
    setSubmitDisable(true);
    let paymentInfo = new PaymentInfoRequest(
      Math.round(fees * 100),
      "USD",
      authState?.accessToken?.claims.sub
    );

    const url = `https://localhost:8443/library/api/payment/secure/payment-intent`;
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentInfo),
    };
    const stripeResponse = await fetch(url, requestOptions);
    if (!stripeResponse.ok) {
      setHttpError(true);
      setSubmitDisable(false);
      throw new Error("Something went wrong");
    }
    const stripeResponseJson = await stripeResponse.json();

    stripe
      .confirmCardPayment(
        stripeResponseJson.client_secret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              email: authState?.accessToken?.claims.sub,
            },
          },
        },
        { handleActions: false }
      )
      .then(async function (result: any) {
        if (result.error) {
          setSubmitDisable(false);
          alert("There was an error");
        } else {
          const url = `https://localhost:8443/library/api/payment/secure/payment-complete`;
          const requestOptions = {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
              "Content-Type": "application/json",
            },
          };
          const stripeResponse = await fetch(url, requestOptions);
          if (!stripeResponse.ok) {
            setHttpError(true);
            setSubmitDisable(false);
            throw new Error("Something went wrong");
          }
          setFees(0);
          setSubmitDisable(false);
        }
      });
    setHttpError(false);
  }

  if (loadingFees) {
    return <Loading />;
  }

  if (httpError) {
    <div className='container my-5 min-vh-100'>
      <p>{httpError}</p>
    </div>;
  }

  return authState?.isAuthenticated ? (
    <div className='container min-vh-100'>
      {fees > 0 && (
        <div className='card mt-3'>
          <h5 className='card-header'>
            Fees Pending:
            <span className='text-danger'> ${fees}</span>
          </h5>
          <div className='card-body'>
            <h5 className='card-title mb-3'>Credit Card</h5>
            <CardElement id='card-element' />
            <button
              disabled={submitDisable}
              type='button'
              className='btn btn-md btn-secondary mt-3'
              onClick={checkout}
            >
              Pay fees
            </button>
          </div>
        </div>
      )}
      {fees === 0 && (
        <div className='mt-3'>
          <h5>You have no fees!</h5>
          <Link
            type='button'
            className='btn btn-secondary px-4 me-md-2'
            to='/library/search'
          >
            Explore top books
          </Link>
        </div>
      )}
      {submitDisable && <Loading />}
    </div>
  ) : (
    <Navigate to='/login' />
  );
};
