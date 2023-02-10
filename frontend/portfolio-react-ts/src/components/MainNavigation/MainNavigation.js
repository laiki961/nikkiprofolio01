import { NavLink } from "react-router-dom";
// import { Container } from "react-bootstrap";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div id={classes["main-nav"]}>
      {/* <Container> */}
      <header className={`${classes["nav-header"]} container`}>
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
                to='/projects'
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Projects
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
      {/* </Container> */}
    </div>
  );
}

export default MainNavigation;
