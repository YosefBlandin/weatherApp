import React from "react";


let WeatherIcons = ({ weatherState }) => {
    return (
        <div className="main__icon">
            <img src={weatherState.replace("64", "128").replace("64", "128")} />
            <img src={weatherState.replace("64", "128").replace("64", "128")} />

            <img src={weatherState.replace("64", "128").replace("64", "128")} />
            <img src={weatherState.replace("64", "128").replace("64", "128")} />
        </div>
    )
}

export default WeatherIcons