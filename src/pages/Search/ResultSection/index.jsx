import moment from "moment";
import Style from "./style.js";
import ErrorImg from "../../../assets/error.png";
import GreetingsImg from "../../../assets/greetings.png";
import { capitalizeWords } from "../actions.js";


const ResultSection = ({ weather, errorMessage }) => {
  const { city, country, descp, humidity, icon, main, tempMin, tempMax, time } =
    weather;
  return (
    <Style>
      <div className="wrapper">
        {errorMessage ? (
          <div className="error">
            <img src={ErrorImg} alt="img-error" />
            <p>{capitalizeWords(errorMessage)}</p>
          </div>
        ) : city && country ? (
          <>
            <div className="col-left">
              <p className="datetime">
                {moment.unix(time).format("YYYY-MM-DD hh:mm a")}
              </p>
              <p className="location">
                {city}, {country}
              </p>
              <div className="main">
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="icon-weather"
                />
                <p>{main}</p>
              </div>
            </div>
            <div className="separate"></div>
            <div className="col-right">
              <p className="title">Description</p>
              <p className="value">{capitalizeWords(descp)}</p>
              <p className="title">Temperature</p>
              <p className="value">
                {tempMin} - {tempMax}
              </p>
              <p className="title">Humidity</p>
              <p className="value">{humidity}</p>
            </div>
          </>
        ) : (
          <div className="greetings">
            <img src={GreetingsImg} alt="img-greetings" />
            <p>Let's check the weather today.</p>
          </div>
        )}
      </div>
    </Style>
  );
};

export default ResultSection;
