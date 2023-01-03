import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";
import { weatherAPIUrl, weatherAPIKey } from "./API";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);

  const searchChangeHandler = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(
      `${weatherAPIUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`
    );
    const threeHourForecastFetch = fetch(
      `${weatherAPIUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, threeHourForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        //need to call the json method in order to map the response

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setCurrentForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <SearchBar onSearchChange={searchChangeHandler} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {currentForecast && <Forecast data={currentForecast} />}
    </div>
  );
}

export default App;
