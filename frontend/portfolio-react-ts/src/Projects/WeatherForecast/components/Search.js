import { useContext } from "react";
import { useNavigate } from "react-router";
import useInput from "../../../hooks/use-input";
import WeatherContext from "../store/weather-context";
import Button from "../ui/Button";
import Input from "../ui/Input";
import classes from "./Search.module.css";

const Search = ({ className }) => {
  const { onFetch, error } = useContext(WeatherContext);
  const navigate = useNavigate();

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

  const cityInputClasses = cityHasError ? "invalid" : "";

  const submitHandler = (e) => {
    e.preventDefault();
    cityBlurHandler();
    if (!formIsValid) {
      navigate("/weather");
    } else {
      onFetch(cityValue);
      if (error) {
        navigate("/weather");
      }
      navigate(`/weather/${cityValue.toLowerCase()}`);
    }
    resetCityInput();
  };

  let errorText = "";
  if (className !== "navbar") {
    if (cityHasError) {
      errorText = (
        <p className={classes["error-text"]}>City must not be empty.</p>
      );
    }
    if (error) {
      errorText = (
        <p className={classes["error-text"]}>
          {error} <br />
          Please enter a valid city.
        </p>
      );
    }
  }

  return (
    <form
      className={`${classes.search} ${className} ${cityInputClasses} `}
      onSubmit={submitHandler}
    >
      <Input
        type='text'
        id='city'
        onChange={cityChangedHandler}
        onBlur={cityBlurHandler}
        value={cityValue}
      />
      {errorText}
      <Button type='submit'>Get Weather</Button>
    </form>
  );
};

export default Search;
