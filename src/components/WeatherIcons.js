import React from "react";
import { Sunny, Cloudy, Rain, Snow } from "weather-styled-icon";

let WeatherIcons = (weatherState) => {
    if (weatherState === "overcast clouds") {
        return <Sunny />
    } else if (weatherState === "broken clouds") {
        return <Rain />
    } else {
        return <Sunny />
    }
}

export default WeatherIcons