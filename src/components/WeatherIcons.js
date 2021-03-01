import React from "react";
import Sunny from "../assets/icons/HeavyRain.png"

let WeatherIcons = (weatherState) => {
    if (weatherState === "overcast clouds") {
        return <img className="main__icon" src={Sunny} alt="Sunny" />
    } else if (weatherState === "broken clouds") {
        return <img className="main__icon" src={Sunny} alt="Sunny" />
    } else {
        return <img className="main__icon" src={Sunny} alt="Sunny" />
    }
}

export default WeatherIcons