import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { WEATHER_MAP_ENDPOINT, WEATHER_MAP_KEY } from "../../constants.js";
import { checkExistedLocation, getCityAndCountry } from "./actions.js";

export const useSearchController = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [arrHistorySearch, setArrHistorySearch] = useState(
    JSON.parse(localStorage.getItem("historySearch")) || []
  );
  useEffect(() => {
    setArrHistorySearch(
      JSON.parse(localStorage.getItem("historySearch")) || []
    );
  }, []);

  const arrSearchHistory = JSON.parse(localStorage.getItem("historySearch"));

  const onSearch = useCallback(
    async (city, country) => {
      try {
        const dataLatLon = await axios.get(
          `${WEATHER_MAP_ENDPOINT}?q=${city},${country}&appid=${WEATHER_MAP_KEY}`
        );
        const { lat, lon } = dataLatLon.data.coord;
        const { data: dataWeather } = await axios.get(
          `${WEATHER_MAP_ENDPOINT}?lat=${lat}&lon=${lon}&appid=${WEATHER_MAP_KEY}`
        );
        const location = `${dataWeather.name}, ${dataWeather.sys.country}`;

        setWeather({
          city: dataWeather.name,
          country: dataWeather.sys.country,
          main: dataWeather.weather[0].main,
          descp: dataWeather.weather[0].description,
          tempMin: dataWeather.main.temp_min,
          tempMax: dataWeather.main.temp_max,
          humidity: dataWeather.main.humidity,
          time: dataWeather.dt,
          icon: dataWeather.weather[0].icon,
        });

        if (arrSearchHistory === null || arrSearchHistory.length === 0) {
          let arrLocation = [];
          arrLocation.push(location);
          setArrHistorySearch(arrLocation);
          localStorage.setItem("historySearch", JSON.stringify(arrLocation));
        } else {
          if (!checkExistedLocation(arrSearchHistory, location)) {
            arrSearchHistory.push(location);
            setArrHistorySearch(arrSearchHistory);
            localStorage.setItem(
              "historySearch",
              JSON.stringify(arrSearchHistory)
            );
          }
        }
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
    },
    [arrSearchHistory]
  );

  const onDeleteHistoryItem = (itemDelete) => {
    const arrRemainingItems = arrHistorySearch.filter(
      (item) => item !== itemDelete
    );
    setArrHistorySearch(arrRemainingItems);
    localStorage.setItem("historySearch", JSON.stringify(arrRemainingItems));
  };

  const onClickHistoryItem = (selectedItem) => {
    const { selectedCity, selectedCountry } = getCityAndCountry(selectedItem);
    setCity(selectedCity);
    setCountry(selectedCountry);
    onSearch(selectedCity, selectedCountry);
  };

  return {
    arrHistorySearch,
    city,
    country,
    errorMessage,
    weather,
    onClickHistoryItem,
    onSearch,
    onDeleteHistoryItem,
    setCity,
    setCountry,
  };
};
