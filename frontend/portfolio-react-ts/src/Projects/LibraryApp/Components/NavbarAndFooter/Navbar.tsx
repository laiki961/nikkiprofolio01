import { Link, NavLink } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import Loading from "../../../../Layouts/components/Loading/Loading";

export const Navbar = () => {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <Loading />;
  }

  const handleLogout = async () => {
    oktaAuth.signOut();
  };

  console.log(authState);

  return (
    <nav className='navbar navbar-expand-lg text-warning bg-secondary py-3'>
      <div className='container-fluid'>
        <NavLink className='nav-link text-white' to='/library'>
          <span className='navbar-brand'>Library</span>
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link text-white' to='/library/search'>
                Search Books
              </NavLink>
            </li>
            {authState.isAuthenticated && (
              <li className='nav-item'>
                <NavLink className='nav-link text-white' to='/library/shelf'>
                  Shelf
                </NavLink>
              </li>
            )}
            {authState?.accessToken?.claims.userType === "admin" && (
              <li className='nav-item'>
                <NavLink className='nav-link text-white' to='/library/admin'>
                  Admin
                </NavLink>
              </li>
            )}
          </ul>

          {/* <ul className='navbar-nav ms-auto'>
            {!authState.isAuthenticated ? (
              <li className='nav-item m-1'>
                <Link
                  type='button'
                  className='btn btn-outline-light'
                  to='/login'
                >
                  Sign in
                </Link>
              </li>
            ) : (
              <li>
                <button
                  className='btn btn-outline-light'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul> */}
        </div>
      </div>
    </nav>
  );
};
