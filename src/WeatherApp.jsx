import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 29.9,
        humidity: 38,
        temp: 30.38,
        tempMax: 30.38,
        tempMin: 30.38,
        weather: "clear sky",

    });
    let UpdateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center" }} >

            <h2>Weather App</h2>
            <SearchBox UpdateInfo={UpdateInfo} />
            <InfoBox info={WeatherInfo} />
        </div>
    );
}