// import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";
import classes from "../LandingPage.module.css";

export const Heros = () => {
  //   const { authState } = useOktaAuth();

  return (
    <div>
      <div className='d-none d-lg-block'>
        {/* ADD START*/}
        <div className='row g-0'>
          <div
            className='col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center'
          >
            <div className='ml-2'>
              <h1>
                Weather Forecast{" "}
                <i className={classes["text-third"]}>by Open Weather</i>
              </h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tincidunt, leo eu vestibulum convallis, ante enim convallis
                libero, et sodales arcu ipsum id nisl. Maecenas consequat, lacus
                ut ultricies hendrerit, orci mauris imperdiet nibh, scelerisque
                tristique dolor augue ut mauris. Quisque at varius mauris, vitae
                maximus velit. Donec in aliquam.
              </p>
              <Link className='btn btn-dark btn-lg' to='/weather'>
                Check it out
              </Link>
            </div>
          </div>
          <div className='col-sm-6 col-md-6'>
            <div className={classes["col-image-weather"]}></div>
          </div>
        </div>
        {/* ADD END*/}
        <div className='row g-0'>
          <div className='col-sm-6 col-md-6'>
            <div className='col-image-left'></div>
            <div className={classes["col-image-library"]}></div>
          </div>
          <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
            <div className='ml-2'>
              <h1>Library</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tincidunt, leo eu vestibulum convallis, ante enim convallis
                libero, et sodales arcu ipsum id nisl. Maecenas consequat, lacus
                ut ultricies hendrerit, orci mauris imperdiet nibh, scelerisque
                tristique dolor augue ut mauris. Quisque at varius mauris, vitae
                maximus velit. Donec in aliquam.
              </p>
              <Link className='btn btn-dark btn-lg' to='/library'>
                Check it out
              </Link>
            </div>
          </div>
        </div>
        <div className='row g-0'>
          <div
            className='col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center'
          >
            <div className='ml-2'>
              <h1>eCommerce</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tincidunt, leo eu vestibulum convallis, ante enim convallis
                libero, et sodales arcu ipsum id nisl. Maecenas consequat, lacus
                ut ultricies hendrerit, orci mauris imperdiet nibh, scelerisque
                tristique dolor augue ut mauris. Quisque at varius mauris, vitae
                maximus velit. Donec in aliquam.
              </p>
              <Link className='btn btn-dark btn-lg' to='/ecommerce'>
                Check it out
              </Link>
            </div>
          </div>
          <div className='col-sm-6 col-md-6'>
            <div className={classes["col-image-ecomerce"]}></div>
          </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className='d-lg-none'>
        <div className='container'>
          <div className='m-2'>
            <div className={classes["col-image-weather"]}></div>
            <div className='mt-2'>
              <h1>
                Weather Forecast{" "}
                <i className={classes["text-third"]}>by Open Weather</i>
              </h1>
              <p className='lead'>
                Try to check in daily as our collection is always changing! We
                work nonstop to provide the most accurate book selection
                possible for our Luv 2 Read students! We are diligent about our
                book selection and our books are always going to be our top
                priority.
              </p>
              <Link className='btn btn-dark btn-md' to='/weather'>
                Check it out
              </Link>
            </div>
          </div>
          <div className='m-2'>
            <div className={classes["col-image-library"]}></div>
            <div className='mt-2'>
              <h1>Library</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tincidunt, leo eu vestibulum convallis, ante enim convallis
                libero, et sodales arcu ipsum id nisl. Maecenas consequat, lacus
                ut ultricies hendrerit, orci mauris imperdiet nibh, scelerisque
                tristique dolor augue ut mauris. Quisque at varius mauris, vitae
                maximus velit. Donec in aliquam.
              </p>
              <Link
                type='button'
                className='btn btn-dark btn-md'
                to='/ecommerce'
              >
                Check it out
              </Link>
            </div>
          </div>
          <div className='m-2'>
            <div className={classes["col-image-library"]}></div>
            <div className='mt-2'>
              <h1>eCommerce</h1>
              <p className='lead'>
                Try to check in daily as our collection is always changing! We
                work nonstop to provide the most accurate book selection
                possible for our Luv 2 Read students! We are diligent about our
                book selection and our books are always going to be our top
                priority.
              </p>
              <Link className='btn btn-dark btn-md' to='/ecommerce'>
                Check it out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
