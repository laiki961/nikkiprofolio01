import { Link, NavLink } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import classes from "./MainNavigation.module.css";
import Loading from "../Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function MainNavigation() {
  let prevScrollpos = window.pageYOffset;

  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <Loading />;
  }

  const handleLogout = async () => {
    oktaAuth.signOut();
  };

  console.log(authState);

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById(classes["main-nav"]).style.top = "0";
    } else {
      document.getElementById(classes["main-nav"]).style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <nav id={classes["main-nav"]}>
      <header className={`${classes["nav-header"]} container-sm`}>
        <ul id={classes["main-nav-list"]}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/weather'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Weather Forecast
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/library'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Library
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/ecommerce'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              eCommerce
            </NavLink>
          </li>
        </ul>
        <ul id={classes["main-nav-list"]}>
          {!authState.isAuthenticated ? (
            <li className='nav-item'>
              <Link
                type='button'
                className={classes["navbar-feature"]}
                to='/login'
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          ) : (
            <li className='nav-item'>
              <button
                className={`${classes["navbar-feature"]} ${classes.button}`}
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            </li>
          )}
        </ul>
      </header>
    </nav>
  );
}

export default MainNavigation;
