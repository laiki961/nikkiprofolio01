import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  let prevScrollpos = window.pageYOffset;

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
    <div id={classes["main-nav"]}>
      <header className={`${classes["nav-header"]} container-sm`}>
        <nav>
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
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
