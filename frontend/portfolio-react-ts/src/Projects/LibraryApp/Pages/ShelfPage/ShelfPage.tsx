import { useOktaAuth } from "@okta/okta-react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Loans } from "./components/Loans";

// import { HistoryPage } from "./components/HistoryPage";
// import { Loans } from "./components/Loans";

export const ShelfPage = () => {
  //   const [historyClick, setHistoryClick] = useState(false);

  const { authState } = useOktaAuth();

  return authState?.isAuthenticated ? (
    <div className='container min-vh-100'>
      <div className='mt-3'>
        <nav>
          <div className='nav nav-tabs' id='nav-tab' role='tablist'>
            <button
              //   onClick={() => setHistoryClick(false)}
              className='nav-link active'
              id='nav-loans-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-loans'
              type='button'
              role='tab'
              aria-controls='nav-loans'
              aria-selected='true'
            >
              Loans
            </button>
            <button
              //   onClick={() => setHistoryClick(true)}
              className='nav-link'
              id='nav-history-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-history'
              type='button'
              role='tab'
              aria-controls='nav-history'
              aria-selected='false'
            >
              Your History
            </button>
          </div>
        </nav>
        <div className='tab-content' id='nav-tabContent'>
          <div
            className='tab-pane fade show active'
            id='nav-loans'
            role='tabpanel'
            aria-labelledby='nav-loans-tab'
          >
            <Loans />
            {/* <Loans /> */}
          </div>
          <div
            className='tab-pane fade'
            id='nav-history'
            role='tabpanel'
            aria-labelledby='nav-history-tab'
          >
            <p>Checkout History</p>
            {/* {historyClick ? <HistoryPage /> : <></>} */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};
