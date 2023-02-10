import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
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
            {/* <li>
                            <NavLink
                                to="/projects/todolist"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                ToDoList
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects/weather"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                Weather
                            </NavLink>
                        </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
