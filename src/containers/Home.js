import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";
import WeatherIcons from "../components/WeatherIcons"


import AlertGps from "../components/AlertGps";

import "../styles/Home.scss";

let today = new Date();



function Home() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPosition, setCurrentPosition] = useState([]);
    let [timezone, setTimezone] = useState("");
    let [currentWeather, setCurrentWeather] = useState("");
    let [temperature, setTemperature] = useState(0);

    const apiKey = "9169a92780b1d0a3183659fca9a43cf2";

    function successCallback({ coords }) {
        setCurrentPosition([coords.latitude, coords.longitude])
    }

    function GetLocation() {
        navigator.geolocation.getCurrentPosition(successCallback)
    }

    function GetData() {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentPosition[0]}&lon=${currentPosition[1]}&appid=${apiKey}`)
            .then(data => data.json())
            .then(data => {
                setTemperature(Math.round(data.current.temp - 284))
                setCurrentWeather(data.current.weather[0].description)
                setTimezone(data.timezone)
            })
            .catch(x => setError(x))
    }

    useEffect(() => {
        setTimeout(() => setLoading(false), 2400)
        GetLocation();
    })
    return (
        <>
            {loading === false ? (
                <>
                    <Header getData={() => GetData()} />
                    <main className="main">

                        <section className="main__icon">
                            <WeatherIcons weatherState={currentWeather} />
                        </section>

                        <h3 className="main__temperature">{temperature}
                            <span className="main__degree">°C</span>
                        </h3>
                        <p className="main__weather">{currentWeather}</p>
                        <div className="main__date">
                            <span>Today </span><br /> <span>{`${today.getDate()} : ${today.getMonth() + 1} : ${today.getFullYear()}`}</span>
                        </div>
                        <p className="main__location"> {timezone}</p>
                    </main>
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