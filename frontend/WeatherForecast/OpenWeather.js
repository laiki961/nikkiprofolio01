import { useEffect, useState } from "react";
import { config } from "../lib/config";
import classes from "./OpenWeather.module.css";
import useInput from "./hooks/use-input";
import useHttp from "../hooks/use-http";

import Header from "./ui/Header";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Loading from "../Layouts/components/Loading/Loading";
import ForecastList from "./ForecastList";

const OpenWeather = () => {
  const [forecasts, setForecasts] = useState([]);
  const { isLoading, error, sendRequest: fetchWeather } = useHttp();
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
    const transformedWeatherData = (responseDataObj) => {
      const loadedWeatherForecast = [];
      const location = {
        city: responseDataObj.city.name,
        country: responseDataObj.city.country,
      };
      for (const key in responseDataObj.list) {
        loadedWeatherForecast.push({
          id: key,
          unix_timeStamp: responseDataObj.list[key].dt,
          icon: responseDataObj.list[key].weather[0].icon,
          details: {
            description: responseDataObj.list[key].weather[0].description,
            minTemp: responseDataObj.list[key].main.temp_min,
            maxTemp: responseDataObj.list[key].main.temp_max,
            humidity: responseDataObj.list[key].main.humidity,
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
      transformedWeatherData
    );
    console.log(error);
    resetCityInput();
  };

  useEffect(() => {
    fetchCityWeatherHandler();
  }, [fetchWeather]);

  const cityInputClasses = cityHasError ? "invalid" : "";

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
        {error && (
          <p className={classes["error-text"]}>
            {error} <br />
            Please enter a valid city.
          </p>
        )}
        <Button type='submit'>Get Weather</Button>
      </form>
    </>
  );

  let content = <p>There is no forecasts data yet.</p>;
  if (error) {
    content = defaultUi;
  }
  if (forecasts.length === 0) {
    content = defaultUi;
  }
  if (forecasts.length > 0) {
    content = <ForecastList forecasts={forecasts} />;
  }

  return (
    <section className={classes["open-weather"]}>
      <Header
        onFetch={submitHandler}
        onChange={cityChangedHandler}
        onBlur={cityBlurHandler}
        value={cityValue}
      ></Header>
      {isLoading ? <Loading /> : <div className={classes.main}>{content}</div>}
    </section>
  );
};

export default OpenWeather;
