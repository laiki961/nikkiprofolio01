import { useEffect, useState, useCallback } from "react";
import classes from "./ForecastList.module.css";
import ForecastWeather from "./ForecastWeather";
import Loading from "../Layouts/components/Loading/Loading";

const ForecastList = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formatDataHandler = useCallback(() => {
    setIsLoading(true);
    let filteredForecasts = [];
    const forecastsCopy = [];
    const todayDate = new Date(); //Sat Jan 14 2023 14:49:09 GMT-0500 (Eastern Standard Time)
    const dd = String(todayDate.getDate()).padStart(2, "0");

    for (const key in props.forecasts[1]) {
      const unix_timeStamp_ms = +props.forecasts[1][key].unix_timeStamp * 1000;
      const date = new Date(unix_timeStamp_ms);
      const formattedDate = date.getDate(unix_timeStamp_ms);
      const formattedMonth = monthNames[date.getMonth()];
      const formattedDay = dayNames[date.getUTCDay()];
      const formattedIcon = `http://openweathermap.org/img/wn/${props.forecasts[1][key].icon}@2x.png`;

      forecastsCopy.push({
        id: props.forecasts[1][key].id,
        iconUrl: formattedIcon,
        formattedDate: {
          date: formattedDate,
          month: formattedMonth,
          day: formattedDay,
        },
        details: {
          description: props.forecasts[1][key].details.description,
          minTemp: props.forecasts[1][key].details.minTemp,
          maxTemp: props.forecasts[1][key].details.maxTemp,
          humidity: props.forecasts[1][key].details.humidity,
        },
      });

      filteredForecasts = forecastsCopy
        .filter((item) => item.formattedDate.date > +dd)
        .filter(
          (value, index, array) =>
            array
              .map((item) => item.formattedDate.date)
              .indexOf(value.formattedDate.date) === index
        );
    }
    setFilteredData([props.forecasts[0], filteredForecasts]);
    setIsLoading(false);
  }, [props.forecasts, setFilteredData]);
  //This tells React to re-create the formatDataHandler callback function whenever props.forecasts or setFilteredData changes.

  useEffect(() => {
    formatDataHandler();
  }, [formatDataHandler]);

  let content = <p></p>;

  if (isLoading) {
    content = <Loading />;
  }

  if (filteredData.length > 1) {
    content = (
      <>
        <div className={classes["forecast-city"]}>
          {filteredData[0].city}, {filteredData[0].country}
        </div>
        <div className={classes["weather-forecast-5days"]}>
          {filteredData[1].map((forecast) => (
            <ForecastWeather
              key={forecast.id}
              city={filteredData[0].city}
              country={filteredData[0].country}
              icon={forecast.iconUrl}
              formattedDate={forecast.formattedDate}
              details={forecast.details}
            />
          ))}
        </div>
      </>
    );
  }

  return <section className={classes.fiveDaysForecast}>{content}</section>;
};

export default ForecastList;
