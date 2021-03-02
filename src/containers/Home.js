import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";
import WeatherIcons from "../components/WeatherIcons";
import NextDays from "../components/NextDays";
import Highlights from "../components/Highlights";

import AlertGps from "../components/AlertGps";

import "../styles/Home.scss";

let today = new Date();



function Home() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPosition, setCurrentPosition] = useState([]);
    let [timezone, setTimezone] = useState("");
    let [currentWeather, setCurrentWeather] = useState("");
    let [temperature, setTemperature] = useState(0);
    let [wind, setWind] = useState(0);
    let [humidity, setHumitidy] = useState(0);
    let [visibility, setVisibility] = useState(0);
    let [air_pressure, setAir_Presure] = useState(0);
    let [city, setCity] = useState([]);

    const apiKey = "34b72b35d1bb464990570215212802";


    function successCallback({ coords }) {
        setCurrentPosition([coords.latitude, coords.longitude])
    }

    function GetLocation() {
        navigator.geolocation.getCurrentPosition(successCallback)
    }

    function GetData() {

        fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${currentPosition[0]},${currentPosition[1]}`)
            .then(data => data.json())
            .then(data => {
                setTemperature(Math.floor(data.current.temp_c))
                setCurrentWeather(data.current.condition.text)
                setTimezone(data.location.tz_id)
                setWind(data.current.wind_mph)
                setHumitidy(data.current.humidity)
                setVisibility(data.current.vis_km)
                setAir_Presure(data.current.pressure_mb)
            })
            .catch(x => setError(x));

    }

    let searchData = (value) => {
        fetch(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${value}`)
            .then(data => data.json())
            .then(data => setCity(data))
            .catch(x => setError(x))
    }

    useEffect(() => {
        setTimeout(() => setLoading(false), 2400);
        currentPosition.length <= 1 ? GetLocation() : false
        currentPosition.length > 1 ? GetData() : false
    }, [currentPosition])
    return (
        <>
            {loading === false ? (
                <>
                    <main className="main">

                        <Header getData={() => GetData()} searchData={searchData} city={city} />

                        <WeatherIcons weatherState={currentWeather} />


                        <h3 className="main__temperature">{temperature}
                            <span className="main__degree">°C</span>
                        </h3>
                        <p className="main__weather">{currentWeather || "Weather State"}</p>
                        <div className="main__date">
                            <span>Today </span><br /> <span>{`${today.getDate()} : ${today.getMonth() + 1} : ${today.getFullYear()}`}</span>
                        </div>

                        <p className="main__timezone"> {timezone || "timezone"}</p>
                    </main>
                    <NextDays latitude={currentPosition[0]} longitude={currentPosition[1]} />
                    <Highlights
                        wind_mph={wind}
                        humidity={humidity}
                        visibility={visibility}
                        air_pressure={air_pressure}
                    />
                    <footer>
                        <p>Yosef Blandin All Right's Reserved</p>
                    </footer>
                </>) :
                (<LoadingScreen />)}
            {
                error && (

                    < AlertGps error={error} />
                )
            }

        </>
    );
}

export default Home