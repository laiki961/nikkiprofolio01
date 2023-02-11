import { useEffect, useState } from "react";
import { config } from "../lib/config";
import classes from "./OpenWeather.module.css";
import useInput from "./hooks/use-input";
import useHttp from "../hooks/use-http";

import Header from "./Header";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Loading from "../Layouts/components/Loading/Loading";
import ForecastList from "./ForecastList";

const OpenWeather = () => {
  const [forecasts, setForecasts] = useState([]);
  const { isLoading, error, sendRequest: fetchWeather } = useHttp();
  const [httpError, setHttpError] = useState(null);
  const isNotEmpty = (value) => value.trim() !== "";

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangedHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (cityIsValid) {
    formIsValid = true;
  }

  const fetchCityWeatherHandler = () => {
    if (!formIsValid) {
      return;
    }
    const responseWeatherData = (responseData) => {
      const loadedWeatherForecast = [];
      const location = {
        city: responseData.city.name,
        country: responseData.city.country,
      };
      for (const key in responseData.list) {
        loadedWeatherForecast.push({
          id: key,
          unix_timeStamp: responseData.list[key].dt,
          icon: responseData.list[key].weather[0].icon,
          details: {
            description: responseData.list[key].weather[0].description,
            minTemp: responseData.list[key].main.temp_min,
            maxTemp: responseData.list[key].main.temp_max,
            humidity: responseData.list[key].main.humidity,
          },
        });
      }
      setForecasts([location, loadedWeatherForecast]);
    };

    const apiKey = config.OpenWeatherApiKey;
    fetchWeather(
      {
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${apiKey}&units=metric`,
      },
      responseWeatherData
    );
    console.log(error);
    setHttpError(error);
    // error && setHttpError(`${error}: Please enter a valid city`);
    // setHttpError(`${error}: Please enter a valid city`);
    resetCityInput();
  };

  useEffect(() => {}, [fetchWeather]);

  const cityInputClasses = cityHasError ? "invalid" : "";
  const loadingClasess = <Loading />;

  const submitHandler = (e) => {
    e.preventDefault();
    cityBlurHandler();
    fetchCityWeatherHandler();
  };

  const defaultUi = (
    <>
      <p className={classes.title}>Enter a City and State</p>
      <form
        className={`${classes.search} ${cityInputClasses}`}
        onSubmit={submitHandler}
      >
        <Input
          type='text'
          id='city'
          onChange={cityChangedHandler}
          onBlur={cityBlurHandler}
          value={cityValue}
        />
        {cityHasError && (
          <p className={classes["error-text"]}>City must not be empty.</p>
        )}
        {httpError && (
          <p className={classes["error-text"]}>
            {httpError} <br />
            Please enter a valid city.
          </p>
        )}
        <Button type='submit'>Get Weather</Button>
      </form>
    </>
  );

  let content = <p>There is no forecasts data yet.</p>;
  if (forecasts.length === 0) {
    content = defaultUi;
  }
  if (forecasts.length > 0) {
    content = <ForecastList forecasts={forecasts} />;
  }
  if (isLoading) {
    <>{loadingClasess}</>;
  }

  return (
    <section className={classes["open-weather"]}>
      <Header
        onFetch={submitHandler}
        onChange={cityChangedHandler}
        onBlur={cityBlurHandler}
        value={cityValue}
      ></Header>
      <div className={classes.main}>{content}</div>
    </section>
  );
};

export default OpenWeather;
