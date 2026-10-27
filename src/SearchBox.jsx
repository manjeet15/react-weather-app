import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ UpdateInfo }) {
    let [city, setCity] = useState(" ");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ae21464c5f61eceffcf87e6d084c4d01";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${encodeURIComponent(city.trim())}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        if (!response.ok) {
            alert(jsonResponse.message || "City not found");
            return null;
        }
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;

    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();

        if (!city.trim()) {
            alert("Please enter a city name");
            return;
        }

        console.log(city);

        let newInfo = await getWeatherInfo();

        if (newInfo) {
            UpdateInfo(newInfo);
            setCity("");
        }
    };


    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city"
                    label="Search City"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
        </div>
    )
}