import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <h6>About Me</h6>
            <p className='text-justify'>
              Nikki's Profolio
              <br />
              Toronto, ON, Canada
              <br />
              <i>Contact: +1 (437) 970-0655</i>
            </p>
          </div>

          <div className='col-xs-6 col-md-3'>
            <h6>Quick Links</h6>
            <ul className='footer-links'>
              <li>
                <Link to='/projects'>Projects</Link>
                <br />
                <Link to='/projects/todolist'>To Do List</Link>
                <br />
                <Link to='/projects/weather'>Weather</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-6 col-xs-12'>
            <p className='copyright-text'>
              Copyright @ 2023 All Rights Reserved by Nikki.
            </p>
          </div>
          <div className='col-md-4 col-sm-6 col-xs-12'>
            <ul className='social-icons'>
              <li>
                <a
                  className='linkedin'
                  href='https://www.linkedin.com/in/nikkilkip/'
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className='linkedin' href='https://github.com/laiki961'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
